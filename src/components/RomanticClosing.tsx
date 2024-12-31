import React, { useEffect, useState } from 'react';
import { Heart, Stars } from 'lucide-react';
import { GlowingText } from './shared/GlowingText';

const INTIMATE_MOMENTS = [
  {
    image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
    caption: "In the warmth of candlelight"
  },
  {
    image: "https://images.pexels.com/photos/842947/pexels-photo-842947.jpeg",
    caption: "Peaceful moments together"
  },
  {
    image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
    caption: "Forever in your arms"
  }
];

export function RomanticClosing() {
  // State for animated text
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-900/90 to-pink-900/90 bg-cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg)' }}>
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Romantic image grid */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 opacity-60">
        {INTIMATE_MOMENTS.map((moment, index) => (
          <div key={index} className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <img
              src={moment.image}
              alt={moment.caption}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center">
              <p className="text-lg font-semibold">{moment.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <GlowingText>
            <div className={`space-y-8 transition-opacity duration-700 ${animateText ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex justify-center gap-6">
                <Heart className="w-16 h-16 text-pink-400 animate-pulse" />
                <Stars className="w-16 h-16 text-purple-400 animate-pulse" />
              </div>
              
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">
                Our Love Story Never Ends
              </h2>
              
              <div className="space-y-6 text-xl text-white/90">
                <p className="italic">
                  "In your eyes, I found my home. In your heart, I found my peace."
                </p>
                <p>
                  Every touch, every glance, every shared breath writes another page in our endless love story.
                </p>
              </div>

              <div className="pt-8">
                <div className="text-3xl text-white/90 font-light">
                  Forever yours,
                </div>
                <div className="text-2xl text-pink-400 mt-2">
                  ❤️ With endless love ❤️
                </div>
              </div>
            </div>
          </GlowingText>
        </div>
      </div>

      {/* Floating hearts */}
      {[...Array(12)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-pink-400/30 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 30 + 15}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
    </div>
  );
}