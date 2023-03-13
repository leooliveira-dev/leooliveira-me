// TODO: use Zod :)

export type ContactInfo = {
  text: string;
  icon: string;
  link: string;
};

export type Skill = {
    text: string;
    icon: string;
}

export type HeroBanner = {
    title: string;
    subtitle: string;
}

export type About = {
    title: string;
    content: string;
    image: string;
}

export type HardSkills = {
    title: string;
    subtitle: string;
    fundamentals: Skill[];
    css: Skill[];
    ui: Skill[];
    metas: Skill[];
    tools: Skill[];
}

export type SoftSkills = {
    title: string;
    skills: Skill[];
}

export type Project = {
    preview: string;
    title: string;
    description: string;
    stackDescription: string;
    stack: string[];
    date: string;
    link: string;
}

export type Portfolio = {
    subtitle: string;
    companies: string[];
    cardCTA: string;
    projects: Project[];
    repo: {
        subtitle: string;
        cta: string;
        link: string;
    }
}

export type Contact = {
    title: string;
    subtitle: string;
    contacts: ContactInfo[];
}

export type HomePage = {
    heroBanner: HeroBanner;
    about: About;
    hardSkills: HardSkills;
    softSkills: SoftSkills;
    portfolio: Portfolio;
    contact: Contact;
    footer: string;
}
