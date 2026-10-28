import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { CartridgeFinder } from "@/components/sections/CartridgeFinder";
import { PickupBulk } from "@/components/sections/PickupBulk";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { getAreaList, isPlaceholder, site } from "@/data/site";
import { siteUrl } from "@/lib/site-url";

function buildStructuredData() {
  const areas = getAreaList();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: site.phones.map((phone) => phone.tel),
    hasMap: site.maps.searchUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1.en}, ${site.address.locality.en}`,
      addressLocality: site.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
      ...(isPlaceholder(site.address.pinCode)
        ? {}
        : { postalCode: site.address.pinCode }),
    },
    ...(areas.length > 0
      ? {
          areaServed: areas.map((area) => ({
            "@type": "Place",
            name: area,
          })),
        }
      : {}),
    ...(site.openingHours.schedule.length > 0
      ? {
          openingHoursSpecification: site.openingHours.schedule.map((rule) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: rule.days,
            opens: rule.opens,
            closes: rule.closes,
          })),
        }
      : {}),
  };
}

export default function Home() {
  const structuredData = JSON.stringify(buildStructuredData()).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyUs />
        <CartridgeFinder />
        <PickupBulk />
        <BrandsMarquee />
        <QuoteForm />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
