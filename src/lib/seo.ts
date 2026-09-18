import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
