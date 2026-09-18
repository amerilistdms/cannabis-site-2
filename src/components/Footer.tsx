import Link from "next/link";
import { ArrowButton } from "./ArrowButton";

const listOptions = [
  "Cannabis Users",
  "CBD Users",
  "Medical Patients",
  "Cannabis Investors",
  "Dispensary Shoppers",
  "Industry Professionals",
];

const services = [
  "Cannabis Consumer",
  "Cannabis Email Lists",
  "Cannabis Mailing Lists",
  "Audience Profiling",
  "Audience Modeling",
  "Data Enhancement",
  "Custom Audiences",
  "Multichannel Marketing",
];

const company = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-green text-frost">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-12 px-5 py-12 md:px-10 md:pt-[50px] md:pb-10">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="flex flex-wrap gap-10 md:gap-20">
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.14px]">List Options</p>
                <ul className="space-y-2 text-sm tracking-[0.14px]">
                  {listOptions.map((item) => (
                    <li key={item}>
                      <Link href="/list-options" className="hover:opacity-80">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.14px]">Services</p>
                <ul className="space-y-2 text-sm tracking-[0.14px]">
                  {services.map((item) => (
                    <li key={item}>
                      <Link href="/services" className="hover:opacity-80">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold tracking-[0.14px]">Company</p>
                <ul className="space-y-2 text-sm tracking-[0.14px]">
                  {company.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:opacity-80">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full max-w-[393px]">
              <p className="mb-2.5 text-2xl">Cannabis Email Lists</p>
              <p className="mb-3 text-sm leading-5 tracking-[0.14px] text-frost/90">
                Cannabis marketing starts with reaching the right audience.
              </p>
              <p className="mb-8 text-sm leading-5 tracking-[0.14px] text-frost/90">
                Audience data and marketing lists that help cannabis brands generate leads through
                email, direct mail, and digital acquisition campaigns.
              </p>
              <div className="flex flex-wrap gap-5">
                <ArrowButton
                  href="mailto:info@amerilist.com?subject=Request%20Free%20Counts"
                  variant="outline-white"
                  accent="blue"
                >
                  Request Free Counts
                </ArrowButton>
                <ArrowButton
                  href="mailto:info@amerilist.com?subject=Book%20a%20Call"
                  variant="outline-white"
                  accent="blue"
                >
                  Book a Call
                </ArrowButton>
              </div>
            </div>
          </div>

          <p className="whitespace-nowrap text-center text-[clamp(13px,2.6vw,33px)] leading-none tracking-[-0.01em] text-frost">
            A division of AmeriList. Audience data &amp; marketing solutions since 2002
          </p>
        </div>
      </div>

      <div className="bg-navy-hero text-frost">
        <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-3 px-5 py-5 text-sm tracking-[0.14px] sm:flex-row sm:items-center sm:justify-between md:px-10">
          <div className="flex flex-wrap gap-8">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
          <p>© 2026 Cannabis Email Lists. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
