from fastapi import FastAPI
from app.database import engine
from app.models.gym import Base
from app.routers import gym 

app = FastAPI()

# Crear tablas al iniciar la app
@app.on_event("startup")
def startup_event():
    Base.metadata.create_all(bind=engine)

app.include_router(gym.router, prefix="/gyms", tags=["Gyms"])

# # Endpoint de prueba
# @app.get("/")
# def read_root():
#     return {"message": "API del Gym funcionando"}
