import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.parentBrand,
    url: siteConfig.url,
    logo: `${siteConfig.url}/apple-icon.png`,
    email: siteConfig.email,
    description: siteConfig.description,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentBrand,
      url: "https://www.amerilist.com",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: ["English"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.parentBrand,
    },
    potentialAction: {
      "@type": "CommunicateAction",
      target: `${siteConfig.url}/contact`,
      name: "Request Free Counts",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
