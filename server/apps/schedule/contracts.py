from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel
from pydantic.color import Color

from server.persistence.schedule.models import FreqEnum, TypesEnum


class NotificationContract(BaseModel):
    type: TypesEnum
    hours: int
    minutes: int
    interval: int

    class Config:
        orm_mode = True


class ExceptionContract(BaseModel):
    label: str
    background_color: Optional[Color] = None
    hidden: bool = False
    date_start: Optional[datetime] = None
    date_end: Optional[datetime] = None
    date: datetime

    class Config:
        orm_mode = True
        json_encoders = {
            Color: lambda color: color.as_hex(),
        }


class RepeatContract(BaseModel):
    interval: int
    freq: FreqEnum
    end_time: Optional[date] = None
    end_occurrences: Optional[int] = None
    exceptions: list[ExceptionContract]

    class Config:
        orm_mode = True


class EventResponse(BaseModel):
    id: int
    label: str
    description: Optional[str] = None
    color: Optional[Color] = None
    background_color: Optional[Color] = None
    all_day: bool = False
    hidden: bool = False
    date_start: datetime
    date_end: datetime
    notifications: list[NotificationContract]
    repeat: Optional[RepeatContract] = None
    status: Optional[str] = None
    conference_link: Optional[str] = None

    class Config:
        orm_mode = True
        json_encoders = {
            Color: lambda color: color.as_hex(),
        }


class ListEventsResponse(BaseModel):
    events: list[EventResponse]


class EventRequest(BaseModel):
    label: str
    description: Optional[str] = None
    color: Optional[Color] = None
    background_color: Optional[Color] = None
    date_start: datetime
    date_end: datetime
    all_day: bool = False
    hidden: bool = False
    repeat: Optional[RepeatContract] = None
    notifications: list[NotificationContract]
    status: Optional[str] = None
    conference_link: Optional[str] = None
