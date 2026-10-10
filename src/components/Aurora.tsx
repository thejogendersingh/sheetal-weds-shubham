import React from 'react';

interface AuroraProps {
  className?: string;
}

export const Aurora: React.FC<AuroraProps> = ({ className = '' }) => {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Indigo / Midnight violet nebula */}
      <div
        className="absolute -left-[20%] -top-[10%] h-[60vmax] w-[60vmax] rounded-full blur-[90px] animate-drift-a"
        style={{
          background: 'radial-gradient(circle at center, rgba(99,102,241,0.30), transparent 65%)',
        }}
      />
      {/* Rose Blush nebula */}
      <div
        className="absolute -right-[25%] top-[20%] h-[55vmax] w-[55vmax] rounded-full blur-[100px] animate-drift-b"
        style={{
          background: 'radial-gradient(circle at center, rgba(224,139,163,0.28), transparent 65%)',
        }}
      />
      {/* Soft celestial cyan-gold nebula */}
      <div
        className="absolute -bottom-[20%] left-[10%] h-[50vmax] w-[50vmax] rounded-full blur-[90px] animate-drift-c"
        style={{
          background: 'radial-gradient(circle at center, rgba(226,200,143,0.22), transparent 65%)',
        }}
      />
    </div>
  );
};
