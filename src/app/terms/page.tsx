import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service | Cannabis Email Lists",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      summary="By using this website, you agree to these terms governing access to Cannabis Email Lists content and service inquiries."
      sections={[
        {
          heading: "Website use",
          body: "Content on this site is for general information about cannabis audience data and marketing solutions. It does not constitute legal, financial, or compliance advice.",
        },
        {
          heading: "Service engagements",
          body: "List counts, pricing, and deliverables are confirmed separately for each client engagement. Availability can vary by geography and audience criteria.",
        },
        {
          heading: "Acceptable use",
          body: "You agree not to misuse website materials, attempt unauthorized access, or use our services for unlawful spam or deceptive marketing practices.",
        },
        {
          heading: "Changes",
          body: "We may update these terms periodically. Continued use of the site after changes constitutes acceptance of the revised terms.",
        },
      ]}
    />
  );
}
