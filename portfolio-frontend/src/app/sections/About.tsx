"use client";
import React, { useEffect, useState } from "react";
import { getFavoriteSong } from "../services/spotifyService";
import { getAboutInfo } from "../services/portfolioService";
import { SpotifySong } from "../models/SpotifySong";
import { AboutInfo } from "../models/AboutInfo";

const About = () => {
  const [spotifyData, setSpotifyData] = useState<SpotifySong | null>(null);
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🚀 About component mounted - iniciando fetch");

    const fetchData = async () => {
      try {
        console.log("📡 Haciendo peticiones a backend...");

        const [spotify, about] = await Promise.all([
          getFavoriteSong(),
          getAboutInfo(),
        ]);

        console.log("🎵 Spotify data:", spotify);
        console.log("👤 About data:", about);

        setSpotifyData(spotify);
        setAboutInfo(about);
      } catch (error) {
        console.error("❌ Error cargando datos:", error);
      } finally {
        console.log("✅ Fetch completado, loading = false");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(
    "🔄 Render - loading:",
    loading,
    "spotifyData:",
    spotifyData,
    "aboutInfo:",
    aboutInfo
  );

  if (loading) {
    return (
      <section className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        <p className="ml-4 text-gray-600">Cargando datos...</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 text-gray-800 dark:text-white">
          Sobre mí
        </h2>

        {aboutInfo && (
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {aboutInfo.description}
            <br />
            <br />
            En mi tiempo libre disfruto escuchar música y jugar videojuegos. Mi
            juego favorito es{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {aboutInfo.favoriteGame}
            </span>
            .
          </p>
        )}

        {/* Bloque de canción favorita */}
        {spotifyData && (
          <div className="flex flex-col items-center justify-center gap-4 mb-8">
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Mi canción favorita ahora mismo:
            </span>
            <div className="flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-4 backdrop-blur-sm">
              <img
                src={spotifyData.albumCover}
                alt="Portada"
                className="w-16 h-16 rounded-lg shadow"
              />
              <div className="text-left">
                <div className="font-bold text-blue-700 dark:text-blue-400">
                  {spotifyData.songName}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {spotifyData.artist}
                </div>
                <a
                  href={spotifyData.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold hover:bg-green-600 transition"
                >
                  🎵 Escuchar en Spotify
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Skills principales */}
        {aboutInfo && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Tecnologías que manejo
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {aboutInfo.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;