// TODO: use Zod :)

export type Image = {
  url: string;
  fileName: string;
};

export type ContactInfo = {
  text: string;
  icon: string;
  link: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export type HeroBanner = {
  title: string;
  subtitle: string;
};

export type About = {
  title: string;
  content: string;
  image: Image;
};

export type HardSkills = {
  title: string;
  subtitle: string;
  fundamentals: Skill[];
  css: Skill[];
  ui: Skill[];
  metas: Skill[];
  tools: Skill[];
};

export type SoftSkills = {
  title: string;
  skills: Skill[];
};

export type Project = {
  preview: Image;
  title: string;
  description: string;
  stackDescription: string;
  stack: string[];
  date: string;
  link: string;
};

export type Portfolio = {
  subtitle: string;
  companies: Image[];
  cardCTA: string;
  projects: Project[];
  repo: {
    subtitle: string;
    cta: string;
    link: string;
  };
};

export type Contact = {
  title: string;
  subtitle: string;
  contacts: ContactInfo[];
};

export type HomePage = {
  menu: {
    text: string;
    link: string;
  }[];
  heroBanner: HeroBanner;
  about: About;
  hardSkills: HardSkills;
  softSkills: SoftSkills;
  portfolio: Portfolio;
  contact: Contact;
  footer: string;
};
