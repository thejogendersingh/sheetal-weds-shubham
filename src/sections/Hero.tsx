import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Aurora } from '../components/Aurora';
import { FairyLights } from '../components/FairyLights';


export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[94svh] sm:min-h-svh flex-col items-center overflow-hidden px-2 sm:px-4 pb-8 sm:pb-12 pt-0">
      {/* Background Texture & Aurora */}
      <img
        src="/assets/navy-texture.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a24]/40 via-transparent to-[#0c0a24]" />
      <Aurora className="opacity-70" />

      {/* Top Hanging Garland */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 top-0 z-20"
        style={{ transformOrigin: 'top center' }}
      >
        <img
          src="/assets/garland-top.webp"
          alt=""
          className="w-full object-cover object-top"
          style={{ transformOrigin: 'top center', animation: 'hang-sway 9s ease-in-out infinite' }}
        />
        <FairyLights count={22} className="!inset-x-0 !top-0 h-[55%]" />
      </motion.div>

      {/* Main Arch Invitation Card */}
      <div className="relative z-10 mt-[15svh] sm:mt-[14svh] flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[82vw] max-w-[300px]"
        >
          {/* Arch Glow */}
          <div
            className="absolute left-1/2 top-1/2 h-[110%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
            style={{
              background: 'radial-gradient(circle, rgba(238,178,192,0.22), rgba(99,102,241,0.14) 55%, transparent 75%)',
              animation: 'arch-glow 5s ease-in-out infinite',
            }}
          />

          {/* Arch Silhouette SVG */}
          <svg viewBox="0 0 320 430" className="relative w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
            <defs>
              <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#faf5ea" />
                <stop offset="100%" stopColor="#f1e6d2" />
              </linearGradient>
            </defs>
            <path
              d="M 40 410 L 40 175 C 40 105 95 72 160 30 C 225 72 280 105 280 175 L 280 410 Z"
              fill="url(#archFill)"
            />
            <path
              d="M 52 400 L 52 178 C 52 116 101 84 160 46 C 219 84 268 116 268 178 L 268 400 Z"
              fill="none"
              stroke="#c9a86a"
              strokeWidth="1.4"
              opacity="0.8"
            />
          </svg>

          {/* Arch Text Content */}
          <div className="absolute inset-0 flex flex-col items-center px-8 pt-[26%] text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-display text-[10px] tracking-[0.28em] text-[#8a6f4d]"
            >
              {weddingData.verse.hindi}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="mt-3 font-display text-[11px] font-semibold uppercase tracking-[0.34em] text-[#3a3260]"
            >
              Welcome to the
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="font-script text-4xl leading-tight text-[#c96e8c]"
            >
              Wedding
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="font-display text-[10px] uppercase tracking-[0.4em] text-[#3a3260]"
            >
              of
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.9 }}
              className="mt-1 font-script text-[13vw] leading-[1.05] text-[#4a3f78] sm:text-5xl"
            >
              {weddingData.bride}
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.35, duration: 0.8 }}
              className="font-script text-3xl leading-none text-[#c96e8c]"
            >
              &amp;
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 0.9 }}
              className="font-script text-[13vw] leading-[1.05] text-[#4a3f78] sm:text-5xl"
            >
              {weddingData.groom}
            </motion.h1>
          </div>
        </motion.div>

        {/* Floating Couple Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-[22vw] z-10 sm:-mt-20"
        >
          <div
            className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[50px]"
            style={{
              background: 'radial-gradient(circle, rgba(169,198,234,0.3), transparent 70%)',
              animation: 'glow-pulse 4.5s ease-in-out infinite',
            }}
          />
          <img
            src="/assets/couple.webp"
            alt={`${weddingData.brideFull} and ${weddingData.groomFull}`}
            className="relative w-[60vw] max-w-[230px] drop-shadow-[0_18px_36px_rgba(0,0,0,0.6)]"
            style={{ animation: 'float-soft 6s ease-in-out infinite' }}
          />
        </motion.div>

        {/* Date, Venue & Flanking Lamps - Pulled Inward & Prominent */}
        <div className="relative z-10 mt-5 flex items-center justify-center max-w-full">
          {/* Left Lamp - Bigger, Glowing, Pulled Inward Safely Inside Screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="relative shrink-0 -mr-5 sm:-mr-3 z-20 pointer-events-none"
          >
            <div
              className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,190,90,0.7), rgba(255,140,60,0.25) 60%, transparent 75%)',
                animation: 'glow-pulse 3.2s ease-in-out infinite',
              }}
            />
            <img
              src="/assets/lamp.png"
              alt=""
              className="relative w-[60px] sm:w-[72px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
              style={{ animation: 'lantern-bob 6s ease-in-out infinite' }}
            />
          </motion.div>

          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col items-center text-center shrink-0 z-10"
          >
            <p className="font-display text-[21px] sm:text-2xl tracking-wide text-[#f5eee2] whitespace-nowrap">
              {weddingData.dateLabel}
            </p>
            <p className="mt-1 text-[12px] sm:text-[13.5px] uppercase tracking-[0.2em] text-[#e2c88f] text-center leading-relaxed whitespace-nowrap">
              {weddingData.timeLabel} · The Royal Orchid
            </p>
            <p className="text-[12px] sm:text-[13.5px] uppercase tracking-[0.2em] text-[#e2c88f] text-center leading-relaxed">
              Palace
            </p>
          </motion.div>

          {/* Right Lamp - Bigger, Glowing, Pulled Inward Safely Inside Screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="relative shrink-0 -ml-5 sm:-ml-3 z-20 pointer-events-none"
          >
            <div
              className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[20px]"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,190,90,0.7), rgba(255,140,60,0.25) 60%, transparent 75%)',
                animation: 'glow-pulse 3.2s ease-in-out infinite',
              }}
            />
            <img
              src="/assets/lamp.png"
              alt=""
              className="relative w-[60px] sm:w-[72px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
              style={{ animation: 'lantern-bob 6s ease-in-out infinite 0.5s' }}
            />
          </motion.div>
        </div>

        {/* Floating Scroll Indicator directly below */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="relative z-10 mt-3 flex flex-col items-center gap-1.5"
          style={{ animation: 'float-soft 3s ease-in-out infinite' }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#e2c88f]/80">
            Scroll
          </span>
          <svg width="18" height="26" viewBox="0 0 18 26" fill="none">
            <rect x="1" y="1" width="16" height="24" rx="8" stroke="#e2c88f" strokeOpacity="0.6" />
            <motion.circle
              cx="9"
              cy="8"
              r="2.5"
              fill="#eeb2c0"
              animate={{ cy: [8, 16, 8], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

