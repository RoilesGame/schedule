from enum import StrEnum

import sqlalchemy_utils
from sqlalchemy_utils import ChoiceType

from server.db import db
from server.persistence.core.types import ColorType


class TypesEnum(StrEnum):
    days = 'days'
    week = 'weeks'


class Notification(db.Model):
    __tablename__ = 'notification'

    id = db.Column(
        db.Integer,
        primary_key=True,
    )
    interval = db.Column(
        db.Integer,
    )
    type = db.Column(
        ChoiceType(TypesEnum),
        default='days',
    )
    hours = db.Column(
        db.Integer,
    )
    minutes = db.Column(
        db.Integer,
    )
    event_id = db.Column(
        db.Integer,
        db.ForeignKey('event.id'),
    )
    event = db.relationship(
        'Event',
    )


class FreqEnum(StrEnum):
    hourly = 'hourly'
    daily = 'daily'
    weekly = 'weekly'
    monthly = 'monthly'
    yearly = 'yearly'


class ExceptionRepeat(db.Model):
    __tablename__ = 'exception'

    id = db.Column(
        db.Integer,
        primary_key=True,
    )
    label = db.Column(
        db.String,
    )
    date_start = db.Column(
        db.DateTime,
        index=True,
        nullable=True,
    )
    date_end = db.Column(
        db.DateTime,
        index=True,
        nullable=True,
    )
    date = db.Column(
        db.DateTime,
        index=True,
    )
    hidden = db.Column(
        db.Boolean,
        default=False,
    )
    background_color = db.Column(
        ColorType,
        nullable=True,
    )
    repeat_id = db.Column(
        db.Integer,
        db.ForeignKey('repeat.id'),
    )

    def __repr__(self):
        return f'<Exception: {self.id}>'


class Repeat(db.Model):
    __tablename__ = 'repeat'

    id = db.Column(
        db.Integer,
        primary_key=True,
    )
    freq = db.Column(
        ChoiceType(FreqEnum),
        default='hourly',
    )
    interval = db.Column(
        db.Integer,
        default=1,
    )
    end_time = db.Column(
        db.Date,
        nullable=True,
    )
    end_occurrences = db.Column(
        db.Integer,
        nullable=True,
    )
    event_id = db.Column(
        db.Integer,
        db.ForeignKey('event.id'),
    )
    exceptions = db.relationship(
        'ExceptionRepeat',
        backref=db.backref(
            'repeat',
        ),
    )

    def __repr__(self):
        return f'<Repeat: {self.id}>'


class Event(db.Model):
    __tablename__ = 'event'

    id = db.Column(
        db.Integer,
        primary_key=True,
    )
    label = db.Column(
        db.String,
    )
    date_start = db.Column(
        db.DateTime,
        index=True,
    )
    date_end = db.Column(
        db.DateTime,
        index=True,
    )
    description = db.Column(
        db.String,
        nullable=True,
    )
    color = db.Column(
        ColorType,
        nullable=True,
    )
    background_color = db.Column(
        ColorType,
        nullable=True,
    )
    notifications = db.relationship(
        'Notification',
        cascade='save-update, merge, delete, delete-orphan',
        back_populates='event',
    )
    repeat = db.relationship(
        'Repeat',
        uselist=False,
        backref='event',
        cascade='save-update, merge, delete, delete-orphan',
        single_parent=True,
    )
    all_day = db.Column(
        db.Boolean,
        default=False,
    )
    hidden = db.Column(
        db.Boolean,
        default=False,
    )
    status = db.Column(
        db.String,
        nullable=True,
    )
    conference_link = db.Column(
        sqlalchemy_utils.URLType,
        nullable=True,
    )

    def __repr__(self):
        return f'<Repeat: {self.id}>'
