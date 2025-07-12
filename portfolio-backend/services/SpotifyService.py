import requests
import base64
import os
from dotenv import load_dotenv

load_dotenv()

class SpotifyService:
    def __init__(self):
        self.client_id = os.getenv("SPOTIFY_CLIENT_ID")
        self.client_secret = os.getenv("SPOTIFY_CLIENT_SECRET")
        self.access_token = None
    
    def get_access_token(self):
        """Obtiene el token de acceso usando Client Credentials"""
        url = "https://accounts.spotify.com/api/token"
        headers = {
            "Authorization": f"Basic {base64.b64encode(f'{self.client_id}:{self.client_secret}'.encode()).decode()}"
        }
        data = {"grant_type": "client_credentials"}
        
        response = requests.post(url, headers=headers, data=data)
        if response.status_code == 200:
            self.access_token = response.json()["access_token"]
            return self.access_token
        else:
            raise Exception("Error obteniendo token de Spotify")
    
    def get_track(self, track_id: str):
        """Obtiene información de una canción específica"""
        if not self.access_token:
            self.get_access_token()
        
        url = f"https://api.spotify.com/v1/tracks/{track_id}"
        headers = {"Authorization": f"Bearer {self.access_token}"}
        
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception("Error obteniendo canción de Spotify")