import React, { useMemo } from 'react';

interface FairyLightsProps {
  count?: number;
  className?: string;
}

export const FairyLights: React.FC<FairyLightsProps> = ({ count = 26, className = '' }) => {
  const lights = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 4,
        duration: 1.8 + Math.random() * 2.8,
        delay: -Math.random() * 4,
        warm: Math.random() > 0.35,
      })),
    [count]
  );

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {lights.map(item => (
        <span
          key={item.id}
          className="absolute rounded-full"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: item.size,
            height: item.size,
            background: item.warm ? '#ffe9b8' : '#fdeef2',
            boxShadow: item.warm
              ? '0 0 10px 2px rgba(255,233,184,0.85)'
              : '0 0 10px 2px rgba(253,238,242,0.7)',
            animation: `twinkle ${item.duration}s ease-in-out ${item.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};
