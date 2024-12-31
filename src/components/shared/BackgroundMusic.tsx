import React, { useState, useEffect, useCallback } from 'react';
import { Music, PauseCircle, PlayCircle, AlertCircle } from 'lucide-react';

// Multiple audio sources for better reliability
const AUDIO_SOURCES = [
  'https://assets.mixkit.co/music/preview/mixkit-romantic-wedding-orchestra-6-12641.mp3',
  'https://assets.mixkit.co/music/preview/mixkit-romantic-piano-music-922.mp3'
];

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const initializeAudio = useCallback(() => {
    const newAudio = new Audio(AUDIO_SOURCES[currentSourceIndex]);
    newAudio.loop = true;
    newAudio.volume = 0.5; // Set initial volume to 50%
    
    newAudio.addEventListener('error', () => {
      if (currentSourceIndex < AUDIO_SOURCES.length - 1) {
        setCurrentSourceIndex(prev => prev + 1);
      } else {
        setError(true);
      }
    });

    setAudio(newAudio);
    setError(false);
  }, [currentSourceIndex]);

  useEffect(() => {
    initializeAudio();
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, [currentSourceIndex]);

  useEffect(() => {
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
          setError(true);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-red-500/10 backdrop-blur-lg p-3 rounded-full group">
        <AlertCircle className="w-6 h-6 text-red-400" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-4 right-4 z-50 bg-white/10 backdrop-blur-lg p-3 rounded-full hover:bg-white/20 transition-all duration-300 group"
    >
      <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-lg group-hover:bg-pink-500/30" />
      {isPlaying ? (
        <PauseCircle className="w-6 h-6 text-white relative" />
      ) : (
        <PlayCircle className="w-6 h-6 text-white relative" />
      )}
      <Music className="absolute -top-1 -right-1 w-3 h-3 text-pink-400 animate-pulse" />
    </button>
  );
}