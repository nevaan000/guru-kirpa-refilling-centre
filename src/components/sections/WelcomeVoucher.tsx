"use client";

import { isPlaceholder, isVoucherLive, site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { cn, whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ColorBar, SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  GiftIcon,
  InfoIcon,
  SparklesIcon,
  TagIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

function VoucherValue({ value }: { value: string }) {
  const { t } = useLanguage();
  const pending = isPlaceholder(value);

  return (
    <span
      className={cn(
        "text-[0.82rem] font-semibold leading-snug",
        pending ? "text-ink/40" : "text-ink",
      )}
    >
      {pending ? t.voucher.toBeConfirmed : value}
    </span>
  );
}

export function WelcomeVoucher() {
  const { t } = useLanguage();
  const voucher = site.voucher;
  const active = isVoucherLive();
  const claimHref = whatsappHref(site.phones[0], t.voucher.waMessage);
  const generalHref = whatsappHref(site.phones[0], t.voucher.waGeneral);

  const details = [
    { label: t.voucher.discountLabel, value: voucher.discount },
    { label: t.voucher.minimumLabel, value: voucher.minimumPurchase },
    { label: t.voucher.validityLabel, value: voucher.validity },
    { label: t.voucher.eligibilityLabel, value: voucher.eligibility },
  ];

  return (
    <section
      id="welcome-voucher"
      aria-labelledby="welcome-voucher-heading"
      className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-10 h-80 w-80 rounded-full bg-brand-cyan/[0.08] blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-brand-yellow/[0.12] blur-3xl" />
      </div>

      <div className="container-page relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            titleId="welcome-voucher-heading"
            eyebrow={t.voucher.eyebrow}
            title={t.voucher.title}
            description={t.voucher.description}
          />

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-yellow/60 bg-brand-yellow/15 px-3.5 py-1.5 text-[0.68rem] font-semibold text-ink/70">
            <SparklesIcon className="h-3.5 w-3.5" />
            {t.voucher.previewTag}
          </div>

          <Stagger className="mt-8 space-y-4">
            {t.voucher.steps.map((step, index) => (
              <StaggerItem key={`voucher-step-${index}`}>
                <div className="flex gap-3.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-[0.7rem] font-semibold text-paper">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[0.98rem] font-semibold tracking-[-0.01em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-[0.82rem] leading-relaxed text-ink/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ActionLink href="#quote" variant="primary" size="md">
              <TagIcon className="h-4 w-4 text-brand-cyan" />
              {t.voucher.quoteCta}
            </ActionLink>
            <a
              href={generalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[0.82rem] font-semibold text-[#0b6b52] transition-colors hover:text-[#085540]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="underline decoration-[#0b6b52]/30 underline-offset-4 transition-colors group-hover:decoration-[#0b6b52]">
                {t.voucher.contactCta}
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <article
            aria-labelledby="welcome-voucher-card-title"
            className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-ink/10 bg-white shadow-[0_40px_90px_-50px_rgba(11,27,58,0.7)]"
          >
            <div className="relative overflow-hidden rounded-t-[2rem] bg-ink px-6 pb-7 pt-6 text-paper sm:px-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="blueprint-grid absolute inset-0 opacity-30" />
                <div className="absolute -right-14 -top-16 h-44 w-44 rounded-full bg-brand-cyan/15 blur-3xl" />
              </div>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                    {site.name}
                  </p>
                  <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-paper/40">
                    {t.voucher.cardSubtitle}
                  </p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-yellow text-ink shadow-[0_12px_30px_-14px_rgba(255,213,0,0.8)]">
                  <GiftIcon className="h-6 w-6" />
                </span>
              </div>

              <div className="relative mt-6 flex items-end justify-between gap-4">
                <h3
                  id="welcome-voucher-card-title"
                  className="font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-paper sm:text-[2.25rem]"
                >
                  {t.voucher.cardTitle}
                </h3>
                <ColorBar tone="dark" className="mb-2" />
              </div>
            </div>

            <div className="relative px-5 pb-6 pt-8 sm:px-8 sm:pb-8">
              <span
                aria-hidden="true"
                className="absolute -left-3.5 top-0 h-7 w-7 -translate-y-1/2 rounded-full bg-paper"
              />
              <span
                aria-hidden="true"
                className="absolute -right-3.5 top-0 h-7 w-7 -translate-y-1/2 rounded-full bg-paper"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-5 top-0 border-t border-dashed border-ink/15 sm:inset-x-8"
              />

              <div className="grid gap-2.5 sm:grid-cols-2">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-xl border border-ink/[0.07] bg-paper/60 px-3.5 py-3"
                  >
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-ink/35">
                      {detail.label}
                    </p>
                    <div className="mt-1">
                      <VoucherValue value={detail.value} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-2xl border border-dashed border-ink/20 bg-paper px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-ink/35">
                      {active
                        ? t.voucher.codeLabel
                        : t.voucher.sampleCodeLabel}
                    </p>
                    <p className="mt-0.5 font-mono text-[1.05rem] font-semibold tracking-[0.18em] text-ink">
                      {voucher.code}
                    </p>
                  </div>
                  <TagIcon className="h-5 w-5 shrink-0 text-brand-magenta" />
                </div>
              </div>

              <div className="mt-3 flex flex-col items-start gap-1.5 rounded-xl border border-ink/[0.07] bg-white px-3.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <p className="flex items-center gap-2 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-ink/35">
                  <CheckCircleIcon className="h-3.5 w-3.5 text-ink/30" />
                  {t.voucher.oneTimeLabel}
                </p>
                <VoucherValue value={voucher.oneTimeUse} />
              </div>

              {active ? null : (
                <p className="mt-3 flex gap-2 rounded-xl border border-brand-yellow/40 bg-brand-yellow/15 px-3.5 py-2.5 text-[0.72rem] leading-relaxed text-ink/65">
                  <InfoIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink/50" />
                  {t.voucher.previewNote}
                </p>
              )}

              <ActionLink
                href={claimHref}
                variant="whatsapp"
                size="lg"
                className="mt-5 w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t.voucher.claimCta}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </ActionLink>

              <p className="mt-3 text-center text-[0.68rem] leading-relaxed text-ink/45">
                {t.voucher.claimNote}
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
