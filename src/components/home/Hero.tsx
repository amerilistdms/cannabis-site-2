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
      className={`relative block size-[132px] shrink-0 transition-transform duration-500 ease-out hover:scale-[1.04] sm:size-[156px] lg:size-[180px] ${className}`}
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
      <div className="cannabis-hero__photo" aria-hidden>
        <div className="cannabis-hero__photo-img">
          <Image
            src="/images/custom/hero-analytics.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="(max-width: 1024px) 100vw, 980px"
          />
        </div>
        <div className="cannabis-hero__photo-fade" />
      </div>

      <div className="cannabis-hero__stage">
        <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-5 py-12 md:px-10 md:py-16 lg:gap-14 lg:py-20">
          <div data-hero className="max-w-[640px]">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue/90 md:text-xs">
              Built for cannabis brands, agencies, and marketers
            </p>
            <h1 className="text-[34px] font-semibold leading-[1.12] tracking-[-0.02em] text-frost sm:text-[44px] md:text-[56px] md:leading-[1.08]">
              Find Cannabis Prospects
              <span className="mt-1 block font-serif-accent font-bold text-green">
                in Your Market.
              </span>
            </h1>
            <p className="mt-6 max-w-[480px] text-base leading-7 text-frost/85 md:text-lg md:leading-8">
              Audience data and opt-in lead lists that help cannabis companies reach qualified
              consumers through email, postal, and digital campaigns.
            </p>
          </div>

          <div data-hero className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-3">
              <ArrowButton href="/contact#contact-form" variant="outline-white" accent="blue">
                Request a Free Market Analysis
              </ArrowButton>
              <p className="text-sm text-frost/55">No obligation. Free counts available.</p>
            </div>
            <BookACall className="lg:hidden" />
          </div>

          <div data-hero className="pointer-events-auto absolute bottom-8 right-5 hidden lg:block md:right-10">
            <BookACall />
          </div>
        </div>
      </div>
    </section>
  );
}
