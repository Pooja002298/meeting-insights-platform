from sqlmodel import SQLModel, Field
from typing import Optional
from datetime import datetime

class Meeting(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    description: Optional[str] = None
    source_filename: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    transcript: Optional[str] = None
    summary: Optional[str] = None
    sentiment: Optional[str] = None
    tags: Optional[str] = None

class Segment(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    meeting_id: int = Field(foreign_key='meeting.id')
    speaker: Optional[str]
    start_time: float
    end_time: float
    text: Optional[str]

class ActionItem(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    meeting_id: int = Field(foreign_key='meeting.id')
    text: str
    owner: Optional[str]
    due_date: Optional[str]
    completed: bool = False
