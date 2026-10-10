import React, { useState } from 'react';
import { Play, Pause, Maximize, X, ChevronLeft, ChevronRight, Sparkles, Film, Image as ImageIcon } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GalleryMedia } from '../types';
import { Reveal, SectionHeader } from '../components/Reveal';
import { PexelsModal } from '../components/PexelsModal';

export const GalleryVideo: React.FC = () => {
  const [mediaList, setMediaList] = useState<GalleryMedia[]>(weddingData.gallery);
  const [activeMedia, setActiveMedia] = useState<GalleryMedia | null>(null);
  const [isPexelsOpen, setIsPexelsOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoItem = mediaList.find(m => m.type === 'video') || mediaList[0];
  const photoItems = mediaList.filter(m => m.type === 'image');

  const handleAddMedia = (newMedia: GalleryMedia) => {
    setMediaList(prev => [newMedia, ...prev]);
  };

  const handlePrev = () => {
    if (!activeMedia) return;
    const currentIndex = photoItems.findIndex(m => m.id === activeMedia.id);
    const prevIndex = (currentIndex - 1 + photoItems.length) % photoItems.length;
    setActiveMedia(photoItems[prevIndex]);
  };

  const handleNext = () => {
    if (!activeMedia) return;
    const currentIndex = photoItems.findIndex(m => m.id === activeMedia.id);
    const nextIndex = (currentIndex + 1) % photoItems.length;
    setActiveMedia(photoItems[nextIndex]);
  };

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      <SectionHeader kicker="Memories & Moments" title="Wedding Cinema & Gallery" />

      <div className="mx-auto flex max-w-4xl flex-col gap-12">
        {/* Cinema Video Player */}
        <Reveal className="relative flex flex-col items-center">
          <div className="w-full relative overflow-hidden rounded-3xl border-2 border-[#e2c88f]/40 bg-[#060514] shadow-[0_16px_60px_rgba(0,0,0,0.7)] group">
            <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
              <video
                src={videoItem.url}
                poster={videoItem.thumbnail}
                playsInline
                loop
                controls
                className="w-full h-full object-cover"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              />
            </div>

            {/* Video Footer Caption */}
            <div className="flex items-center justify-between border-t border-[#e2c88f]/20 bg-[#17143c]/80 p-4 px-6 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <Film className="h-5 w-5 text-[#e2c88f]" />
                <div>
                  <h4 className="font-display text-lg text-[#f6e2ae]">
                    {videoItem.title}
                  </h4>
                  <p className="text-xs text-[#f5eee2]/60">
                    {videoItem.caption || 'Sheetal & Shubham — Udaipur Royal Moments'}
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-[#e2c88f]/10 border border-[#e2c88f]/30 px-3 py-1 text-[10px] uppercase tracking-widest text-[#f6e2ae]">
                Cinema Film
              </span>
            </div>
          </div>
        </Reveal>

        {/* Photo Gallery Grid */}
        <Reveal delay={0.1} className="flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-[#e2c88f]/20 pb-4">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-[#eeb2c0]" />
              <h3 className="font-display text-2xl text-[#f6e2ae]">
                Photo Memories
              </h3>
            </div>
            <button
              onClick={() => setIsPexelsOpen(true)}
              className="flex items-center gap-2 rounded-full border border-[#e2c88f]/50 bg-white/[0.04] px-4 py-1.5 text-xs uppercase tracking-wider text-[#f6e2ae] hover:bg-[#e2c88f]/20 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#eeb2c0]" />
              Pexels Free API
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photoItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveMedia(item)}
                className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-[#e2c88f]/25 bg-white/[0.03] shadow-md transition-all duration-300 hover:scale-[1.03] hover:border-[#e2c88f]/60 hover:shadow-[0_10px_30px_rgba(226,200,143,0.3)]"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="font-display text-base text-[#f6e2ae] font-semibold">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-[#f5eee2]/70">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg">
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={activeMedia.url}
              alt={activeMedia.title}
              className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl border border-[#e2c88f]/30"
            />
            <div className="mt-4 text-center">
              <h4 className="font-display text-2xl text-[#f6e2ae]">
                {activeMedia.title}
              </h4>
              <p className="text-sm text-[#f5eee2]/70 mt-1">
                {activeMedia.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Pexels API Modal */}
      <PexelsModal
        isOpen={isPexelsOpen}
        onClose={() => setIsPexelsOpen(false)}
        onAddMedia={handleAddMedia}
      />
    </section>
  );
};
