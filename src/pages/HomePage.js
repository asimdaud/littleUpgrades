"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from 'framer-motion';
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
  Package
} from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-screen w-full relative overflow-hidden bg-charcoal flex items-center justify-center">
        <div className="max-w-7xl w-full px-8 grid lg:grid-cols-12 items-center gap-12 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="text-amber uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Launching Feb 2026</span>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-serif leading-[0.9] tracking-tighter text-offWhite uppercase mb-8">
              Everyday <br />
              <span className="text-amber italic">Essentials</span>
            </h1>
            <p className="text-stone text-base md:text-lg font-light tracking-wide max-w-md mb-10 leading-relaxed">
              We hunt for high-quality, useful products and bring them together in one place. Simple upgrades for your daily routine.
            </p>
            <div className="flex gap-4">
               <button 
                onClick={() => setActivePage('shop')}
                className="px-8 py-4 bg-amber text-charcoal text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors interactive"
               >
                 View Collection
               </button>
               <button 
                onClick={() => setActivePage('about')}
                className="px-8 py-4 border border-stone/30 text-offWhite text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors interactive"
               >
                 Our Story
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute inset-0 border border-[#c1c1c1] -m-6 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700" />
              <Image 
                width={800} 
                height={1000} 
                priority={true}
                src="/images/hero-product.avif" 
                alt="Product Aesthetic" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5] shadow-2xl" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-8 flex flex-col items-start gap-4"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <span className="text-[9px] uppercase tracking-[0.5em] text-stone vertical-text">Scroll to explore</span>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 bg-offWhite border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber uppercase tracking-widest text-xs font-bold mb-6 block">What we do</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 italic">"We look for the things that make life just a little bit better."</h2>
          <p className="text-stone text-lg leading-relaxed">
            Little Upgrades is an Amazon-based storefront. We don't stick to one niche. Instead, we spend our time product hunting across different categories to find items that are actually worth your money. If it's useful, well-made, and adds value to your day, it makes the cut.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative aspect-[4/5] bg-stone-100 overflow-hidden cursor-pointer interactive" onClick={() => setActivePage('shop')}>
               <Image width={800} height={1000} alt="Tech & Tools" src="/images/tech-tools.avif" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-stone/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-3xl font-serif italic">Tech & Tools</h3>
                  <span className="text-white/70 text-[10px] uppercase tracking-widest">Coming Soon</span>
               </div>
            </div>
            <div className="group relative aspect-[4/5] bg-stone-100 overflow-hidden cursor-pointer interactive" onClick={() => setActivePage('shop')}>
                <Image width={800} height={1000} alt="Home Goods" src="/images/home-goods.avif" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-stone/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-3xl font-serif italic">Home Goods</h3>
                  <span className="text-white/70 text-[10px] uppercase tracking-widest">In Selection</span>
               </div>
            </div>
            <div className="group relative aspect-[4/5] bg-stone-100 overflow-hidden cursor-pointer interactive" onClick={() => setActivePage('shop')}>
                <Image width={800} height={1000} alt="Lifestyle" src="/images/lifestyle.avif" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-stone/5 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-3xl font-serif italic">Lifestyle</h3>
                  <span className="text-white/70 text-[10px] uppercase tracking-widest">Hunting</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
