import type { ReactNode } from "react";
import "./page-hero.css";

type PageHeroProps = {
  title: ReactNode;
  children: ReactNode;
  compact?: boolean;
};

export function PageHero({ title, children, compact = false }: PageHeroProps) {
  return (
    <section
      className={`page-hero${compact ? " page-hero--compact" : ""}`}
      aria-label="Page hero"
    >
      <div className="page-hero__aurora" aria-hidden>
        <div className="page-hero__stripes" />
      </div>
      <div className="page-hero__glow page-hero__glow--blue" aria-hidden />
      <div className="page-hero__glow page-hero__glow--green" aria-hidden />
      <div className="page-hero__glow page-hero__glow--blue-left" aria-hidden />
      <div className="page-hero__glow page-hero__glow--green-left" aria-hidden />
      <div className="page-hero__texture" aria-hidden />
      <div className="page-hero__scrim" aria-hidden />

      <div className="page-hero__stage">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-10 px-5 pb-16 pt-10 md:flex-row md:items-start md:justify-between md:gap-12 md:px-10 md:pb-24 md:pt-16">
          <div data-hero className="max-w-[565px]">
            {title}
          </div>
          <div data-hero className="max-w-[417px] space-y-8 md:space-y-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
