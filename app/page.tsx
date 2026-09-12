import { AboutHero } from "@/components/sections/about-hero";
import { Services } from "@/components/sections/services";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Contacts } from "@/components/sections/contacts";
import { siteConfig } from "@/lib/site-config";
import contacts from "@/content/contacts.json";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      founder: { "@id": `${siteConfig.url}/#person` },
      sameAs: [contacts.vk.url, contacts.telegram.url, contacts.instagram.url],
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.author,
      jobTitle: "Художник-витражист",
      url: siteConfig.url,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero />
      <Services />
      <PortfolioPreview />
      <Contacts />
    </>
  );
}
