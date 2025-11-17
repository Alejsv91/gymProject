from sqlalchemy import Column, String, Integer, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base
from datetime import datetime

class OwnerCreate(Base):
    __tablename__ = "owner"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    birthdate = Column(DateTime, default=datetime.now(datetime.timezone.utc))
    gender = Column(String, nullable=True)
    email = Column(String, unique=True, nullable=False)
    phone = Column(String, nullable=False, unique=True)
    address = Column(String, nullable=False)
    activation_date = Column(DateTime, default=datetime.now(datetime.timezone.utc))
    