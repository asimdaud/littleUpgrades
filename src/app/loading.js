export default function Loading() {
  return (
    <div className="page-shell flex items-center justify-center px-4">
      <div className="surface-card flex min-w-[18rem] flex-col items-center gap-4 px-8 py-10 text-center">
        <div className="h-12 w-12 animate-pulse rounded-full border border-line bg-surface-muted" />
        <span className="section-label">Loading</span>
        <p className="text-sm text-muted">Preparing the next page.</p>
      </div>
    </div>
  );
}
