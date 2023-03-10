"""empty message

Revision ID: 06996487de43
Revises: 
Create Date: 2023-03-14 18:58:33.587152

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '06996487de43'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('contacto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('text', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('nombre'),
    sa.UniqueConstraint('text')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('user_name', sa.String(length=80), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('first_name', sa.String(length=120), nullable=False),
    sa.Column('last_name', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('graficos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('acronym', sa.String(length=120), nullable=False),
    sa.Column('mic', sa.String(length=120), nullable=False),
    sa.Column('country', sa.String(length=120), nullable=False),
    sa.Column('country_code', sa.String(length=120), nullable=False),
    sa.Column('city', sa.String(length=120), nullable=False),
    sa.Column('website', sa.String(length=120), nullable=False),
    sa.Column('timezone', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('indices',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name_indices', sa.String(length=120), nullable=False),
    sa.Column('ultimo', sa.String(length=80), nullable=False),
    sa.Column('maximo', sa.String(length=120), nullable=False),
    sa.Column('minimo', sa.String(length=120), nullable=False),
    sa.Column('var', sa.String(length=120), nullable=False),
    sa.Column('var_2', sa.String(length=120), nullable=False),
    sa.Column('hora', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name_indices')
    )
    op.create_table('noticias',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('titulo', sa.String(length=120), nullable=False),
    sa.Column('text', sa.String(length=120), nullable=False),
    sa.Column('fecha', sa.String(length=120), nullable=False),
    sa.Column('image', sa.String(length=120), nullable=False),
    sa.Column('url', sa.String(length=120), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('titulo')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('noticias')
    op.drop_table('indices')
    op.drop_table('graficos')
    op.drop_table('user')
    op.drop_table('contacto')
    # ### end Alembic commands ###
