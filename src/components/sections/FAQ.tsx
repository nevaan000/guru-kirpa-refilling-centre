"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { cn, whatsappHref } from "@/lib/utils";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDownIcon, WhatsAppIcon } from "@/components/ui/icons";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionHeading
              eyebrow={t.faq.eyebrow}
              title={t.faq.title}
              description={t.faq.description}
            />
            <div className="mt-8 rounded-[1.5rem] border border-ink/[0.08] bg-white p-5 shadow-[0_20px_50px_-45px_rgba(11,27,58,0.55)]">
              <p className="font-display text-[1.02rem] font-semibold tracking-[-0.02em] text-ink">
                {t.faq.stillStuck}
              </p>
              <ActionLink
                href={whatsappHref(site.phones[0], t.common.waHello)}
                variant="whatsapp"
                size="md"
                className="mt-4 w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {t.faq.chatCta}
              </ActionLink>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex flex-col gap-2.5">
            {t.faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-white transition-colors duration-200",
                    isOpen ? "border-ink/20" : "border-ink/[0.08] hover:border-ink/15",
                  )}
                >
                  <h3>
                    <button
                      id={`faq-question-${index}`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-cyan sm:py-5"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="hidden font-mono text-[0.58rem] tracking-[0.14em] text-ink/25 sm:inline">
                          0{index + 1}
                        </span>
                        <span className="font-display text-[0.95rem] font-semibold leading-snug tracking-[-0.015em] text-ink sm:text-[1.02rem]">
                          {item.question}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-colors duration-200",
                          isOpen
                            ? "border-ink bg-ink text-paper"
                            : "border-ink/10 text-ink/45",
                        )}
                      >
                        <ChevronDownIcon
                          className={cn(
                            "h-4 w-4 transition-transform duration-300",
                            isOpen && "rotate-180",
                          )}
                        />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    aria-hidden={!isOpen}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-[0.86rem] leading-relaxed text-ink/60 sm:pl-[3.4rem] sm:pr-12">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
