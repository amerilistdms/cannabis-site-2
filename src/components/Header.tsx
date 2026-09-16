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
  const textClass = solid ? "text-foreground" : "text-frost";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        solid
          ? "border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md"
          : "border-transparent bg-transparent"
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

        <nav className={`hidden items-center gap-7 lg:flex ${textClass}`}>
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-2.5 py-[3px] text-sm tracking-[0.14px] transition-colors ${
                  active
                    ? "bg-green text-frost"
                    : solid
                      ? "text-foreground hover:text-green"
                      : "text-frost hover:opacity-80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={`relative z-50 grid size-10 place-items-center rounded-full border lg:hidden ${
            solid ? "border-foreground/15" : "border-white/20"
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full ${solid ? "bg-foreground" : "bg-white"}`} />
            <span className={`h-0.5 w-full ${solid ? "bg-foreground" : "bg-white"}`} />
            <span className={`h-0.5 w-full ${solid ? "bg-foreground" : "bg-white"}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-black/5 bg-white px-5 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-full px-3 py-2 text-sm ${
                  isActive(pathname, link.href) ? "bg-green text-frost" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
