export interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  locationUrl: string;
  description?: string;
}

export interface InvitationData {
  groom: string;
  bride: string;
  weddingDate: string;
  heroImage: string;
  welcome: {
    title: string;
    content: string;
    image?: string;
  };
  events: EventDetail[];
  gallery: string[];
  rsvpUrl?: string;
}
