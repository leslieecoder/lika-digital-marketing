import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export type LanguageOption = {
  locale: Locale;
  label: string;
  href: string;
  active: boolean;
};

type LanguageSwitcherProps = {
  options: LanguageOption[];
  className?: string;
};

export function LanguageSwitcher({ options, className = "" }: LanguageSwitcherProps) {
  return (
    <div className={`inline-flex items-center gap-1 rounded-full border border-white/16 bg-white/10 p-1 backdrop-blur-xl ${className}`.trim()}>
      {options.map((option) => (
        <Link
          key={option.locale}
          href={option.href}
          aria-current={option.active ? "page" : undefined}
          className={`inline-flex min-h-10 items-center justify-center rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            option.active
              ? "bg-white text-slate-950 shadow-[0_10px_22px_rgba(15,23,42,0.14)]"
              : "text-white/78 hover:bg-white/10 hover:text-white"
          }`}
        >
          {option.label}
        </Link>
      ))}
    </div>
  );
}