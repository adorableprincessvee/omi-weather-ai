import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "omiAiSecretKey254")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite://omi_ai.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False