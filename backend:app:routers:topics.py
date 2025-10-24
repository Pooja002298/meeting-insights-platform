from fastapi import APIRouter
from app.services.topic_modeling import extract_topics

router = APIRouter(prefix="/topics", tags=["Topics"])

@router.post("/")
def topics_endpoint(data: dict):
    text = data.get("text", "")
    topics = extract_topics(text)
    return {"topics": topics}
