from flask import Blueprint, request, jsonify
from omi_backend.src.models import db, User
from omi_backend.src.flasklogin import login_manager
from omi_backend.src.db import db
from flask_login import current_user, login_user, logout_user, login_required
import os