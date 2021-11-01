export type LinksType = {
  instagram?: string;
  twitter?: string;
  github?: string;
  site?: string;
  twitch?: string;
};

export type PersonType = {
  name: string;
  avatar_url: string;
  description?: string;
  links?: LinksType;
};

export type EventsType = {
  title: string;
  date: string;
  time: string;
  speakers: PersonType[];
};
