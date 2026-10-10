import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

interface SectionHeaderProps {
  kicker: string;
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ kicker, title, className = '' }) => {
  return (
    <Reveal className={`mb-10 flex flex-col items-center gap-3 text-center ${className}`}>
      <span className="text-[11px] uppercase tracking-[0.4em] text-[#e2c88f]">
        {kicker}
      </span>
      <h2 className="font-script text-gold text-5xl sm:text-6xl">
        {title}
      </h2>
      <div className="hairline-gold w-40" />
    </Reveal>
  );
};
