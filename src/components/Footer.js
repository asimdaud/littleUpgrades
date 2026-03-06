// "use client";

// import React from 'react';
// import Link from 'next/link';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-charcoal text-stone py-20 px-8 border-t border-white/5 overflow-hidden relative">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="grid lg:grid-cols-12 gap-12 mb-20 relative z-10">
          
//           {/* Brand Intro */}
//           <div className="lg:col-span-5">
//             <Link href="/" className="inline-block mb-8">
//               {/* Brand stays Serif for identity */}
//               <h2 className="text-2xl font-serif text-offWhite italic tracking-tighter">
//                 LITTLE UPGRADES
//               </h2>
//             </Link>
//             <p className="text-stone/50 text-[13px] leading-relaxed max-w-xs font-light tracking-wide">
//               An independent storefront hunting for everyday essentials. 
//               We curate across categories to find items where utility meets 
//               disciplined design.
//             </p>
//           </div>

//           {/* Navigation - Unified Sans-Serif */}
//           <div className="lg:col-span-3 lg:border-l lg:border-white/5 lg:pl-12">
//             <h4 className="text-offWhite/30 uppercase tracking-[0.4em] text-[9px] font-bold mb-8">Index</h4>
//             <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-medium">
//               <li><Link href="/" className="hover:text-amber transition-colors flex items-center gap-2 group">
//                 <span className="w-0 h-[1px] bg-amber group-hover:w-3 transition-all" /> Home
//               </Link></li>
//               <li><Link href="/shop" className="hover:text-amber transition-colors flex items-center gap-2 group">
//                 <span className="w-0 h-[1px] bg-amber group-hover:w-3 transition-all" /> The Selection
//               </Link></li>
//               <li><Link href="/about" className="hover:text-amber transition-colors flex items-center gap-2 group">
//                 <span className="w-0 h-[1px] bg-amber group-hover:w-3 transition-all" /> Our Ethos
//               </Link></li>
//               <li><Link href="/contact" className="hover:text-amber transition-colors flex items-center gap-2 group">
//                 <span className="w-0 h-[1px] bg-amber group-hover:w-3 transition-all" /> Inquiries
//               </Link></li>
//             </ul>
//           </div>

//           {/* Contact / Base - NOW UNIFIED SANS-SERIF */}
//           <div className="lg:col-span-4 lg:border-l lg:border-white/5 lg:pl-12">
//             <h4 className="text-offWhite/30 uppercase tracking-[0.4em] text-[9px] font-bold mb-8">Base</h4>
//             <div className="space-y-8">
//               <div 
//                 className="group cursor-pointer"
//                 onClick={() => {
//                     navigator.clipboard.writeText('hello@littleupgrades.co.uk');
//                 }}
//               >
//                 <p className="text-[9px] uppercase tracking-[0.2em] text-stone/40 mb-2 font-bold">Direct Transmission</p>
//                 {/* Removed font-serif italic - replaced with clean mono-spaced feel sans */}
//                 <p className="text-offWhite text-sm tracking-[0.1em] font-medium group-hover:text-amber transition-colors duration-500 uppercase">
//                   hello[at]littleupgrades.co.uk
//                 </p>
//               </div>
//               <div>
//                 <p className="text-[9px] uppercase tracking-[0.2em] text-stone/40 mb-2 font-bold">Location</p>
//                 <p className="text-offWhite text-sm tracking-[0.1em] font-medium uppercase flex items-center gap-3">
//                    Manchester, UK 
//                    <span className="flex h-2 w-2 relative">
//                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75"></span>
//                       <span className="relative inline-flex rounded-full h-2 w-2 bg-amber"></span>
//                    </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
//           <span className="text-stone/20 text-[9px] uppercase tracking-[0.5em] font-bold">
//             © {currentYear} Little Upgrades Ltd.
//           </span>

//           <div className="flex gap-10">
//             <Link href="/contact" className="text-stone/40 hover:text-amber transition-colors text-[9px] uppercase tracking-[0.3em] font-bold">Privacy</Link>
//             <Link href="/contact" className="text-stone/40 hover:text-amber transition-colors text-[9px] uppercase tracking-[0.3em] font-bold">Terms</Link>
//             <div className="flex items-center gap-3 text-stone/10 text-[9px] uppercase tracking-[0.3em] font-bold">
//               <span className="w-6 h-[1px] bg-white/5" />
//               Build 01.04.26
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-stone py-12 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid - Reduced gap from 16 to 8 */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Intro - Reduced margins */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-xl font-serif text-offWhite italic tracking-tighter">
                LITTLE UPGRADES
              </h2>
            </Link>
           <p className="text-stone/50 text-[13px] leading-relaxed max-w-xs font-light tracking-wide">
               An independent storefront hunting for everyday essentials. 
               We curate across categories to find items where utility meets 
               disciplined design.
             </p>
          </div>

          {/* Navigation - Unified Sans-Serif */}
           <div className="lg:col-span-3 lg:border-l lg:border-white/5 lg:pl-12">
             <h4 className="text-offWhite/30 uppercase tracking-[0.4em] text-[9px] font-bold mb-8">Index</h4>
             <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] font-medium">
               <li><Link href="/" className="hover:text-amber transition-colors flex items-center gap-2 group">
                 <span className="w-0 h-[1px] bg-amber group-hover:w-3 transition-all" /> Home
               </Link></li>
               <li><Link href="/shop" className="hover:text-amber transition-colors flex items-center gap-2 group">
                 <span className="w-0 h-[1px] bg-amber group-hover:w-3 transition-all" /> The Selection
               </Link></li>
               <li><Link href="/about" className="hover:text-amber transition-colors flex items-center gap-2 group">
                 <span className="w-0 h-[1px] bg-amber group-hover:w-3 transition-all" /> Our Ethos
               </Link></li>
               <li><Link href="/contact" className="hover:text-amber transition-colors flex items-center gap-2 group">
                 <span className="w-0 h-[1px] bg-amber group-hover:w-3 transition-all" /> Inquiries
               </Link></li>
             </ul>
           </div>

          {/* Contact / Base - Unified Sans-Serif & Compact */}
          <div className="lg:col-span-4 lg:border-l lg:border-white/5 lg:pl-10">
            <h4 className="text-offWhite/20 uppercase tracking-[0.4em] text-[8px] font-bold mb-4">Base</h4>
            <div className="space-y-4">
              <div 
                className="group cursor-pointer"
                onClick={() => navigator.clipboard.writeText('hello@littleupgrades.co.uk')}
              >
                <p className="text-offWhite text-[11px] tracking-[0.1em] font-medium group-hover:text-amber transition-colors uppercase">
                  hello[at]littleupgrades.co.uk
                </p>
              </div>
              <p className="text-offWhite text-[11px] tracking-[0.1em] font-medium uppercase flex items-center gap-2">
                 Manchester, UK 
                 <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Reduced pt-12 to pt-6 */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-stone/20 text-[8px] uppercase tracking-[0.3em]">
            © {currentYear} Little Upgrades Ltd.
          </span>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-stone/40 hover:text-amber transition-colors text-[8px] uppercase tracking-[0.2em]">Privacy</Link>
            <Link href="/contact" className="text-stone/40 hover:text-amber transition-colors text-[8px] uppercase tracking-[0.2em]">Terms</Link>
            <span className="text-stone/10 text-[8px] uppercase tracking-[0.2em]">Build 01.04.26</span>
          </div>
        </div>
      </div>
    </footer>
  );
}