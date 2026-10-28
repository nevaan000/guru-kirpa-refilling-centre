"use client";

import { useMemo, useState } from "react";
import { cartridges, sampleSearches } from "@/data/cartridges";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { fillTemplate, formatPrice, whatsappHref } from "@/lib/utils";
import { searchCartridges } from "@/lib/search";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CheckCircleIcon,
  InfoIcon,
  SearchIcon,
  TonerIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/ui/icons";

export function CartridgeFinder() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const trimmed = query.trim();
  const results = useMemo(() => searchCartridges(cartridges, query), [query]);

  return (
    <section
      id="finder"
      className="relative overflow-hidden bg-[#06101f] py-20 text-paper sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blueprint-grid absolute inset-0 opacity-50" />
        <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-brand-cyan/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-magenta/[0.08] blur-3xl" />
      </div>

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow={t.finder.eyebrow}
            title={t.finder.title}
            description={t.finder.description}
            tone="dark"
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-5 text-ink shadow-[0_40px_100px_-50px_rgba(0,0,0,0.8)] sm:p-7">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 grid h-1 grid-cols-4">
              <span className="bg-brand-cyan" />
              <span className="bg-brand-magenta" />
              <span className="bg-brand-yellow" />
              <span className="bg-ink" />
            </div>

            <label
              htmlFor="cartridge-search"
              className="mt-1 block text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-ink/45"
            >
              {t.finder.searchLabel}
            </label>
            <div className="relative mt-2.5">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/35" />
              <input
                id="cartridge-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setQuery("");
                }}
                placeholder={t.finder.placeholder}
                autoComplete="off"
                spellCheck={false}
                aria-describedby="finder-status"
                className="h-14 w-full rounded-2xl border border-ink/10 bg-paper/70 pl-12 pr-12 text-base font-medium text-ink placeholder:font-normal placeholder:text-ink/35 focus:border-brand-cyan focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-cyan/15 [&::-webkit-search-cancel-button]:appearance-none"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-ink/40 transition-colors hover:bg-ink/[0.05] hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  <XIcon className="h-4 w-4" />
                  <span className="sr-only">{t.finder.clear}</span>
                </button>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink/35">
                {t.finder.quickLabel}
              </span>
              {sampleSearches.map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => setQuery(sample)}
                  className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-[0.72rem] font-medium text-ink/70 transition-colors hover:border-brand-cyan hover:bg-brand-cyan/5 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  {sample}
                </button>
              ))}
            </div>

            <p className="mt-5 flex items-start gap-2 border-t border-ink/[0.08] pt-4 text-[0.68rem] leading-relaxed text-ink/45">
              <InfoIcon className="mt-px h-3.5 w-3.5 shrink-0" />
              {t.finder.sampleNote}
            </p>
          </div>
        </Reveal>

        <p id="finder-status" role="status" aria-live="polite" className="sr-only">
          {trimmed
            ? `${results.length} ${
                results.length === 1 ? t.finder.match : t.finder.matches
              }`
            : ""}
        </p>

        {trimmed ? (
          results.length > 0 ? (
            <div className="mt-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-medium text-paper/55">
                  <span className="font-semibold text-paper">{results.length}</span>{" "}
                  {results.length === 1 ? t.finder.match : t.finder.matches}
                </h3>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-[0.72rem] font-medium text-paper/60 underline-offset-4 transition-colors hover:text-paper hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                >
                  {t.finder.clear}
                </button>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {results.map((item) => {
                  const message = fillTemplate(t.finder.waMessage, {
                    model: trimmed,
                    cartridge: `${item.name} (${item.code})`,
                  });

                  return (
                    <article
                      key={item.id}
                      className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white p-5 text-ink shadow-[0_30px_60px_-45px_rgba(0,0,0,0.9)] sm:p-6"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-ink px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-paper">
                          {item.brand}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-paper-dim px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.12em] text-ink/55">
                          <TonerIcon className="h-3 w-3" />
                          {item.type === "ink" ? t.finder.typeInk : t.finder.typeToner}
                        </span>
                        <span
                          className={
                            item.refillAvailable
                              ? "ml-auto inline-flex items-center gap-1 rounded-full bg-[#0b6b52]/10 px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.1em] text-[#0b6b52]"
                              : "ml-auto inline-flex items-center gap-1 rounded-full bg-brand-yellow/25 px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.1em] text-ink/60"
                          }
                        >
                          <CheckCircleIcon className="h-3 w-3" />
                          {item.refillAvailable
                            ? t.finder.refillAvailable
                            : t.finder.newOnly}
                        </span>
                      </div>

                      <h4 className="mt-4 font-display text-[1.18rem] font-semibold leading-snug tracking-[-0.02em]">
                        {item.name}
                      </h4>
                      <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink/40">
                        {item.code}
                      </p>

                      <div className="mt-4">
                        <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-ink/35">
                          {t.finder.modelsLabel}
                        </p>
                        <ul className="mt-1.5 space-y-0.5 text-[0.78rem] leading-relaxed text-ink/55">
                          {item.printerModels.slice(0, 3).map((model) => (
                            <li key={model} className="truncate">
                              {model}
                            </li>
                          ))}
                        </ul>
                        {item.printerModels.length > 3 ? (
                          <p className="mt-1 text-[0.7rem] font-medium text-ink/40">
                            {fillTemplate(t.finder.moreModels, {
                              count: item.printerModels.length - 3,
                            })}
                          </p>
                        ) : null}
                      </div>

                      <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-ink/[0.08] pt-4">
                        <div>
                          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-ink/35">
                            {item.priceFrom != null
                              ? t.finder.startingFrom
                              : t.finder.priceOnRequest}
                          </p>
                          {item.priceFrom != null ? (
                            <p className="mt-0.5 font-display text-lg font-semibold text-ink">
                              {formatPrice(item.priceFrom)}
                            </p>
                          ) : null}
                        </div>
                        <ActionLink
                          href={whatsappHref(site.phones[0], message)}
                          variant="whatsapp"
                          size="sm"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          {t.finder.ask}
                        </ActionLink>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ) : (
            <Reveal className="mt-8">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-center sm:px-10">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.06] text-brand-cyan">
                  <SearchIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.02em]">
                  {t.finder.noResultsTitle}
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-paper/55">
                  {t.finder.noResultsDescription}
                </p>
                <ActionLink
                  href={whatsappHref(
                    site.phones[0],
                    fillTemplate(t.finder.waNoResult, { model: trimmed }),
                  )}
                  variant="whatsapp"
                  size="md"
                  className="mt-6"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {t.finder.noResultsCta}
                </ActionLink>
              </div>
            </Reveal>
          )
        ) : (
          <div className="mt-8 rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.02] px-6 py-9 text-center">
            <p className="text-sm text-paper/45">{t.finder.browseHint}</p>
          </div>
        )}
      </div>
    </section>
  );
}
