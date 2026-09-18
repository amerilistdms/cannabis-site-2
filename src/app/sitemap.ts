import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "/home", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/list-options", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
