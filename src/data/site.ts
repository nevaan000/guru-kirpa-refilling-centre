/**
 * Guru Kirpa Refilling Centre — business details.
 *
 * Everything a shop owner might want to change lives in this file.
 * Anything still wrapped in [SQUARE BRACKETS] is an unfilled placeholder:
 * it is shown as an obvious TODO in the config and is never rendered as
 * made-up information on the website.
 */

export type Locale = "en" | "hi";

export type LocalizedText = Record<Locale, string>;

export type PhoneNumber = {
  id: "primary" | "secondary";
  display: string;
  /** Used for tel: links. */
  tel: string;
  /** Digits only, used for wa.me links. */
  whatsapp: string;
};

export type OpeningHoursRule = {
  days: string[];
  /** 24-hour time, e.g. "10:00". */
  opens: string;
  /** 24-hour time, e.g. "20:00". */
  closes: string;
};

export type VoucherConfig = {
  /** The offer is only presented as live once this is true and every value is filled. */
  active: boolean;
  code: string;
  discount: string;
  minimumPurchase: string;
  validity: string;
  eligibility: string;
  oneTimeUse: string;
};

const address = {
  line1: {
    en: "E-Block, DDA Flats",
    hi: "ई-ब्लॉक, डीडीए फ्लैट्स",
  } satisfies LocalizedText,
  locality: {
    en: "New Ranjeet Nagar",
    hi: "न्यू रंजीत नगर",
  } satisfies LocalizedText,
  city: {
    en: "New Delhi",
    hi: "नई दिल्ली",
  } satisfies LocalizedText,
  region: "Delhi",
  country: "IN",
  /** TODO: replace with the shop's PIN code. */
  pinCode: "[PINCODE]",
};

/**
 * True for values that still need to be filled in, e.g. "[PINCODE]".
 * These are hidden from visitors instead of being shown as fake details.
 */
export function isPlaceholder(value: string | number | null | undefined): boolean {
  if (typeof value === "number") return false;
  if (!value) return true;
  return /\[[^\]]*\]/.test(value);
}

const mapQuery = [
  address.line1.en,
  address.locality.en,
  address.city.en,
  isPlaceholder(address.pinCode) ? null : address.pinCode,
]
  .filter(Boolean)
  .join(", ");

export const site = {
  name: "Guru Kirpa Refilling Centre",
  legalName: "Guru Kirpa Refilling Centre",
  description:
    "Printer cartridge refilling, new cartridges and toner refilling in New Ranjeet Nagar, New Delhi. Help for homes, students, shops, offices and schools.",

  locality: address.locality.en,
  city: address.city.en,
  address,

  /** Both numbers reach the shop. The first one is the main WhatsApp number. */
  phones: [
    {
      id: "primary",
      display: "+91 93124 54646",
      tel: "+919312454646",
      whatsapp: "919312454646",
    },
    {
      id: "secondary",
      display: "+91 99530 29604",
      tel: "+919953029604",
      whatsapp: "919953029604",
    },
  ] satisfies PhoneNumber[],

  maps: {
    query: mapQuery,
    /** Key-free Google Maps embed, good enough until the exact pin is set. */
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=15&output=embed`,
    searchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
  },

  /**
   * TODO: add the real days/times here, in both languages, and add the same
   * hours to `schedule` as 24-hour rules to enable opening hours in the
   * LocalBusiness structured data.
   * Example:
   *   display: { en: "Mon–Sat, 10am–8pm", hi: "सोम–शनि, सुबह 10 – रात 8" }
   *   schedule: [{ days: ["Monday", ..., "Saturday"], opens: "10:00", closes: "20:00" }]
   */
  openingHours: {
    display: {
      en: "[DAYS AND TIMES, AND WHICH DAY IS CLOSED]",
      hi: "[DAYS AND TIMES, AND WHICH DAY IS CLOSED]",
    } satisfies LocalizedText,
    schedule: [] as OpeningHoursRule[],
  },

  /**
   * TODO: replace with the localities the shop actually covers.
   * Example: ["New Ranjeet Nagar", "Karol Bagh", "Patel Nagar"]
   */
  areasServed: ["[NEARBY AREAS YOU SERVE]"],

  /** Confirmed by the shop: they deliver. Coverage areas are still a TODO. */
  pickupDelivery: {
    available: true,
    /** TODO: replace with the areas covered for pickup and delivery. */
    areas: "[AREAS WE PICK UP FROM & DELIVER TO]",
  },

  /** TODO: put a number here to show "Serving New Ranjeet Nagar for X years". */
  yearsInBusiness: "[NUMBER OF YEARS, or leave blank]" as number | string,

  /**
   * First-time customer welcome voucher.
   *
   * Until every [OWNER TO CONFIRM] value below is replaced and `active` is
   * true, the website shows a clearly labelled promotional preview and does
   * not promise a discount. Keep the sample code WELCOME-GK only while the
   * voucher is a preview.
   */
  voucher: {
    active: false,
    /** TODO: replace with the real voucher code before activating. */
    code: "WELCOME-GK",
    /** TODO: e.g. "10% off" or "₹50 off". */
    discount: "[OWNER TO CONFIRM]",
    /** TODO: e.g. "₹300". */
    minimumPurchase: "[OWNER TO CONFIRM]",
    /** TODO: e.g. "31 December 2026" or "30 days from issue". */
    validity: "[OWNER TO CONFIRM]",
    /** TODO: e.g. "Any cartridge refill or new cartridge". */
    eligibility: "[OWNER TO CONFIRM]",
    /** TODO: confirm whether it is once per customer. */
    oneTimeUse: "[OWNER TO CONFIRM]",
  } as VoucherConfig,

  supportedBrands: ["HP", "Canon", "Epson", "Brother", "Samsung"],
} as const;

export const primaryPhone = site.phones[0];
export const secondaryPhone = site.phones[1];

export function getAddressLines(locale: Locale): string[] {
  const pin = isPlaceholder(site.address.pinCode) ? null : site.address.pinCode;
  return [
    site.address.line1[locale],
    [site.address.locality[locale], site.address.city[locale], pin]
      .filter(Boolean)
      .join(", "),
  ];
}

export function getAreaList(): string[] {
  return site.areasServed.filter((area) => !isPlaceholder(area));
}

export function getPickupAreas(): string | null {
  return isPlaceholder(site.pickupDelivery.areas) ? null : site.pickupDelivery.areas;
}

export function getOpeningHours(locale: Locale): string | null {
  const display = site.openingHours.display[locale];
  return isPlaceholder(display) ? null : display;
}

export function getYearsInBusiness(): number | null {
  return typeof site.yearsInBusiness === "number" ? site.yearsInBusiness : null;
}

/**
 * The voucher is only treated as live once the owner switches it on AND every
 * offer detail is filled in. Otherwise the site keeps showing the preview.
 */
export function isVoucherLive(): boolean {
  const voucher = site.voucher;
  return (
    voucher.active &&
    !isPlaceholder(voucher.code) &&
    !isPlaceholder(voucher.discount) &&
    !isPlaceholder(voucher.minimumPurchase) &&
    !isPlaceholder(voucher.validity) &&
    !isPlaceholder(voucher.eligibility) &&
    !isPlaceholder(voucher.oneTimeUse)
  );
}
