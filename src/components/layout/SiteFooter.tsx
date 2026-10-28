"use client";

import {
  getAddressLines,
  getAreaList,
  getOpeningHours,
  getPickupAreas,
  getYearsInBusiness,
  site,
} from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { fillTemplate, telHref, whatsappHref } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";
import {
  ExternalLinkIcon,
  PhoneIcon,
  TruckIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

export function SiteFooter() {
  const { locale, t } = useLanguage();
  const address = getAddressLines(locale);
  const areas = getAreaList();
  const pickupAreas = getPickupAreas();
  const hours = getOpeningHours(locale);
  const years = getYearsInBusiness();

  const explore = [
    { href: "#services", label: t.nav.services },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#finder", label: t.nav.finder },
    { href: "#pickup", label: t.pickup.eyebrow },
    { href: "#quote", label: t.nav.quote },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative bg-[#06101f] text-paper">
      <div className="grid h-1 grid-cols-4" aria-hidden="true">
        <span className="bg-brand-cyan" />
        <span className="bg-brand-magenta" />
        <span className="bg-brand-yellow" />
        <span className="bg-paper/70" />
      </div>

      <div className="container-page pb-[calc(8rem+env(safe-area-inset-bottom))] pt-14 md:pb-12 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.85fr_1fr_1.25fr] lg:gap-12">
          <div>
            <a
              href="#top"
              aria-label={site.name}
              className="inline-flex rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <Logo tone="paper" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/55">
              {t.footer.about}
            </p>
            {years ? (
              <p className="mt-3 text-sm font-medium text-brand-cyan">
                {fillTemplate(t.footer.servingYears, { years })}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.65rem] font-medium text-paper/65">
                <TruckIcon className="h-3.5 w-3.5 text-brand-cyan" />
                {t.contact.deliveryBadge}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-paper/35">
              {t.footer.explore}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/60 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-paper/35">
              {t.footer.servicesTitle}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {t.services.items.map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-paper/60 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-paper/35">
              {t.footer.contactTitle}
            </h2>
            <div className="mt-4 space-y-4">
              <a
                href={site.maps.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-2 text-sm leading-relaxed text-paper/60 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <span>
                  {address[0]}
                  <br />
                  {address[1]}
                </span>
                <ExternalLinkIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-paper/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <div className="space-y-2">
                {site.phones.map((phone) => (
                  <div key={phone.id} className="flex items-center gap-2">
                    <a
                      href={telHref(phone)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-paper/70 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    >
                      <PhoneIcon className="h-3.5 w-3.5 text-paper/35" />
                      {phone.display}
                    </a>
                    <a
                      href={whatsappHref(phone, t.common.waHello)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.common.whatsapp} ${phone.display}`}
                      className="grid h-6 w-6 place-items-center rounded-full bg-white/[0.06] text-paper/50 transition-colors hover:bg-[#0b6b52] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                    >
                      <WhatsAppIcon className="h-3 w-3" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="text-sm leading-relaxed text-paper/45">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-paper/30">
                  {t.footer.hoursTitle}
                </p>
                <p className="mt-1">{hours ?? t.contact.hoursFallback}</p>
              </div>

              {areas.length > 0 ? (
                <p className="text-xs leading-relaxed text-paper/40">
                  {t.contact.areasLabel}: {areas.join(" · ")}
                </p>
              ) : pickupAreas ? (
                <p className="text-xs leading-relaxed text-paper/40">
                  {pickupAreas}
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-[0.7rem] leading-relaxed text-paper/45 sm:p-5">
          {t.footer.legal}
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 text-[0.68rem] text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.name}. {t.footer.rights}
          </p>
          <p className="sm:text-right">{t.footer.sampleNote}</p>
        </div>
      </div>
    </footer>
  );
}
