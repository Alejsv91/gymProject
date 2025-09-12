from sqlalchemy import Column, Integer, String, Boolean, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone


Base = declarative_base()

class Gym(Base):
    __tablename__ = "gyms"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    legal_entity = Column(String(20), nullable=False, unique=True)
    address = Column(Text, nullable=False)
    owner = Column(String(100), nullable=False)
    phone = Column(String(20), nullable=True)
    registration_date = Column(DateTime, default=datetime.now(timezone.utc))
    active = Column(Boolean, default=True)
