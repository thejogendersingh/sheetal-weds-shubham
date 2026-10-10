import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Clock, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { FairyLights } from '../components/FairyLights';
import { Reveal, SectionHeader } from '../components/Reveal';

export const Events: React.FC = () => {
  const event = weddingData.events[0];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <FairyLights count={12} className="opacity-50" />
      <SectionHeader kicker="The Main Ceremony" title="The Wedding" />

      <Reveal className="relative mx-auto max-w-md">
        {/* Arch Halo Glow */}
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[105%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
          style={{
            background: 'radial-gradient(circle, rgba(238,178,192,0.2), rgba(99,102,241,0.12) 55%, transparent 75%)',
            animation: 'arch-glow 5s ease-in-out infinite',
          }}
        />

        {/* Arched Wedding Card */}
        <div className="relative overflow-hidden rounded-t-[11rem] rounded-b-[2.5rem] border border-[#e2c88f]/40 bg-white/[0.05] px-6 pb-10 pt-14 text-center backdrop-blur-md">
          {/* Inner Arched Inset Border */}
          <div className="pointer-events-none absolute inset-2.5 rounded-t-[10rem] rounded-b-[2rem] border border-[#e2c88f]/20" />

          {/* Heart icon with pulse scale */}
          <motion.div
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#eeb2c0]/50 bg-[#17143c] shadow-[0_0_28px_rgba(238,178,192,0.4)]"
          >
            <Heart size={26} className="fill-[#eeb2c0] text-[#eeb2c0]" />
          </motion.div>

          <p className="mt-6 text-[12px] uppercase tracking-[0.4em] text-[#eeb2c0]">
            {event.dayLabel}
          </p>

          <p className="font-display text-gold mt-1 text-8xl font-semibold leading-none">
            {event.dayNum}
          </p>

          <p className="font-display mt-2 text-xl tracking-[0.2em] text-[#f5eee2]">
            {event.monthLabel}
          </p>

          <div className="hairline-blush mx-auto mt-6 w-28" />

          <div className="mt-6 flex flex-col items-center gap-3">
            <p className="flex items-center gap-2.5 font-display text-2xl text-[#f6e2ae]">
              <Clock size={20} className="text-[#eeb2c0]" />
              {event.time}
            </p>
            <p className="flex items-center gap-2 text-[14px] tracking-wide text-[#f5eee2]/80">
              <MapPin size={15} className="text-[#eeb2c0]" />
              {event.venue}
            </p>
            <p className="mt-1 max-w-xs font-display text-base italic leading-relaxed text-[#f5eee2]/70">
              {event.note}
            </p>
          </div>
        </div>

        {/* The Ceremony Flow Timeline */}
        <div className="relative mx-auto mt-10 max-w-xs">
          <p className="mb-6 text-center text-[11px] uppercase tracking-[0.4em] text-[#e2c88f]">
            The Ceremony Flow
          </p>

          <div className="relative">
            {/* Connecting Vertical Timeline Line */}
            <div className="absolute bottom-3 left-[5px] top-3 w-px bg-gradient-to-b from-[#e2c88f]/50 via-[#eeb2c0]/40 to-transparent" />

            {/* Program Items */}
            <div className="flex flex-col gap-6">
              {weddingData.program.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex items-baseline justify-between gap-4 pl-7"
                >
                  {/* Glowing Pink Bullet Dot */}
                  <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full bg-[#eeb2c0] shadow-[0_0_10px_2px_rgba(238,178,192,0.5)]" />

                  <span className="font-display text-lg text-[#f5eee2]">
                    {item.name}
                  </span>

                  <span className="shrink-0 text-[12px] uppercase tracking-[0.15em] text-[#e2c88f]">
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
