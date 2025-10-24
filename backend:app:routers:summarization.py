from fastapi import APIRouter
from app.services.summarize_text import summarize_text

router = APIRouter(prefix="/summarization", tags=["Summarization"])

@router.post("/")
def summarize_endpoint(data: dict):
    text = data.get("text", "")
    summary = summarize_text(text)
    return {"summary": summary}
