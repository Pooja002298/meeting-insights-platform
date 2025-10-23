from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from app.database import Base

class Meeting(Base):
    __tablename__ = "meetings"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    summary = Column(Text)
    sentiment = Column(String)
    category = Column(String)
    date = Column(DateTime, default=datetime.utcnow)
