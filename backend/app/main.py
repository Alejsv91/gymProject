from fastapi import FastAPI
from app.database import engine
from app.models.gym import Base
from app.routers import gym 
from app.exceptions import handlers
from fastapi.exceptions import RequestValidationError



app = FastAPI()
app.add_exception_handler(RequestValidationError, handlers.validation_exception_handler)

# Crear tablas al iniciar la app
@app.on_event("startup")
def startup_event():
    Base.metadata.create_all(bind=engine)

app.include_router(gym.router, prefix="/gyms", tags=["Gyms"])

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# # Endpoint de prueba
# @app.get("/")
# def read_root():
#     return {"message": "API del Gym funcionando"}
