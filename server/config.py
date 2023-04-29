from os import environ
from pathlib import Path

from dotenv import load_dotenv

basedir = Path(__file__).parent.parent
load_dotenv(basedir.joinpath('./configs/.env'))


class Config:
    """Set Flask config variables."""

    ENV = environ.get('ENV', default='production')
    DEBUG = environ.get('FLASK_DEBUG', default=False)
    TESTING = environ.get('TESTING', default=False)
    SECRET_KEY = environ.get('SECRET_KEY')
    STATIC_FOLDER = 'static'
    TEMPLATES_FOLDER = 'templates'

    # Database
    SQLALCHEMY_DATABASE_URI = environ.get('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_ECHO = environ.get('SQLALCHEMY_ECHO', default=False)
