import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

const Pc: [number, number, number, number] = [0.65, 0, 0.35, 1];

interface IntroGateProps {
  onOpening: () => void;
  onOpened: () => void;
}

export const IntroGate: React.FC<IntroGateProps> = ({ onOpening, onOpened }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      onOpening();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Left Door */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[#0c0a24]"
        animate={isOpen ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.5, delay: 0.35, ease: Pc }}
      >
        <img
          src="/assets/navy-texture.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-right opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a24]/60 to-transparent" />
        <img
          src="/assets/mandala.png"
          alt=""
          className="absolute right-[-42vmin] top-1/2 w-[84vmin] max-w-none -translate-y-1/2 opacity-25"
        />
      </motion.div>

      {/* Right Door */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[#0c0a24]"
        animate={isOpen ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.5, delay: 0.35, ease: Pc }}
        onAnimationComplete={() => isOpen && onOpened()}
      >
        <img
          src="/assets/navy-texture.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-left opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0c0a24]/60 to-transparent" />
        <img
          src="/assets/mandala.png"
          alt=""
          className="absolute left-[-42vmin] top-1/2 w-[84vmin] max-w-none -translate-y-1/2 opacity-25"
        />
      </motion.div>

      {/* Center Light Beam Split */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 left-1/2 w-[70px] -translate-x-1/2"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,224,168,0.85), transparent)",
          filter: "blur(10px)",
        }}
        initial={{ opacity: 0, scaleX: 0.1 }}
        animate={isOpen ? { opacity: [0, 1, 0.9], scaleX: [0.1, 1, 2.2] } : {}}
        transition={{ duration: 1.5, delay: 0.35, ease: Pc }}
      />

      {/* Center Front Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
        animate={isOpen ? { opacity: 0, y: -26 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* Top Garland */}
        <motion.img
          src="/assets/garland-top.webp"
          alt=""
          className="pointer-events-none absolute inset-x-0 top-0 w-full object-cover object-top opacity-90"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
        />

        {/* Invitation Text & Ganesha Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative flex flex-col items-center gap-6 text-center max-w-[340px]"
        >
          {/* Lord Ganesha */}
          <motion.img
            src="/assets/ganesha.png"
            alt="Lord Ganesha"
            className="w-24 drop-shadow-[0_0_20px_rgba(226,200,143,0.5)] sm:w-28"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          {/* Hindi Verse */}
          <span className="font-display text-sm tracking-[0.35em] text-[#e2c88f]">
            {weddingData.verse.hindi}
          </span>

          {/* Subheading */}
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#f5eee2]/70 font-medium">
            You are cordially invited to
          </p>

          {/* Couple Names */}
          <h1 className="font-script text-gold text-6xl leading-[1.1] sm:text-7xl">
            {weddingData.bride} &amp;<br />
            {weddingData.groom}
          </h1>

          {/* Open Invitation Button */}
          <motion.button
            onClick={handleOpen}
            whileTap={{ scale: 0.94 }}
            className="group relative mt-4 rounded-full border border-[#e2c88f]/60 px-10 py-4 text-[12px] uppercase tracking-[0.35em] text-[#f6e2ae] transition-colors hover:bg-[#e2c88f]/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          >
            <span
              className="absolute inset-0 rounded-full border border-[#e2c88f]/40"
              style={{ animation: "glow-pulse 2.6s ease-in-out infinite" }}
            />
            <span className="relative z-10">
              Open Invitation ✦
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
