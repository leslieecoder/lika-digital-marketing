import Link from "next/link";
import Script from "next/script";
import { LanguageSwitcher, type LanguageOption } from "@/components/LanguageSwitcher";
import { StickyWhatsAppButton } from "@/components/StickyWhatsAppButton";
import type { ClientConfig } from "@/config/client";

type IntakePageShellProps = {
  config: ClientConfig;
  languageOptions: LanguageOption[];
  homeHref: string;
};

export function IntakePageShell({ config, languageOptions, homeHref }: IntakePageShellProps) {
  const { intakePage, whatsapp } = config;

  return (
    <main className="flex-1 bg-(--page-background) text-(--text-primary)">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="beforeInteractive"
      />

      <section className="relative overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,163,255,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(155,109,243,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,247,255,0.96))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--color-primary)/40 to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={homeHref}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-(--panel-border) bg-white/70 px-4 py-2 text-sm font-medium text-(--heading-color) backdrop-blur-xl transition-colors duration-150 hover:bg-white"
              >
                <span aria-hidden="true">←</span>
                <span>{intakePage.backHomeLabel}</span>
              </Link>
              <LanguageSwitcher options={languageOptions} />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="mb-6 text-center sm:mb-8">
              <h1 className="text-3xl leading-tight sm:text-4xl lg:text-5xl">
                {intakePage.title}
              </h1>
            </div>

            <div className="rounded-(--radius-section) border border-(--panel-border) bg-white/92 p-3 shadow-[0_24px_90px_rgba(77,45,146,0.12)] backdrop-blur-2xl sm:p-4 lg:p-6">
              <div className="rounded-[calc(var(--radius-section)*0.78)] border border-(--panel-border) bg-(--page-background) p-5 sm:p-6">
                <div id="project-intake" className="overflow-hidden rounded-[calc(var(--radius-card)+0.25rem)] border border-(--panel-border) bg-white">
                  <iframe
                    src={intakePage.embedUrl}
                    data-tally-src={intakePage.embedUrl}
                    loading="lazy"
                    width="100%"
                    height={String(intakePage.embedHeight)}
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title={intakePage.embedTitle}
                    className="block w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyWhatsAppButton whatsapp={whatsapp} />
    </main>
  );
}