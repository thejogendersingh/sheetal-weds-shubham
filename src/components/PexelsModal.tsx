import React, { useState } from 'react';
import { X, Search, Sparkles, Key, Image as ImageIcon, Video as VideoIcon, Check, ExternalLink } from 'lucide-react';
import { GalleryMedia } from '../types';

interface PexelsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMedia: (media: GalleryMedia) => void;
}

export const PexelsModal: React.FC<PexelsModalProps> = ({ isOpen, onClose, onAddMedia }) => {
  const [apiKey, setApiKey] = useState<string>(() => localStorage.getItem('pexels_api_key') || '');
  const [searchQuery, setSearchQuery] = useState<string>('indian wedding');
  const [mediaType, setMediaType] = useState<'photos' | 'videos'>('photos');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<any[]>([]);
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());
  const [statusMsg, setStatusMsg] = useState<string>('');

  if (!isOpen) return null;

  const handleSaveApiKey = () => {
    localStorage.setItem('pexels_api_key', apiKey.trim());
    setStatusMsg('Pexels API key saved successfully!');
    setTimeout(() => setStatusMsg(''), 3000);
  };

  const handleSearch = async () => {
    if (!apiKey.trim()) {
      setStatusMsg('Please provide a Pexels API key first. You can get one for free at pexels.com/api');
      return;
    }

    setIsLoading(true);
    setStatusMsg('');
    try {
      const endpoint =
        mediaType === 'photos'
          ? `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=9`
          : `https://api.pexels.com/videos/search?query=${encodeURIComponent(searchQuery)}&per_page=6`;

      const response = await fetch(endpoint, {
        headers: {
          Authorization: apiKey.trim(),
        },
      });

      if (!response.ok) {
        throw new Error(`Pexels API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      if (mediaType === 'photos') {
        setResults(data.photos || []);
      } else {
        setResults(data.videos || []);
      }
    } catch (err: any) {
      console.error(err);
      setStatusMsg(`Search failed: ${err.message}. Try another search term.`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddPhoto = (photo: any) => {
    const item: GalleryMedia = {
      id: `pexels-${photo.id}`,
      type: 'image',
      url: photo.src.large2x || photo.src.large,
      thumbnail: photo.src.medium,
      title: photo.alt || 'Royal Wedding Moment',
      caption: `Captured by ${photo.photographer}`,
    };
    onAddMedia(item);
    setAddedIds(prev => new Set(prev).add(String(photo.id)));
  };

  const handleAddVideo = (vid: any) => {
    const bestFile = vid.video_files?.find((f: any) => f.quality === 'hd') || vid.video_files?.[0];
    const item: GalleryMedia = {
      id: `pexels-${vid.id}`,
      type: 'video',
      url: bestFile?.link || '',
      thumbnail: vid.image,
      title: 'Wedding Cinema Film',
      caption: `Video by ${vid.user?.name || 'Pexels Creator'}`,
    };
    onAddMedia(item);
    setAddedIds(prev => new Set(prev).add(String(vid.id)));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl border border-[#e2c88f]/40 bg-[#0c0a24] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e2c88f]/20 pb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#e2c88f]" />
            <h3 className="font-display text-2xl text-[#f6e2ae]">
              Pexels Free Video &amp; Image API
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-[#f5eee2]/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto py-4 space-y-5 pr-1">
          {/* API Key Box */}
          <div className="rounded-2xl border border-[#e2c88f]/25 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between mb-2">
              <label className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#e2c88f] font-semibold">
                <Key className="h-4 w-4" />
                Pexels API Key
              </label>
              <a
                href="https://www.pexels.com/api/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[11px] text-[#eeb2c0] hover:underline"
              >
                Get Free API Key <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="flex gap-2">
              <input
                type="password"
                placeholder="Paste your Pexels API Key here..."
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
                className="flex-1 rounded-xl border border-white/10 bg-[#17143c] px-3.5 py-2 text-sm text-[#f5eee2] placeholder:text-white/30 focus:border-[#e2c88f] focus:outline-none"
              />
              <button
                onClick={handleSaveApiKey}
                className="rounded-xl border border-[#e2c88f]/40 bg-[#e2c88f]/10 px-4 py-2 text-xs uppercase tracking-wider text-[#f6e2ae] hover:bg-[#e2c88f]/20 transition-colors"
              >
                Save
              </button>
            </div>
          </div>

          {/* Search Box */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex rounded-full border border-[#e2c88f]/25 bg-white/[0.04] p-1">
                <button
                  onClick={() => setMediaType('photos')}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs uppercase tracking-wider transition-colors ${
                    mediaType === 'photos'
                      ? 'bg-[#e2c88f] text-[#0c0a24] font-semibold'
                      : 'text-[#f5eee2]/70 hover:text-white'
                  }`}
                >
                  <ImageIcon className="h-3.5 w-3.5" />
                  Photos
                </button>
                <button
                  onClick={() => setMediaType('videos')}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs uppercase tracking-wider transition-colors ${
                    mediaType === 'videos'
                      ? 'bg-[#e2c88f] text-[#0c0a24] font-semibold'
                      : 'text-[#f5eee2]/70 hover:text-white'
                  }`}
                >
                  <VideoIcon className="h-3.5 w-3.5" />
                  Videos
                </button>
              </div>

              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="e.g. indian wedding, couple, mehendi..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSearch()}
                  className="w-full rounded-full border border-white/10 bg-[#17143c] pl-4 pr-10 py-2 text-sm text-[#f5eee2] placeholder:text-white/30 focus:border-[#e2c88f] focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-[#e2c88f] hover:text-[#f6e2ae]"
                >
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {statusMsg && (
            <div className="rounded-xl bg-white/[0.04] border border-[#e2c88f]/30 p-3 text-xs text-[#f6e2ae]">
              {statusMsg}
            </div>
          )}

          {/* Results Grid */}
          {isLoading ? (
            <div className="py-12 text-center text-sm text-[#e2c88f] animate-pulse">
              Searching high-res media from Pexels...
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {results.map((item: any) => {
                const isAdded = addedIds.has(String(item.id));
                const thumb = mediaType === 'photos' ? item.src.medium : item.image;
                return (
                  <div
                    key={item.id}
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#17143c]"
                  >
                    <img
                      src={thumb}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2 justify-between">
                      <span className="text-[10px] text-white/80 truncate max-w-[70%]">
                        {mediaType === 'photos' ? item.photographer : item.user?.name}
                      </span>
                      <button
                        onClick={() =>
                          mediaType === 'photos' ? handleAddPhoto(item) : handleAddVideo(item)
                        }
                        disabled={isAdded}
                        className={`rounded-full p-1.5 text-xs transition-colors ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#e2c88f] text-[#0c0a24] hover:bg-[#f6e2ae]'
                        }`}
                      >
                        {isAdded ? <Check className="h-3.5 w-3.5" /> : '+ Add'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-[#f5eee2]/60">
              Enter your Pexels key &amp; search query to discover royalty-free photos and videos for Sheetal &amp; Shubham's wedding invitation.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
