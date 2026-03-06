"use client";
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // 1. Position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Smooth springs for that "luxury" lag-behind effect on the outer ring
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const springScale = useSpring(1, { damping: 20, stiffness: 300 });

  useEffect(() => {
    const moveCursor = (e) => {
      // Offset by half the width/height (12px for a 24px cursor)
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
      if (!isVisible) setIsVisible(true);
    };

    const handleInteraction = (e) => {
      const isInteractive = e.target.closest('button, a, .interactive, input, textarea');
      setIsHovering(!!isInteractive);
    };

    const handleMouseOut = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleInteraction);
    document.documentElement.addEventListener('mouseleave', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleInteraction);
      document.documentElement.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [mouseX, mouseY, isVisible]);

  useEffect(() => {
    springScale.set(isHovering ? 1.5 : 1);
  }, [isHovering, springScale]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Ring: The "Smooth" element */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border border-amber/40"
        style={{
          x: smoothX,
          y: smoothY,
          scale: springScale,
          left: -4, // Centering adjustments
          top: -4,
        }}
      />
      
      {/* Inner Dot: The "Precise" element (Instant movement) */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-amber"
        style={{
          x: mouseX,
          y: mouseY,
          left: 9, // Centering inside the 24px parent
          top: 9,
        }}
      />
    </div>
  );
}