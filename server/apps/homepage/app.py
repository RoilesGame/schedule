from server.apps.homepage.views import router


def register(app):
    app.register_blueprint(router)
