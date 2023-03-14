import contentful, { Entry } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type {
  AboutDTO,
  ContactDTO,
  HardSkillsDTO,
  HeroBannerDTO,
  HomePageDTO,
  ProjectDTO,
  SoftSkillsDTO,
} from "./dto";
import type { HomePage, Project } from "../model";

const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_URL
    : import.meta.env.CONTENTFUL_DELIVERY_URL,
});

const fetchSingleEntry = async <T>(
  id: string,
  locale: string,
  include?: number
) => {
  return await contentfulClient.getEntry<T>(id, { locale, include });
};

const fetchHeroBanner = async (id: string, locale: string) => {
  const dto = await fetchSingleEntry<HeroBannerDTO>(id, locale);

  return {
    title: documentToHtmlString(dto.fields.title),
    subtitle: documentToHtmlString(dto.fields.subtitle),
  };
};

const fetchAbout = async (id: string, locale: string) => {
  const dto = await fetchSingleEntry<AboutDTO>(id, locale);

  return {
    title: dto.fields.title,
    content: documentToHtmlString(dto.fields.content),
    image: dto.fields.image.fields.file,
  };
};

const fetchHardSkills = async (id: string, locale: string) => {
  const dto = await fetchSingleEntry<HardSkillsDTO>(id, locale, 2);

  return {
    title: documentToHtmlString(dto.fields.title),
    subtitle: documentToHtmlString(dto.fields.subtitle),
    fundamentals: dto.fields.fundamentals.map((s) => s.fields),
    css: dto.fields.css.map((s) => s.fields),
    ui: dto.fields.ui.map((s) => s.fields),
    metas: dto.fields.metas.map((s) => s.fields),
    tools: dto.fields.tools.map((s) => s.fields),
  };
};

const fetchSoftSkills = async (id: string, locale: string) => {
  const dto = await fetchSingleEntry<SoftSkillsDTO>(id, locale, 2);

  return {
    title: documentToHtmlString(dto.fields.title),
    subtitle: documentToHtmlString(dto.fields.subtitle),
    skills: dto.fields.skills.map((s) => s.fields),
  };
};

const fetchProjects = (dto: Entry<ProjectDTO>[]): Project[] => {

  return dto.map((e) => {
    const p = e.fields;
    return {
      preview: p.preview.fields.file,
      title: p.title,
      description: documentToHtmlString(p.description),
      stackDescription: documentToHtmlString(p.stackDescription),
      stack: p.stack,
      date: p.date,
      link: p.link,
    }
  });
};

const fetchContact = async (id: string, locale: string) => {
  const dto = await fetchSingleEntry<ContactDTO>(id, locale, 2);

  return {
    title: documentToHtmlString(dto.fields.title),
    subtitle: documentToHtmlString(dto.fields.subtitle),
    contacts: dto.fields.contacts.map((c) => c.fields),
  };
};

export const fetchHomeContent = async (locale: string): Promise<HomePage> => {
  const homePage = await fetchSingleEntry<HomePageDTO>(
    "43OzLgpyQmw3yi3ULo5yTR",
    locale
  );

  const heroBanner = await fetchHeroBanner(
    homePage.fields.heroBanner.sys.id,
    locale
  );
  const about = await fetchAbout(homePage.fields.about.sys.id, locale);
  const hardSkills = await fetchHardSkills(
    homePage.fields.hardSkills.sys.id,
    locale
  );
  const softSkills = await fetchSoftSkills(
    homePage.fields.softSkills.sys.id,
    locale
  );
  const contact = await fetchContact(homePage.fields.contact.sys.id, locale);

  return {
    heroBanner,
    about,
    hardSkills,
    softSkills,
    portfolio: {
      subtitle: homePage.fields.portfolioSubtitle,
      companies: homePage.fields.companies.map((a) => a.fields.file),
      projects: fetchProjects(homePage.fields.projects),
      cardCTA: homePage.fields.portfolioCardCTA,
      repo: {
        subtitle: documentToHtmlString(homePage.fields.repoSubtitle),
        cta: homePage.fields.repoCTA,
        link: homePage.fields.repoLink,
      },
    },
    contact,
    footer: homePage.fields.footer,
  };
};
