import React, { useState } from 'react';
import {  DoorTransition } from './components/door/DoorTransition';
import {  EnchantedDoor } from './components/door/EnchantedDoor';
import { Timer } from './components/Timer';

import  Timeline  from './components/Timeline';
import { RomanticClosing } from './components/RomanticClosing';
import { Sparkles } from './components/shared/Sparkles';
import { BackgroundMusic } from './components/shared/BackgroundMusic';
import { PersonalizedGallery } from './components/memories/PersonalizedGallery';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  
  const handleUnlock = () => {
    setShowTransition(true);
  };
  
  const handleTransitionComplete = () => {
    setShowTransition(false);
    setIsUnlocked(true);
  };
  
  if (!isUnlocked) {
    return (
      <>
        <Sparkles />
        <BackgroundMusic />
        <EnchantedDoor onUnlock={handleUnlock} />
        <DoorTransition 
          isVisible={showTransition} 
          onComplete={handleTransitionComplete} 
        />
      </>
    );
  }
  
  return (
    <div className="relative">
      <Sparkles />
      <BackgroundMusic />
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-800">
        <Timer />
        <PersonalizedGallery />
        <Timeline />
        <RomanticClosing />
      </div>
    </div>
  );
}

export default App;