"use client";
import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';
import { SpotifySong } from '../models/SpotifySong';

interface AudioContextType {
  // Estados del reproductor
  isPlaying: boolean;
  currentSong: SpotifySong | null;
  currentTime: number;
  duration: number;
  volume: number;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  
  // NUEVO: Estado de la sección activa
  activeSection: string;
  setActiveSection: (section: string) => void;
  
  // Funciones existentes
  setIsPlaying: (playing: boolean) => void;
  setCurrentSong: (song: SpotifySong | null) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setVolume: (volume: number) => void;
  togglePlayPause: () => void;
  handleVolumeChange: (volume: number) => void;
  handleSeek: (percentage: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<SpotifySong | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);
  const [volume, setVolume] = useState(50);
  const [activeSection, setActiveSection] = useState(''); // NUEVO
  const audioRef = useRef<HTMLAudioElement>(null);

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 30);
    }
  };

  const togglePlayPause = () => {
    if (!currentSong) return;
    
    const audioUrl = currentSong.localAudioUrl || currentSong.previewUrl;
    if (!audioUrl) {
      setIsPlaying(!isPlaying);
      return;
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.volume = volume / 100;
      audioRef.current.addEventListener('timeupdate', updateTime);
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration || 30);
      });
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const handleSeek = (percentage: number) => {
    if (audioRef.current && duration > 0) {
      const newTime = (percentage / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <AudioContext.Provider value={{
      isPlaying,
      currentSong,
      currentTime,
      duration,
      volume,
      audioRef,
      activeSection, // NUEVO
      setActiveSection, // NUEVO
      setIsPlaying,
      setCurrentSong,
      setCurrentTime,
      setDuration,
      setVolume,
      togglePlayPause,
      handleVolumeChange,
      handleSeek
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};