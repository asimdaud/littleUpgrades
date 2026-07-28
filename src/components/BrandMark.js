export function BrandGlyph({ className = "h-10 w-10" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.25" fill="rgba(255,253,248,0.92)" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1.5" />
      <path
        d="M20 27.5V12.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M20 15.5C20 12.7 22.1 10.4 25.2 9.9C25.3 12.9 23.9 15.4 20.9 16.1L20 16.3V15.5Z"
        fill="currentColor"
        fillOpacity="0.92"
      />
      <path
        d="M20 18.2C20.2 15.7 18.7 13.4 16.1 12.8C15.6 15.5 16.5 18.1 19.1 19L20 19.3L20 18.2Z"
        fill="currentColor"
        fillOpacity="0.82"
      />
      <path
        d="M20 22.3C19.8 20 18.2 18.1 15.7 17.7C15.5 20.2 16.6 22.4 19 23.2L20 23.5V22.3Z"
        fill="currentColor"
        fillOpacity="0.74"
      />
      <path
        d="M20 23.9C20.2 21.5 21.8 19.4 24.3 18.8C24.7 21.4 23.7 23.8 21.1 24.7L20 25.1V23.9Z"
        fill="currentColor"
        fillOpacity="0.78"
      />
    </svg>
  );
}

export default function BrandMark({
  compact = false,
  subtitle = "Curated daily goods",
  subtitleClassName = "mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-muted",
  titleClassName = "block font-serif leading-none text-ink",
}) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="text-accent">
        <BrandGlyph className={compact ? "h-10 w-10" : "h-11 w-11"} />
      </span>
      <span>
        <span className={`${titleClassName} ${compact ? "text-2xl" : "text-3xl"}`}>
          Little Upgrades
        </span>
        {subtitle ? <span className={subtitleClassName}>{subtitle}</span> : null}
      </span>
    </span>
  );
}
