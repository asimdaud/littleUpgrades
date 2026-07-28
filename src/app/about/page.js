import Link from "next/link";
import PremiumImage from "@/components/PremiumImage";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/site-content";

export const metadata = {
  title: "About",
  description:
    "Learn how Little Upgrades sources and filters products across kitchen, toys, pets, skincare, travel, workspace, and everyday home life.",
};

export default function About() {
  return (
    <main className="page-shell">
      <section className="section-pad mx-auto max-w-7xl pb-12 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.96fr] lg:items-end">
          <Reveal className="space-y-5">
            <p className="section-label">About Little Upgrades</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] text-ink sm:text-6xl lg:text-7xl">
              Built around better daily objects, not a forced niche.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Little Upgrades is a UK-based curated storefront built around a simple idea:
              useful products deserve better filtering. We source broadly, compare carefully,
              and keep the eventual live collection tightly edited.
            </p>
            <p className="max-w-2xl text-base leading-8 text-muted">
              Kitchen tools, toys, pets, skincare, travel gear, workspace accessories, and
              other daily-life products all sit inside the same system as long as they meet
              the same standard.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {siteContent.principles.map((principle, index) => (
                <Reveal key={principle.title} delay={0.06 * index}>
                  <div className="surface-card h-full px-4 py-4">
                    <p className="section-label">Principle</p>
                    <p className="mt-3 font-serif text-2xl text-ink">{principle.title}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-4 sm:grid-cols-[1fr_0.52fr]">
              <div className="surface-panel overflow-hidden p-2">
                <PremiumImage
                  alt={siteContent.media.process.alt}
                  sources={siteContent.media.process.sources}
                  fill
                  priority
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="relative aspect-[5/6] rounded-[1.35rem]"
                />
              </div>
              <div className="grid gap-4">
                <div className="surface-card p-5">
                  <p className="section-label">Location</p>
                  <p className="mt-3 font-serif text-3xl text-ink">{siteContent.location}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Sourcing across categories while keeping the eventual collection calm and
                    highly selective.
                  </p>
                </div>
                <div className="surface-card overflow-hidden p-2">
                  <PremiumImage
                    alt={siteContent.media.workspace.alt}
                    sources={siteContent.media.workspace.sources}
                    fill
                    sizes="(min-width: 1024px) 18vw, 50vw"
                    className="relative aspect-[4/5] rounded-[1.15rem]"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-12 lg:py-16">
          <Reveal className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Category scope</p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Broad sourcing only works if the filter stays consistent.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted">
              A good kitchen organiser and a good pet accessory do not look the same, but
              both should solve real problems, feel durable, and avoid unnecessary clutter.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.sourcingAreas.map((area, index) => (
              <Reveal key={area.name} delay={0.05 * index}>
                <article className="surface-card group h-full overflow-hidden p-2">
                  <PremiumImage
                    alt={area.media.alt}
                    sources={area.media.sources}
                    fill
                    sizes="(min-width: 1280px) 24vw, (min-width: 768px) 46vw, 100vw"
                    className="relative aspect-[5/4] rounded-[1.2rem]"
                    imageClassName="motion-safe:group-hover:scale-[1.04]"
                  />
                  <div className="px-4 pb-4 pt-5">
                    <h2 className="font-serif text-3xl text-ink">{area.name}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted">{area.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-12 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <Reveal className="surface-panel px-6 py-7 sm:px-8">
              <p className="section-label">How we curate</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                The bar stays the same, even when the category changes.
              </h2>
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {siteContent.sourcingSteps.map((step, index) => (
                  <Reveal key={step.title} delay={0.06 * index}>
                    <article className="surface-card h-full px-5 py-5">
                      <p className="section-label">{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-3 font-serif text-3xl text-ink">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-4">
              <Reveal delay={0.1}>
                <div className="surface-card p-6">
                  <p className="section-label">Selection standards</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {siteContent.standards.map((standard) => (
                      <span key={standard} className="stat-chip">
                        {standard}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-8 text-muted">
                    If a product feels temporary, overly noisy, or shallow on function, it
                    does not help the collection.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="surface-card overflow-hidden p-2">
                  <PremiumImage
                    alt={siteContent.media.collection.alt}
                    sources={siteContent.media.collection.sources}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="relative aspect-[5/4] rounded-[1.2rem]"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="surface-card p-6">
                  <p className="section-label">Contact</p>
                  <a
                    className="mt-3 block break-all font-serif text-[clamp(1.9rem,4vw,3rem)] leading-[1.02] text-ink hover:text-accent"
                    href={`mailto:${siteContent.email}`}
                  >
                    {siteContent.email}
                  </a>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Use the contact page if you want updates or have a product lead worth
                    sharing.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-12 lg:py-16">
        <Reveal>
          <div className="surface-panel grid gap-6 overflow-hidden p-2 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="image-shell m-2">
              <PremiumImage
                alt={siteContent.hero.media.alt}
                sources={siteContent.hero.media.sources}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="relative aspect-[5/4] rounded-[1.2rem]"
              />
            </div>
            <div className="px-4 py-4 sm:px-6 lg:px-8">
              <p className="section-label">What does not make the cut</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                No trend clutter. No filler additions. No forced category story.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                The point of the storefront is to stay edited. You can track the launch
                direction on the shop page or send an enquiry if you want to stay close to
                the build.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary" href="/shop">
                  View the shop direction
                </Link>
                <Link className="button-secondary" href="/contact">
                  Contact Little Upgrades
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
