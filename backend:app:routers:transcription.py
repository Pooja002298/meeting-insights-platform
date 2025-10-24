from fastapi import APIRouter, UploadFile, File
from app.services.speech_to_text import transcribe_audio

router = APIRouter(prefix="/transcription", tags=["Transcription"])

@router.post("/")
async def transcription_endpoint(file: UploadFile = File(...)):
    text = await transcribe_audio(file)
    return {"transcription": text}
