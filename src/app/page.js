import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/lib/site-content";

const heroChecks = [
  "Broad sourcing across daily-life categories",
  "UK-based curation with a selective shortlist",
  "Designed to stay useful beyond one season",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="section-pad mx-auto max-w-7xl pb-16 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-8xl">
              {siteContent.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {siteContent.hero.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href={siteContent.hero.primaryCta.href}>
                {siteContent.hero.primaryCta.label}
              </Link>
              <Link className="button-secondary" href={siteContent.hero.secondaryCta.href}>
                {siteContent.hero.secondaryCta.label}
              </Link>
            </div>

            <ul className="mt-10 grid gap-3 text-sm text-muted sm:grid-cols-3">
              {heroChecks.map((item) => (
                <li key={item} className="surface-card px-4 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(181,149,100,0.28),transparent_58%)] blur-3xl" />
            <div className="surface-panel relative overflow-hidden">
              <Image
                src="/images/hero-product.avif"
                alt="Considered daily products arranged on a light stone surface"
                width={900}
                height={1080}
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="aspect-[5/6] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f1b15]/72 via-[#1f1b15]/16 to-transparent p-5 sm:p-6">
                <div className="ml-auto max-w-sm rounded-[1.5rem] border border-white/15 bg-white/92 p-5 text-sm shadow-lg backdrop-blur">
                  <p className="section-label text-[0.68rem]">Currently sourcing</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-ink">
                    {siteContent.sourcingAreas.map((area) => (
                      <span
                        key={area.name}
                        className="rounded-full bg-[#f4efe6] px-3 py-2 text-sm font-semibold"
                      >
                        {area.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-16 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Where we are sourcing</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                A broader mix, filtered by the same standard.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted">
              Little Upgrades is not locked into one product lane. The collection is being
              built across the categories people actually move through every week.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {siteContent.sourcingAreas.map((area, index) => (
              <article
                key={area.name}
                className="surface-card h-full px-6 py-6 hover:-translate-y-1"
              >
                <p className="text-sm font-semibold text-accent-soft">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-3xl text-ink">{area.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="space-y-6">
              <p className="section-label">Why it feels different</p>
              <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Better objects make routine feel lighter.
              </h2>
              <p className="max-w-xl text-base leading-8 text-muted">
                The aim is not to sell more stuff for the sake of it. The aim is to surface
                products that solve small but recurring frictions in the way people cook,
                tidy, travel, work, care for pets, and look after themselves.
              </p>

              <div className="surface-panel overflow-hidden">
                <Image
                  src="/images/home-goods.avif"
                  alt="Home goods styled on a light surface"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>

            <div className="grid gap-4">
              {siteContent.principles.map((principle) => (
                <article key={principle.title} className="surface-card px-6 py-6">
                  <p className="section-label">Principle</p>
                  <h3 className="mt-3 font-serif text-3xl text-ink">{principle.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                    {principle.description}
                  </p>
                </article>
              ))}

              <div className="surface-card px-6 py-6">
                <p className="section-label">Collection status</p>
                <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
                  The live shop is intentionally lean while the shortlist is still taking
                  shape. You can follow the build on the shop page or send a product lead
                  through the contact form.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link className="button-primary" href="/shop">
                    See what is taking shape
                  </Link>
                  <Link className="button-secondary" href="/contact">
                    Share a lead
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-16 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">How the shortlist is built</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                A slower process, on purpose.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted">
              The brand only works if the bar stays high. That means broad sourcing on the
              front end, then a much narrower filter before anything goes live.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.sourcingSteps.map((step) => (
              <article key={step.title} className="surface-card h-full px-6 py-6">
                <h3 className="font-serif text-3xl text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad mx-auto max-w-7xl py-16 lg:py-20">
        <div className="surface-panel grid gap-10 overflow-hidden px-6 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10">
          <div>
            <p className="section-label">Next step</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
              The first collection is being assembled now.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
              Browse the shop holding page for the current direction, or get in touch if you
              want updates, sourcing conversations, or early access when the shortlist goes
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

          <div className="surface-card overflow-hidden">
            <Image
              src="/images/workspace.avif"
              alt="Workspace image representing careful product curation"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
