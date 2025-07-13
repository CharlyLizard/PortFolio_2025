"use client";
import React, { useState } from 'react';
import { useAudio } from '../providers/AudioProvider';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaSpotify, FaExpandArrowsAlt, FaCompressArrowsAlt } from 'react-icons/fa';

const MiniSpotifyPlayer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    isPlaying,
    currentSong,
    currentTime,
    duration,
    volume,
    togglePlayPause,
    handleVolumeChange,
  } = useAudio();

  // No mostrar si no hay canción
  if (!currentSong) return null;

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Versión compacta - ESTILO NAVBAR */}
      {!isExpanded && (
        <div 
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 shadow-2xl px-3 py-2 cursor-pointer group hover:bg-white/95 dark:hover:bg-gray-800/95 transition-all duration-300"
          onClick={() => setIsExpanded(true)}
        >
          <div className="flex items-center gap-3">
            {/* Imagen de la canción */}
            <img
              src={currentSong.albumCover}
              alt="Portada"
              className="w-8 h-8 rounded-full shadow-lg"
            />
            
            {/* Botón play/pause */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              className="bg-green-500 text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors duration-200 shadow-lg"
            >
              {isPlaying ? (
                <FaPause className="text-xs" />
              ) : (
                <FaPlay className="text-xs ml-0.5" />
              )}
            </button>

            {/* Visualizador mini */}
            <div className="flex items-center gap-0.5 h-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-0.5 rounded-sm transition-all duration-150 ${
                    isPlaying ? 'bg-green-500' : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                  style={{
                    height: isPlaying 
                      ? `${Math.abs(Math.sin(Date.now() / 200 + i * 1.2)) * 12 + 4}px`
                      : '4px',
                    animationDelay: `${i * 100}ms`
                  }}
                />
              ))}
            </div>

            {/* Control de volumen compacto */}
            <div className="flex items-center gap-1">
              <button 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleVolumeChange(volume > 0 ? 0 : 50);
                }}
              >
                {volume === 0 ? (
                  <FaVolumeMute className="text-xs" />
                ) : (
                  <FaVolumeUp className="text-xs" />
                )}
              </button>
              
              {/* Mini slider */}
              <div className="w-12 bg-gray-300 dark:bg-gray-600 rounded-full h-1 group cursor-pointer relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleVolumeChange(parseInt(e.target.value));
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div 
                  className="bg-green-500 h-1 rounded-full transition-all duration-200"
                  style={{ width: `${volume}%` }}
                />
              </div>
            </div>

            {/* Icono de expandir */}
            <FaExpandArrowsAlt className="text-gray-400 dark:text-gray-500 text-xs group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
          </div>
        </div>
      )}

      {/* Versión expandida - ESTILO NAVBAR EXPANDIDO */}
      {isExpanded && (
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl p-5 text-gray-900 dark:text-white w-80 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <FaSpotify className="text-green-500 text-lg" />
              <span className="text-sm font-medium text-green-500">Reproduciendo</span>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1"
            >
              <FaCompressArrowsAlt className="w-4 h-4" />
            </button>
          </div>

          {/* Información de la canción */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={currentSong.albumCover}
              alt="Portada"
              className="w-14 h-14 rounded-xl shadow-lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-base truncate mb-1">
                {currentSong.songName}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm truncate">
                {currentSong.artist}
              </p>
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="mb-4">
            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span className="w-8 text-right font-mono">{formatTime(currentTime)}</span>
              <div className="flex-1 bg-gray-300 dark:bg-gray-600 rounded-full h-1 cursor-pointer group relative">
                <div 
                  className="bg-green-500 h-1 rounded-full transition-all duration-300"
                  style={{ 
                    width: (currentSong?.localAudioUrl || currentSong?.previewUrl) 
                      ? `${(currentTime / duration) * 100}%`
                      : isPlaying ? '100%' : '0%'
                  }}
                />
              </div>
              <span className="w-8 font-mono">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controles principales */}
          <div className="flex items-center justify-between mb-4">
            <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"/>
              </svg>
            </button>

            <button
              onClick={togglePlayPause}
              className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors duration-200 shadow-lg"
            >
              {isPlaying ? (
                <FaPause className="text-sm" />
              ) : (
                <FaPlay className="text-sm ml-0.5" />
              )}
            </button>

            <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"/>
              </svg>
            </button>
          </div>

          {/* Control de volumen ANCHO */}
          <div className="flex items-center gap-3 mb-4 bg-gray-100 dark:bg-gray-700/50 rounded-2xl p-3">
            <button 
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
              onClick={() => handleVolumeChange(volume > 0 ? 0 : 50)}
            >
              {volume === 0 ? (
                <FaVolumeMute className="text-base" />
              ) : (
                <FaVolumeUp className="text-base" />
              )}
            </button>
            
            {/* Slider de volumen ANCHO */}
            <div className="flex-1 bg-gray-300 dark:bg-gray-600 rounded-full h-2 group cursor-pointer relative">
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-200"
                style={{ width: `${volume}%` }}
              >
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity border border-green-500" />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-300 font-mono w-8 text-center">{volume}%</span>
              <a
                href={currentSong.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-green-500 transition-colors"
                title="Abrir en Spotify"
              >
                <FaSpotify className="text-lg" />
              </a>
            </div>
          </div>

          {/* Visualizador */}
          <div className="flex items-end justify-center gap-0.5 h-6 mb-3">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className={`w-0.5 rounded-sm transition-all duration-150 ${
                  isPlaying ? 'bg-green-500' : 'bg-gray-400 dark:bg-gray-600'
                }`}
                style={{
                  height: isPlaying 
                    ? `${Math.abs(Math.sin(Date.now() / 250 + i * 0.3)) * 18 + 4}px`
                    : '4px',
                  animationDelay: `${i * 25}ms`
                }}
              />
            ))}
          </div>

          {/* Etiqueta */}
          <div className="text-center">
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
              {currentSong?.localAudioUrl ? "🎵 Audio completo" : 
               currentSong?.previewUrl ? "⏱️ Preview (30s)" : "🎭 Visualizador"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniSpotifyPlayer;