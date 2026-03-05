"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Search, 
  Package 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone py-20 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
        
        {/* Brand Column */}
        <div className="col-span-1">
          <h2 className="text-3xl font-serif text-offWhite mb-6 italic tracking-tighter">LITTLE UPGRADES</h2>
          <p className="text-sm leading-relaxed max-w-xs">
            An Amazon-based shop hunting for the best everyday items across all categories. Simple, useful, and high-quality.
          </p>
        </div>

        {/* Navigation Column */}
        <div>
          <h4 className="text-offWhite uppercase tracking-widest text-[10px] mb-8">Navigation</h4>
          <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
            <li><Link href="/" className="hover:text-amber transition-colors interactive">Home</Link></li>
            <li><Link href="/shop" className="hover:text-amber transition-colors interactive">The Shop</Link></li>
            <li><Link href="/about" className="hover:text-amber transition-colors interactive">About</Link></li>
            <li><Link href="/contact" className="hover:text-amber transition-colors interactive">Contact</Link></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h4 className="text-offWhite uppercase tracking-widest text-[10px] mb-8">Support</h4>
          <ul className="space-y-4 text-xs font-bold tracking-widest uppercase">
            <li className="hover:text-amber cursor-pointer flex items-center gap-2 italic tracking-normal capitalize font-serif text-lg transition-colors">
              <Mail size={16}/> 
              <a href="mailto:info@littleupgrades.co.uk">Email Us</a>
            </li>
            
            <li className="hover:text-amber transition-colors flex items-center gap-2 italic tracking-normal capitalize font-serif text-lg">
              <Search size={16}/> 
              <Link href="/contact" className="interactive">Help Center</Link>
            </li>
            
            <li className="text-stone/60 flex items-center gap-2 italic tracking-normal capitalize font-serif text-lg select-none">
              <Package size={16}/> UK Based Storefront
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest">
        <span>© 2026 Little Upgrades Ltd. UK Registered.</span>
        <div className="flex gap-8 text-stone/40">
          <Link href="/contact" className="hover:text-stone transition-colors cursor-pointer">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-stone transition-colors cursor-pointer">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}