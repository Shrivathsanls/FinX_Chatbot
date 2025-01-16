from fastapi import FastAPI
from app.routes import conversation

app = FastAPI()

app.include_router(conversation.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Agents POC!"}