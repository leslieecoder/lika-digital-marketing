"use client";

import { FadeIn } from "@/components/FadeIn";
import { PortfolioDeviceMockup } from "@/components/PortfolioDeviceMockup";
import type { GalleryItem, PortfolioPageContent } from "@/config/client";

type PortfolioProjectTabsProps = {
  project: GalleryItem;
  previewHref: string;
  content: PortfolioPageContent;
};

export function PortfolioProjectTabs({ project, previewHref, content }: PortfolioProjectTabsProps) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[24rem_minmax(0,1fr)] lg:items-start">
      <FadeIn className="rounded-4xl border border-[#ebe4ff] bg-white p-7 shadow-[0_18px_52px_rgba(87,53,164,0.08)] sm:p-8 lg:sticky lg:top-8">
        <dl className="space-y-5 text-lg text-slate-700">
          <div className="flex items-start justify-between gap-5 border-b border-[#f0eaff] pb-4">
            <dt className="font-medium text-slate-500">{content.detailLabels.category}:</dt>
            <dd className="text-right font-semibold text-slate-900">{project.category}</dd>
          </div>
          <div className="flex items-start justify-between gap-5 border-b border-[#f0eaff] pb-4">
            <dt className="font-medium text-slate-500">{content.detailLabels.client}:</dt>
            <dd className="text-right font-semibold text-slate-900">{project.client}</dd>
          </div>
          <div className="flex items-start justify-between gap-5 border-b border-[#f0eaff] pb-4">
            <dt className="font-medium text-slate-500">{content.detailLabels.duration}:</dt>
            <dd className="text-right font-semibold text-slate-900">{project.duration}</dd>
          </div>
          <div className="flex items-start justify-between gap-5 pb-2">
            <dt className="font-medium text-slate-500">{content.detailLabels.year}:</dt>
            <dd className="text-right font-semibold text-slate-900">{project.year}</dd>
          </div>
        </dl>

        <div className="mt-8 rounded-4xl border border-[#ebe4ff] bg-[linear-gradient(180deg,#fff8ff_0%,#f7f2ff_100%)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9957df]">{content.liveAccessEyebrow}</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tighter text-[#35215f]">{content.liveAccessTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{content.liveAccessDescription}</p>
          <a
            href={previewHref}
            target={previewHref.startsWith("http") ? "_blank" : undefined}
            rel={previewHref.startsWith("http") ? "noreferrer" : undefined}
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#9b6df3,#8958ea)] px-6 py-3 text-base font-semibold text-white shadow-[0_16px_34px_rgba(155,109,243,0.24)] transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
          >
            {content.openPreviewLabel}
          </a>
        </div>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn className="rounded-4xl border border-[#ebe4ff] bg-white p-7 shadow-[0_18px_52px_rgba(87,53,164,0.08)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9957df]">{content.summaryEyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-[#35215f] sm:text-[2.2rem]">{content.summaryTitle}</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">{project.overview}</p>
        </FadeIn>

        <div className="grid gap-8 xl:grid-cols-2">
          <FadeIn className="rounded-4xl border border-[#ebe4ff] bg-white p-7 shadow-[0_18px_52px_rgba(87,53,164,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9957df]">{content.processEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-[#35215f] sm:text-[2rem]">{content.processTitle}</h2>
            <div className="mt-8 grid gap-4">
              {project.services.map((service) => (
                <div key={service} className="rounded-3xl border border-[#efe8ff] bg-[#faf7ff] px-5 py-4 text-base font-medium text-slate-700">
                  {service}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="rounded-4xl border border-[#ebe4ff] bg-white p-7 shadow-[0_18px_52px_rgba(87,53,164,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9957df]">{content.resultsEyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-[#35215f] sm:text-[2rem]">{content.resultsTitle}</h2>
            <div className="mt-8 grid gap-4">
              {project.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3 rounded-3xl bg-[#f8f5ff] px-5 py-4 text-slate-700">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6d1bc5] text-sm text-white">+</span>
                  <p className="m-0 text-base leading-7">{outcome}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {project.images.length > 0 ? (
          <FadeIn className="rounded-4xl border border-[#ebe4ff] bg-white p-5 shadow-[0_18px_52px_rgba(87,53,164,0.08)] sm:p-6 lg:p-8">
            <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
              {project.images.map((image, index) => (
                <PortfolioDeviceMockup
                  key={`${image.label}-${index}`}
                  image={image}
                  sizes="(min-width: 1280px) 40vw, (min-width: 768px) 44vw, 100vw"
                  aspectClassName="aspect-[16/12]"
                />
              ))}
            </div>
          </FadeIn>
        ) : null}
      </div>
    </div>
  );
}