import { WeddingData } from '../types';

export const weddingData: WeddingData = {
  bride: "Sheetal",
  groom: "Shubham",
  brideFull: "Sheetal Verma",
  groomFull: "Shubham Kapoor",
  brideParents: "Daughter of Smt. Anita & Shri Prakash Verma",
  groomParents: "Son of Smt. Rekha & Shri Anil Kapoor",
  hashtag: "#SheetalWedsShubham",
  monogram: "S · S",
  dateISO: "2027-02-06T19:00:00+05:30",
  dateLabel: "Saturday, 6th February 2027",
  timeLabel: "Muhurat at 7:00 PM",
  venue: {
    name: "The Royal Orchid Palace",
    address: "Lake Pichola Road, Udaipur, Rajasthan 313001",
    city: "Udaipur, Rajasthan",
    mapsQuery: "City Palace Udaipur Rajasthan",
    mapEmbedUrl: "https://www.google.com/maps?q=City+Palace+Udaipur+Rajasthan&output=embed",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=City+Palace+Udaipur+Rajasthan"
  },
  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their families, request the honour of your presence as two souls become one under a sky full of stars."
  },
  events: [
    {
      name: "Wedding Ceremony",
      icon: "heart",
      date: "Saturday, 6th February 2027",
      dayLabel: "Saturday",
      dayNum: "06",
      monthLabel: "February 2027",
      time: "Muhurat at 7:00 PM",
      venue: "The Royal Orchid Palace, Udaipur",
      note: "Baraat, pheras & the sacred vows — the moment two souls become one."
    },
    {
      name: "Sangeet & Cocktail Night",
      icon: "music",
      date: "Friday, 5th February 2027",
      dayLabel: "Friday",
      dayNum: "05",
      monthLabel: "February 2027",
      time: "Evening at 7:30 PM",
      venue: "Courtyard Amphitheater, Udaipur",
      note: "A night filled with music, rhythmic dances, cocktails, and joyful memories under the starry sky."
    },
    {
      name: "Haldi & Mehendi",
      icon: "sparkles",
      date: "Friday, 5th February 2027",
      dayLabel: "Friday",
      dayNum: "05",
      monthLabel: "February 2027",
      time: "Morning at 11:00 AM",
      venue: "Lakeside Marigold Lawn, Udaipur",
      note: "Sunny blooms, fragrant henna, sacred turmeric hues, and auspicious celebrations."
    }
  ],
  program: [
    { name: "Baraat Arrival", time: "6:00 PM", desc: "Grand royal procession with dhol, brass band and celebration" },
    { name: "Jaimala", time: "6:45 PM", desc: "Exchange of divine floral garlands under royal fireworks" },
    { name: "Pheras & Sacred Vows", time: "7:00 PM", desc: "Seven sacred vows around the holy fire amidst Vedic mantras" },
    { name: "Vidaai", time: "10:30 PM", desc: "Emotional farewell and blessings for the new journey together" }
  ],
  gallery: [
    {
      id: "media-1",
      type: "video",
      url: "https://videos.pexels.com/video-files/3195394/3195394-hd_1280_720_25fps.mp4",
      thumbnail: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Royal Stargaze Wedding Teaser",
      caption: "Eternal love under a canopy of stars"
    },
    {
      id: "media-2",
      type: "image",
      url: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Regal Garland Exchange",
      caption: "A moment of timeless promise"
    },
    {
      id: "media-3",
      type: "image",
      url: "https://images.pexels.com/photos/1721943/pexels-photo-1721943.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail: "https://images.pexels.com/photos/1721943/pexels-photo-1721943.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Golden Henna Celebrations",
      caption: "Deep crimson hues celebrating everlasting bonds"
    },
    {
      id: "media-4",
      type: "image",
      url: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail: "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Udaipur Royal Palace Lights",
      caption: "Lake Pichola illuminated for Sheetal & Shubham"
    },
    {
      id: "media-5",
      type: "image",
      url: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Seven Sacred Vows",
      caption: "Walking hand in hand through eternity"
    },
    {
      id: "media-6",
      type: "image",
      url: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200",
      thumbnail: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Twinkling Stargaze Evening",
      caption: "Celebrations that glow forever in memory"
    }
  ]
};
