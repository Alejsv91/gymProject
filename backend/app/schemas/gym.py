from pydantic import BaseModel
from datetime import datetime

class GymOut(BaseModel):
    legal_id: str
    name: str
    owner: str
    phone: str
    email: str
    is_active: bool
    
class GymRead(GymOut):
    id: int
    activation_date: datetime
    
class GymUpdate(GymOut):
    id: int
    activation_date: datetime
    