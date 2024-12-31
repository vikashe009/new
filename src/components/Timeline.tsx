// Romantic Timeline Component with Enhanced Design
import React, { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';

const Timeline = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null);
  const [locked, setLocked] = useState(true); // Start locked
  const [unlockTime, setUnlockTime] = useState<number | null>(null);

  const timelineEvents = [
    {
      time: "8:45 PM",
      title: "A Starlit Beginning",
      hint: "A magical evening awaits...",
      options: [
        { text: "Kuchh Apna Sa", description: "Let's go somwhere you like to be when you dont have any options." },
        { text: "Kuchh Naya Sa", description: "Just be with me and let's explore some new tasts." }
      ],
      unlockHour: 20, // 8 PM
      unlockMinute: 45 // 45 minutes
    },
    {
      time: "9:30 PM",
      title: "Candlelit Romance",
      hint: "A soft glow unveils a sweet surprise...",
      options: [
        { text: "Dinner for Two", description: "Savor a meal crafted with love." },
        { text: "Sweet Serenade", description: "Enjoy a live performance just for you." }
      ],
      unlockHour: 21, // 9 PM
      unlockMinute: 30 // 30 minutes
    },
    {
      time: "10:00 PM",
      title: "A Grand Finale",
      hint: "The night culminates in a spectacular way...",
      options: [
        { text: "Fireworks of Love", description: "Watch the sky light up with colors." },
        { text: "Starlit Promise", description: "Make a promise under the stars." }
      ],
      unlockHour: 22, // 10 PM
      unlockMinute: 0 // 0 minutes
    }
  ];

  useEffect(() => {
    const checkUnlockTime = () => {
      const now = new Date();
      const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();

      const unlockedIndex = timelineEvents.findIndex(event => {
        const eventTimeInMinutes = event.unlockHour * 60 + event.unlockMinute;
        return currentTimeInMinutes >= eventTimeInMinutes;
      });

      if (unlockedIndex !== -1) {
        setUnlockTime(unlockedIndex);
        setLocked(false);
      }

      if (unlockedIndex === 0) {
        const timer = setTimeout(() => {
          setLocked(true);
        }, 10000);
        return () => clearTimeout(timer);
      }
    };

    checkUnlockTime();
    const interval = setInterval(checkUnlockTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const getEventCardColor = (index: number) => {
    const colors = [
      'bg-purple-600', 
      'bg-pink-500', 
      'bg-indigo-600', 
      'bg-violet-500', 
      'bg-fuchsia-500', 
      'bg-rose-500', 
      'bg-purple-700', 
      'bg-pink-600'
    ];
    return colors[index % colors.length];
  };

  const handleOptionClick = (index: number, description: string) => {
    if (!locked && unlockTime !== null && index <= unlockTime) {
      setSelectedOption(index);
      setSelectedDescription(description);
    }
  };

  const getOptionColor = (index: number) => {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];
    return colors[index % colors.length]; // Cycle through colors
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-pink-600 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-white text-center mb-12 animate-pulse">
          Tonight's Romantic Journey
        </h2>
        
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex items-center mb-16">
              <div className="w-full md:w-1/2 px-4">
                <div className={`p-6 rounded-lg backdrop-blur-lg transition-all duration-300 ${getEventCardColor(index)} text-white`}>
                  <div className="text-xl font-bold mb-2">{event.time}</div>
                  <div className="text-lg mb-1">{event.title}</div>
                  <div className="text-sm opacity-75">{event.hint}</div>
                  
                  {/* Render options only if the event is unlocked */}
                  {unlockTime !== null && index <= unlockTime && (
                    <div className="flex space-x-4 mt-4">
                      {event.options.map((option, optionIndex) => (
                        <button 
                          key={optionIndex}
                          className={`p-2 rounded transition-all duration-300 ${
                            selectedOption === index && selectedDescription === option.description
                              ? "bg-pink-700 transform scale-110 align-middle" // Highlight selected option
                              : selectedOption !== null
                              ? "opacity-0 transition-opacity duration-500 pointer-events-none" // Dissolve other options
                              : getOptionColor(optionIndex) // Apply color based on index
                          }`}
                          onClick={() => handleOptionClick(index, option.description)}
                          disabled={locked || (selectedOption !== null && selectedOption !== index)}
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  )}

                  {selectedOption === index && selectedDescription && (
                    <div className="mt-4 p-4 rounded-lg bg-red-800 transition-all duration-500 ease-in-out">
                      <div className="text-lg text-white">{selectedDescription}</div>
                      <Heart className="w-6 h-6 text-red-500 mt-2" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="p-4 rounded-full bg-pink-500">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
