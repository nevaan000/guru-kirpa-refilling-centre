"use client";

import { getAreaList, getPickupAreas, site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  BuildingIcon,
  HomeIcon,
  StoreIcon,
  TruckIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

const pickupIcons = [HomeIcon, BuildingIcon, StoreIcon];

export function PickupBulk() {
  const { t } = useLanguage();
  const pickupAreas = getPickupAreas();
  const areas = getAreaList();
  const areaText =
    pickupAreas ?? (areas.length > 0 ? areas.join(" · ") : t.pickup.areasFallback);

  return (
    <section
      id="pickup"
      className="relative overflow-hidden border-y border-ink/[0.06] bg-paper-dim/70 py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="paper-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl"
      />

      <div className="container-page relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow={t.pickup.eyebrow}
            title={t.pickup.title}
            description={t.pickup.description}
          />

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#0b6b52]/20 bg-[#0b6b52]/[0.07] px-3.5 py-2 text-[0.72rem] font-semibold text-[#0b6b52]">
            <TruckIcon className="h-4 w-4" />
            {t.pickup.badge}
          </div>

          <div className="mt-6 rounded-2xl border border-ink/[0.08] bg-white/70 p-4">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/35">
              {t.pickup.areasLabel}
            </p>
            <p className="mt-1.5 text-[0.84rem] leading-relaxed text-ink/60">
              {areaText}
            </p>
          </div>

          <ActionLink
            href={whatsappHref(site.phones[0], t.pickup.waMessage)}
            variant="whatsapp"
            size="lg"
            className="mt-6 w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.pickup.cta}
          </ActionLink>
        </Reveal>

        <Stagger className="flex flex-col gap-3.5">
          {t.pickup.cards.map((card, index) => {
            const Icon = pickupIcons[index];
            return (
              <StaggerItem key={`pickup-${index}`}>
                <article className="group flex gap-4 rounded-[1.5rem] border border-ink/[0.08] bg-white p-5 shadow-[0_18px_45px_-40px_rgba(11,27,58,0.55)] transition duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-card sm:p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink text-paper transition-colors duration-300 group-hover:bg-brand-cyan group-hover:text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.08rem] font-semibold leading-snug tracking-[-0.02em] text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink/60">
                      {card.description}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
