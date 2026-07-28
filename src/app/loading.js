export default function Loading() {
  return (
    <main className="page-shell section-pad mx-auto max-w-7xl pb-12">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="surface-panel animate-pulse px-6 py-7 sm:px-8">
          <div className="h-3 w-28 rounded-full bg-surface-muted" />
          <div className="mt-5 h-14 max-w-xl rounded-[1.2rem] bg-surface-muted" />
          <div className="mt-4 h-14 max-w-lg rounded-[1.2rem] bg-surface-muted" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="h-12 rounded-full bg-surface-muted" />
            <div className="h-12 rounded-full bg-surface-muted" />
          </div>
        </div>
        <div className="surface-panel animate-pulse overflow-hidden">
          <div className="aspect-[5/6] w-full bg-surface-muted" />
        </div>
      </div>
    </main>
  );
}
