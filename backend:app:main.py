from fastapi import FastAPI
from app.routers import sentiment, transcription, summarization, topics

app = FastAPI(title="Meeting Insights Platform")

app.include_router(sentiment.router)
app.include_router(transcription.router)
app.include_router(summarization.router)
app.include_router(topics.router)
