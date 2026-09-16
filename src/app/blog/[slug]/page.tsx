import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";
import { getPost, posts, type ContentBlock, type Post } from "@/data/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog | Cannabis Email Lists" };
  return {
    title: `${post.title} | Cannabis Email Lists`,
    description: post.excerpt,
  };
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="text-2xl font-bold text-blue">{block.text}</h2>;
    case "paragraph":
      return <p className="text-base leading-6 text-foreground">{block.text}</p>;
    case "lead":
      return <p className="text-base font-bold leading-6 text-foreground">{block.text}</p>;
    case "list":
      return (
        <ul className="list-disc space-y-1 pl-6 text-base leading-6 text-foreground">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="font-serif text-base italic leading-[22px] tracking-[0.16px] text-green">
          {block.text}
        </p>
      );
    case "image":
      return (
        <div className="relative h-[240px] w-full overflow-hidden md:h-[368px]">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 594px"
            quality={90}
          />
        </div>
      );
    default:
      return null;
  }
}

function SidebarCard({ post }: { post: Post }) {
  return (
    <article className="flex w-full flex-col gap-8">
      <Link href={`/blog/${post.slug}`} className="relative block h-[200px] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="320px"
        />
      </Link>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-serif text-base italic text-blue">{post.category}</p>
          <h3 className="text-lg font-bold leading-snug text-foreground">
            <Link href={`/blog/${post.slug}`} className="hover:text-green">
              {post.title}
            </Link>
          </h3>
        </div>
        <p className="line-clamp-3 text-base leading-6 text-foreground">{post.excerpt}</p>
      </div>
    </article>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug);
  const heroImage = post.image;

  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark={false} />
        <section className="bg-frost pt-20">
          <div
            className={`mx-auto grid w-full max-w-[1120px] gap-12 px-5 py-12 md:px-10 md:py-16 ${
              related.length > 0
                ? "lg:grid-cols-[minmax(0,594px)_320px] lg:justify-between lg:gap-10"
                : "lg:max-w-[594px]"
            }`}
          >
            <article data-hero className="min-w-0 lg:col-span-1">
              <div className="mb-6 flex flex-col gap-2 md:mb-6">
                <p className="font-serif text-xl italic text-green">{post.category}</p>
                <h1 className="text-[28px] font-bold leading-tight text-foreground md:text-[32px]">
                  {post.title}
                </h1>
              </div>
              <p className="mb-10 text-base leading-6 text-foreground">{post.excerpt}</p>

              <div className="relative mb-14 h-[240px] w-full overflow-hidden md:h-[368px]">
                <Image
                  src={heroImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 594px"
                  quality={90}
                  priority
                />
              </div>

              <div data-reveal className="flex flex-col gap-3">
                {post.content.map((block, index) => (
                  <div
                    key={`${block.type}-${index}`}
                    data-reveal-child
                    className={
                      block.type === "heading" || block.type === "image"
                        ? index === 0
                          ? undefined
                          : "mt-11"
                        : undefined
                    }
                  >
                    <Block block={block} />
                  </div>
                ))}
              </div>

              <p data-reveal className="mt-14">
                <Link href="/blog" className="text-blue hover:underline">
                  ← Back to blog
                </Link>
              </p>
            </article>

            {related.length > 0 && (
              <aside data-reveal className="min-w-0 lg:pt-[133px]">
                <h2 data-reveal-child className="mb-12 text-2xl font-bold text-blue">
                  Discover More
                </h2>
                <div className="flex flex-col gap-[70px]">
                  {related.map((item) => (
                    <div key={item.slug} data-reveal-child>
                      <SidebarCard post={item} />
                    </div>
                  ))}
                </div>
              </aside>
            )}
          </div>
        </section>
        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
