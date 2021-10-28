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
  description: string;
  links?: LinksType;
};

export const organization = [
  {
    name: "Icaro Andrade",
    avatar_url:
      "https://pbs.twimg.com/profile_images/1181982504493953024/t_NFmzaA_400x400.jpg",
    description: "Também conhecido como Famoso Iba, bla bla bla.",
    links: {
      instagram: "https://www.instagram.com/inb4iba/",
      twitter: "https://twitter.com/inb4iba",
      github: "https://github.com/inb4iba",
    },
  },
  {
    name: "Josie Fonseca",
    avatar_url:
      "https://pbs.twimg.com/profile_images/1429866488123609090/BKOpB6T2_400x400.jpg",
    description: "Só uma pessoa cansada.",
    links: {
      instagram: "https://www.instagram.com/josie_fonseca/",
      twitter: "https://twitter.com/josie_fonseca",
      twitch: "https://twitch.tv/vertentegeek"
    },
  },
];
