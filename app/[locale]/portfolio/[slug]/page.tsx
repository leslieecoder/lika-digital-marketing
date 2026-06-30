import type { Metadata } from "next";
import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { PortfolioProjectTabs } from "@/components/PortfolioProjectTabs";
import { StickyWhatsAppButton } from "@/components/StickyWhatsAppButton";
import { getClientConfig, getGalleryProjectBySlug, getGalleryProjectSlugs } from "@/config/client";
import { getLocaleLabel, getLocalizedHomePath, getLocalizedPortfolioPath, isSupportedLocale, supportedLocales, type Locale } from "@/lib/i18n";

type PortfolioPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

type SocialPlatform = "facebook" | "youtube" | "instagram" | "linkedin";

const socialIcons: Record<SocialPlatform, ReactElement> = {
  facebook: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6H16.5V4.9c-.2 0-1-.1-2-.1-2.1 0-3.5 1.3-3.5 3.8V11H8.6v3H11v7h2.5Z" />
    </svg>
  ),
  youtube: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2c-1.8-.5-9.2-.5-9.2-.5s-7.4 0-9.2.5a2.9 2.9 0 0 0-2 2A31 31 0 0 0 0 12a31 31 0 0 0 .2 4.8 2.9 2.9 0 0 0 2 2c1.8.5 9.2.5 9.2.5s7.4 0 9.2-.5a2.9 2.9 0 0 0 2-2 31 31 0 0 0 .2-4.8 31 31 0 0 0-.2-4.8ZM9.5 15.4V8.6L15.3 12l-5.8 3.4Z" />
    </svg>
  ),
  instagram: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M6.5 8.4A1.9 1.9 0 1 0 6.5 4.6a1.9 1.9 0 0 0 0 3.8ZM4.9 9.9H8V20H4.9V9.9Zm5.1 0h3v1.4h.1c.4-.8 1.5-1.7 3.2-1.7 3.4 0 4 2.2 4 5.1V20h-3.1v-4.8c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V20H10V9.9Z" />
    </svg>
  ),
};

export function generateStaticParams() {
  return supportedLocales.flatMap((locale) => getGalleryProjectSlugs(locale).map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale)) {
    return {};
  }

  const project = getGalleryProjectBySlug(locale, slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | ${getClientConfig(locale).businessName}`,
    description: project.summary,
    alternates: {
      canonical: getLocalizedPortfolioPath(locale, slug),
      languages: {
        en: getLocalizedPortfolioPath("en", slug),
        es: getLocalizedPortfolioPath("es", slug),
      },
    },
  };
}

function SocialIcon({ platform }: { platform: SocialPlatform }) {
  return socialIcons[platform];
}

function isGif(src: string) {
  return /\.gif($|[?#])/i.test(src);
}

function getPreviewHref(locale: Locale, slug: string, liveUrl: string | undefined, fallbackSrc: string | undefined) {
  if (liveUrl?.startsWith("#")) {
    return `${getLocalizedHomePath(locale)}${liveUrl}`;
  }

  return liveUrl ?? fallbackSrc ?? getLocalizedPortfolioPath(locale, slug);
}

export default async function LocalizedPortfolioProjectPage({ params }: PortfolioPageProps) {
  const { locale, slug } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const config = getClientConfig(locale);
  const project = getGalleryProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  const heroImage = project.image;
  const previewHref = getPreviewHref(locale, project.slug, project.liveUrl, project.images[0]?.src ?? project.image.src);
  const backHref = `${getLocalizedHomePath(locale)}#gallery`;

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#fffdfd_0%,#faf7ff_38%,#ffffff_100%)] text-slate-900">
      <section className="px-4 pb-18 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={backHref}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-white/80 bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-[0_12px_32px_rgba(82,58,150,0.08)] transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-slate-950"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
                </svg>
                {config.portfolioPage.backToProjectsLabel}
              </Link>

              <LanguageSwitcher
                options={supportedLocales.map((entry) => ({
                  locale: entry,
                  label: getLocaleLabel(entry),
                  href: getLocalizedPortfolioPath(entry, slug),
                  active: entry === locale,
                }))}
                className="border-[#eadfff] bg-white"
              />
            </div>

            <div className="flex items-center gap-3 text-[#bb84ef]">
              {config.footer.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eddffd] bg-white/92 shadow-[0_12px_28px_rgba(82,58,150,0.08)] transition-[transform,color,border-color] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#d8b3fb] hover:text-[#8a44db]"
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center sm:mt-20">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ead9fd] bg-white/88 px-5 py-2 text-sm font-semibold text-[#9d57e4] shadow-[0_12px_32px_rgba(125,87,213,0.08)]">
                <span className="text-base leading-none">✷</span>
                {project.category}
              </span>
              <h1 className="mt-8 text-4xl font-semibold tracking-[-0.06em] text-[#35215f] sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                {project.summary}
              </p>
            </FadeIn>
          </div>

          <FadeIn className="mt-16 rounded-4xl border border-[#efe9ff] bg-[#f8f5ff] p-3 shadow-[0_26px_70px_rgba(87,53,164,0.12)] sm:mt-20 sm:p-4">
            <div className="relative aspect-video overflow-hidden rounded-[1.65rem] border border-black/5 bg-slate-950">
              {heroImage.videoSrc ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={heroImage.posterSrc ?? heroImage.src}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                >
                  <source src={heroImage.videoSrc} type="video/mp4" />
                </video>
              ) : heroImage.src ? (
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1280px) 1100px, (min-width: 768px) 90vw, 100vw"
                  unoptimized={isGif(heroImage.src)}
                  className="object-cover object-top"
                />
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,9,18,0.04),rgba(7,9,18,0.22))]" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="case-study" className="px-4 pb-24 sm:px-6 lg:px-8">
        <PortfolioProjectTabs
          project={project}
          previewHref={previewHref}
          content={config.portfolioPage}
        />
      </section>

      <StickyWhatsAppButton whatsapp={config.whatsapp} />
    </main>
  );
}