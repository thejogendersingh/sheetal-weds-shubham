import React, { useState, useEffect } from 'react';
import { VolumeX } from 'lucide-react';
import { weddingAudio } from '../utils/audioSynth';

interface MusicPlayerProps {
  autoStart?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoStart = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (autoStart && !isPlaying) {
      weddingAudio.play();
      setIsPlaying(true);
    }
  }, [autoStart]);

  const toggleMusic = () => {
    const nextState = weddingAudio.toggle();
    setIsPlaying(nextState);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Mute Royal Music" : "Play Royal Music"}
        className="group relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-[#e2c88f]/40 bg-[#17143c]/90 text-[#f6e2ae] shadow-[0_4px_24px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#e2c88f] active:scale-95"
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-4">
            <span
              className="w-[2.5px] bg-[#f6e2ae] rounded-full animate-bounce h-2.5"
              style={{ animationDuration: '0.8s', animationDelay: '0ms' }}
            />
            <span
              className="w-[2.5px] bg-[#eeb2c0] rounded-full animate-bounce h-4"
              style={{ animationDuration: '0.7s', animationDelay: '150ms' }}
            />
            <span
              className="w-[2.5px] bg-[#f6e2ae] rounded-full animate-bounce h-3"
              style={{ animationDuration: '0.9s', animationDelay: '300ms' }}
            />
          </div>
        ) : (
          <VolumeX className="h-4 w-4 text-[#f5eee2]/60 group-hover:text-[#f6e2ae]" />
        )}
      </button>
    </div>
  );
};
