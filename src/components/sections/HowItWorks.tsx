"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  DropletIcon,
  InfoIcon,
  SearchIcon,
  TagIcon,
  TruckIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

const stepIcons = [SearchIcon, TagIcon, DropletIcon, TruckIcon];

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blueprint-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-cyan/15 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-magenta/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow={t.steps.eyebrow}
            title={t.steps.title}
            description={t.steps.description}
            tone="dark"
          />
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.items.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <StaggerItem key={step.title} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/[0.07] text-brand-cyan">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[0.7rem] font-medium tracking-[0.2em] text-paper/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.08rem] font-semibold leading-snug tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.85rem] leading-relaxed text-paper/55">
                    {step.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-linear-to-r from-brand-cyan via-brand-magenta to-brand-yellow transition-transform duration-500 group-hover:scale-x-100"
                  />
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-10">
          <div className="flex flex-col gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <p className="flex max-w-xl items-start gap-2.5 text-[0.85rem] leading-relaxed text-paper/55">
              <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" />
              {t.steps.note}
            </p>
            <ActionLink
              href={whatsappHref(site.phones[0], t.steps.waMessage)}
              variant="whatsapp"
              size="md"
              className="shrink-0"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t.steps.cta}
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
