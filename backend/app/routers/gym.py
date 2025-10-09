from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.gym import Gym
from app.schemas.gym import GymOut, GymCreate
from typing import List
from datetime import datetime

router = APIRouter()

# Session imports the object type to interact with the data base
@router.get("/", response_model=List[GymOut])
def get_all_gyms(db: Session = Depends(get_db)):
    gyms = db.query(Gym)
    return gyms

@router.get("/by-id/{gym_id}", response_model=GymOut)
def get_gym_by_id(gym_id: int, db: Session = Depends(get_db)):
    gym = db.query(Gym).filter(Gym.id == gym_id).first()
    if not gym:
        raise HTTPException(status_code=404, detail="Gym not found")
    return gym  

@router.get("/by-legal-id/{gym_legal_id}")
def get_gym_by_legal_id(gym_legal_id: str, db: Session = Depends(get_db)):
    gym = db.query(Gym).filter(Gym.legal_id == gym_legal_id).first()
    return { "exists": bool(gym) }

@router.post("/", response_model=GymOut, status_code=201)
def create_gym(gym_data: GymCreate, db: Session = Depends(get_db)):
    print('This is the gym data: ', gym_data)
    gym = Gym(**gym_data.model_dump())
    db.add(gym)
    db.commit()
    db.refresh(gym)
    return gym
        