"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";
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
          ? "border-line bg-surface/92 shadow-[0_20px_48px_-36px_rgba(31,27,21,0.55)] backdrop-blur-xl"
          : "border-transparent bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Little Upgrades home">
          <BrandMark compact subtitle={siteContent.brand.tagline} />
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-line/70 bg-white/55 px-2 py-2 shadow-[0_18px_34px_-30px_rgba(31,27,21,0.5)] md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  isActive
                    ? "bg-surface text-ink shadow-[0_12px_24px_-18px_rgba(31,27,21,0.45)]"
                    : "text-muted hover:bg-white/70 hover:text-ink"
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
          isOpen ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"
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
                  className={`rounded-[1.35rem] px-4 py-3 text-base font-semibold ${
                    isActive
                      ? "bg-surface text-ink shadow-[0_14px_24px_-20px_rgba(31,27,21,0.45)]"
                      : "bg-white/55 text-muted hover:text-ink"
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
