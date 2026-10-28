const FALLBACK_URL = "https://guru-kirpa-refilling-centre.vercel.app";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return `https://${vercelProduction}`;

  const vercelPreview = process.env.VERCEL_URL;
  if (vercelPreview) return `https://${vercelPreview}`;

  if (process.env.NODE_ENV === "production") return FALLBACK_URL;

  return "http://localhost:3000";
}

export const siteUrl = getSiteUrl();
