"use client";

import type { IconType } from "react-icons";
import { FiBriefcase, FiCode, FiCompass, FiLayers, FiPenTool, FiTrendingUp } from "react-icons/fi";
import { ActionLink } from "@/components/ActionLink";
import { FadeIn } from "@/components/FadeIn";
import type { ServicesSection } from "@/config/client";

type ServicesProps = {
  section: ServicesSection;
};

type ServiceIconConfig = {
  icon: IconType;
  accentClassName: string;
  ringClassName: string;
};

const serviceIconMap: Record<string, ServiceIconConfig> = {
  "Web Development": {
    icon: FiCode,
    accentClassName: "from-[#8dc8ff] via-[#a989f0] to-[#7a57d5]",
    ringClassName: "bg-[#dceeff] text-[#21446e]",
  },
  "Logo Design": {
    icon: FiPenTool,
    accentClassName: "from-[#ffc68d] via-[#ff9b8a] to-[#d8659b]",
    ringClassName: "bg-[#ffe6d1] text-[#7d4320]",
  },
  "App Development": {
    icon: FiLayers,
    accentClassName: "from-[#8cf0d0] via-[#59c9d5] to-[#3974c8]",
    ringClassName: "bg-[#d9fbf1] text-[#15524a]",
  },
  "Brand Identity": {
    icon: FiBriefcase,
    accentClassName: "from-[#ffd779] via-[#f5a65d] to-[#d97a4a]",
    ringClassName: "bg-[#fff0c5] text-[#7b4f16]",
  },
  "Digital Marketing": {
    icon: FiTrendingUp,
    accentClassName: "from-[#ff9ec5] via-[#e484cc] to-[#8d66d8]",
    ringClassName: "bg-[#ffe0ee] text-[#7a2552]",
  },
  "Brand Strategy": {
    icon: FiCompass,
    accentClassName: "from-[#b9a7ff] via-[#8d7bf0] to-[#5564dc]",
    ringClassName: "bg-[#e6e1ff] text-[#3d3ea0]",
  },
};

export function Services({ section }: ServicesProps) {
  return (
    <section
      id="services"
      className="scroll-mt-32 bg-[#f7f3ff] px-4 py-[clamp(5.5rem,10vw,10rem)] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn className="mx-auto max-w-4xl text-center">
          <div>
            {section.eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7a57d5]">{section.eyebrow}</p>
            ) : null}
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-(--heading-color) sm:text-[3rem]">
              {section.title}
            </h2>
            {section.description ? (
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700/80 sm:text-lg">
                {section.description}
              </p>
            ) : null}
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {section.items.map((item, index) => (
            <ServiceCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {section.ctaLabel && section.ctaHref ? (
          <FadeIn className="mt-12 flex justify-center">
            <ActionLink
              href={section.ctaHref}
              trackingAction="cta_click"
              trackingLabel="services_section"
              className="min-h-14 rounded-full px-8 py-4 text-base font-semibold shadow-[0_14px_30px_rgba(99,73,176,0.18)]"
            >
              {section.ctaLabel}
            </ActionLink>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}

function ServiceCard({
  item,
  index,
}: {
  item: ServicesSection["items"][number];
  index: number;
}) {
  const iconConfig = serviceIconMap[item.title] ?? serviceIconMap["Web Development"];
  const Icon = iconConfig.icon;

  return (
    <FadeIn
      delay={index * 0.06}
      hover
      className="group w-full max-w-full min-w-0 rounded-[1.9rem] border border-[#e7def8] bg-white shadow-[0_10px_28px_rgba(121,87,213,0.06)] transition-[transform,box-shadow,border-color] duration-300"
    >
      <div className="h-full p-6 md:p-8">
        <div className="relative inline-flex rounded-[1.35rem] bg-linear-to-br p-px ${iconConfig.accentClassName}">
          <div className={`flex h-14 w-14 items-center justify-center rounded-[1.25rem] ${iconConfig.ringClassName}`}>
            <Icon className="h-6 w-6" strokeWidth={1.9} />
          </div>
        </div>

        <div className="mt-6 flex h-full flex-col">
          <div>
            <h3 className="text-[1.18rem] font-semibold leading-tight text-(--heading-color) sm:text-[1.28rem]">
              {item.title}
            </h3>
          </div>

          <p className="mt-4 text-[0.98rem] leading-7 text-slate-600">
            {item.description}
          </p>

          <div className="mt-6 grid gap-3">
            {item.bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex items-center gap-3 rounded-2xl border border-[#f0e9ff] bg-[#fcfbff] px-4 py-3 text-sm font-medium text-slate-700"
              >
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f1e8ff] text-[#7a57d5]">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path d="M4.5 10.5 8 14l7.5-8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </FadeIn>
  );
}
