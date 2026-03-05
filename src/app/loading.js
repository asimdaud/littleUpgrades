export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-offWhite">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-[1px] bg-amber animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-stone">Loading</span>
      </div>
    </div>
  );
}