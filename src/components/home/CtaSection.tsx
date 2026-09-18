import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="relative mx-auto w-full max-w-[1120px] px-5 md:px-10">
        <Image
          src="/images/figma/leaf-deco-1.svg"
          alt=""
          width={280}
          height={360}
          className="pointer-events-none absolute left-[-48px] top-1/2 hidden w-[140px] -translate-y-1/2 rotate-[23deg] opacity-90 md:block lg:left-[-64px] lg:w-[170px] xl:left-[-80px] xl:w-[200px]"
          aria-hidden
        />
        <Image
          src="/images/figma/leaf-deco-2.svg"
          alt=""
          width={280}
          height={360}
          className="pointer-events-none absolute right-[-48px] top-1/2 hidden w-[140px] -translate-y-1/2 -scale-y-100 rotate-[157deg] opacity-90 md:block lg:right-[-64px] lg:w-[170px] xl:right-[-80px] xl:w-[200px]"
          aria-hidden
        />

        <div
          data-reveal
          className="relative mx-auto flex w-full max-w-[545px] flex-col items-center gap-10 md:gap-[57px]"
        >
          <div data-reveal-child className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-[32px] sm:text-[36px] md:text-[48px]">
              <span className="block font-light leading-[1.2] text-glow md:leading-[65px]">
                Ready to Reach More
              </span>
              <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
                Cannabis Consumers?
              </span>
            </h2>
            <p className="max-w-[513px] text-base leading-6 text-foreground">
              Get a free market analysis and discover how many cannabis consumers are available in
              your target market.
            </p>
          </div>

          <div data-reveal-child className="flex w-full flex-col items-center gap-10">
            <div className="relative h-[220px] w-full overflow-hidden rounded-xl md:h-[295px]">
              <Image
                src="/images/blog/article-hero.jpg"
                alt="Marketer reviewing cannabis audience data for a campaign"
                fill
                className="object-cover object-[center_20%]"
                sizes="545px"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <ArrowButton href="/contact#contact-form" accent="blue">
                Request Counts Now
              </ArrowButton>
              <ArrowButton href="/contact" accent="green">
                Book a Call
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
