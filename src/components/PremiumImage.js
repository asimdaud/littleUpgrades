"use client";

import { useState } from "react";
import Image from "next/image";
import { BrandGlyph } from "@/components/BrandMark";

export default function PremiumImage({
  alt,
  sources,
  className,
  imageClassName,
  fallbackLabel = "Little Upgrades",
  fill = false,
  priority = false,
  sizes,
  width,
  height,
}) {
  const sourceList = Array.isArray(sources) ? sources.filter(Boolean) : [sources].filter(Boolean);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [isExhausted, setIsExhausted] = useState(sourceList.length === 0);

  const handleError = () => {
    setSourceIndex((currentIndex) => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= sourceList.length) {
        setIsExhausted(true);
        return currentIndex;
      }
      return nextIndex;
    });
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#ede5d8] ${className ?? ""}`}
      aria-label={isExhausted ? `${alt} unavailable` : undefined}
    >
      {isExhausted ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),rgba(237,229,216,0.94))] px-5 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface/90 text-accent shadow-[0_18px_30px_-24px_rgba(31,27,21,0.4)]">
            <BrandGlyph className="h-8 w-8" />
          </div>
          <p className="font-serif text-2xl text-ink">{fallbackLabel}</p>
          <p className="max-w-[18rem] text-sm leading-6 text-muted">
            The preview image is unavailable right now, but the collection details are still here.
          </p>
        </div>
      ) : (
        <Image
          alt={alt}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out ${imageClassName ?? ""}`}
          fill={fill}
          height={height}
          priority={priority}
          sizes={sizes}
          src={sourceList[sourceIndex]}
          width={width}
          onError={handleError}
        />
      )}
    </div>
  );
}
