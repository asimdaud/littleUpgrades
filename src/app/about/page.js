"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <main className="pt-32 md:pt-48 bg-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-8 pb-32">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vertical Identity Marker */}
          <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-between h-[350px] sticky top-32">
            <span className="vertical-text text-[9px] uppercase tracking-[0.5em] text-stone/30 font-bold whitespace-nowrap">
              The Founder's Note — v.01
            </span>
            <div className="w-[1px] h-16 bg-stone/10" />
            <div className="w-10 h-10 rounded-full glass border border-stone/10 flex items-center justify-center font-serif italic text-charcoal text-sm shadow-sm">
              L
            </div>
          </div>

          {/* Center/Right Content */}
          <div className="lg:col-span-11 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[1px] bg-amber" />
                <span className="text-amber uppercase tracking-[0.4em] text-[10px] font-bold">
                  The Philosophy
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-10 text-charcoal italic tracking-tighter">
                From Software <br />
                <span className="text-stone/20 not-italic">to</span> Physical Goods.
              </h1>

              <div className="space-y-8">
                <p className="text-stone text-lg leading-relaxed font-light">
                  Little Upgrades is a boutique storefront founded on the principle that 
                  the objects we interact with daily shape our focus and well-being.
                </p>
                
                <p className="text-stone text-lg leading-relaxed font-light border-l border-amber/30 pl-8 italic">
                  "We apply the same rigor of 'debugging' to physical 
                  products—searching for friction and finding the upgrade."
                </p>

                <p className="text-stone text-lg leading-relaxed font-light">
                  Our curation process is slow, intentional, and strictly focused 
                  on utility. If it doesn't elevate the routine, it doesn't make the list.
                </p>
              </div>

              {/* Signature Section */}
              <div className="mt-16 pt-8 border-t border-stone/10">
                <p className="text-charcoal font-bold text-[10px] uppercase tracking-[0.3em]">
                  Little Upgrades Team
                </p>
                <p className="text-stone/50 text-[9px] uppercase tracking-[0.2em] mt-2 font-medium">
                  Manchester, UK <span className="mx-2">/</span> Est. 2026
                </p>
              </div>
            </motion.div>

            {/* Image with Modern Framing */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative"
            >
              {/* Glass Frame Element - Slightly more subtle */}
              <div className="absolute -inset-4 md:-inset-8 glass border border-white/40 -z-10 rounded-3xl translate-x-2 translate-y-2 md:translate-x-6 md:translate-y-6" />
              
              <div className="aspect-[4/5] bg-stone-100 overflow-hidden rounded-2xl shadow-premium relative group">
                <Image
                  width={800}
                  height={1000}
                  src="/images/workspace.avif"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] ease-out"
                  alt="Our curated workspace"
                  priority
                />
                {/* Technical Overlay */}
                <div className="absolute bottom-6 left-6 glass px-4 py-2 text-[8px] uppercase tracking-widest text-charcoal font-extrabold border border-white/20">
                  Studio Archive // 01
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </main>
  );
}