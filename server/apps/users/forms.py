from flask_wtf import FlaskForm
from wtforms import (
    BooleanField,
    EmailField,
    PasswordField,
    StringField,
    TextAreaField,
)
from wtforms.validators import DataRequired


class RegisterForm(FlaskForm):
    email = EmailField(
        'Почта',
        validators=(DataRequired(),),
    )
    password = PasswordField(
        'Пароль',
        validators=(DataRequired(),),
    )
    password_again = PasswordField(
        'Повторите пароль',
        validators=(DataRequired(),),
    )
    name = StringField(
        'Имя пользователя',
        validators=(DataRequired(),),
    )
    about = TextAreaField('Немного о себе')


class LoginForm(FlaskForm):
    email = EmailField(
        'Почта',
        validators=(DataRequired(),),
        render_kw={'autofocus': True},
    )
    password = PasswordField(
        'Пароль',
        validators=(DataRequired(),),
    )
    remember_me = BooleanField('Запомнить меня')
