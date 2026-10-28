"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { cn, telHref, whatsappHref } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  CheckCircleIcon,
  PhoneIcon,
  SendIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";

type FieldName = "name" | "phone" | "model";
type Errors = Partial<Record<FieldName, string>>;

export function QuoteForm() {
  const { t } = useLanguage();
  const primary = site.phones[0];
  const [values, setValues] = useState({ name: "", phone: "", model: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sentHref, setSentHref] = useState<string | null>(null);
  const [opened, setOpened] = useState(false);

  const update = (field: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (field === "name" || field === "phone" || field === "model") {
      setErrors((current) =>
        current[field] ? { ...current, [field]: undefined } : current,
      );
    }
    if (sentHref) {
      setSentHref(null);
      setOpened(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    cn(
      "h-12 w-full rounded-xl border bg-paper/60 px-3.5 text-sm text-ink transition placeholder:text-ink/30 focus:bg-white focus:outline-none focus:ring-4",
      hasError
        ? "border-[#b42318] focus:border-[#b42318] focus:ring-[#b42318]/10"
        : "border-ink/10 focus:border-brand-cyan focus:ring-brand-cyan/15",
    );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const next: Errors = {};
    if (!values.name.trim()) next.name = t.quote.errors.name;
    if (values.phone.replace(/\D/g, "").length < 10) next.phone = t.quote.errors.phone;
    if (!values.model.trim()) next.model = t.quote.errors.model;
    setErrors(next);

    const firstError = (Object.keys(next) as FieldName[])[0];
    if (firstError) {
      document.getElementById(`quote-${firstError}`)?.focus();
      return;
    }

    const lines = [
      t.quote.waIntro,
      `${t.quote.name}: ${values.name.trim()}`,
      `${t.quote.phone}: ${values.phone.trim()}`,
      `${t.quote.model}: ${values.model.trim()}`,
      values.message.trim() ? `${t.quote.message}: ${values.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const href = whatsappHref(primary, lines);
    setSentHref(href);
    window.open(href, "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="blueprint-grid absolute inset-0 opacity-50" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-brand-cyan/15 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-brand-yellow/[0.07] blur-3xl" />
      </div>

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow={t.quote.eyebrow}
            title={t.quote.title}
            description={t.quote.description}
            tone="dark"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <Reveal>
            <div className="flex flex-col gap-3">
              {t.quote.sidePoints.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-cyan" />
                  <div>
                    <h3 className="text-[0.9rem] font-semibold leading-snug">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-[0.8rem] leading-relaxed text-paper/55">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={telHref(primary)}
              className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.07] text-brand-cyan">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-paper/40">
                  {t.contact.phoneLabel}
                </span>
                <span className="mt-0.5 block text-[0.95rem] font-semibold text-paper">
                  {primary.display}
                </span>
              </span>
            </a>
          </Reveal>

          <Reveal>
            <form
              noValidate
              onSubmit={onSubmit}
              className="rounded-[1.75rem] bg-white p-5 text-ink shadow-[0_40px_100px_-50px_rgba(0,0,0,0.85)] sm:p-7"
            >
              <div className="flex items-center justify-between gap-3 border-b border-ink/[0.08] pb-4">
                <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink/45">
                  <WhatsAppIcon className="h-4 w-4 text-[#0b6b52]" />
                  WhatsApp
                </span>
                <span className="text-[0.62rem] text-ink/35">* {t.quote.required}</span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="quote-name"
                    className="block text-[0.75rem] font-semibold text-ink/70"
                  >
                    {t.quote.name} <span className="text-brand-magenta">*</span>
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={(event) => update("name", event.target.value)}
                    placeholder={t.quote.namePlaceholder}
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "quote-name-error" : undefined}
                    className={cn("mt-1.5", inputClass(Boolean(errors.name)))}
                  />
                  {errors.name ? (
                    <p
                      id="quote-name-error"
                      role="alert"
                      className="mt-1.5 text-[0.7rem] font-medium text-[#b42318]"
                    >
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="quote-phone"
                    className="block text-[0.75rem] font-semibold text-ink/70"
                  >
                    {t.quote.phone} <span className="text-brand-magenta">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={values.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    placeholder={t.quote.phonePlaceholder}
                    autoComplete="tel"
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                    className={cn("mt-1.5", inputClass(Boolean(errors.phone)))}
                  />
                  {errors.phone ? (
                    <p
                      id="quote-phone-error"
                      role="alert"
                      className="mt-1.5 text-[0.7rem] font-medium text-[#b42318]"
                    >
                      {errors.phone}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="quote-model"
                  className="block text-[0.75rem] font-semibold text-ink/70"
                >
                  {t.quote.model} <span className="text-brand-magenta">*</span>
                </label>
                <input
                  id="quote-model"
                  name="model"
                  type="text"
                  value={values.model}
                  onChange={(event) => update("model", event.target.value)}
                  placeholder={t.quote.modelPlaceholder}
                  autoComplete="off"
                  required
                  aria-invalid={Boolean(errors.model)}
                  aria-describedby={errors.model ? "quote-model-error" : undefined}
                  className={cn("mt-1.5", inputClass(Boolean(errors.model)))}
                />
                {errors.model ? (
                  <p
                    id="quote-model-error"
                    role="alert"
                    className="mt-1.5 text-[0.7rem] font-medium text-[#b42318]"
                  >
                    {errors.model}
                  </p>
                ) : null}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="quote-message"
                  className="flex items-baseline justify-between text-[0.75rem] font-semibold text-ink/70"
                >
                  {t.quote.message}
                  <span className="text-[0.62rem] font-normal text-ink/35">
                    {t.quote.optional}
                  </span>
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder={t.quote.messagePlaceholder}
                  className="mt-1.5 w-full resize-y rounded-xl border border-ink/10 bg-paper/60 px-3.5 py-3 text-sm text-ink transition placeholder:text-ink/30 focus:border-brand-cyan focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-cyan/15"
                />
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0b6b52] px-5 text-sm font-semibold text-white shadow-[0_18px_35px_-22px_rgba(11,107,82,0.9)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#085540] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
              >
                <SendIcon className="h-5 w-5" />
                {t.quote.submit}
              </button>

              <p className="mt-3 text-center text-[0.68rem] leading-relaxed text-ink/40">
                {t.quote.note}
              </p>

              {sentHref ? (
                <div
                  role="status"
                  className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#0b6b52]/20 bg-[#0b6b52]/[0.07] p-3.5 text-[0.75rem] leading-relaxed text-[#0b6b52]"
                >
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>
                    {opened ? <span className="block">{t.quote.waOpened}</span> : null}
                    <a
                      href={sentHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2"
                    >
                      {t.quote.waFallback}
                    </a>
                  </p>
                </div>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
