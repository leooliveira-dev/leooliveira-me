import type { Entry, Asset } from "contentful";
import type { Document } from "@contentful/rich-text-types/dist/types";
import type { ContactInfo, Project, Skill } from "../model";

export type HeroBannerDTO = {
  title: Document;
  subtitle: Document;
};

export type AboutDTO = {
  title: string;
  content: Document;
  image: Asset;
};

export type HardSkillsDTO = {
  title: Document;
  subtitle: Document;
  fundamentals: Entry<Skill>[];
  css: Entry<Skill>[];
  ui: Entry<Skill>[];
  metas: Entry<Skill>[];
  tools: Entry<Skill>[];
};

export type SoftSkillsDTO = {
  title: Document;
  subtitle: Document;
  skills: Entry<Skill>[];
};

export type ProjectDTO = {
  preview: Asset,
  title: string,
  description: Document;
  stackDescription: Document;
  stack: string[];
  date: string;
  link: string;
}

export type ContactDTO = {
  title: Document;
  subtitle: Document;
  contacts: Entry<ContactInfo>[];
};

export type HomePageDTO = {
  heroBanner: Entry<HeroBannerDTO>;
  about: Entry<AboutDTO>;
  hardSkills: Entry<HardSkillsDTO>;
  softSkills: Entry<SoftSkillsDTO>;
  companies: Asset[];
  projects: Entry<ProjectDTO>[];
  portfolioSubtitle: string;
  portfolioCardCTA: string;
  repoSubtitle: Document;
  repoCTA: string;
  repoLink: string;
  contact: Entry<ContactDTO>;
  footer: string;
};
