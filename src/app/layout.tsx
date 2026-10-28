import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Devanagari, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/site-url";
import { Providers } from "@/components/Providers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SkipLink } from "@/components/ui/SkipLink";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

const pageTitle =
  "Printer Cartridge Refilling in New Ranjeet Nagar, New Delhi | Guru Kirpa Refilling Centre";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  category: "printing services",
  keywords: [
    "printer cartridge refilling",
    "cartridge refilling New Ranjeet Nagar",
    "toner refilling New Delhi",
    "ink cartridge refill Delhi",
    "new printer cartridges",
    "HP cartridge refill",
    "Canon cartridge refill",
    "Epson ink refill",
    "Guru Kirpa Refilling Centre",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    url: "/",
    siteName: site.name,
    title: pageTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1b3a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${devanagari.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Providers>
          <ScrollProgress />
          <SmoothScroll />
          <SkipLink />
          <SiteHeader />
          {children}
          <SiteFooter />
          <FloatingActions />
        </Providers>
        <noscript>
          <style>{`
            [data-reveal],
            [data-stagger] > * {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
      </body>
    </html>
  );
}
