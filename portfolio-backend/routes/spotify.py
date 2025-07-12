from fastapi import APIRouter, HTTPException
from services.SpotifyService import SpotifyService
import logging

router = APIRouter()
spotify_service = SpotifyService()

@router.get("/favorite")
async def get_favorite_song():
    try:
        track_id = "2HxZAed6QC9yJZuyaJJSz0"  # PCPP - Feid
        track_data = spotify_service.get_track(track_id)
        
        if not track_data:
            raise HTTPException(status_code=404, detail="Canción no encontrada")
        
        return {
            "songName": track_data["name"],
            "artist": ", ".join([artist["name"] for artist in track_data["artists"]]),
            "albumCover": track_data["album"]["images"][0]["url"] if track_data["album"]["images"] else None,
            "spotifyUrl": track_data["external_urls"]["spotify"]
        }
    except KeyError as e:
        logging.error(f"Error de datos de Spotify: {e}")
        raise HTTPException(status_code=500, detail="Error procesando datos de Spotify")
    except Exception as e:
        logging.error(f"Error inesperado: {e}")
        raise HTTPException(status_code=500, detail="Error interno del servidor")