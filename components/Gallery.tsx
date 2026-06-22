"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import type { GallerySection } from "@/config/client";
import type { Locale } from "@/lib/i18n";
import { getLocalizedPortfolioPath } from "@/lib/i18n";

type GalleryProps = {
  section: GallerySection;
  locale: Locale;
};

export function Gallery({ section, locale }: GalleryProps) {
  const filters = useMemo(() => [section.allFilterLabel, ...new Set(section.items.map((item) => item.category))], [section.allFilterLabel, section.items]);
  const [activeFilter, setActiveFilter] = useState<string>(section.allFilterLabel);

  const visibleItems = useMemo(
    () => section.items.filter((item) => activeFilter === section.allFilterLabel || item.category === activeFilter),
    [activeFilter, section.allFilterLabel, section.items],
  );

  return (
    <section id="gallery" className="section-spacing scroll-mt-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          {section.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a57d5]">{section.eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-(--heading-color) sm:text-[2.7rem]">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-(--text-muted) sm:text-lg">{section.description}</p>
        </FadeIn>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,box-shadow] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-6 ${
                  isActive
                    ? "border-[#7a57d5] bg-[#7a57d5] text-white shadow-[0_10px_24px_rgba(122,87,213,0.2)]"
                    : "border-[#e6dafd] bg-[#faf7ff] text-(--heading-color) hover:border-[#d1bfff] hover:bg-[#f3ecff]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {visibleItems.map((item, index) => (
            <FadeIn key={`${item.category}-${item.title}`} delay={index * 0.05} hover className="w-full max-w-full min-w-0">
              <Link
                href={getLocalizedPortfolioPath(locale, item.slug)}
                className="group block space-y-4 rounded-4xl bg-[#faf7ff] p-6 shadow-[0_14px_38px_rgba(121,87,213,0.06)] transition-[box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_20px_48px_rgba(121,87,213,0.12)] md:p-8"
              >
                <PlaceholderImage image={item.image} variant="gallery" className="border-[#efe5ff] bg-white" />
                <div className="space-y-3 px-1 pb-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a57d5]">{item.category}</p>
                  <p className="w-full max-w-full [word-wrap:break-word] [hyphens:auto] text-sm font-semibold uppercase tracking-[0.08em] text-(--heading-color) sm:text-[0.95rem]">
                    {item.title}
                  </p>
                  <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
                    <span>{item.client}</span>
                    <span className="inline-flex items-center gap-2 font-semibold text-[#7a57d5] transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5">
                      {section.viewProjectLabel}
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {visibleItems.length === 0 ? (
          <FadeIn className="mt-8 rounded-3xl border border-[#eee5ff] bg-[#faf7ff] px-5 py-6 text-center text-sm text-(--text-muted)">
            {section.emptyStateLabel}
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
