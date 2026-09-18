"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/list-options", label: "List Options" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

type HeaderProps = {
  overDark?: boolean;
  solidAfterHero?: boolean;
};

function isActive(pathname: string, href: string) {
  return (
    pathname === href ||
    (href === "/home" && pathname === "/") ||
    (href !== "/home" && pathname.startsWith(`${href}/`))
  );
}

export function Header({ overDark = true, solidAfterHero = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const threshold = solidAfterHero ? Math.max(window.innerHeight - 96, 200) : 24;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [solidAfterHero]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !overDark || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
        solid
          ? "border-b border-white/10 bg-[#0e1020]/90 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1120px] items-center justify-between gap-4 px-5 md:h-20 md:px-10">
        <Link href="/home" className="relative z-50 shrink-0">
          <Image
            src="/images/logo nav white.svg"
            alt="AmeriList"
            width={141}
            height={29}
            priority
            className="h-[26px] w-auto md:h-[29px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors ${
                  active ? "text-green" : "text-frost/75 hover:text-frost"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-green transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="relative z-50 flex items-center gap-3">
          <Link
            href="/contact#contact-form"
            className="hidden items-center rounded-full border border-frost/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-frost transition-colors hover:border-green hover:bg-green hover:text-frost sm:inline-flex"
          >
            Request Counts
          </Link>

          <button
            type="button"
            className="grid size-10 place-items-center border border-frost/25 text-frost transition-colors hover:border-frost/50 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#0e1020]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-[1120px] flex-col gap-1 px-5 py-4 md:px-10">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-l-2 px-4 py-3 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors ${
                  active
                    ? "border-green bg-white/5 text-green"
                    : "border-transparent text-frost/75 hover:border-frost/30 hover:text-frost"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact#contact-form"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full border border-frost/30 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-frost transition-colors hover:border-green hover:bg-green"
          >
            Request Counts
          </Link>
        </nav>
      </div>
    </header>
  );
}
