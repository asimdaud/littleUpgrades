import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-line mt-20 bg-[#f2eadb]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-sm font-semibold text-accent">
                LU
              </span>
              <span>
                <span className="block font-serif text-3xl leading-none text-ink">
                  Little Upgrades
                </span>
                <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">
                  Curated for daily life
                </span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-muted">
              A UK-based storefront sourcing useful products across home, kitchen, toys,
              pets, skincare, travel, workspace, and the small corners of routine that
              benefit from better tools.
            </p>
          </div>

          <div>
            <p className="section-label">Browse</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-ink">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ink">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-label">Categories</p>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              {siteContent.sourcingAreas.map((area) => (
                <li key={area.name}>{area.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Reach us</p>
            <div className="mt-5 space-y-4 text-sm text-muted">
              <a className="block hover:text-ink" href={`mailto:${siteContent.email}`}>
                {siteContent.email}
              </a>
              <p>{siteContent.location}</p>
              <p>
                The collection is being built carefully. Use the contact page if you want
                updates or have a product lead to share.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright {currentYear} Little Upgrades Ltd.</p>
          <p>Useful first. Chosen slowly. No trend clutter.</p>
        </div>
      </div>
    </footer>
  );
}
