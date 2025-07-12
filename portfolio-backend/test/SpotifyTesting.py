import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_favorite_song():
    response = client.get("/api/spotify/favorite")
    assert response.status_code == 200
    
    data = response.json()
    assert "songName" in data
    assert "artist" in data
    assert "albumCover" in data
    assert "spotifyUrl" in data
    
    # Verifica que los datos no estén vacíos
    assert data["songName"] != ""
    assert data["artist"] != ""
    assert data["albumCover"].startswith("https://")
    assert data["spotifyUrl"].startswith("https://open.spotify.com/")

def test_spotify_service():
    from services.spotify_service import SpotifyService
    
    service = SpotifyService()
    token = service.get_access_token()
    assert token is not None
    assert len(token) > 0