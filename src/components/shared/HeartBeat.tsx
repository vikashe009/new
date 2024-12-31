import React from 'react';

export function HeartBeat() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 animate-pulse-slow">
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent animate-pulse-delayed" />
    </div>
  );
}