"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

# import os
# from flask import Flask, request, jsonify, url_for
# from flask_migrate import Migrate
# from flask_swagger import swagger
# from flask_cors import CORS
# from utils import APIException, generate_sitemap
# from admin import setup_admin
# from models import db, User
# #from models import Person
# from flask_jwt_extended import create_access_token
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required
# from flask_jwt_extended import JWTManager


import os
# from flask import Flask, request, jsonify, url_for
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS

from flask import Flask, request, jsonify, url_for, Blueprint, json, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException

# #from models import Person
# from flask_jwt_extended import create_access_token
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required
# from flask_jwt_extended import JWTManager


# from flask import Flask, request, jsonify, url_for

# from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager
# from flask_bcrypt import Bcrypt
# # from datetime import timedelta
# from  dotenv  import  load_dotenv 
# # import cloudinary
# # import cloudinary.api
# # from cloudinary.uploader import upload
# from flask_mail import Mail, Message
# import random, string
# import re


# app = Flask(__name__)
# app.url_map.strict_slashes = False

# db_url = os.getenv("DATABASE_URL")
# if db_url is not None:
#     app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace("postgres://", "postgresql://")
# else:
#     app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# MIGRATE = Migrate(app, db)
# db.init_app(app)
# CORS(app)
# # Setup the Flask-JWT-Extended extension
# app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
# jwt = JWTManager(app)

# setup_admin(app)

# # Handle/serialize errors like a JSON object
# @app.errorhandler(APIException)
# def handle_invalid_usage(error):
#     return jsonify(error.to_dict()), error.status_code

# # generate sitemap with all your endpoints
# @app.route('/')
# def sitemap():
#     return generate_sitemap(app)

api = Blueprint('api', __name__)

# # función que encripta las contraseñas
# def encrypt_pwd(pwd):
#     return current_app.bcrypt.generate_password_hash(pwd).decode("utf-8")

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




    
    # pw_hash = encrypt_pwd(password)
    # user = User.query.filter_by(email=email).first()
    # username = User.query.filter_by(user_name= user_name).first()
    
    # # if not re.match(regex_letter, name):
    # #         return jsonify({ "msg": "Error en el Nombre "}), 400
        
    # # if not re.match(regex_letter, first_name):
    # #         return jsonify({ "msg": "Error en el Apellido "}), 400    
    
    # if user:
    #     if email == user.email:
    #         return jsonify({"msg": "Email ya registrado"}),401
    # elif username:
    
    #     if username:
    #     # Comprueba que el username no este ya creado

    #         if user_name == username.user_name:
    #             return jsonify({"msg": "Usuario ya registrado"}),402
        
    # else:    
    # # Añade el nuevo usuario a la base de datos
    #     new_user = User(name = name,first_name =first_name,last_name =last_name, user_name = user_name, email = email, password = pw_hash)
    #     db.session.add(new_user)
    #     db.session.commit()
    
    response_body = {
        "message": "Usuario registrado correctamente"
    }

    return jsonify(response_body), 200 

def check_password(hash, password):
    try:
        return current_app.bcrypt.check_password_hash(hash, password)
    except: 
        return False

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email")
    password = request.json.get("password")

    user = User.query.filter_by(email=email).first()
    
    if user and check_password(user.password, password):
        time= timedelta(hours=24)
        access_token = create_access_token(identity=email, expires_delta=time)
        return jsonify({"access_token": access_token})

    return jsonify({}),400

#  Recuperación de contraseña
@api.route("/recoverypassword", methods=['POST'])
def recovery_password():
    body = json.loads(request.data)
    email = body ["email"]
    # contraseña aleatoria
    new_password = ''.join(random.choice(string.ascii_uppercase + string.digits) for x in range(15))
    # Encriptacion
    pw_hash = encrypt_pwd(new_password)
    user = User.query.filter_by(email=email).first()
    # Asigno el pass aleatorio al user
    if user !=None:
        user.password = pw_hash
        db.session.commit()
    # Aqui comenzaría el envio del mail con la pass 
        mail = Mail ()
        message = Message('Recuperación de contraseña', sender  = 'nombre de la web', recipients =[user.email])
        message.body = "Hola " + user.name + " tu nueva contraseña es " + new_password + " recuerda modificarla una vez inicies sesión."
        message.html ="<h1>nombre de la web</h1><h2> Hola " + user.name + " </h2> <p> Tu nuevo password es <b> " + new_password + " recuerda modificarla una vez inicies sesión.</b></p><p>Si usted no ha solicitado el cambio de contraseña ignore y elimine este mensaje por favor.</p> <p> Mensaje enviado automáticamente, no responda</p>"
        mail.send(message)
        response_body ={
            "message":" correo electrónico enviado correctamente"
        }
        return jsonify(response_body),200
    else:
        return jsonify({"message":"correo no registrado"}),400
    
#     # Autenticación con Google
# @api.route("/register_google", methods = ["POST"])
# def google_login():
#     name = request.json.get("name",None)
#     email = request.json.get("email",None)
#     # photo = request.json.get("photo",None)
#     first_name = request.json.get("first_name",None)
#     user_name = request.json.get("user_name",None)
    
    
#     user = User.query.filter_by(email=email).first()
#     if user is None:
#         pw_hash = current_app.bcrypt.generate_password_hash("google").decode("utf-8")
#         user_google = User(name=name,user_name= user_name,first_name=first_name,last_name="",email=email, password=pw_hash)
#         db.session.add(user_google)
#         db.session.commit()
#         time= timedelta(hours=24)
#         access_token = create_access_token(identity=email, expires_delta=time)
#         return jsonify({"access_token":access_token,"email":email}),200
#     else:
#         return jsonify({"message":"error"}),400