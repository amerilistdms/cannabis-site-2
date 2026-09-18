import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";

const points = [
  {
    n: "01",
    title: "Stop wasting budget",
    body: "Many cannabis marketers waste valuable budget targeting broad audiences that have little interest in cannabis related products.",
  },
  {
    n: "02",
    title: "Reach people who respond",
    body: "Our goal is to help advertisers improve response rates by focusing on consumers most likely to engage with cannabis, CBD, wellness, alternative health, and lifestyle related offers.",
  },
  {
    n: "03",
    title: "Two decades of data",
    body: "As a division of AmeriList, a leading provider of audience data and marketing solutions since 2002. Cannabis Email Lists combines specialized cannabis audience expertise with decades of direct marketing experience.",
  },
];

export function Accuracy() {
  return (
    <section className="relative z-10 bg-white">
      <div data-reveal className="mx-auto w-full max-w-[1200px] px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
        <h2 data-reveal-child className="max-w-[640px] text-[32px] sm:text-[36px] md:text-[48px]">
          <span className="font-light leading-[1.2] text-glow md:leading-[65px]">Why </span>
          <span className="font-serif-accent leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
            Accuracy
          </span>
          <span className="font-light leading-[1.2] text-glow md:leading-[65px]"> Matters?</span>
        </h2>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {points.map((point) => (
              <article
                key={point.n}
                data-reveal-child
                className="border-t-2 border-green/70 pt-5"
              >
                <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-green">{point.n}</p>
                <h3 className="mb-3 text-lg font-semibold leading-snug tracking-[-0.01em]">
                  {point.title}
                </h3>
                <p className="text-sm leading-6 text-foreground/75 md:text-[15px]">{point.body}</p>
              </article>
            ))}
          </div>

          <div
            data-reveal-child
            className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-[40px] bg-frost lg:max-w-none"
          >
            <Image
              src="/images/home/accuracy.jpg"
              alt="Cannabis marketing accuracy and audience targeting"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 420px, 480px"
            />
          </div>
        </div>

        <div data-reveal-child className="mt-12 flex flex-wrap gap-4 md:mt-16">
          <ArrowButton href="/contact" accent="blue">
            Connect with Us
          </ArrowButton>
          <ArrowButton href="/contact#contact-form" accent="green">
            Request Free Counts
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
