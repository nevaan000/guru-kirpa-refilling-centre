"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ColorBar, SectionHeading } from "@/components/ui/SectionHeading";
import { RegistrationMark } from "@/components/ui/PrintMarks";
import {
  LeafIcon,
  MapPinIcon,
  ShieldCheckIcon,
  TimerIcon,
  WalletIcon,
} from "@/components/ui/icons";

const whyIcons = [WalletIcon, TimerIcon, ShieldCheckIcon, LeafIcon];

const accents = [
  "bg-brand-cyan/10 text-ink",
  "bg-brand-magenta/10 text-brand-magenta",
  "bg-brand-yellow/20 text-ink",
  "bg-ink/[0.06] text-ink",
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionHeading
              eyebrow={t.why.eyebrow}
              title={t.why.title}
              description={t.why.description}
            />
            <div className="mt-8">
              <ActionLink href="#contact" variant="secondary" size="md">
                <MapPinIcon className="h-4 w-4 text-brand-magenta" />
                {t.why.cta}
              </ActionLink>
            </div>

            <div className="relative mt-10 hidden overflow-hidden rounded-[1.75rem] border border-ink/[0.08] bg-white p-6 shadow-[0_24px_60px_-45px_rgba(11,27,58,0.6)] lg:block">
              <RegistrationMark className="absolute right-4 top-4 h-7 w-7 text-ink/10" />
              <div className="flex items-center gap-2">
                <ColorBar />
                <span className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-ink/40">
                  {t.hero.visualLabel}
                </span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                <span className="h-16 rounded-xl bg-brand-cyan" />
                <span className="h-16 rounded-xl bg-brand-magenta" />
                <span className="h-16 rounded-xl bg-brand-yellow" />
              </div>
              <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink/35">
                {site.locality} · {site.city}
              </p>
            </div>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {t.why.items.map((item, index) => {
            const Icon = whyIcons[index];
            return (
              <StaggerItem key={item.title} className="h-full">
                <article className="group flex h-full flex-col rounded-[1.75rem] border border-ink/[0.08] bg-white p-6 shadow-[0_20px_50px_-42px_rgba(11,27,58,0.55)] transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-card sm:p-7">
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${accents[index]} transition-transform duration-300 group-hover:-rotate-3`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 font-display text-[1.18rem] font-semibold leading-snug tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[0.88rem] leading-relaxed text-ink/60">
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
