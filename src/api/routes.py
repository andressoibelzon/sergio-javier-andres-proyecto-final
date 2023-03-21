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
    print(user)

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


# #  Recuperación de contraseña
# @api.route("/recoverypassword", methods=['POST'])
# def recovery_password():
#     body = json.loads(request.data)
#     email = body ["email"]
#     # contraseña aleatoria
#     new_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(15))
#     # Encriptacion
#     pw_hash = encrypt_pwd(new_password)
#     user = User.query.filter_by(email=email).first()
#     # Asigno el pass aleatorio al user
#     if user !=None:
#         user.password = pw_hash
#         db.session.commit()
#     # Aqui comenzaría el envio del mail con la pass 
#         mail = Mail ()
#         message = Message('Recuperación de contraseña', sender  = 'nombre de la web', recipients =[user.email])
#         message.body = "Hola " + user.name + " tu nueva contraseña es " + new_password + " recuerda modificarla una vez inicies sesión."
#         message.html ="<h1>nombre de la web</h1><h2> Hola " + user.name + " </h2> <p> Tu nuevo password es <b> " + new_password + " recuerda modificarla una vez inicies sesión.</b></p><p>Si usted no ha solicitado el cambio de contraseña ignore y elimine este mensaje por favor.</p> <p> Mensaje enviado automáticamente, no responda</p>"
#         mail.send(message)
#         response_body ={
#             "message":" correo electrónico enviado correctamente"
#         }
#         return jsonify(response_body),200
#     else:
#         return jsonify({"message":"correo no registrado"}),400

@api.route('/indices', methods=['GET'])
def getindices():
    url = "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges"

    querystring = {"referenceCurrencyUuid":"yhjMzLPhuIDl","limit":"50","offset":"0","orderBy":"24hVolume","orderDirection":"desc"}

    headers = {
        "X-RapidAPI-Key": "259317a9a4msh9be0ac17ca1cbd3p1458abjsn542243c21d1a",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com"
    }

    response = requests.request("GET", url, headers=headers, params=querystring)

    print(response.text)
    return jsonify(querystring)
    
