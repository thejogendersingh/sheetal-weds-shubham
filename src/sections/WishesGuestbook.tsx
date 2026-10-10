import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, Heart, CheckCircle2, User, MessageSquare } from 'lucide-react';
import { GuestBlessing } from '../types';
import { Reveal, SectionHeader } from '../components/Reveal';

const initialWishes: GuestBlessing[] = [
  {
    id: '1',
    name: 'Raj & Priya Sharma',
    relation: "Family Friends",
    message: 'Wishing Sheetal and Shubham a lifetime of boundless love, laughter, and divine bliss! Looking forward to Udaipur!',
    attending: 'yes',
    guestCount: 2,
    timestamp: 'Just now'
  },
  {
    id: '2',
    name: 'Ananya Mehra',
    relation: "Bride's Best Friend",
    message: 'Can’t wait to dance our hearts out at Sangeet! You both look like royalty together.',
    attending: 'yes',
    guestCount: 1,
    timestamp: '2 hours ago'
  },
  {
    id: '3',
    name: 'Vikram & Sunita Kapoor',
    relation: "Relatives",
    message: 'May Lord Ganesha shower your sacred union with eternal prosperity and peace. Heartiest congratulations!',
    attending: 'yes',
    guestCount: 4,
    timestamp: 'Yesterday'
  }
];

export const WishesGuestbook: React.FC = () => {
  const [wishes, setWishes] = useState<GuestBlessing[]>(() => {
    try {
      const saved = localStorage.getItem('wedding_wishes');
      return saved ? JSON.parse(saved) : initialWishes;
    } catch {
      return initialWishes;
    }
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('');
  const [message, setMessage] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Trigger golden celebratory confetti burst
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f6e2ae', '#e2c88f', '#eeb2c0', '#ffffff'],
    });

    const newWish: GuestBlessing = {
      id: Date.now().toString(),
      name: name.trim(),
      relation: relation.trim() || 'Well Wisher',
      message: message.trim(),
      attending,
      guestCount: attending === 'yes' ? guestCount : 0,
      timestamp: 'Just now',
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem('wedding_wishes', JSON.stringify(updated));
    } catch {}

    setSubmitted(true);
    setName('');
    setRelation('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      <SectionHeader kicker="Blessings & RSVP" title="Send Wishes to the Couple" />

      <div className="mx-auto flex max-w-4xl flex-col md:flex-row gap-10">
        {/* RSVP & Wish Form */}
        <Reveal className="flex-1 rounded-3xl border border-[#e2c88f]/30 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <h3 className="font-display text-2xl text-[#f6e2ae] mb-2 flex items-center gap-2">
            <Heart className="h-5 w-5 text-[#eeb2c0] fill-[#eeb2c0]" />
            Your RSVP &amp; Blessings
          </h3>
          <p className="text-xs text-[#f5eee2]/70 mb-6">
            Please let Sheetal &amp; Shubham know if you can join their sacred celebration.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#e2c88f] mb-1 font-medium">
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="e.g. Smt. & Shri Sharma"
                className="w-full rounded-xl border border-white/10 bg-[#17143c] px-4 py-2.5 text-sm text-[#f5eee2] placeholder:text-white/30 focus:border-[#e2c88f] focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#e2c88f] mb-1 font-medium">
                  Relation / Connection
                </label>
                <input
                  type="text"
                  value={relation}
                  onChange={e => setRelation(e.target.value)}
                  placeholder="e.g. Groom's Friend"
                  className="w-full rounded-xl border border-white/10 bg-[#17143c] px-4 py-2.5 text-sm text-[#f5eee2] placeholder:text-white/30 focus:border-[#e2c88f] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#e2c88f] mb-1 font-medium">
                  Will You Attend?
                </label>
                <select
                  value={attending}
                  onChange={e => setAttending(e.target.value as 'yes' | 'no')}
                  className="w-full rounded-xl border border-white/10 bg-[#17143c] px-4 py-2.5 text-sm text-[#f5eee2] focus:border-[#e2c88f] focus:outline-none"
                >
                  <option value="yes">Joyfully Yes</option>
                  <option value="no">Regretfully No</option>
                </select>
              </div>
            </div>

            {attending === 'yes' && (
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#e2c88f] mb-1 font-medium">
                  Number of Guests Attending: {guestCount}
                </label>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={guestCount}
                  onChange={e => setGuestCount(Number(e.target.value))}
                  className="w-full accent-[#e2c88f]"
                />
              </div>
            )}

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#e2c88f] mb-1 font-medium">
                Your Warm Blessing / Message
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Share your prayers, love and warm wishes for Sheetal & Shubham..."
                className="w-full rounded-xl border border-white/10 bg-[#17143c] px-4 py-2.5 text-sm text-[#f5eee2] placeholder:text-white/30 focus:border-[#e2c88f] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-full border border-[#e2c88f]/60 bg-gradient-to-r from-[#e2c88f] to-[#eeb2c0] py-3 text-xs uppercase tracking-[0.25em] text-[#0c0a24] font-semibold shadow-lg hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Send className="h-4 w-4" />
              Send Blessings &amp; Confirm RSVP
            </button>

            {submitted && (
              <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                Thank you! Your heartfelt blessings and RSVP have been recorded!
              </div>
            )}
          </form>
        </Reveal>

        {/* Live Guestbook Wishes Stream */}
        <Reveal delay={0.1} className="flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-[#e2c88f]/20 pb-3">
            <h4 className="font-display text-2xl text-[#f6e2ae] flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#e2c88f]" />
              Guest Blessings ({wishes.length})
            </h4>
          </div>

          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-2">
            {wishes.map(item => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-[#e2c88f]/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#17143c] border border-[#e2c88f]/30 text-xs font-semibold text-[#f6e2ae]">
                      {item.name[0]}
                    </div>
                    <div>
                      <span className="font-display text-base text-[#f5eee2] font-semibold block leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-[#eeb2c0]">
                        {item.relation} {item.attending === 'yes' ? '• Attending' : ''}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#f5eee2]/40">
                    {item.timestamp}
                  </span>
                </div>
                <p className="text-xs text-[#f5eee2]/80 italic pl-9 leading-relaxed">
                  "{item.message}"
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
