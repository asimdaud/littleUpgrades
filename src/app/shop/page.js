"use client"; // This is mandatory in Next.js for interactive components

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


export default function Shop() {
  return (
    <main className="pt-32 bg-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col items-center text-center mb-20">
          <Package size={40} className="text-amber mb-6" />
          <h1 className="text-6xl font-serif italic text-charcoal mb-4">The Selection</h1>
        <p className="text-stone max-w-xl">Our inventory is currently in the "hunting" phase. We are vetting suppliers and testing products to ensure only the best make it to our Amazon store.</p>
      </div>
      
     <div className="bg-white border border-stone-200 p-20 text-center rounded-sm">
  <h3 className="text-2xl font-serif italic text-charcoal mb-4">Looking for something specific?</h3>
  <p className="text-stone text-sm uppercase tracking-widest mb-8">
    While we stock our shelves, we are still taking product suggestions and wholesale inquiries.
  </p>
  <div className="flex justify-center gap-4">
    <button 
      onClick={() => setActivePage('contact')}
      className="px-8 py-3 bg-amber text-charcoal text-[10px] uppercase tracking-widest hover:bg-charcoal hover:text-amber transition-all interactive"
    >
      Contact our Curator
    </button>
  </div>
</div>
    </div>
  </main>
);
}