"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Shop() {
  return (
    <main className="pt-32 bg-offWhite min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-20">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-amber" />
              <span className="text-amber uppercase tracking-[0.4em] text-[10px] font-bold font-mono">
                Status: Hunting_Mode
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif italic text-charcoal leading-tight tracking-tighter">
              The Selection
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <p className="text-stone text-sm leading-relaxed font-light border-l border-stone/20 pl-6 max-w-sm">
              We are currently vetting global suppliers and testing hardware to ensure only the most functional upgrades reach our storefront.
            </p>
          </motion.div>
        </div>
        
        {/* The Placeholder Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }} // Delayed for "loading" feel
          className="relative"
        >
          <div className="absolute inset-x-0 -top-20 bottom-0 bg-amber/[0.03] blur-[120px] rounded-full pointer-events-none" />

          <div className="glass border border-white/20 p-12 md:p-24 rounded-3xl relative overflow-hidden flex flex-col items-center text-center shadow-premium">
            
            {/* Technical Marker */}
            <div className="absolute top-8 left-8 flex items-center gap-2 opacity-30">
              <Search size={10} className="text-charcoal" />
              <span className="text-[8px] uppercase tracking-[0.2em] font-bold font-mono">
                System_Scan: Inventory_Null
              </span>
            </div>

            <Package size={40} className="text-amber/40 mb-8 animate-pulse" />
            
            <h3 className="text-3xl md:text-4xl font-serif italic text-charcoal mb-6">
              Stocking the Shelves
            </h3>
            
            <p className="text-stone text-[11px] uppercase tracking-[0.3em] max-w-md mb-12 leading-loose font-medium">
              Our Amazon collection is launching shortly. We are selecting items that solve problems you didn't know you had.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <Link 
                href="/contact"
                className="group relative px-10 py-4 bg-charcoal text-offWhite text-[10px] font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl active:scale-95 interactive"
              >
                <span className="absolute inset-0 bg-amber translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover:text-charcoal transition-colors duration-500 flex items-center gap-3 font-bold">
                  Inquire with Curator <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link 
                href="/about"
                className="group relative text-charcoal text-[10px] font-bold uppercase tracking-[0.2em] py-2 interactive"
              >
                View our Ethos
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone/20" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber group-hover:w-full transition-all duration-500" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Est. Note */}
        <div className="mt-24 text-center">
          <span className="text-[9px] uppercase tracking-[0.8em] text-stone/20 font-bold font-mono">
            Data_Stream: Live // Location: Manchester_UK
          </span>
        </div>
      </div>
    </main>
  );
}