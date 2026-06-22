"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import type { GalleryItem, PortfolioPageContent } from "@/config/client";

type PortfolioProjectTabsProps = {
  project: GalleryItem;
  previewHref: string;
  content: PortfolioPageContent;
  contactHref: string;
};

type ActiveTab = "preview" | "case-study";

export function PortfolioProjectTabs({ project, previewHref, content, contactHref }: PortfolioProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("case-study");

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

        <div className="mt-8 space-y-4">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            aria-pressed={activeTab === "preview"}
            className={`flex min-h-16 w-full items-center justify-center rounded-full px-6 text-xl font-medium transition-[transform,background-color,color,border-color,box-shadow] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 ${
              activeTab === "preview"
                ? "bg-[linear-gradient(135deg,#7d14c7,#6406a9)] text-white shadow-[0_18px_38px_rgba(112,25,181,0.28)]"
                : "border-6 border-[#efebff] bg-white text-slate-950 shadow-[0_12px_34px_rgba(87,53,164,0.08)]"
            }`}
          >
            {content.previewTabLabel}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("case-study")}
            aria-pressed={activeTab === "case-study"}
            className={`flex min-h-16 w-full items-center justify-center rounded-full px-6 text-xl font-medium transition-[transform,background-color,color,border-color,box-shadow] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 ${
              activeTab === "case-study"
                ? "bg-[linear-gradient(135deg,#7d14c7,#6406a9)] text-white shadow-[0_18px_38px_rgba(112,25,181,0.28)]"
                : "border-6 border-[#efebff] bg-white text-slate-950 shadow-[0_12px_34px_rgba(87,53,164,0.08)]"
            }`}
          >
            {content.caseStudyTabLabel}
          </button>
        </div>
      </FadeIn>

      <div className="space-y-8">
        {activeTab === "preview" ? (
          <div className="space-y-8">
            <FadeIn className="overflow-hidden rounded-4xl border border-[#ebe4ff] bg-white shadow-[0_24px_60px_rgba(87,53,164,0.08)]">
              <div className="relative aspect-video bg-slate-950">
                {project.image.src ? (
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                ) : null}
              </div>
            </FadeIn>

            <FadeIn className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
              <div className="rounded-4xl border border-[#ebe4ff] bg-white p-7 shadow-[0_18px_52px_rgba(87,53,164,0.08)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9957df]">{content.previewSectionEyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-[#35215f] sm:text-[2.25rem]">
                  {content.previewSectionTitle}
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  {content.previewSectionDescription}
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {project.images.map((image, index) => (
                    <div
                      key={`${image.label}-${index}`}
                      className={`relative overflow-hidden rounded-4xl border border-[#ebe4ff] bg-white shadow-[0_18px_52px_rgba(87,53,164,0.08)] ${index === 0 ? "md:col-span-2" : ""}`}
                    >
                      <div className={`${index === 0 ? "aspect-video" : "aspect-4/3"} relative`}>
                        {image.src ? (
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes={index === 0 ? "(min-width: 768px) 75vw, 100vw" : "(min-width: 768px) 36vw, 100vw"}
                            className="object-cover"
                          />
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-4xl border border-[#ebe4ff] bg-[linear-gradient(180deg,#fff8ff_0%,#f7f2ff_100%)] p-7 shadow-[0_18px_52px_rgba(87,53,164,0.08)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9957df]">{content.liveAccessEyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-[#35215f]">{content.liveAccessTitle}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {content.liveAccessDescription}
                </p>
                <a
                  href={previewHref}
                  target={previewHref.startsWith("http") ? "_blank" : undefined}
                  rel={previewHref.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9b6df3,#8958ea)] px-6 py-3 text-base font-semibold text-white shadow-[0_16px_34px_rgba(155,109,243,0.24)] transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
                >
                  {content.openPreviewLabel}
                </a>
              </div>
            </FadeIn>
          </div>
        ) : (
          <div className="space-y-8">
            <FadeIn className="relative overflow-hidden rounded-4xl bg-[linear-gradient(180deg,#9f2795_0%,#4e0d4d_54%,#130512_100%)] px-8 py-12 text-white shadow-[0_26px_70px_rgba(62,11,72,0.24)] sm:px-12 sm:py-16">
              <div className="absolute inset-y-0 right-4 flex items-center text-[5.5rem] font-semibold tracking-widest text-white/7 [writing-mode:vertical-rl] sm:right-10 sm:text-[7rem]">
                {project.year}
              </div>
              <div className="relative z-10 mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tighter text-white sm:text-5xl">
                  {project.overviewTitle}
                </h2>
                <p className="mt-8 text-lg leading-9 text-white/88 sm:text-[1.32rem]">
                  {project.overview}
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem]">
              <FadeIn className="rounded-4xl border border-[#ebe4ff] bg-white p-7 shadow-[0_18px_52px_rgba(87,53,164,0.08)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9957df]">{content.projectScopeEyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-[#35215f] sm:text-[2.25rem]">
                  {content.projectScopeTitle}
                </h2>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {project.services.map((service) => (
                    <div
                      key={service}
                      className="rounded-3xl border border-[#efe8ff] bg-[#faf7ff] px-5 py-4 text-base font-medium text-slate-700"
                    >
                      {service}
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.22em] text-[#9957df]">{content.highlightsEyebrow}</p>
                <div className="mt-5 grid gap-4">
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3 rounded-3xl bg-[#f8f5ff] px-5 py-4 text-slate-700">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6d1bc5] text-sm text-white">+</span>
                      <p className="m-0 text-base leading-7">{outcome}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn className="rounded-4xl border border-[#ebe4ff] bg-[linear-gradient(180deg,#fff8ff_0%,#f7f2ff_100%)] p-7 shadow-[0_18px_52px_rgba(87,53,164,0.08)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9957df]">{content.similarProjectEyebrow}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-[#35215f]">{content.similarProjectTitle}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {content.similarProjectDescription}
                </p>
                <Link
                  href={contactHref}
                  className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9b6df3,#8958ea)] px-6 py-3 text-base font-semibold text-white shadow-[0_16px_34px_rgba(155,109,243,0.24)] transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5"
                >
                  {content.startProjectLabel}
                </Link>
              </FadeIn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}