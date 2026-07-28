import Link from "next/link";
import PremiumImage from "@/components/PremiumImage";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/site-content";

const heroChecks = [
  "Broad sourcing across real daily-life categories",
  "UK-based curation with a deliberately tighter shortlist",
  "Selected for calm utility, not trend clutter",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="section-pad mx-auto max-w-7xl pb-12 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
          <Reveal className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="stat-chip">UK-based sourcing</span>
              <span className="stat-chip">Kitchen to skincare</span>
              <span className="stat-chip">Premium shortlist</span>
            </div>

            <div>
              <p className="section-label">Curated upgrades for daily life</p>
              <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.92] text-ink sm:text-6xl lg:text-[5.5rem]">
                {siteContent.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {siteContent.hero.summary}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href={siteContent.hero.primaryCta.href}>
                {siteContent.hero.primaryCta.label}
              </Link>
              <Link className="button-secondary" href={siteContent.hero.secondaryCta.href}>
                {siteContent.hero.secondaryCta.label}
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroChecks.map((item, index) => (
                <Reveal key={item} delay={0.08 * (index + 1)}>
                  <div className="surface-card h-full px-4 py-4">
                    <p className="section-label">0{index + 1}</p>
                    <p className="mt-3 text-sm leading-7 text-muted">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative" delay={0.12}>
            <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(181,149,100,0.22),transparent_68%)] blur-3xl" />
            <div className="grid gap-4 lg:grid-cols-[1fr_0.46fr]">
              <div className="surface-panel relative overflow-hidden p-2">
                <PremiumImage
                  alt={siteContent.hero.media.alt}
                  sources={siteContent.hero.media.sources}
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="relative aspect-[5/6] rounded-[1.5rem]"
                  imageClassName="motion-safe:hover:scale-[1.03]"
                />
                <div className="absolute inset-x-4 bottom-4 glass-panel p-4">
                  <p className="section-label">Currently sourcing</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {siteContent.sourcingAreas.map((area) => (
                      <span
                        key={area.name}
                        className="rounded-full bg-[#f6f0e6] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink"
                      >
                        {area.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="surface-card overflow-hidden p-2">
                  <PremiumImage
                    alt={siteContent.media.process.alt}
                    sources={siteContent.media.process.sources}
                    fill
                    sizes="(min-width: 1024px) 14vw, 50vw"
                    className="relative aspect-[4/5] rounded-[1.2rem]"
                  />
                </div>
                <div className="surface-card p-5">
                  <p className="section-label">Selection bar</p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight text-ink">
                    Useful first. Chosen slowly.
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Products only move forward if they feel durable, quiet, and worth
                    keeping in rotation.
                  </p>
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
              <p className="section-label">Where we are sourcing</p>
              <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                A broad mix of categories, filtered through one calmer standard.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted">
              The collection is not built around one niche. It is built around whether a
              product solves a real friction well enough to deserve space.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.sourcingAreas.map((area, index) => (
              <Reveal key={area.name} delay={0.06 * index}>
                <article className="surface-card group h-full overflow-hidden p-2">
                  <PremiumImage
                    alt={area.media.alt}
                    sources={area.media.sources}
                    fill
                    sizes="(min-width: 1280px) 24vw, (min-width: 768px) 46vw, 100vw"
                    className="relative aspect-[5/4] rounded-[1.2rem]"
                    imageClassName="motion-safe:group-hover:scale-[1.04]"
                    fallbackLabel={area.name}
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
          <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
            <Reveal className="space-y-5">
              <p className="section-label">Why it feels different</p>
              <h2 className="max-w-xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Better objects make routine feel lighter and quieter.
              </h2>
              <p className="max-w-xl text-base leading-8 text-muted">
                The goal is not to inflate the catalogue. The goal is to surface products
                people actually keep using because the decision was made properly upstream.
              </p>
              <div className="image-shell p-2">
                <PremiumImage
                  alt={siteContent.media.collection.alt}
                  sources={siteContent.media.collection.sources}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="relative aspect-[4/5] rounded-[1.2rem]"
                />
              </div>
            </Reveal>

            <div className="grid gap-4">
              {siteContent.principles.map((principle, index) => (
                <Reveal key={principle.title} delay={0.08 * index}>
                  <article className="surface-card px-6 py-6">
                    <p className="section-label">Principle</p>
                    <h3 className="mt-3 font-serif text-3xl text-ink">{principle.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                      {principle.description}
                    </p>
                  </article>
                </Reveal>
              ))}

              <Reveal delay={0.22}>
                <div className="surface-panel px-6 py-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="section-label">Selection signals</p>
                      <h3 className="mt-3 font-serif text-3xl text-ink">
                        The shortlist stays edited.
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {siteContent.standards.map((standard) => (
                        <span key={standard} className="stat-chip">
                          {standard}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
                    The live shop remains lean while the collection is still being assembled.
                    That is deliberate. Better curation usually looks smaller before it looks
                    larger.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-12 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <Reveal className="surface-panel px-6 py-7 sm:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="section-label">How the shortlist is built</p>
                  <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                    A slower process, on purpose.
                  </h2>
                </div>
                <span className="stat-chip">No filler additions</span>
              </div>

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

            <Reveal delay={0.12}>
              <div className="surface-card overflow-hidden p-2">
                <PremiumImage
                  alt={siteContent.media.process.alt}
                  sources={siteContent.media.process.sources}
                  fill
                  sizes="(min-width: 1024px) 34vw, 100vw"
                  className="relative aspect-[4/5] rounded-[1.2rem]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-12 lg:py-16">
        <Reveal>
          <div className="surface-panel grid gap-6 overflow-hidden p-2 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="px-4 py-4 sm:px-6 lg:px-8">
              <p className="section-label">Next step</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
                The first collection is being assembled now.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                Browse the current direction on the shop page or get in touch if you want
                updates, sourcing conversations, or early access when the shortlist goes
                live.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary" href="/shop">
                  Go to shop
                </Link>
                <Link className="button-secondary" href="/contact">
                  Contact Little Upgrades
                </Link>
              </div>
            </div>

            <div className="image-shell m-2">
              <PremiumImage
                alt={siteContent.media.workspace.alt}
                sources={siteContent.media.workspace.sources}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="relative aspect-[5/4] rounded-[1.2rem]"
              />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
