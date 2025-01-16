from fastapi import APIRouter
from app.agents.conversation_agent import handle_user_input

router = APIRouter(prefix="/conversation")

@router.post("/")
def converse(data: dict):
    user_message = data.get("message")
    bot_reply = handle_user_input(user_message)
    return {"reply": bot_reply}