import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Cookie Policy | Cannabis Email Lists",
};

export default function CookiesPage() {
  return (
    <LegalShell
      title="Cookie Policy"
      summary="This site may use cookies and similar technologies to support core functionality, analytics, and improved browsing experience."
      sections={[
        {
          heading: "What are cookies",
          body: "Cookies are small text files stored on your device that help websites remember preferences and understand how pages are used.",
        },
        {
          heading: "How we use cookies",
          body: "We may use essential cookies required for site operation and optional analytics cookies to understand traffic patterns and improve content.",
        },
        {
          heading: "Your choices",
          body: "You can control cookies through your browser settings. Disabling some cookies may affect site functionality.",
        },
      ]}
    />
  );
}
