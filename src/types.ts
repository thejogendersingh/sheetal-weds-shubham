export interface EventItem {
  name: string;
  icon: string;
  date: string;
  dayLabel: string;
  dayNum: string;
  monthLabel: string;
  time: string;
  venue: string;
  note: string;
}

export interface ProgramItem {
  name: string;
  time: string;
  desc?: string;
}

export interface GalleryMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  caption?: string;
}

export interface GuestBlessing {
  id: string;
  name: string;
  relation: string;
  message: string;
  attending: 'yes' | 'no';
  guestCount: number;
  timestamp: string;
}

export interface WeddingData {
  bride: string;
  groom: string;
  brideFull: string;
  groomFull: string;
  brideParents: string;
  groomParents: string;
  hashtag: string;
  monogram: string;
  dateISO: string;
  dateLabel: string;
  timeLabel: string;
  venue: {
    name: string;
    address: string;
    city: string;
    mapsQuery: string;
    mapEmbedUrl: string;
    directionsUrl: string;
  };
  verse: {
    hindi: string;
    text: string;
  };
  events: EventItem[];
  program: ProgramItem[];
  gallery: GalleryMedia[];
}
