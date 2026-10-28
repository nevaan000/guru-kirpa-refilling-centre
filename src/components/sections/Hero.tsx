"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { telHref, whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { RegistrationMark } from "@/components/ui/PrintMarks";
import { CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons";
import { InkDrop } from "./InkDrop";

const ease: [number, number, number, number] = [0.22, 0.61, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.075, delayChildren: 0.04 },
  },
};

export function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const primary = site.phones[0];

  const title = t.hero.title;
  const highlight = t.hero.titleHighlight;
  const highlightIndex = title.indexOf(highlight);

  return (
    <section
      id="top"
      ref={heroRef}
      className="hero-wash relative overflow-hidden bg-paper pb-14 pt-8 sm:pt-12 lg:pb-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="halftone-ink absolute -right-16 top-20 h-72 w-72 opacity-25 [mask-image:radial-gradient(circle,black,transparent_72%)]" />
        <div className="absolute -left-36 top-1/3 h-96 w-96 rounded-full bg-brand-yellow/10 blur-3xl" />
        <div className="absolute right-1/3 top-0 h-64 w-64 rounded-full bg-brand-cyan/10 blur-3xl" />
        <RegistrationMark className="absolute left-[4%] top-24 hidden h-9 w-9 text-ink/[0.12] lg:block" />
        <RegistrationMark className="absolute bottom-16 right-[3%] hidden h-9 w-9 text-ink/[0.1] xl:block" />
      </div>

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/75 px-3.5 py-2 text-[0.68rem] font-medium tracking-[-0.01em] text-ink/65 shadow-[0_12px_30px_-24px_rgba(11,27,58,0.8)] backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-magenta" />
              </span>
              {t.hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="hero-title mt-6 text-balance font-display text-[clamp(2.35rem,5.6vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink"
          >
            {highlightIndex === -1 ? (
              title
            ) : (
              <>
                {title.slice(0, highlightIndex)}
                <span className="[background-image:linear-gradient(transparent_58%,rgba(255,213,0,0.55)_58%,rgba(255,213,0,0.55)_90%,transparent_90%)] [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                  {highlight}
                </span>
                {title.slice(highlightIndex + highlight.length)}
              </>
            )}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-[1rem] leading-[1.75] text-ink/65 sm:text-[1.08rem]"
          >
            {t.hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ActionLink href={telHref(primary)} size="lg" className="w-full sm:w-auto">
              <PhoneIcon className="h-5 w-5" />
              {t.hero.callNow}
            </ActionLink>
            <ActionLink
              href={whatsappHref(primary, t.common.waHello)}
              variant="whatsapp"
              size="lg"
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {t.hero.whatsapp}
            </ActionLink>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/40">
              {t.hero.phonesLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {site.phones.map((phone) => (
                <a
                  key={phone.id}
                  href={telHref(phone)}
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/65 px-3.5 py-2 text-[0.82rem] font-semibold text-ink shadow-[0_10px_25px_-24px_rgba(11,27,58,0.8)] transition-colors hover:border-ink/25 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-ink/[0.06] text-brand-magenta transition-colors group-hover:bg-brand-magenta group-hover:text-white">
                    <PhoneIcon className="h-3 w-3" />
                  </span>
                  {phone.display}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-ink/[0.07] pt-6"
          >
            {t.hero.trust.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 text-[0.76rem] font-medium text-ink/55"
              >
                <CheckIcon className="h-3.5 w-3.5 shrink-0 text-brand-cyan" />
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease }}
          className="mx-auto w-full max-w-[460px] lg:max-w-none"
        >
          <InkDrop scrollTarget={heroRef} />
        </motion.div>
      </div>
    </section>
  );
}
