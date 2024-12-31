import React from 'react';

interface GlowingTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingText({ children, className = '' }: GlowingTextProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 blur-lg bg-pink-500/20 scale-110 group-hover:bg-pink-500/30 transition-all duration-300" />
      <div className="relative">{children}</div>
    </div>
  );
}