"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfoIcon } from "@/components/ui/icons";

const dotColours = ["bg-brand-cyan", "bg-brand-magenta", "bg-brand-yellow", "bg-ink/30"];

export function BrandsMarquee() {
  const { t } = useLanguage();
  const brands = [...site.supportedBrands];

  return (
    <section className="relative overflow-hidden border-y border-ink/[0.06] bg-white py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={t.brands.eyebrow}
            title={t.brands.title}
            description={t.brands.description}
            align="center"
          />
        </Reveal>
      </div>

      <div className="marquee mt-10 py-2">
        <div className="marquee-track items-center">
          {[0, 1].map((copy) =>
            brands.map((brand, index) => (
              <span
                key={`${copy}-${brand}`}
                data-clone={copy === 1 ? "true" : undefined}
                aria-hidden="true"
                className="flex shrink-0 items-center pr-10 sm:pr-14"
              >
                <span className="font-display text-[clamp(1.7rem,3.4vw,2.7rem)] font-semibold tracking-[-0.045em] text-ink/75">
                  {brand}
                </span>
                <span
                  className={cn(
                    "ml-10 h-2 w-2 rounded-full sm:ml-14",
                    dotColours[index % dotColours.length],
                  )}
                />
              </span>
            )),
          )}
        </div>
      </div>

      <div className="container-page">
        <p className="mt-1 text-center text-[0.78rem] font-medium text-ink/40">
          {t.brands.similar}
        </p>
      </div>

      <ul className="sr-only">
        {brands.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>

      <div className="container-page">
        <p className="mt-7 flex items-center justify-center gap-2 text-center text-[0.68rem] text-ink/35">
          <InfoIcon className="h-3.5 w-3.5 shrink-0" />
          {t.brands.note}
        </p>
      </div>
    </section>
  );
}
