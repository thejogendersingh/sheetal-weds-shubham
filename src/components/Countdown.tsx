import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownProps {
  targetISO: string;
}

function useCountdown(targetISO: string) {
  const targetTime = new Date(targetISO).getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, targetTime - now);
  return {
    days: Math.floor(diff / 864e5),
    hours: Math.floor(diff / 36e5) % 24,
    minutes: Math.floor(diff / 6e4) % 60,
    seconds: Math.floor(diff / 1e3) % 60,
  };
}

interface UnitBoxProps {
  value: number;
  label: string;
}

const UnitBox: React.FC<UnitBoxProps> = ({ value, label }) => {
  const valStr = String(value).padStart(2, '0');

  return (
    <div className="flex w-[72px] flex-col items-center gap-2 rounded-2xl border border-[#e2c88f]/30 bg-white/[0.05] px-2 py-4 backdrop-blur-md sm:w-20">
      <div className="relative h-10 overflow-visible flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={valStr}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="font-display text-gold block text-4xl font-semibold leading-none"
          >
            {valStr}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[10px] uppercase tracking-[0.25em] text-[#eeb2c0]/80">
        {label}
      </span>
    </div>
  );
};

export const Countdown: React.FC<CountdownProps> = ({ targetISO }) => {
  const { days, hours, minutes, seconds } = useCountdown(targetISO);

  return (
    <div className="flex items-stretch justify-center gap-3 sm:gap-4">
      <UnitBox value={days} label="Days" />
      <UnitBox value={hours} label="Hours" />
      <UnitBox value={minutes} label="Mins" />
      <UnitBox value={seconds} label="Secs" />
    </div>
  );
};
