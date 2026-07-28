import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { siteContent } from "@/lib/site-content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-line mt-16 bg-[#efe5d5]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr_0.9fr]">
          <div className="max-w-md">
            <Link href="/" aria-label="Little Upgrades home">
              <BrandMark
                subtitle="Curated for daily life"
                subtitleClassName="mt-1 block text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted"
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-muted">
              A UK-based storefront sourcing useful products across home, kitchen, toys,
              pets, skincare, travel, workspace, and the small corners of routine that
              benefit from better tools.
            </p>
          </div>

          <div>
            <p className="section-label">Browse</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label">Categories</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {siteContent.sourcingAreas.map((area) => (
                <li key={area.name}>{area.name}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="section-label">Reach us</p>
            <div className="surface-card p-5">
              <a
                className="block break-all font-serif text-[clamp(1.55rem,3vw,2rem)] leading-[1.08] text-ink hover:text-accent"
                href={`mailto:${siteContent.email}`}
              >
                {siteContent.email}
              </a>
              <p className="mt-2 text-sm text-muted">{siteContent.location}</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                The collection is being built carefully. Use the contact page if you want
                updates or have a product lead to share.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>Copyright {currentYear} Little Upgrades Ltd.</p>
          <p>Useful first. Chosen slowly. No trend clutter.</p>
        </div>
      </div>
    </footer>
  );
}
