import React from 'react';
import { Heart } from 'lucide-react';
import { GlowingText } from '../shared/GlowingText';

const PERSONAL_MEMORIES = [
  {
    image: "https://images.pexels.com/photos/2375044/pexels-photo-2375044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Our Lake Sunset",
    description: "Where our story began, watching nature paint the sky just for us",
    date: ""
  },
  {
    image: "https://thumbs.dreamstime.com/b/romantic-couple-embracing-rain-night-romantic-moment-captured-as-couple-embraces-under-rain-beautifully-lit-328411405.jpg",
    title: "Rain-Kissed Love",
    description: "Our first forehead kiss in the rain, when time stood still",
    date: "A magical moment"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpPV-NJkup8ywa4M66H-zkhPrIhnA_5gpqw&s",
    title: "Our Melody",
    description: "One song, two hearts beating as one",
    date: "Our musical journnies"
  }
];

export function PersonalizedGallery() {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-purple-600 to-pink-500">
      <GlowingText className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
          Dear Apsara
        </h2>
        <p className="text-2xl text-white/90 max-w-2xl mx-auto">
          Every moment with you turns into a beautiful memory
        </p>
      </GlowingText>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {PERSONAL_MEMORIES.map((memory, index) => (
          <div
            key={index}
            className="group relative transform hover:scale-105 transition-all duration-500 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100" />
            
            <div className="relative bg-white/20 backdrop-blur-md rounded-lg overflow-hidden">
              <div className="aspect-w-4 aspect-h-5">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <Heart className="w-10 h-10 text-pink-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl text-white font-semibold mb-2">{memory.title}</h3>
                <p className="text-white/80 text-sm mb-2">{memory.date}</p>
                <p className="text-white/90 text-base">{memory.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}