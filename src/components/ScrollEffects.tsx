"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ScrollEffects({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        gsap.set("[data-hero], [data-reveal], [data-reveal-child]", { clearProps: "all" });
        return;
      }

      const heroItems = gsap.utils.toArray<HTMLElement>("[data-hero]");
      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.08,
          }
        );
      }

      const sections = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      sections.forEach((el) => {
        const children = el.querySelectorAll<HTMLElement>("[data-reveal-child]");
        if (children.length) {
          gsap.fromTo(
            children,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                once: true,
                toggleActions: "play none none none",
              },
            }
          );
        } else {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope: root }
  );

  return <div ref={root}>{children}</div>;
}
