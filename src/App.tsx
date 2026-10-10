import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollProgress } from './components/ScrollProgress';
import { Petals } from './components/Petals';
import { MusicPlayer } from './components/MusicPlayer';
import { IntroGate } from './sections/IntroGate';
import { Hero } from './sections/Hero';
import { InviteMessage } from './sections/InviteMessage';
import { Couple } from './sections/Couple';
import { Events } from './sections/Events';
import { Venue } from './sections/Venue';
import { Footer } from './sections/Footer';
import { weddingAudio } from './utils/audioSynth';

export const App: React.FC = () => {
  const [gateState, setGateState] = useState<'closed' | 'opening' | 'open'>('closed');

  useEffect(() => {
    document.body.style.overflow = gateState === 'open' ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [gateState]);

  const handleOpening = () => {
    setGateState('opening');
    weddingAudio.play();
  };

  const handleOpened = () => {
    setGateState('open');
  };

  return (
    <main className="relative min-h-svh bg-[#0c0a24] text-[#f5eee2] overflow-x-hidden">
      {/* Top Reading Progress */}
      <ScrollProgress />

      {/* Main Page Content */}
      <motion.div
        initial={{ scale: 1.07 }}
        animate={{ scale: gateState === 'closed' ? 1.07 : 1 }}
        transition={{ duration: 1.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <InviteMessage />
        <Couple />
        <Events />
        <Venue />
        <Footer />
      </motion.div>

      {/* Floating Rose Petals when opened */}
      {gateState === 'open' && <Petals count={14} />}

      {/* Floating Music Player */}
      <MusicPlayer autoStart={gateState !== 'closed'} />

      {/* Royal Intro Gate with Split Opening Doors */}
      <AnimatePresence>
        {gateState !== 'open' && (
          <IntroGate
            onOpening={handleOpening}
            onOpened={handleOpened}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;
