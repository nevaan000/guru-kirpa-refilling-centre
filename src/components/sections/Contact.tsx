"use client";

import {
  getAddressLines,
  getAreaList,
  getOpeningHours,
  getPickupAreas,
  site,
} from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { telHref, whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowUpRightIcon,
  ClockIcon,
  ExternalLinkIcon,
  MapPinIcon,
  PhoneIcon,
  TruckIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { MapEmbed } from "./MapEmbed";

export function Contact() {
  const { t, locale } = useLanguage();
  const address = getAddressLines(locale);
  const hours = getOpeningHours(locale);
  const areas = getAreaList();
  const pickupAreas = getPickupAreas();
  const areaText =
    areas.length > 0
      ? areas.join(" · ")
      : pickupAreas ?? t.contact.areasFallback;

  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="halftone-ink absolute -left-12 top-24 h-64 w-64 opacity-20 [mask-image:radial-gradient(circle,black,transparent_70%)]" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-cyan/[0.07] blur-3xl" />
      </div>

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.94fr_1.06fr]">
          <Reveal className="flex flex-col gap-4">
            <div className="rounded-[1.75rem] border border-ink/[0.08] bg-white p-5 shadow-[0_24px_60px_-50px_rgba(11,27,58,0.6)] sm:p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-yellow/25 text-ink">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                    {t.contact.addressLabel}
                  </p>
                  <address className="mt-1.5 text-[0.95rem] font-medium not-italic leading-relaxed text-ink">
                    {address[0]}
                    <br />
                    {address[1]}
                  </address>
                  <ActionLink
                    href={site.maps.searchUrl}
                    variant="ghost"
                    size="sm"
                    className="-ml-3 mt-2 text-ink/60 hover:text-ink"
                  >
                    {t.contact.directions}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </ActionLink>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-ink/[0.08] bg-white p-5 shadow-[0_24px_60px_-50px_rgba(11,27,58,0.6)] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-cyan/10 text-ink">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                  {t.contact.phoneLabel}
                </p>
              </div>

              <div className="mt-3 divide-y divide-ink/[0.08]">
                {site.phones.map((phone) => (
                  <div
                    key={phone.id}
                    className="flex flex-col gap-3 py-4 first:pt-3 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <a
                        href={telHref(phone)}
                        className="inline-block text-[1.02rem] font-semibold text-ink transition-colors hover:text-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                      >
                        {phone.display}
                      </a>
                      <p className="mt-1">
                        <span
                          className={
                            phone.id === "primary"
                              ? "inline-flex rounded-full bg-[#0b6b52]/10 px-2 py-0.5 text-[0.52rem] font-bold uppercase tracking-[0.12em] text-[#0b6b52]"
                              : "inline-flex rounded-full bg-ink/[0.05] px-2 py-0.5 text-[0.52rem] font-bold uppercase tracking-[0.12em] text-ink/45"
                          }
                        >
                          {phone.id === "primary"
                            ? t.contact.primaryBadge
                            : t.contact.secondaryBadge}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <ActionLink
                        href={telHref(phone)}
                        variant="secondary"
                        size="sm"
                        aria-label={`${t.contact.call} ${phone.display}`}
                      >
                        <PhoneIcon className="h-3.5 w-3.5" />
                        {t.contact.call}
                      </ActionLink>
                      <ActionLink
                        href={whatsappHref(phone, t.common.waHello)}
                        variant="whatsapp"
                        size="sm"
                        aria-label={`${t.contact.whatsapp} ${phone.display}`}
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        {t.contact.whatsapp}
                      </ActionLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-ink/[0.08] bg-white p-5">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-magenta/10 text-brand-magenta">
                    <ClockIcon className="h-4 w-4" />
                  </span>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                    {t.contact.hoursLabel}
                  </p>
                </div>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-ink/65">
                  {hours ?? t.contact.hoursFallback}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-ink/[0.08] bg-white p-5">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-cyan/10 text-ink">
                    <TruckIcon className="h-4 w-4" />
                  </span>
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                    {t.contact.areasLabel}
                  </p>
                </div>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-ink/65">
                  {areaText}
                </p>
                <p className="mt-2 text-[0.68rem] leading-relaxed text-ink/40">
                  {t.contact.pickupNote}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="flex flex-col gap-3">
            <MapEmbed />
            <div className="flex flex-wrap items-center justify-between gap-3 px-1">
              <p className="flex items-center gap-2 text-[0.72rem] text-ink/45">
                <MapPinIcon className="h-3.5 w-3.5 text-ink/30" />
                {site.locality}, {site.city}
              </p>
              <ActionLink
                href={site.maps.searchUrl}
                variant="secondary"
                size="sm"
                className="text-[0.75rem]"
              >
                {t.contact.openMap}
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
