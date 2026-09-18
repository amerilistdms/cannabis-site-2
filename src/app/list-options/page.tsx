import type { Metadata } from "next";
import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ScrollEffects } from "@/components/ScrollEffects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "List Options",
  description:
    "Browse cannabis users, medical patients, CBD audiences, investors, lifestyle enthusiasts, industry professionals, and geographic market lists.",
  path: "/list-options",
});

const lists = [
  {
    title: "Cannabis Users List",
    icon: "/images/figma/list-1.svg",
    copy: "Consumers identified through marijuana related behavioral and interest indicators.",
  },
  {
    title: "Medical Marijuana Patients List",
    icon: "/images/figma/list-2.svg",
    copy: "Audience segments associated with medical marijuana interests and healthcare related cannabis categories.",
  },
  {
    title: "CBD Users List",
    icon: "/images/figma/list-3.svg",
    copy: "Consumers interested in CBD products, wellness supplements, and alternative therapies.",
  },
  {
    title: "Cannabis Investors List",
    icon: "/images/figma/list-4.svg",
    copy: "Individuals interested in cannabis stocks, investments, and industry growth opportunities.",
  },
  {
    title: "Cannabis Lifestyle Enthusiasts",
    icon: "/images/figma/list-5.svg",
    copy: "Consumers engaged with cannabis related media, events, products, and culture.",
  },
  {
    title: "Cannabis Industry Professionals",
    icon: "/images/figma/list-6.svg",
    copy: "Reach professionals working within cannabis related industries and businesses.",
  },
  {
    title: "Dispensary Customer Audiences",
    icon: "/images/figma/list-7.svg",
    copy: "Target audiences associated with dispensary shopping behavior and cannabis retail engagement.",
  },
  {
    title: "Geographic Cannabis Markets",
    icon: "/images/figma/list-8.svg",
    copy: "Target audiences within specific states, counties, cities, ZIP Codes, or dispensary trade areas.",
  },
];

export default function ListOptionsPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <PageHero
          title={
            <h1>
              <span className="font-serif-accent block text-[36px] leading-[1.15] tracking-[-0.02em] sm:text-[42px] md:text-[62px] md:leading-[69px]">
                Cannabis Audience
              </span>
              <span className="block text-[34px] font-light leading-[1.15] text-frost sm:text-[40px] md:text-[60px] md:leading-[65px]">
                Data Categories
              </span>
            </h1>
          }
        >
          <p className="text-base leading-6 text-frost/85">
            Our Cannabis Audience Data Categories offer detailed audience segments based on
            demographics, purchase behavior, business type, and consumer interests, helping
            cannabis marketers build more precise and effective campaigns.
          </p>
          <ArrowButton href="/contact" variant="outline-white" accent="blue">
            Request a Data Consultation
          </ArrowButton>
        </PageHero>

        <section data-reveal className="bg-frost px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid w-full max-w-[1120px] gap-4 sm:grid-cols-2 lg:gap-5">
            {lists.map((item) => (
              <article
                key={item.title}
                data-reveal-child
                className="glass flex flex-col gap-5 rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/55 md:p-7"
              >
                <div className="grid size-12 place-items-center rounded-2xl bg-green">
                  <Image
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>
                <h2 className="text-lg font-bold tracking-[-0.01em]">{item.title}</h2>
                <p className="text-base leading-6 text-foreground/70">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>
        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
