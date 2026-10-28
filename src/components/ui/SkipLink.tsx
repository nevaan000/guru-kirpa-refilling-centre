"use client";

import { useLanguage } from "@/lib/i18n";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
    >
      {t.nav.skipToContent}
    </a>
  );
}
