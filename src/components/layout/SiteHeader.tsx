"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { cn, telHref, whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Logo } from "@/components/ui/Logo";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/ui/icons";

export function SiteHeader() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 12;
      setScrolled((current) => (current === next ? current : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#finder", label: t.nav.finder },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "sticky top-0 z-[80] border-b transition-all duration-300",
        solid
          ? "border-ink/10 bg-paper/90 shadow-[0_18px_40px_-30px_rgba(11,27,58,0.55)] backdrop-blur-xl"
          : "border-transparent bg-paper/60 backdrop-blur-md",
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-3 sm:h-[80px]">
        <a
          href="#top"
          aria-label={site.name}
          className="shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
          onClick={() => setOpen(false)}
        >
          <Logo className="[&_svg]:h-9 [&_svg]:w-9 sm:[&_svg]:h-11 sm:[&_svg]:w-11" />
        </a>

        <nav aria-label={t.nav.mainMenu} className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link rounded-full px-3 py-2 text-[0.82rem] font-medium text-ink/70 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="hidden items-center gap-2 border-r border-ink/10 pr-3 xl:flex">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink/[0.05] text-ink/55">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col">
              {site.phones.map((phone) => (
                <a
                  key={phone.id}
                  href={telHref(phone)}
                  className="text-[0.7rem] font-medium leading-[1.45] text-ink/60 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          <LanguageToggle />

          <div className="hidden md:block">
            <ActionLink href="#quote" size="sm">
              {t.nav.quote}
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ActionLink>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-mobile-menu"
            onClick={() => setOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan lg:hidden"
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            <span className="sr-only">{open ? t.nav.closeMenu : t.nav.openMenu}</span>
          </button>
        </div>
      </div>

      {typeof document === "undefined"
        ? null
        : createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  id="site-mobile-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="fixed inset-x-0 bottom-0 top-[72px] z-[75] overflow-y-auto border-t border-ink/10 bg-paper/95 backdrop-blur-xl sm:top-[80px] lg:hidden"
                >
                  <div className="container-page flex min-h-full flex-col pb-10 pt-7">
                    <nav aria-label={t.nav.mainMenu} className="flex flex-col">
                      {links.map((link, index) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between border-b border-ink/10 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="font-mono text-[0.62rem] tracking-[0.15em] text-ink/35">
                              0{index + 1}
                            </span>
                            <span className="font-display text-2xl font-medium tracking-[-0.03em] text-ink">
                              {link.label}
                            </span>
                          </span>
                          <ChevronDownIcon className="h-5 w-5 -rotate-90 text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-ink/60" />
                        </a>
                      ))}
                    </nav>

                    <div className="mt-7 grid gap-3">
                      <ActionLink href="#quote" size="lg" onClick={() => setOpen(false)}>
                        {t.nav.quote}
                        <ArrowRightIcon className="h-4 w-4" />
                      </ActionLink>
                      <ActionLink
                        href={whatsappHref(site.phones[0], t.common.waHello)}
                        variant="whatsapp"
                        size="lg"
                      >
                        <WhatsAppIcon className="h-5 w-5" />
                        {t.hero.whatsapp}
                      </ActionLink>
                    </div>

                    <div className="mt-8 rounded-[1.5rem] border border-ink/10 bg-white/70 p-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink/40">
                        {t.contact.phoneLabel}
                      </p>
                      <div className="mt-3 divide-y divide-ink/10">
                        {site.phones.map((phone) => (
                          <div
                            key={phone.id}
                            className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
                          >
                            <a
                              href={telHref(phone)}
                              className="text-[0.95rem] font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                            >
                              {phone.display}
                            </a>
                            <div className="flex items-center gap-2">
                              <a
                                href={telHref(phone)}
                                aria-label={`${t.common.call} ${phone.display}`}
                                className="grid h-9 w-9 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                              >
                                <PhoneIcon className="h-4 w-4" />
                              </a>
                              <a
                                href={whatsappHref(phone, t.common.waHello)}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${t.common.whatsapp} ${phone.display}`}
                                className="grid h-9 w-9 place-items-center rounded-full bg-[#0b6b52] text-white transition-colors hover:bg-[#085540] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                              >
                                <WhatsAppIcon className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-auto pt-8 text-center text-[0.65rem] leading-relaxed text-ink/35">
                      {site.locality}, {site.city}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )}
    </header>
  );
}
