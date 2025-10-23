from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import upload, meetings, insights
from app.database import Base, engine

app = FastAPI(title="Meeting Insights Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(upload.router, prefix="/upload", tags=["Upload"])
app.include_router(meetings.router, prefix="/meetings", tags=["Meetings"])
app.include_router(insights.router, prefix="/insights", tags=["Insights"])

@app.get("/")
async def root():
    return {"message": "Meeting Insights API is running!"}
