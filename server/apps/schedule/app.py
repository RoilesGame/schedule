from server.apps.schedule.api import router


def register(app):
    app.register_blueprint(router)
