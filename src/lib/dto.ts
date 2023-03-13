import type { Entry, Asset, RichTextContent } from "contentful";
import type { ContactInfo, Skill } from "./model";

export type HeroBannerDTO = {
    title: RichTextContent;
    subtitle: RichTextContent;
};

export type AboutDTO = {
    title: string;
    content: RichTextContent;
}

export type HardSkillsDTO = {
    title: RichTextContent;
    subtitle: RichTextContent;
    fundamentals: Entry<Skill[]>;
    css: Entry<Skill[]>;
    ui: Entry<Skill[]>;
    metas: Entry<Skill[]>;
    tools: Entry<Skill[]>;
}

export type SoftSkillsDTO = {
    title: RichTextContent;
    subtitle: RichTextContent;
    skills: Entry<Skill[]>
}

export type ContactDTO = {
    title: RichTextContent;
    subtitle: RichTextContent;
    contacts: Entry<ContactInfo>[]
}

export type HomePageDTO = {
    heroBanner: Entry<HeroBannerDTO>;
    about: Entry<AboutDTO>;
    hardSkills: Entry<HardSkillsDTO>;
    softSkills: Entry<SoftSkillsDTO>;
    companies: Asset[];
    portfolioSubtitle: string;
    portfolioCardCTA: string;
    repoSubtitle: RichTextContent;
    repoCTA: string;
    repoLink: string;
    contact: Entry<ContactDTO>;
    footer: string;
}