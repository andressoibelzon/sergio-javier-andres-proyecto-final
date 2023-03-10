from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


# esto puede ser un post de noticia propia
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=False, nullable=False)
    image= db.Column(db.String(120), unique=True, nullable=False)
    description = db.Column(db.String(120), unique=False, nullable=False)
    url = db.Column(db.String(120), unique=False, nullable=False)

    def __repr__(self):
        return '<Post {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "title": self.id,
            "image": self.image,
            "description": self.description,
            "url": self.url,
        }