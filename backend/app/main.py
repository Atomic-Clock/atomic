from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chatbot_service import ChatbotService

app = FastAPI(title="Atomic Clock Chatbot API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chatbot = ChatbotService()


@app.get("/")
def root():
    return {"message": "Atomic Clock Chatbot API is running"}


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    result = chatbot.get_answer(request.message)
    return ChatResponse(**result)
