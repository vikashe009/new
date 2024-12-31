import React from 'react';
import { GlowingText } from './GlowingText';
import { Heart } from 'lucide-react';

interface LoveQuoteProps {
  quote: string;
  author?: string;
}

export function LoveQuote({ quote, author }: LoveQuoteProps) {
  return (
    <GlowingText className="text-center my-8">
      <div className="relative">
        <Heart className="w-6 h-6 text-pink-400/80 absolute -top-4 -left-2 animate-float-1" />
        <Heart className="w-4 h-4 text-pink-400/60 absolute -top-2 -right-1 animate-float-0" />
        <p className="text-white/90 text-lg md:text-xl italic font-serif">"{quote}"</p>
        {author && (
          <p className="text-white/70 text-sm mt-2">— {author}</p>
        )}
      </div>
    </GlowingText>
  );
}