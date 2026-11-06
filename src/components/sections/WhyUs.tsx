"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { cn, whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ColorBar, SectionHeading } from "@/components/ui/SectionHeading";
import {
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
  SearchIcon,
  ShieldCheckIcon,
  TagIcon,
  TruckIcon,
  WalletIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

const whyIcons = [
  WalletIcon,
  ShieldCheckIcon,
  TagIcon,
  PrinterIcon,
  MapPinIcon,
  TruckIcon,
  PhoneIcon,
];

const accents = [
  "bg-brand-cyan/10 text-ink",
  "bg-brand-magenta/10 text-brand-magenta",
  "bg-brand-yellow/20 text-ink",
  "bg-ink/[0.06] text-ink",
  "bg-brand-cyan/10 text-ink",
  "bg-brand-magenta/10 text-brand-magenta",
  "bg-brand-yellow/20 text-ink",
];

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="paper-grid absolute inset-0 opacity-30" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-cyan/[0.07] blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-brand-magenta/[0.05] blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-3xl">
            <SectionHeading
              eyebrow={t.why.eyebrow}
              title={t.why.title}
              description={t.why.description}
            />
          </Reveal>

          <Reveal delay={0.1} className="shrink-0">
            <div className="flex flex-wrap gap-3">
              <ActionLink href="#finder" variant="secondary" size="md">
                <SearchIcon className="h-4 w-4 text-brand-magenta" />
                {t.why.finderCta}
              </ActionLink>
              <ActionLink
                href={whatsappHref(site.phones[0], t.why.waMessage)}
                variant="whatsapp"
                size="md"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.why.waCta}
              </ActionLink>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((item, index) => {
            const Icon = whyIcons[index];
            const featured = index === 0;

            return (
              <StaggerItem
                key={`why-${index}`}
                className={cn("h-full", featured && "sm:col-span-2")}
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-6 shadow-[0_20px_50px_-42px_rgba(11,27,58,0.55)] transition duration-300 hover:-translate-y-1 sm:p-7",
                    featured
                      ? "border-ink bg-ink text-paper shadow-[0_28px_70px_-45px_rgba(11,27,58,0.9)] hover:border-ink-soft"
                      : "border-ink/[0.08] bg-white hover:border-ink/20 hover:shadow-card",
                  )}
                >
                  {featured ? (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                    >
                      <div className="blueprint-grid absolute inset-0 opacity-40" />
                      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-brand-cyan/20 blur-2xl" />
                    </div>
                  ) : null}

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-300 group-hover:-rotate-3",
                        featured ? "bg-brand-yellow text-ink" : accents[index],
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    {featured ? <ColorBar tone="dark" /> : null}
                  </div>

                  <h3
                    className={cn(
                      "relative mt-7 font-display text-[1.18rem] font-semibold leading-snug tracking-[-0.02em]",
                      featured ? "text-paper" : "text-ink",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "relative mt-2.5 max-w-md text-[0.88rem] leading-relaxed",
                      featured ? "text-paper/65" : "text-ink/60",
                    )}
                  >
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
