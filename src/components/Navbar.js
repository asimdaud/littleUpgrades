"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Mail, Search, Package } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const pathname = usePathname(); // This detects which page you are on

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsTop(latest < 50);
  });

  // Mapping the display name to the actual folder path
  const navLinks = [
    { name: "home", path: "/" },
    { name: "shop", path: "/shop" },
    { name: "about", path: "/about" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center transition-all duration-300 ${
        isTop
          ? "bg-transparent mix-blend-difference text-white"
          : "bg-charcoal/80 backdrop-blur-md border-b border-white/5 text-white"
      }`}
    >
      <Link
        href="/"
        className="text-xl font-serif tracking-tighter cursor-pointer interactive"
      >
        LITTLE UPGRADES
      </Link>

      <div className="flex gap-8 text-xs uppercase tracking-widest">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`hover:text-amber transition-colors interactive relative ${
                isActive ? "text-amber" : ""
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[1px] bg-amber"
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
