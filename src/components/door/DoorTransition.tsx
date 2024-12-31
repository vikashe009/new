import React from 'react';
import { Heart } from 'lucide-react';

interface DoorTransitionProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function DoorTransition({ isVisible, onComplete }: DoorTransitionProps) {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onComplete, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <div className="relative">
        {/* Floating hearts */}
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-500/40 animate-float"
            style={{
              left: `${Math.random() * 200 - 100}px`,
              top: `${Math.random() * 200 - 100}px`,
              transform: `scale(${0.5 + Math.random()})`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Central glow */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl animate-pulse" />
      </div>
    </div>
  );
}