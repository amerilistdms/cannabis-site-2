"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HOLD = 0.22;

const steps = [
  {
    id: 1,
    title: "Direct Mail Marketing",
    body: "Build highly targeted marijuana consumer mailing lists for postcards, letters, catalogs, and promotional campaigns.",
  },
  {
    id: 2,
    title: "Permission Based Email Marketing",
    body: "Activate opt-in cannabis email audiences to nurture leads, promote offers, and grow customer relationships.",
  },
  {
    id: 3,
    title: "Digital Audience Targeting",
    body: "Reach cannabis consumers across digital channels with matched, modeled, and interest-based audience segments.",
  },
  {
    id: 4,
    title: "Audience Modeling & Profiling",
    body: "Use cannabis consumer insights and profiling to refine targeting, improve ROI, and expand lookalike audiences.",
  },
];

export function Solutions() {
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(1);
  const [active, setActive] = useState(1);
  const current = steps.find((step) => step.id === active) ?? steps[0];

  const goToStep = (id: number) => {
    activeRef.current = id;
    setActive(id);
  };

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const setStepFromProgress = (progress: number) => {
        const usable = 1 - HOLD;
        const next = Math.min(4, Math.max(1, Math.floor((progress / usable) * 4) + 1));
        if (next === activeRef.current) return;
        activeRef.current = next;
        setActive(next);
        if (copyRef.current) {
          gsap.fromTo(
            copyRef.current,
            { autoAlpha: 0.4, y: 14 },
            { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out", overwrite: true }
          );
        }
      };

      ScrollTrigger.create({
        trigger: track,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => setStepFromProgress(self.progress),
      });
    },
    { scope: trackRef }
  );

  return (
    <div ref={trackRef} className="relative z-0 h-[320vh]">
      <section className="sticky top-0 flex min-h-[100svh] items-center bg-green text-frost">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-16 md:grid-cols-[1fr_1.2fr] md:gap-16 md:px-10 md:py-20">
          <div>
            <h2 className="text-[32px] sm:text-[36px] md:text-[48px]">
              <span className="block font-light leading-[1.2] text-glow md:leading-[65px]">
                Solutions For Every
              </span>
              <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] md:leading-[69px]">
                Cannabis Marketing Campaign
              </span>
            </h2>
          </div>

          <div className="flex w-full flex-col gap-8">
            <div className="flex flex-col gap-2">
              {steps.map((step) => {
                const isReached = step.id <= active;
                const isActive = step.id === active;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => goToStep(step.id)}
                    aria-pressed={isActive}
                    aria-current={isActive ? "step" : undefined}
                    className={`flex items-center gap-4 rounded-xl px-4 py-3.5 text-left transition-all duration-300 ${
                      isActive
                        ? "glass-dark border-frost/50 bg-frost/18"
                        : isReached
                          ? "glass-dark opacity-90"
                          : "glass-dark opacity-50"
                    }`}
                  >
                    <span
                      className={`grid size-10 shrink-0 place-items-center rounded-full text-base transition-colors duration-300 ${
                        isReached
                          ? "bg-frost text-foreground"
                          : "border border-frost/70 bg-transparent text-frost"
                      }`}
                    >
                      {step.id}
                    </span>
                    <span className="text-base font-medium md:text-lg">{step.title}</span>
                  </button>
                );
              })}
            </div>

            <div
              ref={copyRef}
              className="glass-dark max-w-[560px] rounded-2xl p-6 md:p-8"
            >
              <h3 className="mb-3 text-2xl font-bold uppercase md:text-[32px]">{current.title}</h3>
              <p className="text-base leading-6 text-frost/90">{current.body}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
