from flask import Blueprint, render_template

router = Blueprint('homepage', __name__)


@router.get('/')
def index():
    return render_template(
        'schedule.html',
    )
