import Link from "next/link";
import PremiumImage from "@/components/PremiumImage";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/site-content";

export const metadata = {
  title: "Shop",
  description:
    "Track the launch direction for Little Upgrades as the curated collection is assembled across kitchen, toys, pets, skincare, travel, workspace, and more.",
};

export default function Shop() {
  return (
    <main className="page-shell">
      <section className="section-pad mx-auto max-w-7xl pb-12 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-end">
          <Reveal className="space-y-5">
            <p className="section-label">Shop direction</p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.94] text-ink sm:text-6xl lg:text-7xl">
              The collection is taking shape, but it is staying selective.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              We are still testing and shortlisting products before the live collection
              opens. The range will span multiple daily-life categories, but only the
              strongest options will make it through.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href={`mailto:${siteContent.email}`}>
                Email for updates
              </a>
              <Link className="button-secondary" href="/contact">
                Contact us
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {siteContent.standards.map((standard) => (
                <span key={standard} className="stat-chip">
                  {standard}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="surface-panel grid gap-4 overflow-hidden p-2 sm:grid-cols-[1fr_0.48fr]">
              <PremiumImage
                alt={siteContent.hero.media.alt}
                sources={siteContent.hero.media.sources}
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 100vw"
                className="relative aspect-[5/6] rounded-[1.35rem]"
              />
              <div className="grid gap-4">
                <div className="surface-card p-5">
                  <p className="section-label">Current direction</p>
                  <h2 className="mt-3 font-serif text-3xl text-ink">Broad sourcing, tight edits.</h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    This page acts as the public holding space for the categories, standards,
                    and process behind the launch.
                  </p>
                </div>
                <div className="surface-card overflow-hidden p-2">
                  <PremiumImage
                    alt={siteContent.media.workspace.alt}
                    sources={siteContent.media.workspace.sources}
                    fill
                    sizes="(min-width: 1024px) 16vw, 48vw"
                    className="relative aspect-[4/5] rounded-[1.1rem]"
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
              <p className="section-label">Launch categories</p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                The future shop is broad, but every category still needs to earn its place.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted">
              The live storefront will stay intentionally smaller than a typical catch-all
              catalogue. Category spread does not mean catalogue sprawl.
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
                    <p className="section-label">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-3 font-serif text-3xl text-ink">{area.name}</h3>
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
          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <Reveal>
              <div className="surface-card overflow-hidden p-2">
                <PremiumImage
                  alt={siteContent.media.process.alt}
                  sources={siteContent.media.process.sources}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="relative aspect-[5/4] rounded-[1.25rem]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12} className="surface-panel px-6 py-7 sm:px-8">
              <p className="section-label">Build process</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                What happens before a product goes live.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                The process below protects the quality of the final mix and keeps the range
                from becoming generic or inflated.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {siteContent.sourcingSteps.map((step, index) => (
                  <Reveal key={step.title} delay={0.06 * index}>
                    <article className="surface-card h-full px-5 py-5">
                      <h3 className="font-serif text-3xl text-ink">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-12 lg:py-16">
        <Reveal>
          <div className="surface-panel grid gap-6 overflow-hidden p-2 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="px-4 py-4 sm:px-6 lg:px-8">
              <p className="section-label">Need something now?</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Send a product lead or ask to be notified when the shortlist goes live.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                If you have a product suggestion, sourcing lead, or general enquiry, the
                contact page is the best route while the full collection is still in build.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary" href="/contact">
                  Go to contact
                </Link>
                <a className="button-secondary" href={`mailto:${siteContent.email}`}>
                  {siteContent.email}
                </a>
              </div>
            </div>
            <div className="image-shell m-2">
              <PremiumImage
                alt={siteContent.media.collection.alt}
                sources={siteContent.media.collection.sources}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="relative aspect-[5/4] rounded-[1.2rem]"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
