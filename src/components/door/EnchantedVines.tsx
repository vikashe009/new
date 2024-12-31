import React from 'react';

export function EnchantedVines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-24 h-48 bg-[url('https://images.unsplash.com/photo-1550948390-6eb7fa773072')] bg-contain bg-no-repeat opacity-20"
          style={{
            transform: `rotate(${i * 60}deg)`,
            transformOrigin: i % 2 === 0 ? 'top left' : 'bottom right',
            animation: `sway ${3 + i}s ease-in-out infinite`,
            left: `${(i * 20) % 100}%`,
            top: `${(i * 15) % 100}%`
          }}
        />
      ))}
    </div>
  );
}