"use client";

import type { Locale } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const options: { value: Locale; short: string }[] = [
  { value: "en", short: "EN" },
  { value: "hi", short: "हिं" },
];

export function LanguageToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className={cn(
        "flex items-center gap-0.5 rounded-full border p-0.5",
        tone === "dark" ? "border-white/15 bg-white/5" : "border-ink/10 bg-white/70",
      )}
    >
      {options.map((option) => {
        const active = locale === option.value;
        const label =
          option.value === "en" ? t.nav.englishLabel : t.nav.hindiLabel;

        return (
          <button
            key={option.value}
            type="button"
            lang={option.value}
            aria-pressed={active}
            aria-label={label}
            title={label}
            onClick={() => setLocale(option.value)}
            className={cn(
              "grid h-8 min-w-9 place-items-center rounded-full px-2 text-[0.68rem] font-semibold tracking-wide transition-colors duration-200",
              active
                ? tone === "dark"
                  ? "bg-paper text-ink"
                  : "bg-ink text-white"
                : tone === "dark"
                  ? "text-paper/60 hover:text-paper"
                  : "text-ink/50 hover:text-ink",
            )}
          >
            {option.short}
          </button>
        );
      })}
    </div>
  );
}
