import React from 'react';
import { Key } from 'lucide-react';
import { GlowingText } from '../shared/GlowingText';

interface GlowingKeyProps {
  onClick: () => void;
}

export function GlowingKey({ onClick }: GlowingKeyProps) {
  return (
    <div className="text-center mt-8">
      <GlowingText>
        <button
          onClick={onClick}
          className="group relative p-8 rounded-full bg-gradient-to-r from-blue-500/80 to-green-500/80 hover:from-blue-500/90 hover:to-green-500/90 transition-all duration-500 transform hover:scale-105 shadow-lg"
        >
          <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl group-hover:bg-green-500/30 transition-all duration-500" />
          <Key className="relative w-12 h-12 text-white animate-pulse group-hover:scale-110 transition-transform" />
        </button>
        <p className="mt-4 text-white/80 text-lg animate-fade-in-delayed">
          Unlock the magic of the night!
        </p>
      </GlowingText>
    </div>
  );
}