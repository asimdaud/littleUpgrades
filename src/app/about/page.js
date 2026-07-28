import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "Learn how Little Upgrades sources and filters products across kitchen, toys, pets, skincare, travel, workspace, and everyday home life.",
};

export default function About() {
  return (
    <main className="page-shell">
      <section className="section-pad mx-auto max-w-7xl pb-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.84fr] lg:items-start">
          <div>
            <p className="section-label">About Little Upgrades</p>
            <h1 className="mt-3 font-serif text-5xl leading-[0.96] text-ink sm:text-6xl lg:text-7xl">
              Built around better daily objects.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Little Upgrades is a UK-based curated storefront built around a simple idea:
              useful products deserve better filtering. We source broadly, compare carefully,
              and keep the eventual live collection tightly edited.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              That means a broader category mix than a typical niche shop. Kitchen tools,
              toys, pets, skincare, travel gear, workspace accessories, and other daily-life
              products all sit inside the same system as long as they meet the same standard.
            </p>
          </div>

          <div className="surface-panel overflow-hidden">
            <Image
              src="/images/workspace.avif"
              alt="Workspace scene representing thoughtful product selection"
              width={1200}
              height={1400}
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-16 lg:py-20">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.sourcingAreas.map((area) => (
              <article key={area.name} className="surface-card h-full px-6 py-6">
                <h2 className="font-serif text-3xl text-ink">{area.name}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-label">How we curate</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                The bar stays the same, even when the category changes.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-muted">
                A good kitchen organiser and a good pet accessory do not look the same, but
                they should both solve real problems, feel durable, and avoid unnecessary
                clutter. That is the through-line.
              </p>

              <div className="mt-8 surface-card p-6">
                <p className="section-label">Contact</p>
                <a
                  className="mt-3 block font-serif text-3xl text-ink hover:text-accent"
                  href={`mailto:${siteContent.email}`}
                >
                  {siteContent.email}
                </a>
                <p className="mt-2 text-sm text-muted">{siteContent.location}</p>
              </div>
            </div>

            <div className="grid gap-4">
              {siteContent.sourcingSteps.map((step) => (
                <article key={step.title} className="surface-card px-6 py-6">
                  <p className="section-label">Step</p>
                  <h3 className="mt-3 font-serif text-3xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-16 lg:py-20">
        <div className="surface-panel px-6 py-8 sm:px-8 lg:px-10">
          <p className="section-label">What does not make the cut</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
                No trend clutter. No forced niche. No filler.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-muted">
              <p>
                The point of the storefront is to stay edited. If a product feels temporary,
                overly noisy, or shallow on function, it does not help the collection.
              </p>
              <p>
                That is why the live range will grow carefully rather than quickly. You can
                track the direction on the shop page or send an enquiry if you want to keep
                up with the launch.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href="/shop">
              View the shop direction
            </Link>
            <Link className="button-secondary" href="/contact">
              Contact Little Upgrades
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
