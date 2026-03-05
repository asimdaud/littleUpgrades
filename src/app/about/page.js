"use client"; // This is mandatory in Next.js for interactive components

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  ShoppingBag,
  Search,
  X,
  Plus,
  Loader2,
  Mail,
  Instagram,
  Package,
} from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <main className="pt-32 bg-offWhite min-h-screen">
      <div className="max-w-6xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-amber uppercase tracking-widest text-sm font-bold mb-6 block">
            Our Story
          </span>
          <h1 className="text-6xl font-serif leading-tight mb-8 text-charcoal italic">
            From Software to Physical Goods.
          </h1>
          <p className="text-stone text-lg mb-6 leading-relaxed">
            Little Upgrades is a small, family-run business founded in February
            2026. After years spent in software engineering, we decided to pivot
            towards something more tangible.
          </p>
          <p className="text-stone text-lg mb-10 leading-relaxed">
            We don't have a "niche" because we don't think good design should be
            limited to one. We spend our time hunting for interesting products,
            testing them out, and if they meet our standards, we list them on
            our Amazon store. It's as simple as that.
          </p>
          <div className="flex items-center gap-4 py-8 border-t border-stone-200">
            <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center font-serif italic text-xl">
              L
            </div>
            <div>
              <p className="text-charcoal font-bold text-sm">
                The Little Upgrades Team
              </p>
              <p className="text-stone text-xs">UK Based Storefront</p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-2xl">
            <Image
              width={800}
              height={1000}
              src="/images/workspace.avif"
              className="w-full h-full object-cover grayscale"
              alt="Workspace"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
);
}
