import type { Metadata } from "next";
import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ScrollEffects } from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: "Services | Cannabis Email Lists",
};

const services = [
  {
    title: "Cannabis Consumer Lists",
    icon: "/images/figma/svc-1.svg",
    copy: "Target consumers based on cannabis interest, marijuana usage indicators, CBD purchasing behavior, demographics, geography, and lifestyle factors.",
  },
  {
    title: "Cannabis Email Lists",
    icon: "/images/figma/svc-2.svg",
    copy: "Reach marijuana interested consumers through targeted email marketing solutions.",
  },
  {
    title: "Cannabis Mailing Lists",
    icon: "/images/figma/svc-3.svg",
    copy: "Build direct mail campaigns targeting qualified cannabis audiences nationwide.",
  },
  {
    title: "Audience Profiling",
    icon: "/images/figma/svc-4.svg",
    copy: "Identify the characteristics of your best customers and discover similar prospects.",
  },
  {
    title: "Audience Modeling",
    icon: "/images/figma/svc-5.svg",
    copy: "Expand your reach by finding consumers who closely resemble your current customer base.",
  },
  {
    title: "Data Enhancement",
    icon: "/images/figma/svc-6.svg",
    copy: "Append additional contact information and demographic insights to improve targeting.",
  },
  {
    title: "Custom Audience Development",
    icon: "/images/figma/svc-7.svg",
    copy: "Create highly specialized cannabis audiences based on your exact campaign requirements.",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <PageHero
          title={
            <h1>
              <span className="font-serif-accent block text-[36px] leading-[1.15] tracking-[-0.02em] sm:text-[42px] md:text-[62px] md:leading-[69px]">
                Cannabis Marketing
              </span>
              <span className="block text-[34px] font-light leading-[1.15] text-frost sm:text-[40px] md:text-[60px] md:leading-[65px]">
                Data Solutions
              </span>
            </h1>
          }
        >
          <p className="text-base leading-6 text-frost/85">
            Cannabis Email Lists provides targeted audience data solutions designed to help
            cannabis businesses acquire new customers, improve campaign performance, and maximize
            marketing ROI.
          </p>
          <ArrowButton href="/contact" variant="outline-white" accent="blue">
            Request a Data Consultation
          </ArrowButton>
        </PageHero>

        <section data-reveal className="bg-frost px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid w-full max-w-[1120px] gap-4 sm:grid-cols-2 lg:gap-5">
            {services.map((item) => (
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
