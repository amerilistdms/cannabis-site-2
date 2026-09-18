import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Insights on cannabis audience data, email lists, and acquisition marketing for brands, agencies, and dispensaries.",
  path: "/blog",
  image: "/images/custom/blog-hero.jpg",
});

export default function BlogPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark={false} />
        <BlogIndex />
        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
