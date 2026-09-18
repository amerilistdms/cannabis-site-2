import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { ScrollToTop } from "@/components/ScrollToTop";
import { absoluteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.parentBrand}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "cannabis email lists",
    "cannabis mailing lists",
    "cannabis marketing lists",
    "cannabis leads",
    "CBD email lists",
    "dispensary marketing",
    "cannabis audience data",
    "AmeriList",
  ],
  authors: [{ name: siteConfig.parentBrand, url: "https://www.amerilist.com" }],
  creator: siteConfig.parentBrand,
  publisher: siteConfig.parentBrand,
  category: "marketing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.parentBrand}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — cannabis audience data and lead lists`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.parentBrand}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: absoluteUrl("/home"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${fraunces.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased font-sans">
        <JsonLd />
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
