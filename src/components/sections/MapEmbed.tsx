"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { MapPinIcon } from "@/components/ui/icons";

export function MapEmbed() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[380px] w-full overflow-hidden rounded-[1.75rem] border border-ink/10 bg-paper-dim shadow-[0_24px_60px_-50px_rgba(11,27,58,0.7)] sm:min-h-[440px] lg:h-full lg:min-h-[520px]"
    >
      {visible ? (
        <iframe
          src={site.maps.embedUrl}
          title={t.contact.mapTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div className="paper-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-cyan/15 blur-3xl"
          />
          <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-ink text-paper">
            <MapPinIcon className="h-6 w-6" />
          </span>
          <p className="relative font-display text-lg font-semibold tracking-[-0.02em] text-ink">
            {site.locality}, {site.city}
          </p>
          <p className="relative text-[0.72rem] text-ink/45">{t.contact.mapLoading}</p>
        </div>
      )}
    </div>
  );
}
