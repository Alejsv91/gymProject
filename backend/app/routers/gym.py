from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.gym import Gym
from app.schemas.gym import GymOut
from typing import List

router = APIRouter()

# @router.get("/")
# def get_gyms():
#     return [{"name": "Gym A"}, {"name": "Gym B"}]

# Session imports the object type to interact with the data base
@router.get("/", response_model=List[GymOut])
def get_all_gyms(db: Session = Depends(get_db)):
    gyms = db.query(Gym)
    return gyms

@router.get("/{gym_id}", response_model=GymOut)
def get_gym_by_id(gym_id: int, db: Session = Depends(get_db)):
    gym = db.query(Gym).filter(Gym.id == gym_id).first()
    if not gym:
        raise HTTPException(status_code=404, detail="Gym not found")
    return gym  
        