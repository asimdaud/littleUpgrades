"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  // 1. Position values (Instant, no lag)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Scale value (Still uses a spring for that "premium" pop)
  const springScale = useSpring(1, { damping: 20, stiffness: 300 });

  useEffect(() => {
    // Optimization: Using a ref to track position to avoid unnecessary re-renders
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    const handleInteraction = (e) => {
      // Logic to detect interactive elements across any component/page
      const isInteractive = e.target.closest('button, a, .interactive, input, textarea');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleInteraction);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleInteraction);
    };
  }, [mouseX, mouseY]);

  // Syncing the hovering state to the spring scale
  useEffect(() => {
    springScale.set(isHovering ? 2.5 : 1);
  }, [isHovering, springScale]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
        scale: springScale,
        backgroundColor: '#D4AF37',
      }}
    />
  );
}