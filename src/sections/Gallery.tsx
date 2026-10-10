import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GalleryMedia } from '../types';
import { Reveal, SectionHeader } from '../components/Reveal';
import { PexelsModal } from '../components/PexelsModal';

export const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [photoList, setPhotoList] = useState<GalleryMedia[]>(() =>
    weddingData.gallery.filter(item => item.type === 'image')
  );
  const [activePhoto, setActivePhoto] = useState<GalleryMedia | null>(null);
  const [isPexelsOpen, setIsPexelsOpen] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleAddMedia = (newMedia: GalleryMedia) => {
    if (newMedia.type === 'image') {
      setPhotoList(prev => [newMedia, ...prev]);
    }
  };

  const handlePrev = () => {
    if (!activePhoto) return;
    const currentIndex = photoList.findIndex(p => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + photoList.length) % photoList.length;
    setActivePhoto(photoList[prevIndex]);
  };

  const handleNext = () => {
    if (!activePhoto) return;
    const currentIndex = photoList.findIndex(p => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % photoList.length;
    setActivePhoto(photoList[nextIndex]);
  };

  return (
    <section className="relative px-4 sm:px-6 py-20 overflow-hidden">
      <SectionHeader kicker="Memories & Moments" title="Photo Gallery" />

      <Reveal className="mx-auto max-w-4xl relative">
        {/* Navigation Arrows & Pexels Button */}
        <div className="flex items-center justify-between px-2 mb-4">
          <button
            onClick={() => setIsPexelsOpen(true)}
            className="flex items-center gap-1.5 rounded-full border border-[#e2c88f]/40 bg-white/[0.04] px-3.5 py-1 text-[11px] uppercase tracking-wider text-[#f6e2ae] hover:bg-[#e2c88f]/15 transition-all active:scale-95"
          >
            <Sparkles className="h-3 w-3 text-[#eeb2c0]" />
            Add Photos (Pexels)
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              title="Scroll Left"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e2c88f]/40 bg-[#17143c]/80 text-[#f6e2ae] hover:bg-[#e2c88f]/20 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              title="Scroll Right"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e2c88f]/40 bg-[#17143c]/80 text-[#f6e2ae] hover:bg-[#e2c88f]/20 hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Smooth Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-3.5 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {photoList.map(item => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative w-36 sm:w-44 shrink-0 aspect-[3/4] cursor-pointer snap-start overflow-hidden rounded-2xl border border-[#e2c88f]/30 bg-white/[0.04] shadow-md transition-all duration-300 hover:scale-[1.03] hover:border-[#e2c88f]/70 hover:shadow-[0_8px_25px_rgba(226,200,143,0.3)]"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="font-display text-sm text-[#f6e2ae] font-semibold leading-tight line-clamp-1">
                  {item.title}
                </p>
                {item.caption && (
                  <p className="text-[10px] text-[#f5eee2]/70 mt-0.5 line-clamp-1">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg">
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 z-10 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative max-w-3xl max-h-[85vh] flex flex-col items-center">
            <img
              src={activePhoto.url}
              alt={activePhoto.title}
              className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-2xl border border-[#e2c88f]/30"
            />
            <div className="mt-3 text-center">
              <h4 className="font-display text-xl text-[#f6e2ae]">
                {activePhoto.title}
              </h4>
              {activePhoto.caption && (
                <p className="text-xs text-[#f5eee2]/70 mt-0.5">
                  {activePhoto.caption}
                </p>
              )}
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
