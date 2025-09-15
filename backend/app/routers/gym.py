from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.gym import Gym
from app.schemas.gym import GymOut
from typing import List

router = APIRouter()

# @router.get("/")
# def get_gyms():
#     return [{"name": "Gym A"}, {"name": "Gym B"}]

@router.get("/", response_model=List[GymOut])
def get_all_gyms(db: Session = Depends(get_db)):
    gyms = db.query(Gym)
    return gyms
        