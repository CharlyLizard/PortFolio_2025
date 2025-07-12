import { SpotifySong } from "../models/SpotifySong";

const API_BASE_URL = "http://localhost:8001/api";

export async function getFavoriteSong(): Promise<SpotifySong> {
  console.log("🎵 Fetching favorite song from:", `${API_BASE_URL}/spotify/favorite`);
  
  try {
    const res = await fetch(`${API_BASE_URL}/spotify/favorite`);
    console.log("🎵 Response status:", res.status);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    console.log("🎵 Spotify response data:", data);
    return data;
    
  } catch (error) {
    console.error("❌ Error fetching Spotify data:", error);
    throw error;
  }
}