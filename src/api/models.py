from flask_sqlalchemy import SQLAlchemy
from flask import Flask

db = SQLAlchemy()

class User(db.Model):
    # __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=False)
    user_name = db.Column(db.String(80), unique=False, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    #conexiones
    indices_id = db.relationship("Indices",backref="User", lazy=True)
    noticias_id= db.relationship("Noticias",backref="User", lazy=True)
    graficos_id= db.relationship("Graficos",backref="User", lazy=True)
        
    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "user_name": self.user_name,
            "password":self.password,
            }
class Indices(db.Model):
    # __tablename__ = 'Indices'
    id = db.Column(db.Integer, primary_key=True)
    name_indices = db.Column(db.String(120), unique=True, nullable=False)
    ultimo = db.Column(db.String(80), unique=False, nullable=False)
    maximo = db.Column(db.String(120), unique=False, nullable=False)
    minimo = db.Column(db.String(120), unique=False, nullable=False)
    var = db.Column(db.String(120), unique=False, nullable=False)
    var_2 = db.Column(db.String(120), unique=False, nullable=False)
    hora = db.Column(db.String(120), unique=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    
    
    def __repr__(self):
        return '<Indices %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name_indices": self.name_indices,
            "ultimo": self.ultimo,
            "maximo": self.maximo,
            "var": self.var,
            "var%": self.var_2,
            "hora": self.hora,
        }
class Noticias(db.Model):
    # __tablename__ = 'Noticias'
    id = db.Column(db.Integer, primary_key=True)
    titulo= db.Column(db.String(120), unique=True, nullable=False)
    text = db.Column(db.String(120), unique=False, nullable=False)
    fecha = db.Column(db.String(120), unique=False, nullable=False)
    image = db.Column(db.String(120), unique=False, nullable=False)
    url = db.Column(db.String(120), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    
    def __repr__(self):
        return '<Noticias %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "titulo": self.titulo,
            "fecha": self.fecha,
            "text": self.text,
            "image": self.image,
        }

class Graficos(db.Model):
    # __tablename__ = 'Graficos'
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(120), unique=True, nullable=False)
    acronym = db.Column(db.String(120), unique=False, nullable=False)
    mic = db.Column(db.String(120), unique=False, nullable=False)
    country = db.Column(db.String(120), unique=False, nullable=False)
    country_code = db.Column(db.String(120), unique=False, nullable=False)
    city = db.Column(db.String(120), unique=False, nullable=False)
    website = db.Column(db.String(120), unique=False, nullable=False)
    timezone = db.Column(db.String(120), unique=False, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))


    def __repr__(self):
        return '<Graficos %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "acronym": self.acronym,
            "mic": self.mic,
            "country": self.country,
            "country_code": self.country_code,
            "city": self.city,
            "website": self.website,
            "timezone": self.timezone,
        }

class Contacto(db.Model):
    # __tablename__ = 'Contacto'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    text = db.Column(db.String(120), unique=True, nullable=False)

    
    def __repr__(self):
        return '<Contacto %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "email": self.email,
            "text": self.text
        }
