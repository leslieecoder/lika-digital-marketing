import type { Metadata } from "next";
import { IntakePageShell } from "@/components/IntakePageShell";
import { getClientConfig } from "@/config/client";
import { getLocaleLabel, getLocalizedHomePath, getLocalizedIntakePath, supportedLocales } from "@/lib/i18n";

const config = getClientConfig("es");

export const metadata: Metadata = {
  title: config.intakePage.meta.title,
  description: config.intakePage.meta.description,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/es/empezar-proyecto",
    languages: {
      en: "/en/start-your-project",
      es: "/es/empezar-proyecto",
    },
  },
};

export default function SpanishStartYourProjectPage() {
  return (
    <IntakePageShell
      config={config}
      homeHref={getLocalizedHomePath("es")}
      languageOptions={supportedLocales.map((locale) => ({
        locale,
        label: getLocaleLabel(locale),
        href: getLocalizedIntakePath(locale),
        active: locale === "es",
      }))}
    />
  );
}