"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="pt-32 bg-offWhite min-h-screen selection:bg-amber selection:text-charcoal">
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">
              The Philosophy
            </span>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-charcoal italic">
              From Software to <br /> Physical Goods.
            </h1>
            <p className="text-stone text-lg mb-6 leading-relaxed font-light">
              Little Upgrades is a small, family-run business founded in 2026. 
              After years spent in the digital world of software engineering, we pivoted 
              towards something more tangible—the objects we touch and use every day.
            </p>
            <p className="text-stone text-lg mb-10 leading-relaxed font-light">
              We don't limit ourselves to one "niche." We believe good design is universal. 
              Our team spends time hunting for interesting products and rigorously testing them. 
              If an item adds genuine value to our daily routine, it earns a place in our collection.
            </p>

            {/* Founder / Team Signature */}
            <div className="flex items-center gap-4 py-8 border-t border-stone-200/60">
              <div className="w-12 h-12 rounded-full bg-amber text-charcoal flex items-center justify-center font-serif italic text-xl shadow-inner">
                L
              </div>
              <div>
                <p className="text-charcoal font-bold text-xs uppercase tracking-widest">
                  Little Upgrades Team
                </p>
                <p className="text-stone text-[10px] uppercase tracking-widest">
                  UK Based Storefront
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Architectural Border Element */}
            <div className="absolute -inset-4 border border-stone-200 translate-x-2 translate-y-2 -z-10" />
            
            <div className="aspect-[3/4] bg-stone-100 overflow-hidden shadow-2xl relative">
              <Image
                width={800}
                height={1000}
                src="/images/workspace.avif"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                alt="Our curated workspace"
                priority
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-charcoal/5 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}