"use client";

import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { ArrowButton } from "@/components/ArrowButton";
import "./home-hero.css";

function BookACall({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const pathId = `bookCallPath-${uid}`;
  const radius = 90;
  const phrases = [0, 1, 2, 3] as const;

  return (
    <Link
      href="/contact"
      aria-label="Book a call"
      className={`relative block size-[132px] shrink-0 transition-transform duration-500 ease-out hover:scale-[1.04] sm:size-[156px] lg:size-[202px] ${className}`}
    >
      <svg
        viewBox="0 0 202 202"
        className="animate-spin-slow absolute inset-0 size-full"
        aria-hidden
      >
        <defs>
          <path
            id={pathId}
            d={`M101,101 m-${radius},0 a${radius},${radius} 0 1,1 ${radius * 2},0 a${radius},${radius} 0 1,1 -${radius * 2},0`}
            fill="none"
          />
        </defs>

        {phrases.map((i) => (
          <text
            key={`phrase-${i}`}
            fill="#EFF2F9"
            fontSize="10.5"
            fontFamily="var(--font-jakarta), sans-serif"
            letterSpacing="1.2"
            textAnchor="middle"
          >
            <textPath href={`#${pathId}`} startOffset={`${12.5 + i * 25}%`}>
              BOOK A CALL
            </textPath>
          </text>
        ))}

        {phrases.map((i) => (
          <text
            key={`dot-${i}`}
            fill="#EFF2F9"
            fontSize="10.5"
            fontFamily="var(--font-jakarta), sans-serif"
            textAnchor="middle"
          >
            <textPath href={`#${pathId}`} startOffset={`${i * 25}%`}>
              •
            </textPath>
          </text>
        ))}
      </svg>

      <span className="pointer-events-none absolute left-1/2 top-[23%] h-[52.5%] w-[40.7%] -translate-x-1/2">
        <Image
          src="/images/figma/book-call-leaf.svg"
          alt=""
          fill
          className="object-contain"
          sizes="82px"
        />
      </span>
    </Link>
  );
}

export function Hero() {
  return (
    <section className="cannabis-hero" aria-label="Homepage hero">
      <div className="cannabis-hero__aurora" aria-hidden>
        <div className="cannabis-hero__stripes" />
      </div>
      <div className="cannabis-hero__photo" aria-hidden>
        <Image
          src="/images/figma/card-4.png"
          alt=""
          fill
          priority
          className="object-cover object-[68%_center]"
          sizes="(max-width: 1024px) 100vw, 720px"
        />
      </div>
      <div className="cannabis-hero__glow cannabis-hero__glow--blue" aria-hidden />
      <div className="cannabis-hero__glow cannabis-hero__glow--green" aria-hidden />
      <div className="cannabis-hero__glow cannabis-hero__glow--blue-left" aria-hidden />
      <div className="cannabis-hero__glow cannabis-hero__glow--green-left" aria-hidden />
      <div className="cannabis-hero__texture" aria-hidden />
      <div className="cannabis-hero__scrim" aria-hidden />
      <div className="cannabis-hero__fade" aria-hidden />

      <div className="cannabis-hero__stage">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-5 py-12 md:px-10 md:py-16 lg:gap-16 lg:py-20">
          <div data-hero className="max-w-[860px]">
            <h1 className="flex flex-col gap-1">
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4">
                <span className="text-[34px] font-light leading-[1.12] text-frost sm:text-[42px] md:text-[60px] md:leading-[65px]">
                  Reach
                </span>
                <span className="font-serif-accent text-[36px] leading-[1.12] tracking-[-0.02em] text-green sm:text-[44px] md:text-[62px] md:leading-[69px]">
                  Cannabis Consumers
                </span>
              </span>
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4">
                <span className="text-[34px] font-light leading-[1.12] text-frost sm:text-[42px] md:text-[60px] md:leading-[65px]">
                  with
                </span>
                <span className="font-serif-accent text-[36px] leading-[1.12] tracking-[-0.02em] text-green sm:text-[44px] md:text-[62px] md:leading-[69px]">
                  Opt-In Email Leads.
                </span>
              </span>
            </h1>
            <p className="mt-7 max-w-[546px] text-lg leading-snug text-frost/90 md:mt-8 md:text-2xl md:leading-snug">
              Audience data and lead lists that help cannabis brands find qualified prospects.
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div data-hero className="flex w-full max-w-[580px] flex-col items-start gap-7">
              <div className="flex items-stretch gap-5">
                <span className="w-[2px] shrink-0 self-stretch rounded-full bg-green" aria-hidden />
                <p className="max-w-[546px] text-[15px] leading-7 text-frost/80 md:text-base md:leading-7">
                  Target verified cannabis consumers, CBD buyers, dispensary shoppers, medical
                  marijuana patients, investors, and industry professionals with opt-in email,
                  postal, and digital audience data built for acquisition campaigns.
                </p>
              </div>

              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
                <ArrowButton href="/contact#contact-form" variant="outline-white" accent="blue">
                  Request a Free Market Analysis
                </ArrowButton>
                <BookACall className="lg:hidden" />
              </div>
            </div>

            <div data-hero className="hidden shrink-0 lg:block">
              <BookACall />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
