import React, { useEffect, useState } from 'react';
import { Clock, Heart } from 'lucide-react';
import { Sparkles } from './shared/Sparkles';
import { LoveQuote } from './shared/LoveQuote';

const QUOTES = [
  { quote: "In your eyes, I find my forever.", author: "Yours" },
  { quote: "The best thing in life is holding your hand and walking to our dreams.", author: "Yours" },
  { quote: "You are the poem I never knew how to write.", author: "Yours" },
  { quote: "In your arms, I have found my home.", author: "Yours" },
  { quote: "Every heartbeat writes our story.", author: "Yours" },
  { quote: "With you, every moment is magic.", author: "Yours" }
];

export function Timer() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [timeLeft, setTimeLeft] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % QUOTES.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(22, 0, 0);
    
    const updateTimer = () => {
      const now = new Date();
      const diff = targetTime.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft("The moment has arrived!");
        return;
      }
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeLeft(`${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };
    
    const timer = setInterval(updateTimer, 1000);
    updateTimer();
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[url('/path/to/romantic-background.jpg')] bg-cover p-4 overflow-hidden">
      <Sparkles />
      
      {/* Floating hearts background */}
      {[...Array(12)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-pink-500/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
      
      <div className="relative">
        <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="relative bg-white/10 backdrop-blur-lg rounded-full p-12 border border-white/20">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-spin-slow" />
          <Clock className="w-16 h-16 text-white mb-4 mx-auto animate-pulse transform transition-transform duration-500 hover:scale-110" />
          <div className="text-4xl md:text-6xl font-mono text-white mb-2 relative glow-effect">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-lg" />
            {timeLeft}
          </div>
          <div className="text-lg text-white/80">
            Our night begins when this heart blooms
          </div>
        </div>
      </div>
      
      <div className="mt-12 max-w-md text-center">
        <LoveQuote quote={QUOTES[currentQuote].quote} author={QUOTES[currentQuote].author} />
      </div>
    </div>
  );
}