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

  const solid = scrolled || !overDark;
  const ink = solid ? "text-foreground" : "text-frost";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 transition-[background-color,border-color,box-shadow] duration-300 ${
        solid
          ? "border-b border-navy/10 bg-frost/90 shadow-[0_10px_30px_rgba(25,28,51,0.06)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1120px] items-center justify-between px-5 md:px-10">
        <Link href="/home" className="relative z-50 shrink-0">
          <Image
            src={solid ? "/images/logo nav colored.svg" : "/images/logo nav white.svg"}
            alt="AmeriList"
            width={141}
            height={29}
            priority
            className="h-[29px] w-[141px]"
          />
        </Link>

        <nav className={`hidden items-center gap-8 lg:flex ${ink}`}>
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-[0.02em] transition-colors ${
                  active
                    ? "font-semibold text-green"
                    : solid
                      ? "text-foreground/75 hover:text-foreground"
                      : "text-frost/80 hover:text-frost"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-green" aria-hidden />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="relative z-50 flex items-center gap-3">
          <Link
            href="/contact#contact-form"
            className={`hidden rounded-md px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90 sm:inline-flex ${
              solid ? "bg-blue text-frost" : "bg-frost text-navy-hero"
            }`}
          >
            Request Counts
          </Link>

          <button
            type="button"
            className={`grid size-10 place-items-center lg:hidden ${ink}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 w-full ${solid ? "bg-foreground" : "bg-frost"}`} />
              <span className={`h-0.5 w-full ${solid ? "bg-foreground" : "bg-frost"}`} />
              <span className={`h-0.5 w-full ${solid ? "bg-foreground" : "bg-frost"}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-navy/10 bg-frost px-5 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-2 py-2.5 text-sm ${
                  isActive(pathname, link.href)
                    ? "font-semibold text-green"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#contact-form"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-blue px-4 py-2.5 text-sm font-semibold text-frost"
            >
              Request Counts
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
