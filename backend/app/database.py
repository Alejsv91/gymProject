from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base, Session
import os
from dotenv import load_dotenv
from typing import Generator

# load the .env variables
load_dotenv()
# sqlalchemy is a ORM(Object Relational Mapper)
DATABASE_URL = os.getenv("DATABASE_URL")

# create the connection
engine = create_engine(DATABASE_URL)
# sessionmaker creates the sessions
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)
# create the class Base as model fundament
Base = declarative_base()

def get_db() -> Generator[Session, None, None]:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()