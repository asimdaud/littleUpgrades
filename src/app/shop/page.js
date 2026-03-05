"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import Link from 'next/link';

export default function Shop() {
  return (
    <main className="pt-32 bg-offWhite min-h-screen selection:bg-amber selection:text-charcoal">
      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <Package size={40} className="text-amber mb-6" />
          <h1 className="text-6xl font-serif italic text-charcoal mb-4">The Selection</h1>
          <p className="text-stone max-w-xl leading-relaxed">
            Our inventory is currently in the "hunting" phase. We are vetting suppliers and testing products to ensure only the best make it to our Amazon store.
          </p>
        </motion.div>
        
        {/* Call to Action Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white border border-stone-200/60 p-12 md:p-20 text-center rounded-sm shadow-sm"
        >
          <h3 className="text-2xl font-serif italic text-charcoal mb-4">Looking for something specific?</h3>
          <p className="text-stone text-[10px] uppercase tracking-[0.2em] mb-8">
            While we stock our shelves, we are still taking product suggestions and wholesale inquiries.
          </p>
          <div className="flex justify-center gap-4">
            {/* Swapped onClick for Link component */}
            <Link 
              href="/contact"
              className="px-10 py-4 bg-charcoal text-white text-[10px] uppercase tracking-widest hover:bg-amber hover:text-charcoal transition-all interactive"
            >
              Contact our Curator
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}