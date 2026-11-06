"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { cn, whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  LayersIcon,
  SearchIcon,
  ShieldCheckIcon,
  WalletIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

const advantageIcons = [WalletIcon, ShieldCheckIcon, LayersIcon];

const accents = [
  { text: "text-brand-cyan", bar: "bg-brand-cyan" },
  { text: "text-brand-yellow", bar: "bg-brand-yellow" },
  { text: "text-brand-magenta", bar: "bg-brand-magenta" },
];

export function UsAdvantage() {
  const { t } = useLanguage();

  return (
    <section
      id="advantage"
      className="relative overflow-hidden bg-ink-deep py-20 text-paper sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 grid h-1 grid-cols-4"
      >
        <span className="bg-brand-cyan" />
        <span className="bg-brand-magenta" />
        <span className="bg-brand-yellow" />
        <span className="bg-paper/70" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blueprint-grid absolute inset-0 opacity-50" />
        <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-magenta/[0.09] blur-3xl" />
        <span className="absolute -right-8 top-8 hidden font-display text-[16rem] font-semibold leading-none tracking-[-0.06em] text-white/[0.025] lg:block">
          GK
        </span>
      </div>

      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={t.usp.eyebrow}
              title={t.usp.title}
              description={t.usp.description}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ActionLink href="#finder" variant="light" size="md">
                <SearchIcon className="h-4 w-4 text-brand-magenta" />
                {t.usp.finderCta}
              </ActionLink>
              <ActionLink
                href={whatsappHref(site.phones[0], t.usp.waMessage)}
                variant="whatsapp"
                size="md"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.usp.waCta}
              </ActionLink>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
          {t.usp.items.map((item, index) => {
            const Icon = advantageIcons[index];
            const accent = accents[index];

            return (
              <StaggerItem key={`advantage-${index}`} className="h-full">
                <article className="group relative flex h-full flex-col bg-ink-deep p-7 transition-colors duration-300 hover:bg-ink sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "font-display text-[3.5rem] font-semibold leading-[0.9] tracking-[-0.05em]",
                        accent.text,
                      )}
                    >
                      {item.letter}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-paper/70 transition-colors duration-300 group-hover:border-white/25 group-hover:text-paper">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className={cn("mt-7 block h-1 w-10 rounded-full", accent.bar)}
                  />
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-paper/60">
                    {item.description}
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
