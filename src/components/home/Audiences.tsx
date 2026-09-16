import Image from "next/image";
import { ArrowButton } from "@/components/ArrowButton";

const audiences = [
  {
    title: "Cannabis Users",
    icon: "/images/figma/aud-1.png",
    copy: "Consumers identified as marijuana users through various lifestyle, survey, and behavioral indicators.",
  },
  {
    title: "CBD Buyers",
    icon: "/images/figma/aud-2.png",
    copy: "Reach consumers who purchase CBD products and wellness related alternatives.",
  },
  {
    title: "Medical Marijuana Patients",
    icon: "/images/figma/aud-3.png",
    copy: "Target individuals associated with medical marijuana interest categories and healthcare related cannabis usage.",
  },
  {
    title: "Cannabis Investors",
    icon: "/images/figma/aud-investors.svg",
    copy: "Identify consumers interested in cannabis related investment opportunities.",
  },
  {
    title: "Cannabis Enthusiasts",
    icon: "/images/figma/aud-5.png",
    copy: "Reach highly engaged consumers with demonstrated interest in cannabis culture, products, and related content.",
  },
  {
    title: "Dispensary Shoppers",
    icon: "/images/figma/aud-6.png",
    copy: "Audience segments built around retail cannabis purchasing behavior and dispensary engagement indicators.",
  },
];

export function Audiences() {
  return (
    <section className="relative overflow-hidden bg-navy-hero py-16 text-frost md:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 12% 18%, rgba(60,107,59,0.28), transparent 55%), radial-gradient(ellipse 55% 45% at 90% 80%, rgba(0,112,171,0.22), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1120px] px-5 md:px-10">
        <div className="mb-12 md:mb-16">
          <h2 className="max-w-[560px] text-[32px] sm:text-[36px] md:text-[48px]">
            <span className="font-serif-accent block leading-[1.2] tracking-[-0.02em] text-green md:leading-[69px]">
              Cannabis Audiences
            </span>
            <span className="block font-light capitalize leading-[1.2] text-glow md:leading-[65px]">
              We Can Help You Reach
            </span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {audiences.map((item, index) => (
            <article
              key={item.title}
              className="glass-dark group relative overflow-hidden rounded-[24px] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-frost/18 md:p-7"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-2xl border border-frost/20 bg-frost/10 transition-colors duration-300 group-hover:border-green group-hover:bg-green">
                  <div className="relative size-7 overflow-hidden">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className={`object-contain ${
                        item.icon.endsWith(".svg")
                          ? ""
                          : "brightness-0 invert"
                      }`}
                      sizes="28px"
                    />
                  </div>
                </div>
                <span className="text-sm font-medium tracking-[0.16em] text-frost/35 transition-colors group-hover:text-green">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold tracking-[-0.01em]">{item.title}</h3>
              <p className="text-base leading-6 text-frost/75">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-14">
          <ArrowButton href="/list-options" variant="outline-white" accent="blue">
            Explore List Options
          </ArrowButton>
          <ArrowButton href="/contact#contact-form" variant="outline-white" accent="green">
            Request Free Counts
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
