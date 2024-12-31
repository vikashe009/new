import React from 'react';
import { Heart } from 'lucide-react';

const MEMORIES = [
  {
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    caption: "Our first adventure"
  },
  {
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
    caption: "The day you made me laugh endlessly"
  },
  {
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    caption: "When time stood still"
  }
];

export function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MEMORIES.map((memory, index) => (
            <div
              key={index}
              className="group relative transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-white/10 backdrop-blur rounded-lg overflow-hidden">
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Heart className="w-8 h-8 text-white mx-auto mb-2" />
                    <p className="text-white text-lg font-medium">
                      {memory.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}