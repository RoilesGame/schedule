from server.apps.homepage import app as homepage_app
from server.apps.schedule import app as schedule_app
from server.apps.users import app as users_app


def register_apps(app):
    users_app.register(app)
    schedule_app.register(app)
    homepage_app.register(app)
