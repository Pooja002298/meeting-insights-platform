from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_transcription():
    return {"message": "Transcription endpoint working!"}
