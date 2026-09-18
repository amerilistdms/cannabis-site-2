"use client";

import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";
import "./home-hero.css";

export function Hero() {
  return (
    <section className="cannabis-hero" aria-label="Homepage hero">
      <div className="cannabis-hero__photo" aria-hidden>
        <div className="cannabis-hero__photo-img">
          <Image
            src="/images/home/possiblehero.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[78%_center]"
            sizes="(max-width: 1024px) 100vw, 820px"
          />
        </div>
        <div className="cannabis-hero__photo-fade" />
      </div>

      <div className="cannabis-hero__atmosphere" aria-hidden />
      <div className="cannabis-hero__grain" aria-hidden />

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

          <div data-hero className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <ArrowButton href="/contact#contact-form" variant="outline-white" accent="blue">
                Request a Free Market Analysis
              </ArrowButton>
              <ArrowButton href="/contact" variant="outline-white" accent="green">
                Book a Call
              </ArrowButton>
            </div>
            <p className="text-sm text-frost/55">No obligation. Free counts available.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
