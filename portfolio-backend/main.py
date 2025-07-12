from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.spotify import router as spotify_router
from routes.portfolio import router as portfolio_router
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Portfolio API",
    description="API para mi portfolio personal",
    version="1.0.0"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rutas
app.include_router(spotify_router, prefix="/api/spotify", tags=["Spotify"])
app.include_router(portfolio_router, prefix="/api/portfolio", tags=["Portfolio"])

@app.get("/", tags=["Root"])
def read_root():
    return {
        "message": "Portfolio API funcionando",
        "status": "OK",
        "docs": "/docs"
    }

@app.get("/health")
def health_check():
    return {"status": "healthy"}