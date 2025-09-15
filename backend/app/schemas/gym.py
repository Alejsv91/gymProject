from pydantic import BaseModel
from datetime import datetime

class Gym(BaseModel):
    legal_id: str
    name: str
    owner: str
    phone: str
    email: str
    is_active: bool
    
class GymOut(Gym): 
    id: int
    activation_date: datetime
    
class GymUpdate(Gym):
    id: int
    activation_date: datetime
    