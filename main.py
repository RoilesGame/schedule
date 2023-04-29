from flask import Flask
from flask_bootstrap import Bootstrap

from server.config import Config
from server.db import db
from server.routing import register_apps


def main():
    app = Flask(__name__)
    app.config.from_object(Config)

    register_apps(app)
    db.init_app(app)

    Bootstrap(app)

    with app.app_context():
        db.create_all()

    app.run()


if __name__ == '__main__':
    main()
