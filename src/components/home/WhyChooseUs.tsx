"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";
import { ArrowButton } from "@/components/ArrowButton";

const offerings = [
  {
    title: "Postal Mailing Lists",
    image: "/images/figma/card-1.png",
    description:
      "Reach targeted households with accurate postal mailing lists built around your ideal audience.",
  },
  {
    title: "Consumer Email Lists",
    image: "/images/figma/card-2.png",
    description:
      "Connect with relevant consumers through targeted email lists tailored to your audience.",
  },
  {
    title: "Phone Numbers",
    image: "/images/figma/card-3.png",
    description:
      "Access quality phone data to connect with prospects through targeted outreach campaigns.",
  },
  {
    title: "Digital Audience Targeting",
    image: "/images/figma/card-4.png",
    description:
      "Reach the right digital audiences with data-driven targeting built around your campaign goals.",
  },
  {
    title: "Custom Audience Matching",
    image: "/images/figma/card-5.png",
    description:
      "Match your customer data with targeted audiences to expand reach and improve campaign performance.",
  },
  {
    title: "Direct Mail Campaign Support",
    image: "/images/figma/card-6.png",
    description:
      "Simplify your direct mail campaigns with audience selection, data, and campaign support.",
  },
  {
    title: "Permission Based Email Marketing",
    image: "/images/figma/card-7.png",
    description:
      "Engage opted-in audiences with permission-based email marketing designed for meaningful outreach.",
  },
  {
    title: "Audience Modeling & Profiling",
    image: "/images/figma/card-8.png",
    description:
      "Understand your ideal customers through detailed audience profiles and predictive modeling.",
  },
];

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden>
      <path
        d={dir === "prev" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhyChooseUs() {
  const [active, setActive] = useState(0);
  const pointerX = useRef<number | null>(null);
  const current = offerings[active];

  const go = (dir: -1 | 1) => {
    setActive((i) => (i + dir + offerings.length) % offerings.length);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerX.current = event.clientX;
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerX.current == null) return;
    const delta = event.clientX - pointerX.current;
    pointerX.current = null;
    if (delta > 48) go(-1);
    else if (delta < -48) go(1);
  };

  return (
    <section className="bg-frost py-20 md:py-28">
      <div className="mx-auto mb-14 w-full max-w-[1120px] px-5 md:mb-20 md:px-10">
        <div data-reveal-child className="mb-8 flex max-w-[420px] items-start gap-3 md:mb-10">
          <Image
            src="/images/figma/leaf-stroke.svg"
            alt=""
            width={22}
            height={28}
            className="mt-0.5 h-7 w-auto shrink-0 opacity-80"
          />
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/60">
            Cannabis marketing starts with reaching the right audience.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-16">
          <h2
            data-reveal-child
            className="text-[32px] leading-none sm:text-[36px] md:text-[48px]"
          >
            <span className="block font-light leading-[1.15] text-glow md:leading-[65px]">
              Why Cannabis Brands
            </span>
            <span className="font-serif-accent block leading-[1.15] tracking-[-0.02em] text-green md:leading-[69px]">
              Choose Us?
            </span>
          </h2>

          <div
            data-reveal-child
            className="flex flex-col gap-7 pl-0 text-[15px] leading-7 text-foreground/75 md:text-base md:leading-7 lg:pt-2"
          >
            <div className="space-y-5">
              <p>
                At Cannabis Email Lists, we help cannabis companies, CBD brands, dispensaries,
                ancillary service providers, and cannabis focused marketers identify and connect with
                qualified prospects through highly targeted audience data solutions.
              </p>
              <p>
                Our database includes millions of consumers identified through a variety of
                demographic, behavioral, purchase interest, lifestyle, and response based indicators
                that help marketers target likely cannabis users and marijuana interested consumers.
              </p>
            </div>
            <ArrowButton href="/contact#contact-form" accent="blue">
              Request Free Counts
            </ArrowButton>
          </div>
        </div>
      </div>

      <div
        data-reveal-child
        className="mx-auto w-full max-w-[1120px] px-5 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-green md:px-10"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            go(1);
          }
        }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div
            className="relative aspect-[4/5] cursor-grab overflow-hidden rounded-[28px] bg-navy-hero shadow-[0_28px_80px_rgba(25,28,51,0.16)] active:cursor-grabbing md:aspect-[5/6] lg:aspect-[4/5]"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              pointerX.current = null;
            }}
          >
            {offerings.map((item, index) => (
              <Image
                key={item.title}
                src={item.image}
                alt={item.title}
                fill
                draggable={false}
                className={`object-cover transition-[opacity,transform] duration-700 ease-out ${
                  index === active ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 480px"
                priority={index === 0}
              />
            ))}
          </div>

          <div className="flex min-h-[280px] flex-col justify-center lg:min-h-[420px]">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground/40">
              {String(active + 1).padStart(2, "0")}
              <span className="mx-2 text-foreground/20">/</span>
              {String(offerings.length).padStart(2, "0")}
            </p>

            <div key={current.title} className="animate-rise-in">
              <h3 className="mb-4 max-w-[520px] text-[28px] font-semibold leading-tight tracking-[-0.03em] md:text-[36px]">
                {current.title}
              </h3>
              <p className="mb-8 max-w-[460px] text-[15px] leading-7 text-foreground/65 md:text-base md:leading-8">
                {current.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous offering"
                className="glass grid size-11 place-items-center rounded-full text-foreground transition-colors hover:border-green/40 hover:bg-green hover:text-frost"
              >
                <Chevron dir="prev" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next offering"
                className="glass grid size-11 place-items-center rounded-full text-foreground transition-colors hover:border-green/40 hover:bg-green hover:text-frost"
              >
                <Chevron dir="next" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
