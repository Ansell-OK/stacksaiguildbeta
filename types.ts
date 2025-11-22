export interface NavItem {
  label: string;
  href: string;
}

export interface TrackItem {
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
}

export interface Steward {
  name: string;
  role: string;
  background?: string;
}

export interface Founder {
  name: string;
  role: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  TRACKS = 'tracks',
  CURRICULUM = 'curriculum',
  TEAM = 'team',
  JOIN = 'join',
}