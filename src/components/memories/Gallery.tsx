import React from 'react';
import { MemoryCard } from './MemoryCard';
import { FloatingHearts } from '../shared/FloatingHearts';
import { GlowingText } from '../shared/GlowingText';
import { LoveQuote } from '../shared/LoveQuote';
import { HeartBeat } from '../shared/HeartBeat';

const MEMORIES = [
  {
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    caption: "Our First Adventure",
    date: "The day it all began",
    description: "Your smile lit up my world, and I knew this was just the beginning of our story.",
    letter: "My darling, the moment I saw you, time stood still. Your eyes held galaxies of dreams, and your smile became my favorite view. That day marked the beginning of our forever, and I've treasured every heartbeat since."
  },
  {
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
    caption: "Endless Laughter",
    date: "A moment frozen in time",
    description: "Your joy is contagious, and your laughter is my favorite melody.",
    letter: "My love, your laughter is the sweetest symphony I've ever heard. It echoes in my heart, filling every corner with pure joy. You make the ordinary extraordinary, and I fall in love with you more with each smile."
  },
  {
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    caption: "When Time Stood Still",
    date: "Our perfect moment",
    description: "In that moment, the world faded away, and it was just us.",
    letter: "Beloved, in your arms, I found my home. That perfect moment when the world disappeared, and all that existed was us, our hearts beating as one. I want to live in that moment with you forever."
  }
];

const LOVE_QUOTES = [
  {
    quote: "In your eyes, I see the reflection of all my dreams coming true.",
    author: "My Heart to Yours"
  },
  {
    quote: "Every moment with you feels like a beautiful dream I never want to wake up from.",
    author: "Forever Yours"
  }
];

export function Gallery() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 py-16 px-4 overflow-hidden">
      <HeartBeat />
      <FloatingHearts />
      
      <div className="max-w-6xl mx-auto">
        <GlowingText className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-white font-serif mb-4">
            Our Love Story
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Every heartbeat writes a new chapter in our endless love story.
          </p>
        </GlowingText>

        {LOVE_QUOTES.map((quote, index) => (
          <LoveQuote key={index} {...quote} />
        ))}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {MEMORIES.map((memory, index) => (
            <MemoryCard key={index} {...memory} />
          ))}
        </div>
      </div>
    </div>
  );
}