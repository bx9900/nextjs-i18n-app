export const locales = ["en", "fr"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

const dictionaries: Record<Locale, () => Promise<Record<string, unknown>>> = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  fr: () => import("@/dictionaries/fr.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
