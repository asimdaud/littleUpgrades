"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell section-pad mx-auto max-w-7xl pb-14">
      <div className="surface-panel grid gap-6 overflow-hidden px-6 py-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:px-10">
        <div>
          <p className="section-label">Error 404</p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.94] text-ink sm:text-6xl">
            That page is not part of the collection.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            The page you requested does not exist, has moved, or is no longer part of the
            current site structure.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="button-primary">
              Return home
            </Link>
            <Link href="/shop" className="button-secondary">
              View shop direction
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Kitchen",
            "Toys & Play",
            "Pets",
            "Skincare",
          ].map((item) => (
            <div key={item} className="surface-card px-5 py-5">
              <p className="section-label">Browse instead</p>
              <p className="mt-3 font-serif text-3xl text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
