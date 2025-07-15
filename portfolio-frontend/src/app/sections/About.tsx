"use client";
import React, { useEffect, useState } from "react";
import { getFavoriteSong } from "../services/spotifyService";
import { getAboutInfo } from "../services/portfolioService";
import { SpotifySong } from "../models/SpotifySong";
import { AboutInfo } from "../models/AboutInfo";
import { FaPlay, FaPause, FaGamepad, FaCode, FaHeart, FaVolumeUp } from "react-icons/fa";
import { useAudio } from '../providers/AudioProvider';

const About = () => {
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null);
  const [loading, setLoading] = useState(true);
  
  const {
    isPlaying,
    currentSong,
    currentTime,
    duration,
    volume,
    setCurrentSong,
    setActiveSection, // NUEVO
    togglePlayPause,
    handleVolumeChange,
    handleSeek
  } = useAudio();

  // NUEVO: Establecer que estamos en la sección About
  useEffect(() => {
    setActiveSection('about');
    
    // Cleanup: limpiar la sección cuando el componente se desmonte
    return () => {
      setActiveSection('');
    };
  }, [setActiveSection]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [spotify, about] = await Promise.all([
          getFavoriteSong(),
          getAboutInfo(),
        ]);
        
        setCurrentSong(spotify);
        setAboutInfo(about);
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setCurrentSong]);

  // Formatear tiempo
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
          <p className="text-gray-600 dark:text-gray-300 font-medium">
            Cargando información...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 py-20 px-4 pb-32 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header con gradiente */}
        <div className="text-center mb-5">
          <h2 className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full "></div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          {/* Columna izquierda - Información personal */}
          <div className="space-y-8">
            {aboutInfo && (
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 h-fit">
                <div className="flex items-center gap-3 mb-6">
                  <FaCode className="text-2xl text-blue-600 dark:text-blue-400" />
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {aboutInfo.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {aboutInfo.description}
                </p>

                {/* Hobbies */}
                <div className="flex items-center gap-3 mb-4">
                  <FaGamepad className="text-xl text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Mi juego favorito:{" "}
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {aboutInfo.favoriteGame}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaHeart className="text-xl text-red-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Hobbies: {aboutInfo.hobbies.join(", ")}
                  </span>
                </div>
              </div>
            )}

            {/* Skills */}
            {aboutInfo && (
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 h-fit">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  🚀 Tecnologías que domino
                </h3>
                <div className="flex flex-wrap gap-3">
                  {aboutInfo.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Columna derecha - Spotify Player + Gaming */}
          <div className="space-y-8">
            {/* Spotify Player */}
            {currentSong && (
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-2xl text-white border border-gray-800 h-fit">
                {/* Header compacto */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-black fill-current">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.959-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.361 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.301.541-1.021.721-1.561.421z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-400">Spotify</h3>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Información de la canción */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={currentSong.albumCover}
                    alt="Portada"
                    className="w-16 h-16 rounded-lg shadow-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold truncate text-lg">
                      {currentSong.songName}
                    </h4>
                    <p className="text-gray-400 text-sm truncate">
                      {currentSong.artist}
                    </p>
                  </div>
                  <button
                    onClick={togglePlayPause}
                    className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
                  >
                    {isPlaying ? (
                      <FaPause className="text-base" />
                    ) : (
                      <FaPlay className="text-base ml-1" />
                    )}
                  </button>
                </div>

                {/* Barra de progreso */}
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-6">
                  <span className="w-10 text-right">{formatTime(currentTime)}</span>
                  <div 
                    className="flex-1 bg-gray-600 rounded-full h-2 cursor-pointer"
                    onClick={(e) => {
                      if (currentSong?.localAudioUrl || currentSong?.previewUrl) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percentage = ((e.clientX - rect.left) / rect.width) * 100;
                        handleSeek(percentage);
                      }
                    }}
                  >
                    <div 
                      className="bg-green-400 h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: (currentSong?.localAudioUrl || currentSong?.previewUrl) 
                          ? `${(currentTime / duration) * 100}%`
                          : isPlaying ? '100%' : '0%'
                      }}
                    />
                  </div>
                  <span className="w-10">{formatTime(duration)}</span>
                </div>

                {/* Control de volumen y botón */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button 
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={() => handleVolumeChange(volume > 0 ? 0 : 50)}
                    >
                      <FaVolumeUp className="text-lg" />
                    </button>
                    <div className="w-24 bg-gray-600 rounded-full h-2 cursor-pointer relative">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div 
                        className="bg-green-400 h-2 rounded-full"
                        style={{ width: `${volume}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-10">{volume}%</span>
                  </div>

                  <a
                    href={currentSong?.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-400 text-black px-4 py-2 rounded-full font-semibold transition-colors text-sm"
                  >
                    Mi cancion favorita en Spotify
                  </a>
                </div>
              </div>
            )}

            {/* Sección Gaming EXPANDIDA */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-200/50 dark:border-gray-700/50 h-fit min-h-[273px]">
              <div className="flex items-center gap-3 mb-6">
                <FaGamepad className="text-2xl text-purple-600 dark:text-purple-400" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Mis juegos favoritos
                </h3>
              </div>
              
              {/* Grid de juegos más grande */}
              <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-3">
                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="https://i.3djuegos.com/juegos/18743/cyberpunk_2077_phantom_liberty/fotos/ficha/cyberpunk_2077_phantom_liberty-5816534.webp"
                    alt="Cyberpunk 2077"
                    className="w-full h-38 object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-2 left-2">
                      <span className="text-white text-sm font-semibold">Cyberpunk</span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="data:image/jpeg;base64,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"
                    alt="Sonic Frontiers"
                    className="w-full h-38 object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-2 left-2">
                      <span className="text-white text-sm font-semibold">Sonic</span>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl">
                  <img 
                    src="https://static.posters.cz/image/750/26616.jpg"
                    alt="Call of Duty: Black Ops III"
                    className="w-full h-38 object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-2 left-2">
                      <span className="text-white text-sm font-semibold">COD BO III</span>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;