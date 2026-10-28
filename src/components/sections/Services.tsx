"use client";

import { useLanguage } from "@/lib/i18n";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading, ColorBar } from "@/components/ui/SectionHeading";
import { CartridgeGlyph } from "@/components/ui/PrintMarks";
import {
  ArrowRightIcon,
  BoxesIcon,
  CableIcon,
  DropletIcon,
  PrinterIcon,
  TonerIcon,
} from "@/components/ui/icons";

const itemIcons = [PrinterIcon, TonerIcon, CableIcon, BoxesIcon];

const accents = [
  "bg-brand-cyan/10 text-ink",
  "bg-brand-magenta/10 text-brand-magenta",
  "bg-brand-yellow/20 text-ink",
  "bg-ink/[0.06] text-ink",
];

export function Services() {
  const { t } = useLanguage();
  const [featured, ...rest] = t.services.items;

  return (
    <section id="services" className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
          <StaggerItem className="h-full lg:col-span-2">
            <article className="relative h-full overflow-hidden rounded-[1.75rem] bg-ink p-7 text-paper shadow-card sm:p-9">
              <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" />
              <div className="pointer-events-none absolute -right-14 -top-16 h-56 w-56 rounded-full bg-brand-cyan/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-brand-magenta/10 blur-3xl" />
              <CartridgeGlyph className="pointer-events-none absolute -bottom-8 -right-6 w-64 text-paper/[0.06] sm:w-80" />

              <div className="relative flex h-full flex-col">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink">
                    <DropletIcon className="h-3.5 w-3.5" />
                    {featured.tag}
                  </span>
                  <ColorBar tone="dark" />
                </div>

                <h3 className="mt-8 max-w-md font-display text-[clamp(1.7rem,3vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
                  {featured.title}
                </h3>
                <p className="mt-3.5 max-w-md text-[0.95rem] leading-relaxed text-paper/65">
                  {featured.description}
                </p>

                <div className="mt-auto pt-9">
                  <a
                    href="#finder"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-4 py-2.5 text-[0.8rem] font-semibold text-paper transition-colors hover:border-white/40 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    {t.nav.finder}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </article>
          </StaggerItem>

          {rest.map((service, index) => {
            const Icon = itemIcons[index];
            return (
              <StaggerItem key={service.title} className="h-full">
                <article className="group flex h-full flex-col rounded-[1.75rem] border border-ink/[0.08] bg-white p-6 shadow-[0_20px_50px_-40px_rgba(11,27,58,0.5)] transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-card">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-2xl ${accents[index]}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full border border-ink/[0.08] bg-paper/70 px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.14em] text-ink/45">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.12rem] font-semibold leading-snug tracking-[-0.02em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[0.87rem] leading-relaxed text-ink/60">
                    {service.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
