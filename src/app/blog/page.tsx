import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "Blog | Cannabis Email Lists",
};

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
