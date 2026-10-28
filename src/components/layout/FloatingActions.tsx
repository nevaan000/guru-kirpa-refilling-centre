"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { telHref, whatsappHref } from "@/lib/utils";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";

export function FloatingActions() {
  const { t } = useLanguage();
  const primary = site.phones[0];

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={whatsappHref(primary, t.common.waHello)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.hero.whatsapp}
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 text-ink shadow-[0_18px_40px_-12px_rgba(11,27,58,0.55)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#1fc35c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="h-6 w-6 shrink-0" />
          <span className="text-sm font-semibold">{t.hero.whatsapp}</span>
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 px-3 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl md:hidden">
        <div className="flex gap-2">
          <a
            href={telHref(primary)}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-white transition-colors hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
          >
            <PhoneIcon className="h-5 w-5" />
            {t.nav.call}
          </a>
          <a
            href={whatsappHref(primary, t.common.waHello)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.hero.whatsapp}
            className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366] text-ink shadow-[0_12px_30px_-12px_rgba(11,27,58,0.5)] transition-colors hover:bg-[#1fc35c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </>
  );
}
