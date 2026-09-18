import type { Metadata } from "next";
import { SplashClient } from "@/components/SplashClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Cannabis Email Lists",
    description:
      "Reach verified cannabis consumers with opt-in email leads, mailing lists, and audience targeting from AmeriList.",
    path: "/home",
    noIndex: true,
  }),
  title: {
    absolute: "Cannabis Email Lists | AmeriList",
  },
};

export default function SplashPage() {
  return <SplashClient />;
}
