"use client";
import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenis = useLenis();

  // This ensures that every time the URL changes, 
  // Lenis instantly resets the scroll to the top.
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return (
    <ReactLenis root options={{ 
      lerp: 0.1, 
      duration: 1.5, 
      smoothWheel: true,
      // syncTouch: true, // Uncomment this if you want smooth scroll on mobile too
    }}>
      {children}
    </ReactLenis>
  );
}