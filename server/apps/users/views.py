from flask import Blueprint, redirect, render_template
from flask_login import LoginManager, login_required, login_user, logout_user

from server.apps.users.forms import LoginForm, RegisterForm
from server.db import db
from server.persistence.users.models import User

router = Blueprint('auth', __name__)

login_manager = LoginManager()


@router.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if not form.validate_on_submit():
        return render_template(
            'auth/login.html',
            title='Авторизация',
            form=form,
        )

    user = db.session.query(User).filter(
        User.email == form.email.data,
    ).first()

    if user and user.check_password(form.password.data):
        login_user(user, remember=form.remember_me.data)
        return redirect('/')

    return render_template(
        'auth/login.html',
        message='Неправильный логин или пароль',
        form=form,
    )


@router.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect('/')


@router.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    if not form.validate_on_submit():
        return render_template(
            'auth/register.html',
            title='Регистрация',
            form=form,
        )

    if form.password.data != form.password_again.data:
        return render_template(
            'auth/register.html',
            title='Регистрация',
            form=form,
            message='Пароли не совпадают',
        )

    if db.session.query(User).filter(
        User.email == form.email.data,
    ).first():
        return render_template(
            'auth/register.html',
            title='Регистрация',
            form=form,
            message='Такой пользователь уже есть',
        )

    user = User(
        name=form.name.data,
        email=form.email.data,
        about=form.about.data,
    )
    user.set_password(form.password.data)
    db.session.add(user)
    db.session.commit()

    return redirect('/')


@login_manager.user_loader
def load_user(user_id):
    return db.session.query(
        User,
    ).get(user_id)
