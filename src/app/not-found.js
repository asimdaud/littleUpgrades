"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex items-center justify-center px-4">
      <div className="surface-panel max-w-2xl px-6 py-10 text-center sm:px-10">
        <p className="section-label">Error 404</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">
          That page is not part of the collection.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted">
          The page you requested does not exist, has moved, or is no longer part of the
          current site structure.
        </p>
        <Link href="/" className="button-primary mt-8">
          Return home
        </Link>
      </div>
    </main>
  );
}
