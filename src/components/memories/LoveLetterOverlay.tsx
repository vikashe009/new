import React from 'react';
import { GlowingText } from '../shared/GlowingText';
import { Heart } from 'lucide-react';

interface LoveLetterOverlayProps {
  message: string;
  date: string;
  isVisible: boolean;
}

export function LoveLetterOverlay({ message, date, isVisible }: LoveLetterOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-pink-500/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in rounded-lg shadow-lg">
      <GlowingText>
        <div className="max-w-md text-center">
          <Heart className="text-red-400 text-3xl mb-2 animate-pulse" />
          <p className="text-white/90 font-serif italic text-lg md:text-xl leading-relaxed">
            {message}
          </p>
          <p className="text-white/70 text-sm mt-4 font-light">{date}</p>
        </div>
      </GlowingText>
    </div>
  );
}