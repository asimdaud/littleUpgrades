"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false); // Auto-close menu on scroll
    } else {
      setHidden(false);
    }
    setIsTop(latest < 20);
  });

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        variants={{ 
          visible: { y: 0, opacity: 1 }, 
          hidden: { y: -20, opacity: 0 } 
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4 md:px-8 pointer-events-none"
      >
        <div className={`
          flex items-center justify-between w-full max-w-7xl px-6 md:px-8 py-3 md:py-4 
          rounded-full transition-all duration-500 pointer-events-auto
          ${isTop && !isOpen
            ? "bg-transparent" 
            : "glass shadow-premium border border-stone/10"
          }
        `}>
          
          {/* Logo Section */}
          <Link
            href="/"
            className="text-base md:text-lg font-serif tracking-tighter text-charcoal flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-amber rounded-full" />
            <span className="whitespace-nowrap uppercase italic font-bold">Little Upgrades</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`
                    relative text-[10px] uppercase tracking-[0.2em] font-bold 
                    transition-colors duration-500 py-1
                    ${isActive ? "text-charcoal" : "text-stone hover:text-charcoal"}
                  `}
                >
                  {link.name}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-amber"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-charcoal transition-transform active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-offWhite flex flex-col items-center justify-center md:hidden px-8"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-serif italic tracking-tighter ${
                      pathname === link.path ? "text-amber" : "text-charcoal"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Minimal Mobile Footer Info */}
            <div className="absolute bottom-12 text-[10px] uppercase tracking-[0.3em] text-stone">
              Manchester, UK — v.1.0.4
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}