"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/lib/site-content";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        isScrolled || isOpen
          ? "border-line bg-surface/92 backdrop-blur-xl"
          : "border-transparent bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Little Upgrades home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-sm font-semibold text-accent">
            LU
          </span>
          <span className="block">
            <span className="block font-serif text-2xl leading-none text-ink">
              Little Upgrades
            </span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted">
              Curated daily goods
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  isActive
                    ? "bg-surface-muted text-ink"
                    : "text-muted hover:bg-white/60 hover:text-ink"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a className="button-secondary" href={`mailto:${siteContent.email}`}>
            Email us
          </a>
          <Link className="button-primary" href="/shop">
            View shop
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-line transition-[max-height,opacity] duration-200 md:hidden ${
          isOpen ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`rounded-[1.25rem] px-4 py-3 text-base font-semibold ${
                    isActive
                      ? "bg-surface-muted text-ink"
                      : "bg-white/50 text-muted hover:text-ink"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="surface-card grid gap-3 p-4">
            <p className="text-sm text-muted">
              Broad sourcing across kitchen, toys, pets, skincare, travel, workspace, and more.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href="/shop">
                View shop
              </Link>
              <a className="button-secondary" href={`mailto:${siteContent.email}`}>
                {siteContent.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
