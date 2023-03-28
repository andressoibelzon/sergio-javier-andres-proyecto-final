"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

import os
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_mail import Message
from flask_mail import Mail
import random 
import string
import requests


api = Blueprint('api', __name__)


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
#  hacemos una consulta a la tabla para saber si el user existe
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "User doesn´t exist"}), 404
    
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad email or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


    # Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    print(user.serialize())
    # return jsonify(logged_in_as=current_user), 200
    return jsonify({"result":user.serialize()}), 200

# User profile modificación de los datos de usuario (ruta privada)
@api.route('/profile', methods=['PUT'])
@jwt_required()
def user_profile_update():
    user = get_jwt_identity()
    # name = request.json.get("name")
    first_name = request.json.get("first_name")
    last_name = request.json.get("last_name")
    password = request.json.get("password")
    
    # pw_hash = encrypt_pwd(password)
    
    user_update = User.query.filter_by(email=user).first()
    user_update.first_name = first_name
    user_update.last_name = last_name
    user_update.password = password

    db.session.commit()
    response_body = {
        "message": "Usuario modificado correctamente"
    }
    return jsonify(response_body),200


@api.route("/profile", methods=["DELETE"])
@jwt_required()
def delete_profile():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    delete_user = User.query.filter_by(email=current_user).first()

    db.session.delete(delete_user)
    db.session.commit()

    response_body = {
        "result": "Cuenta eliminada con éxito"
    }
    return jsonify(response_body), 200


# user registration
@api.route('/register', methods=['POST'])
def register():
    # Recibe los datos de usuario 
    first_name = request.json.get("first_name")
    last_name = request.json.get("last_name")
    user_name = request.json.get("user_name")
    email = request.json.get("email")
    password = request.json.get("password")

    user = User.query.filter_by(email=email).first()
    # print(user)

    if user is None : 
        user = User(first_name = first_name, last_name = last_name, user_name = user_name, email = email, password = password)
        db.session.add(user)
        db.session.commit()
        return jsonify({"msg":"Usuario creado con exito"})
    else :
        return jsonify({"msg": "email ya registrado"}), 402
    
    response_body = {
        "message": "Usuario registrado correctamente"
    }
    return jsonify(response_body), 200 


@api.route("/valid-token", methods=["GET"])
@jwt_required()
def valid_token():
    # Access the identity of the current user with get_jwt_identity

    current_user = get_jwt_identity()
    
    user = User.query.filter_by(email=current_user).first()
    if user != None:
        
    # print(user)
        return jsonify({"isLogged":True}), 200
    else:
        return jsonify({"isLogged":False}), 401


#  Recuperación de contraseña
@api.route("/recovery-password", methods=["POST"])
def recoverypassword():
    recover_email = request.json['email']
    recover_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(8)) #clave aleatoria nueva
    
    if not recover_email:
        return jsonify({"msg": "Debe ingresar el correo"}), 401
	#busco si el correo existe en mi base de datos
    user = User.query.filter_by(email=recover_email).first()
    if recover_email != user.email:
        return jsonify({"msg": "El correo ingresado no existe en nuestros registros"}), 400
    #si existe guardo la nueva contraseña aleatoria
    user.password = recover_password
    db.session.commit()
	#luego se la envio al usuario por correo para que pueda ingresar
    msg = Message("Hi", recipients=[recover_email])
    msg.html = f"""<div style="background-color: #f2f2f2; padding: 20px;">
    <h1 style="color: #008080; font-size: 36px; font-weight: bold;">
        Tu nueva contraseña es: {recover_password}
    </h1>
    <p style="color: #555; font-size: 18px;">
        Recuerda cambiar tu contraseña lo antes posible y no compartirla con nadie más.
    </p>
</div>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Su nueva clave ha sido enviada al correo electrónico ingresado"}), 200


@api.route('/contacto', methods=['POST'])
def contacto():
    contacto_email = request.json["email"]
    contacto:comentario = request.json["comentario"]

    msg = Message("Hi", recipients=[contacto_email])
    msg.html = f"""<div style="background-color: #f2f2f2; padding: 20px;">
    <h1 style="color: #008080; font-size: 36px; font-weight: bold;">
        Gracias por ayudarnos a mejorar, revisaremos la información y nos pondremos a trabajar.
    </h1>
    <p style="color: #555; font-size: 18px;">
        Para cualquier otra consulta, no dude en volver a informarnos
    </p>
</div>"""
    current_app.mail.send(msg)
    return jsonify({"msg":"Comentario creado con exito"}), 200

    


@api.route('/suscripcion', methods=['POST'])
def suscritos():
    suscritos_email = request.json['email']

    msg = Message("Hi", recipients=[suscritos_email])
    msg.html = f"""<div style="background-color: #f2f2f2; padding: 20px;">
    <h1 style="color: #008080; font-size: 36px; font-weight: bold;">
        Gracias por su suscripción, en breves le informaremos de todas las novedades y noticias actualizadas.
    </h1>
    <p style="color: #555; font-size: 18px;">
        ¡Manténgase atento a su correo electrónico!
    </p>
</div>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Gracias por sus suscripcion"}), 200



    



