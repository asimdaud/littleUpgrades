"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .interactive')) setIsHovering(true);
      else setIsHovering(false);
    };
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: '#D4AF37',
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
  );
};