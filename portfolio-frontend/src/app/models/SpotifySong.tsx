export interface SpotifySong {
  songName: string;
  artist: string;
  albumCover: string;
  spotifyUrl: string;
  previewUrl?: string;
  localAudioUrl?: string;  // ← Nueva propiedad
}