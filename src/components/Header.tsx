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
};

function isActive(pathname: string, href: string) {
  return (
    pathname === href ||
    (href === "/home" && pathname === "/") ||
    (href !== "/home" && pathname.startsWith(`${href}/`))
  );
}

export function Header({ overDark = true }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !overDark;
  const ink = solid ? "text-foreground" : "text-frost";

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:px-5 md:pt-4">
      <div
        className={`pointer-events-auto relative w-full max-w-[1080px] transition-all duration-500 ease-out ${
          solid ? "nav-pill rounded-full" : "rounded-full bg-transparent"
        }`}
      >
        <div className="flex h-12 items-center justify-between gap-3 px-4 sm:h-14 sm:px-5 md:px-6">
          <Link href="/home" className="relative z-50 shrink-0">
            <Image
              src={solid ? "/images/logo nav colored.svg" : "/images/logo nav white.svg"}
              alt="AmeriList"
              width={141}
              height={29}
              priority
              className="h-[24px] w-auto sm:h-[27px]"
            />
          </Link>

          <nav className={`hidden items-center gap-7 lg:flex ${ink}`}>
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] tracking-[-0.01em] transition-colors ${
                    active
                      ? "font-semibold text-green"
                      : solid
                        ? "text-foreground/70 hover:text-foreground"
                        : "text-frost/75 hover:text-frost"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="relative z-50 flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact#contact-form"
              className={`hidden rounded-full px-4 py-1.5 text-[13px] font-semibold transition-opacity hover:opacity-90 sm:inline-flex ${
                solid
                  ? "bg-navy text-frost"
                  : "bg-frost/10 text-frost ring-1 ring-inset ring-frost/25"
              }`}
            >
              Request Counts
            </Link>

            <button
              type="button"
              className={`grid size-9 place-items-center rounded-full lg:hidden ${ink}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="flex w-4 flex-col gap-1">
                <span className={`h-px w-full ${solid ? "bg-foreground" : "bg-frost"}`} />
                <span className={`h-px w-full ${solid ? "bg-foreground" : "bg-frost"}`} />
                <span className={`h-px w-full ${solid ? "bg-foreground" : "bg-frost"}`} />
              </div>
            </button>
          </div>
        </div>

        {open && (
          <div className="nav-pill-menu absolute inset-x-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-[22px] px-3 py-3 lg:hidden">
            <nav className="flex flex-col gap-0.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2.5 text-sm ${
                    isActive(pathname, link.href)
                      ? "bg-green/10 font-semibold text-green"
                      : "text-foreground/75 hover:bg-black/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact#contact-form"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-frost"
              >
                Request Counts
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
