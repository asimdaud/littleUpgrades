import Link from "next/link";
import { siteContent } from "@/lib/site-content";

export const metadata = {
  title: "Shop",
  description:
    "Track the launch direction for Little Upgrades as the curated collection is assembled across kitchen, toys, pets, skincare, travel, workspace, and more.",
};

export default function Shop() {
  return (
    <main className="page-shell">
      <section className="section-pad mx-auto max-w-7xl pb-16 lg:pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="section-label">Shop</p>
            <h1 className="mt-3 font-serif text-5xl leading-[0.96] text-ink sm:text-6xl lg:text-7xl">
              The collection is taking shape.
            </h1>
          </div>

          <p className="max-w-xl text-base leading-8 text-muted">
            We are still testing and shortlisting products before the live collection opens.
            The range will span kitchen, toys, pets, skincare, travel, workspace, and other
            daily-life essentials, but only the strongest options will make it through.
          </p>
        </div>

        <div className="mt-10 surface-panel px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="section-label">Current direction</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                A broad storefront, edited down to what actually deserves attention.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted">
                While the storefront is being assembled, this page acts as the public
                holding space for the categories, standards, and process behind the launch.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a className="button-primary" href={`mailto:${siteContent.email}`}>
                  Email for updates
                </a>
                <Link className="button-secondary" href="/contact">
                  Contact us
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {siteContent.sourcingAreas.map((area) => (
                <article key={area.name} className="surface-card px-5 py-5">
                  <h3 className="font-serif text-3xl text-ink">{area.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-16 lg:py-20">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.standards.map((standard) => (
              <article key={standard} className="surface-card px-6 py-6">
                <p className="section-label">Screening standard</p>
                <h2 className="mt-3 font-serif text-3xl text-ink">{standard}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-line">
        <div className="section-pad mx-auto max-w-7xl py-16 lg:py-20">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Build process</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-5xl">
                What happens before a product goes live.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted">
              The shop will stay intentionally smaller than a typical catch-all storefront.
              The process below is what protects the quality of the final mix.
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
        <div className="surface-panel px-6 py-8 sm:px-8 lg:px-10">
          <p className="section-label">Need something now?</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
                Send a product lead or ask to be notified when the shortlist goes live.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-muted">
              <p>
                If you have a product suggestion, sourcing lead, or general enquiry, the
                contact page is the best route while the full collection is still in build.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link className="button-primary" href="/contact">
                  Go to contact
                </Link>
                <a className="button-secondary" href={`mailto:${siteContent.email}`}>
                  {siteContent.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
