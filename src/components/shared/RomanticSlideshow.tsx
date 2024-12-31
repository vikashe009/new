import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const ROMANTIC_MOMENTS = [
  {
    image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg",
    title: "Cozy Candlelight",
    description: "In the warm glow of love, every moment becomes magical",
    position: "center"
  },
  {
    image: "https://images.pexels.com/photos/2375044/pexels-photo-2375044.jpeg",
    title: "Sunset Dreams",
    description: "Where our love story began, by the tranquil lake",
    position: "center"
  },
  {
    image: "https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg",
    title: "Peaceful Embrace",
    description: "Finding peace in each other's arms",
    position: "center"
  },
  {
    image: "https://images.pexels.com/photos/3693143/pexels-photo-3693143.jpeg",
    title: "Romantic Evening",
    description: "Every evening with you feels like a dream",
    position: "center"
  }
];

export function RomanticSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % ROMANTIC_MOMENTS.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const moment = ROMANTIC_MOMENTS[currentSlide];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background overlay with romantic gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-indigo-500/20 mix-blend-overlay" />
      
      {/* Main image */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          isTransitioning ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <img
          src={moment.image}
          alt={moment.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-end justify-center">
        <div className={`w-full max-w-4xl mx-auto p-8 text-center transition-all duration-500 ${
          isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}>
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
            </div>
            <h3 className="text-3xl font-serif text-white mb-3 text-shadow-lg">
              {moment.title}
            </h3>
            <p className="text-xl text-white/90 italic font-light text-shadow-lg max-w-2xl mx-auto">
              {moment.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
        {ROMANTIC_MOMENTS.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-150' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}