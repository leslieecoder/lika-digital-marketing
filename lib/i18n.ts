export const supportedLocales = ["en", "es"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export function isSupportedLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export function getLocalizedHomePath(locale: Locale) {
  return `/${locale}`;
}

export function getLocalizedIntakePath(locale: Locale) {
  return locale === "es" ? "/es/empezar-proyecto" : "/en/start-your-project";
}

export function getLocalizedPortfolioPath(locale: Locale, slug: string) {
  return `/${locale}/portfolio/${slug}`;
}

export function getLocaleLabel(locale: Locale) {
  return locale === "en" ? "EN" : "ES";
}