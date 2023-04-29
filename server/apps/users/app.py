from server.apps.users.views import login_manager, router


def register(app):
    login_manager.init_app(app)
    app.register_blueprint(router)
