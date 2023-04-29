from typing import List, Dict

from server.apps.schedule.contracts import (
    EventRequest,
    NotificationContract,
    RepeatContract,
    ExceptionContract,
)
from server.persistence.schedule import (
    Event,
    Notification,
    Repeat,
    ExceptionRepeat,
)


def row_event_schema_mapping(schema: EventRequest) -> Dict:
    return {
        'label': schema.label,
        'date_start': schema.date_start,
        'date_end': schema.date_end,
        'description': schema.description,
        'all_day': schema.all_day,
        'background_color': schema.background_color,
        'color': schema.color,
        'notifications': notifications_schema_mapping(schema.notifications),
        'status': schema.status,
        'hidden': schema.hidden,
        'conference_link': schema.conference_link,
        'repeat': repeat_schema_mapping(schema.repeat),
    }


def event_schema_mapping(schema: EventRequest) -> Event:
    values = {
        'label': schema.label,
        'date_start': schema.date_start,
        'date_end': schema.date_end,
        'description': schema.description,
        'all_day': schema.all_day,
        'background_color': schema.background_color,
        'color': schema.color,
        'notifications': notifications_schema_mapping(schema.notifications),
        'status': schema.status,
        'hidden': schema.hidden,
        'conference_link': schema.conference_link,
        'repeat': repeat_schema_mapping(schema.repeat),
    }

    return Event(
        **values,
    )


def notifications_schema_mapping(
    notifications: List[NotificationContract],
) -> List[Notification]:
    return [
        Notification(**notification.dict())
        for notification in notifications
    ]


def exceptions_schema_mapping(
    exceptions: List[ExceptionContract],
) -> List[ExceptionRepeat]:
    return [
        ExceptionRepeat(**exception.dict())
        for exception in exceptions
    ]


def repeat_schema_mapping(schema: RepeatContract) -> Repeat:
    if not schema:
        return None

    values = {
        'exceptions': exceptions_schema_mapping(schema.exceptions),
    } | schema.dict(exclude={'exceptions'})

    return Repeat(**values)
