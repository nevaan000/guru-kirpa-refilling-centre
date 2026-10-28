# Guru Kirpa Refilling Centre

Website for a printer cartridge and toner refilling shop in New Ranjeet Nagar, New Delhi. Built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. Bilingual (English/Hindi), WhatsApp-first, no backend.

## Where to edit

- `src/data/site.ts` — phones, address, hours, service areas, pickup/delivery details. Anything in `[SQUARE BRACKETS]` is a placeholder and is hidden from the website until replaced.
- `src/data/cartridges.ts` — cartridge finder catalogue. Sample entries are marked as samples; add real models, refill availability, and optional starting prices.
- `src/data/translations.ts` — all visible English and Hindi copy.
- `src/app/globals.css` — colour tokens and global styles.
- `src/app/layout.tsx` — metadata and page title/description.

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run lint
npm run build
npm start
```

## Deployment

Deployed on Vercel. The canonical URL falls back to `https://guru-kirpa-refilling-centre.vercel.app`; set `NEXT_PUBLIC_SITE_URL` to override it for metadata, sitemap, and structured data.

## Notes

- The quote form has no backend: it opens WhatsApp with the details pre-filled.
- The Google Map embed is lazy-loaded and key-free.
- Brand names are shown only to indicate cartridge compatibility; the business is not affiliated with any printer brand.
