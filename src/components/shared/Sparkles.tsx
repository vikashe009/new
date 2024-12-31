import React from 'react';

export function Sparkles() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            backgroundColor: `rgba(255, 182, 193, ${Math.random() * 0.5 + 0.3})`,
            borderRadius: '50%',
            boxShadow: '0 0 5px rgba(255, 182, 193, 0.5)',
            transition: 'transform 0.5s ease-in-out',
            transform: `scale(${Math.random() * 0.5 + 0.75})`
          }}
        />
      ))}
    </div>
  );
}