import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { GlowingText } from '../shared/GlowingText';
import { LoveLetterOverlay } from './LoveLetterOverlay';

interface MemoryCardProps {
  image: string;
  caption: string;
  date: string;
  description: string;
  letter: string;
}

export function MemoryCard({ image, caption, date, description, letter }: MemoryCardProps) {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="group relative transform hover:scale-105 transition-all duration-500 md:even:translate-y-8">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
        <div className="aspect-w-4 aspect-h-5 md:aspect-h-3">
          <img
            src={image}
            alt={caption}
            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
          <GlowingText className="text-center mb-4">
            <Heart 
              className="w-8 h-8 text-white mx-auto mb-2 animate-pulse cursor-pointer hover:text-pink-400 transition-colors"
              onClick={() => setShowLetter(true)}
            />
            <h3 className="text-white text-xl font-medium mb-1">{caption}</h3>
            <p className="text-white/80 text-sm mb-2">{date}</p>
            <p className="text-white/90 text-base hidden group-hover:block animate-fade-in">
              {description}
            </p>
          </GlowingText>
        </div>

        <LoveLetterOverlay
          message={letter}
          date={date}
          isVisible={showLetter}
          onClose={() => setShowLetter(false)}
        />
      </div>
    </div>
  );
}