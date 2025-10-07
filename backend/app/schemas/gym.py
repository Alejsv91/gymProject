from pydantic import BaseModel, EmailStr, constr
from datetime import datetime
from typing import Annotated

class GymCreate(BaseModel):
    legal_id: Annotated[str, constr(min_length=9, max_length=30)]
    name: Annotated[str, constr(min_length=3)]
    owner: Annotated[str, constr(min_length=3)]
    phone: Annotated[str, constr(min_length=8)]
    email: EmailStr
    is_active: bool = True
    activation_date: Annotated[datetime, constr(strict=datetime)]
    
class GymOut(GymCreate): 
    id: int
    
class GymUpdate(GymCreate):
    id: int
    
    