import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const current = window.scrollY;
      setProgress(Math.min(100, Math.max(0, (current / total) * 100)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-[#e2c88f] via-[#eeb2c0] to-[#f6e2ae] shadow-[0_0_12px_rgba(226,200,143,0.8)] transition-all duration-100 ease-out"
      style={{
        width: `${progress}%`,
      }}
    />
  );
};
