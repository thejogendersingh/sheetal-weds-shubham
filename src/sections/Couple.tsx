import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { Aurora } from '../components/Aurora';
import { Reveal, SectionHeader } from '../components/Reveal';
import { Tilt } from '../components/Tilt';

interface CoupleCardProps {
  name: string;
  parents: string;
  delay: number;
}

const CoupleCard: React.FC<CoupleCardProps> = ({ name, parents, delay }) => {
  return (
    <Reveal delay={delay} className="relative flex-1">
      <Tilt max={8} className="h-full">
        <div className="relative h-full overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-[#e2c88f]/35 bg-white/[0.05] px-5 pb-7 pt-12 text-center backdrop-blur-md">
          <div className="pointer-events-none absolute inset-2 rounded-t-[9rem] rounded-b-2xl border border-[#e2c88f]/20" />
          <motion.span
            initial={{ opacity: 0, scale: 0.4, rotate: -14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-script inline-block text-5xl leading-none text-[#eeb2c0]"
          >
            {name.split(' ')[0][0]}
          </motion.span>
          <h3 className="font-script text-gold mt-3 text-3xl leading-tight">
            {name}
          </h3>
          <div className="hairline-blush mx-auto mt-3 w-16" />
          <p className="mt-3 text-[12px] leading-relaxed tracking-wide text-[#f5eee2]/70">
            {parents}
          </p>
        </div>
      </Tilt>
    </Reveal>
  );
};

export const Couple: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <Aurora className="opacity-60" />
      <SectionHeader kicker="The Couple" title="Two Souls, One Journey" />

      <div className="relative mx-auto flex max-w-md flex-col items-center gap-8">
        <div className="flex w-full items-stretch gap-4">
          <CoupleCard
            name={weddingData.brideFull}
            parents={weddingData.brideParents}
            delay={0.1}
          />
          <CoupleCard
            name={weddingData.groomFull}
            parents={weddingData.groomParents}
            delay={0.2}
          />
        </div>

        <Reveal delay={0.3} className="flex flex-col items-center gap-2">
          <span className="font-display text-lg tracking-[0.35em] text-[#e2c88f]">
            {weddingData.monogram}
          </span>
          <p className="font-display text-base italic text-[#f5eee2]/70">
            Two families, one celebration
          </p>
        </Reveal>
      </div>
    </section>
  );
};
