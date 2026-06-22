import Link from "next/link";
import Script from "next/script";
import { ActionLink } from "@/components/ActionLink";
import { FadeIn } from "@/components/FadeIn";
import { LanguageSwitcher, type LanguageOption } from "@/components/LanguageSwitcher";
import { StickyWhatsAppButton } from "@/components/StickyWhatsAppButton";
import type { ClientConfig } from "@/config/client";
import { getWhatsAppLink } from "@/config/client";

type IntakePageShellProps = {
  config: ClientConfig;
  languageOptions: LanguageOption[];
  homeHref: string;
};

export function IntakePageShell({ config, languageOptions, homeHref }: IntakePageShellProps) {
  const { contact, contactSection, intakePage, whatsapp } = config;
  const whatsappHref = getWhatsAppLink(whatsapp);

  return (
    <main className="flex-1 bg-(--page-background) text-(--text-primary)">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />

      <section className="relative overflow-hidden px-4 pb-12 pt-6 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,163,255,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(155,109,243,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(248,247,255,0.96))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--color-primary)/40 to-transparent" />

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 pt-2 lg:flex-row lg:items-center lg:justify-between">
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

            <ActionLink
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="whatsapp"
              trackingAction="whatsapp_click"
              trackingLabel="intake_page_header"
              className="w-full sm:w-auto"
            >
              {whatsapp.sectionButtonLabel}
            </ActionLink>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <FadeIn className="space-y-6">
              <div className="inline-flex rounded-full border border-(--panel-border) bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-(--heading-color) backdrop-blur-xl">
                {intakePage.eyebrow}
              </div>

              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  {intakePage.title}
                </h1>
                <p className="max-w-xl text-base leading-8 text-(--text-muted) sm:text-lg">
                  {intakePage.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionLink
                  href="#project-intake"
                  trackingAction="cta_click"
                  trackingLabel="intake_page_primary"
                  className="w-full sm:w-auto"
                >
                  {intakePage.primaryCtaLabel}
                </ActionLink>
                <ActionLink
                  href={contact.phoneHref}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {contactSection.callLabel} {contact.phoneDisplay}
                </ActionLink>
              </div>

              <div className="rounded-[calc(var(--radius-section)*0.8)] border border-(--panel-border) bg-white/82 p-6 shadow-[0_20px_70px_rgba(77,45,146,0.08)] backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--heading-color)">
                  {intakePage.highlightsTitle}
                </p>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-(--text-muted) sm:text-base">
                  {intakePage.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-(--color-primary)" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.08} className="rounded-(--radius-section) border border-(--panel-border) bg-white/84 p-4 shadow-[0_24px_90px_rgba(77,45,146,0.12)] backdrop-blur-2xl sm:p-6">
              <div className="rounded-[calc(var(--radius-section)*0.78)] border border-(--panel-border) bg-(--page-background) p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--heading-color)">
                  {intakePage.formTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-(--text-muted) sm:text-base">
                  {intakePage.formDescription}
                </p>

                <div id="project-intake" className="mt-6 overflow-hidden rounded-[calc(var(--radius-card)+0.25rem)] border border-(--panel-border) bg-white">
                  <iframe
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

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={intakePage.embedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-(--heading-color) underline decoration-(--color-primary)/45 underline-offset-4 transition-colors duration-150 hover:text-(--color-primary)"
                  >
                    {intakePage.fallbackLinkLabel}
                  </a>
                  <p className="text-sm text-(--text-muted)">
                    {intakePage.followUpText}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.14} className="mt-8 rounded-(--radius-section) border border-(--panel-border) bg-[#120f2f] px-6 py-8 text-white shadow-[0_24px_90px_rgba(18,15,47,0.24)] sm:px-8 lg:px-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/72">
                  {intakePage.supportTitle}
                </p>
                <p className="mt-3 text-lg leading-8 text-white/82">
                  {intakePage.supportDescription}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ActionLink
                  href={`mailto:${contact.email}`}
                  variant="secondary"
                  className="border-white/14 bg-white/10 text-white hover:bg-white/16"
                >
                  {contact.email}
                </ActionLink>
                <ActionLink
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="whatsapp"
                  trackingAction="whatsapp_click"
                  trackingLabel="intake_page_support"
                >
                  {whatsapp.heroButtonLabel}
                </ActionLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <StickyWhatsAppButton whatsapp={whatsapp} />
    </main>
  );
}