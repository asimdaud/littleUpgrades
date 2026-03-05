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
  
  
  export default function Footer() {
  return (
  
  <footer className="bg-charcoal text-stone py-20 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="col-span-1">
            <h2 className="text-3xl font-serif text-offWhite mb-6 italic tracking-tighter">LITTLE UPGRADES</h2>
            <p className="text-sm leading-relaxed max-w-xs">An Amazon-based shop hunting for the best everyday items across all categories. Simple, useful, and high-quality.</p>
          </div>
          <div>
            <h4 className="text-offWhite uppercase tracking-widest text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
              <li onClick={() => setActivePage('home')} className="hover:text-amber cursor-pointer interactive">Home</li>
              <li onClick={() => setActivePage('shop')} className="hover:text-amber cursor-pointer interactive">The Shop</li>
              <li onClick={() => setActivePage('about')} className="hover:text-amber cursor-pointer interactive">About</li>
              <li onClick={() => setActivePage('contact')} className="hover:text-amber cursor-pointer interactive">Contact</li>
            </ul>
          </div>
          {/* <div>
            <h4 className="text-offWhite uppercase tracking-widest text-[10px] mb-8">Links</h4>
            <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
              <li className="hover:text-amber cursor-pointer flex items-center gap-2 italic tracking-normal capitalize font-serif text-lg"><Instagram size={16}/> Instagram</li>
              <li className="hover:text-amber cursor-pointer flex items-center gap-2 italic tracking-normal capitalize font-serif text-lg"><Mail size={16}/> Newsletter</li>
              <li className="hover:text-amber cursor-pointer flex items-center gap-2 italic tracking-normal capitalize font-serif text-lg"><ExternalLink size={16}/> Amazon Store</li>
            </ul>
          </div> */}
          <div>
  <h4 className="text-offWhite uppercase tracking-widest text-[10px] mb-8">Support</h4>
  <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
    {/* Direct Email Link */}
    <li className="hover:text-amber cursor-pointer flex items-center gap-2 italic tracking-normal capitalize font-serif text-lg transition-colors">
      <Mail size={16}/> 
      <a href="mailto:info@littleupgrades.co.uk">Email Us</a>
    </li>
    
    {/* Link to your Contact Section/Page */}
    <li 
      onClick={() => setActivePage('contact')} 
      className="hover:text-amber cursor-pointer flex items-center gap-2 italic tracking-normal capitalize font-serif text-lg transition-colors"
    >
      <Search size={16}/> Help Center
    </li>
    
    <li className="text-stone flex items-center gap-2 italic tracking-normal capitalize font-serif text-lg select-none">
  <Package size={16}/> UK Based Storefront
</li>
  </ul>
</div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest">
          <span>© 2026 Little Upgrades Ltd. UK Registered.</span>
        <div className="flex gap-8 text-stone/40 select-none">
  <span onClick={() => setActivePage('contact')} className="cursor-pointer">Privacy Policy</span>
  <span onClick={() => setActivePage('contact')} className="cursor-pointer">Terms of Service</span>
</div>
        </div>
      </footer>
      );
}