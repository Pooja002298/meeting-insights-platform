from fastapi import APIRouter
from app.services.sentiment_analysis import analyze_sentiment

router = APIRouter(prefix="/sentiment", tags=["Sentiment"])

@router.post("/")
def sentiment_endpoint(data: dict):
    text = data.get("text", "")
    result = analyze_sentiment(text)
    return {"sentiment": result}
