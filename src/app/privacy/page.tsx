import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Cannabis Email Lists",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      summary="This policy explains how Cannabis Email Lists, a division of AmeriList, handles information collected through our website and marketing services."
      sections={[
        {
          heading: "Information we collect",
          body: "We may collect contact details you submit through consultation requests, as well as technical data such as browser type and pages visited to improve site performance.",
        },
        {
          heading: "How we use information",
          body: "Information is used to respond to inquiries, deliver audience data consultations, improve our services, and communicate relevant updates when you opt in.",
        },
        {
          heading: "Data partners and lists",
          body: "Audience data products are compiled from compliant sources and intended for lawful marketing use. Clients are responsible for using lists in accordance with applicable regulations.",
        },
        {
          heading: "Contact",
          body: "For privacy requests related to this website, contact our team through the Contact page and include “Privacy Request” in your message.",
        },
      ]}
    />
  );
}
