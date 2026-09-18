import type { Metadata } from "next";
import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ScrollEffects } from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "About | Cannabis Email Lists",
};

const pillars = [
  {
    n: "01",
    title: "Audience data built for acquisition",
    body: "We help cannabis brands, CBD companies, dispensaries, and agencies identify qualified prospects—not broad, uninterested audiences.",
  },
  {
    n: "02",
    title: "Channels that drive response",
    body: "Email, postal, phone, and digital targeting designed to support lead generation and customer acquisition campaigns.",
  },
  {
    n: "03",
    title: "AmeriList expertise since 2002",
    body: "As a division of AmeriList, we bring two decades of audience data and direct marketing experience to the cannabis marketplace.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <PageHero
          title={
            <h1>
              <span className="font-serif-accent block text-[36px] leading-[1.15] tracking-[-0.02em] sm:text-[42px] md:text-[62px] md:leading-[69px]">
                About Cannabis
              </span>
              <span className="block text-[34px] font-light leading-[1.15] text-frost sm:text-[40px] md:text-[60px] md:leading-[65px]">
                Email Lists
              </span>
            </h1>
          }
        >
          <p className="text-base leading-6 text-frost/85">
            Built for marketers who need accurate cannabis audience data to generate leads, improve
            campaign performance, and reach qualified prospects nationwide.
          </p>
          <ArrowButton href="/contact#contact-form" variant="outline-white" accent="blue">
            Request Free Counts
          </ArrowButton>
        </PageHero>

        <section data-reveal className="bg-frost py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-16 md:px-10">
            <div data-reveal-child className="space-y-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/45">
                Our mission
              </p>
              <h2 className="text-[32px] leading-none sm:text-[36px] md:text-[48px]">
                <span className="block font-light leading-[1.15] text-glow md:leading-[65px]">
                  Reliable data for
                </span>
                <span className="font-serif-accent block leading-[1.15] tracking-[-0.02em] text-green md:leading-[69px]">
                  cannabis marketers
                </span>
              </h2>
              <div className="space-y-4 text-[15px] leading-7 text-foreground/75 md:text-base">
                <p>
                  Provide marketers with reliable cannabis audience data that helps generate better
                  results from direct mail, email marketing, digital advertising, and customer
                  acquisition campaigns.
                </p>
                <p>
                  As a division of AmeriList, we leverage more than two decades of audience data
                  expertise to help clients identify and reach their ideal customers.
                </p>
              </div>
            </div>

            <div
              data-reveal-child
              className="relative aspect-[4/5] overflow-hidden rounded-[28px] md:aspect-[5/6]"
            >
              <Image
                src="/images/custom/about-team.jpg"
                alt="Marketing team collaborating on cannabis audience strategy"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 520px"
                priority
              />
            </div>
          </div>
        </section>

        <section data-reveal className="relative overflow-hidden bg-navy-hero py-16 text-frost md:py-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 70% 55% at 12% 18%, rgba(60,107,59,0.28), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 80%, rgba(0,112,171,0.22), transparent 50%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto w-full max-w-[1120px] px-5 md:px-10">
            <h2 data-reveal-child className="mb-10 max-w-[560px] text-[32px] sm:text-[36px] md:mb-14 md:text-[48px]">
              <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
                What we stand for
              </span>
              <span className="block font-light leading-[1.2] text-frost md:leading-[65px]">
                in every campaign
              </span>
            </h2>

            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {pillars.map((item) => (
                <article
                  key={item.n}
                  data-reveal-child
                  className="glass-dark rounded-[24px] p-6 md:p-7"
                >
                  <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-green">{item.n}</p>
                  <h3 className="mb-3 text-lg font-semibold leading-snug tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-6 text-frost/75">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section data-reveal className="bg-white py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10">
            <div
              data-reveal-child
              className="relative aspect-[16/11] overflow-hidden rounded-[28px]"
            >
              <Image
                src="/images/custom/about-heritage.jpg"
                alt="Marketing team reviewing audience data and campaign performance"
                fill
                className="object-cover object-[center_25%]"
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
            <div data-reveal-child className="space-y-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/45">
                Heritage
              </p>
              <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] md:text-[34px]">
                AmeriList experience, cannabis focus
              </h2>
              <div className="space-y-4 text-[15px] leading-7 text-foreground/75 md:text-base">
                <p>
                  Since 2002, AmeriList has helped businesses, agencies, nonprofits, and
                  organizations nationwide improve campaign performance through data-driven
                  marketing solutions.
                </p>
                <p>
                  Today, Cannabis Email Lists brings that same expertise to the rapidly growing
                  cannabis marketplace—with lists and targeting built for lead generation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <ArrowButton href="/services" accent="blue">
                  Explore Services
                </ArrowButton>
                <ArrowButton href="/contact" accent="green">
                  Book a Call
                </ArrowButton>
              </div>
            </div>
          </div>
        </section>

        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
