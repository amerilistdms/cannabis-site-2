import type { Metadata } from "next";
import { ArrowButton } from "@/components/ArrowButton";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";
import "./contact-hero.css";

export const metadata: Metadata = {
  title: "Contact | Cannabis Email Lists",
};

const topics = [
  "Your target audience",
  "Geographic markets",
  "Marketing channels",
  "Available audience counts",
  "Pricing options",
  "Campaign recommendations",
];

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark />
        <section className="contact-hero" aria-label="Contact hero">
          <div className="contact-hero__aurora" aria-hidden>
            <div className="contact-hero__stripes" />
          </div>
          <div className="contact-hero__glow contact-hero__glow--blue" aria-hidden />
          <div className="contact-hero__glow contact-hero__glow--green" aria-hidden />
          <div className="contact-hero__glow contact-hero__glow--blue-left" aria-hidden />
          <div className="contact-hero__glow contact-hero__glow--green-left" aria-hidden />
          <div className="contact-hero__texture" aria-hidden />
          <div className="contact-hero__scrim" aria-hidden />

          <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-[1200px] flex-col justify-between gap-12 px-5 pb-16 pt-10 md:gap-16 md:px-10 md:pb-20 md:pt-8">
            <div data-hero className="max-w-[730px] space-y-8">
              <h1>
                <span className="block text-[32px] font-light leading-[1.15] text-frost sm:text-[48px] md:text-[60px] md:leading-[65px]">
                  Let&apos;s Discuss Your
                </span>
                <span className="font-serif-accent block text-[34px] leading-[1.15] tracking-[-0.02em] text-green sm:text-[52px] md:text-[62px] md:leading-[69px]">
                  Cannabis Marketing Goals
                </span>
              </h1>
              <p className="max-w-[690px] text-lg text-frost/90 md:text-2xl">
                Whether you&apos;re looking for cannabis consumer email lists, marijuana mailing
                lists, CBD buyer audiences, or custom audience targeting solutions, our team is here
                to help.
              </p>
            </div>

            <div data-hero className="max-w-[642px] space-y-5">
              <p className="text-lg font-bold uppercase tracking-[0.04em]">Schedule A Free Consultation</p>
              <div className="h-px w-full bg-frost/25" />
              <ul className="space-y-2.5 text-xl text-frost/90 md:text-2xl">
                {topics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div data-hero className="flex flex-col gap-4 sm:flex-row sm:flex-wrap md:gap-8">
              <ArrowButton href="tel:+18004572899" variant="outline-white" accent="blue">
                Call Today
              </ArrowButton>
              <ArrowButton href="#contact-form" variant="outline-white" accent="green">
                Request Free Counts
              </ArrowButton>
            </div>
          </div>
        </section>

        <section id="contact-form" data-reveal className="bg-frost py-16 md:py-20">
          <div className="mx-auto w-full max-w-[1120px] px-5 md:px-10">
            <div data-reveal-child className="mb-10 max-w-[640px]">
              <h2 className="text-[32px] leading-none sm:text-[36px] md:text-[48px]">
                <span className="block font-light leading-[1.2] text-glow md:leading-[65px]">
                  Get In
                </span>
                <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
                  Touch
                </span>
              </h2>
              <p className="mt-4 text-base leading-6 text-foreground">
                Share a few details about your campaign and we&apos;ll follow up with available
                counts, pricing options, and recommendations.
              </p>
            </div>

            <div data-reveal-child className="glass overflow-hidden rounded-2xl px-4 py-6 md:px-8 md:py-8">
              <ContactForm />
            </div>
          </div>
        </section>

        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
