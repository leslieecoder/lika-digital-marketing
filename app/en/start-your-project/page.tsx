import type { Metadata } from "next";
import { IntakePageShell } from "@/components/IntakePageShell";
import { getClientConfig } from "@/config/client";
import { getLocaleLabel, getLocalizedHomePath, getLocalizedIntakePath, supportedLocales } from "@/lib/i18n";

const config = getClientConfig("en");

export const metadata: Metadata = {
  title: config.intakePage.meta.title,
  description: config.intakePage.meta.description,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/en/start-your-project",
    languages: {
      en: "/en/start-your-project",
      es: "/es/empezar-proyecto",
    },
  },
};

export default function EnglishStartYourProjectPage() {
  return (
    <IntakePageShell
      config={config}
      homeHref={getLocalizedHomePath("en")}
      languageOptions={supportedLocales.map((locale) => ({
        locale,
        label: getLocaleLabel(locale),
        href: getLocalizedIntakePath(locale),
        active: locale === "en",
      }))}
    />
  );
}