"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { LogoMark } from "@/components/ui/Logo";
import { ColorBar } from "@/components/ui/SectionHeading";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/icons";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main
      id="main"
      tabIndex={-1}
      className="hero-wash relative flex flex-1 items-center overflow-hidden bg-paper py-24 outline-none"
    >
      <div className="container-page text-center">
        <LogoMark className="mx-auto h-16 w-16" />
        <div className="mt-8 flex items-center justify-center gap-3">
          <ColorBar />
          <p className="font-mono text-[0.7rem] font-medium tracking-[0.3em] text-ink/35">
            404
          </p>
          <ColorBar />
        </div>
        <h1 className="mx-auto mt-5 max-w-2xl text-balance font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-ink">
          {t.notFound.title}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-[0.98rem] leading-relaxed text-ink/60">
          {t.notFound.description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ActionLink href="/" size="lg" className="w-full sm:w-auto">
            {t.notFound.home}
            <ArrowRightIcon className="h-4 w-4" />
          </ActionLink>
          <ActionLink
            href={whatsappHref(site.phones[0], t.common.waHello)}
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {t.hero.whatsapp}
          </ActionLink>
        </div>
        <p className="mt-10 text-[0.72rem] uppercase tracking-[0.16em] text-ink/30">
          {site.locality} · {site.city}
        </p>
      </div>
    </main>
  );
}
