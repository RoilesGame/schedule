from datetime import datetime

from flask import Blueprint
from flask_pydantic import validate
from sqlalchemy import extract

from server.apps.schedule.contracts import (
    EventRequest,
    EventResponse,
    ListEventsResponse,
)
from server.apps.schedule.mapper import (
    event_schema_mapping,
    row_event_schema_mapping,
)
from server.db import db
from server.persistence import schedule

router = Blueprint(
    'schedule',
    __name__,
    url_prefix='/api',
)


@router.get('/events/<type_date>')
@validate()
def list_events(type_date: str):
    now = datetime.now().date().year

    query = db.session.query(
        schedule.Event,
    ).filter(
        extract('year', schedule.Event.date_start) == now or
        extract('year', schedule.Event.date_end) == now,
    ).all()

    mapped_query = map(EventResponse.from_orm, query)

    return ListEventsResponse(events=list(mapped_query))


@router.post('/events/create')
@validate(body=EventRequest)
def create_event(body: EventRequest):
    event = event_schema_mapping(body)

    db.session.add(event)
    db.session.commit()
    db.session.refresh(event)

    return {'event_id': event.id}


@router.delete('/events/<int:pk>/delete')
def delete_event(pk: int):
    event = db.get_or_404(
        schedule.Event, pk,
    )

    db.session.delete(event)
    db.session.commit()

    return {'status': 'ok'}


@router.patch('/events/<int:pk>/update')
@validate(body=EventRequest)
def update_event(pk: int, body: EventRequest):
    event = db.get_or_404(schedule.Event, pk)

    row_event = row_event_schema_mapping(body)

    for name, value in row_event.items():
        setattr(event, name, value)

    db.session.add(event)
    db.session.commit()

    return {'status': 'ok'}
