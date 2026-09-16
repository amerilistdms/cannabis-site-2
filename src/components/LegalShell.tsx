import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";

export function LegalShell({
  title,
  summary,
  sections,
}: {
  title: string;
  summary: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark={false} />
        <section className="bg-white pt-20">
          <div data-reveal className="mx-auto w-full max-w-[720px] px-5 py-12 md:px-10 md:py-16">
            <h1 data-reveal-child className="mb-4 text-3xl font-medium md:text-4xl">
              {title}
            </h1>
            <p data-reveal-child className="mb-10 text-base leading-7 text-foreground/85">
              {summary}
            </p>
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.heading} data-reveal-child className="space-y-3">
                  <h2 className="text-xl font-semibold">{section.heading}</h2>
                  <p className="leading-7 text-foreground/85">{section.body}</p>
                </section>
              ))}
            </div>
            <p data-reveal-child className="mt-12">
              <Link href="/contact" className="text-blue hover:underline">
                Contact us with questions →
              </Link>
            </p>
          </div>
        </section>
        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
