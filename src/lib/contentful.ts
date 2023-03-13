import contentful from "contentful";
import type { HomePageDTO } from "./dto";

const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_URL
    : import.meta.env.CONTENTFUL_DELIVERY_URL,
});

export const fetchHomeContent = async (locale: string) => {
  const homePage = await contentfulClient.getEntry<HomePageDTO>("43OzLgpyQmw3yi3ULo5yTR", {
    locale,
  });
}
