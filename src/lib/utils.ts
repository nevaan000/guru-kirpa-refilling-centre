import type { PhoneNumber } from "@/data/site";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function telHref(phone: PhoneNumber): string {
  return `tel:${phone.tel}`;
}

export function whatsappHref(phone: PhoneNumber, message?: string): string {
  const base = `https://wa.me/${phone.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function fillTemplate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
