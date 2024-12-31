import React, { useEffect } from 'react';
import { Key } from 'lucide-react';

interface DoorProps {
  onUnlock: () => void;
}

export function Door({ onUnlock }: DoorProps) {
  useEffect(() => {
    // Trigger animations or any setup needed on component mount
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401')] bg-cover bg-center opacity-20 animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401')] bg-cover bg-center opacity-10 animate-twinkle" />
      </div>

      {/* Main Content */}
      <div className="relative text-center p-4 md:p-8">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 animate-fade-in animate-pulse animate-float blink-text glow-text">
          Welcome to a Night of Love and Mysteries
        </h1>

        <div className="relative group cursor-pointer" onClick={onUnlock}>
          <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-xl group-hover:bg-pink-500/50 transition-all duration-500" />
          <button className="relative p-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg animate-pulse">
            <Key className="w-14 h-14 animate-pulse" />
          </button>
          <div className="absolute inset-0 border-4 border-pink-500/50 rounded-full animate-spin-slow" />
        </div>

        <p className="mt-4 text-white/90 text-lg md:text-xl animate-fade-in-delayed blink-text">
          Tap to unlock the night of enchantment
        </p>
      </div>

      {/* Snowfall Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="snowflake absolute top-0 left-[calc(100%*Math.random())] text-2xl animate-fall opacity-80"
          >
            ❄️
          </div>
        ))}
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="snowflake absolute top-0 left-[calc(100%*Math.random())] text-1xl animate-fall opacity-50"
          >
            ❄️
          </div>
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="heart absolute text-pink-500 text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </div>
        ))}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="heart absolute text-pink-500 text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Animated Vines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-72 h-72 bg-[url('https://images.unsplash.com/photo-1550948390-6eb7fa773072')] bg-contain opacity-30 transform -rotate-45 animate-pulse" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-[url('https://images.unsplash.com/photo-1550948390-6eb7fa773072')] bg-contain opacity-30 transform rotate-135 animate-pulse" />
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-[url('https://images.unsplash.com/photo-1550948390-6eb7fa773072')] bg-contain opacity-20 transform rotate-45 animate-spin-slow" />
        <div className="absolute right-0 top-0 w-72 h-72 bg-[url('https://images.unsplash.com/photo-1550948390-6eb7fa773072')] bg-contain opacity-20 transform -rotate-135 animate-spin-slow" />
      </div>

      {/* Additional Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="floating-element absolute text-white text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ✨
          </div>
        ))}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="floating-element absolute text-white text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  );
}