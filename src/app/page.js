"use client"; 
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="bg-offWhite">
      {/* Hero Section */}
      <section className="h-screen w-full relative overflow-hidden flex items-center justify-center border-b border-stone-200">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl w-full px-6 md:px-8 grid lg:grid-cols-12 items-center gap-12 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-amber uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Launching March 2026</span>
            <h1 className="text-5xl md:text-8xl xl:text-9xl font-serif leading-[0.9] tracking-tighter text-charcoal uppercase mb-8 break-words">
              Everyday <br />
              <span className="text-amber italic lowercase md:uppercase">Essentials</span>
            </h1>
            <p className="text-stone text-base md:text-lg font-light tracking-wide max-w-md mb-10 leading-relaxed">
              We hunt for high-quality, useful products and bring them together in one place. Simple upgrades for your daily routine.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <Link 
                href="/shop"
                className="group relative px-8 md:px-10 py-4 bg-charcoal text-offWhite text-[10px] font-bold uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 interactive"
              >
                <span className="absolute inset-0 bg-amber translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover:text-charcoal transition-colors duration-500 flex items-center gap-2">
                  View Collection
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}> → </motion.span>
                </span>
              </Link>
              
              <Link 
                href="/about"
                className="group relative text-charcoal text-[10px] font-bold uppercase tracking-[0.2em] py-2 interactive"
              >
                Our Story
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-stone/30" />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber group-hover:w-full transition-all duration-500 ease-out" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute inset-0 border border-stone/10 -m-6 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700 bg-white/5 backdrop-blur-[2px]" />
              <Image 
                width={800} height={1000} 
                priority
                src="/images/hero-product.avif" 
                alt="Product Aesthetic" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5] shadow-2xl relative z-10" 
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-8 hidden md:flex flex-col items-start gap-4"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <span className="text-[9px] uppercase tracking-[0.5em] text-stone vertical-text">Scroll to explore</span>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-between h-[300px] py-4 sticky top-40">
              <span className="vertical-text text-[9px] uppercase tracking-[0.5em] text-stone/40 font-bold whitespace-nowrap">
                Est. 2026 — Little Upgrades
              </span>
              <div className="w-[1px] h-32 bg-stone/10 relative overflow-hidden">
                 <motion.div 
                   initial={{ y: "-100%" }}
                   whileInView={{ y: "100%" }}
                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 bg-amber w-full"
                 />
              </div>
            </div>

            <div className="lg:col-span-11 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-amber uppercase tracking-[0.4em] text-[10px] font-bold mb-8 block">Our Approach</span>
                <h2 className="text-4xl md:text-7xl font-serif text-charcoal mb-16 italic leading-[1.1] tracking-tight max-w-5xl">
                  "We hunt for the <span className="text-stone/30 not-italic">small details</span> that make a <span className="text-amber">significant</span> impact on your daily rhythm."
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-x-20 gap-y-12 border-t border-stone/10 pt-16">
                <div>
                  <h4 className="text-charcoal text-[10px] uppercase tracking-widest font-bold mb-4">Zero Constraints</h4>
                  <p className="text-stone text-lg leading-relaxed font-light">
                    Little Upgrades is a curated Amazon-based storefront. We operate without the narrow constraints of a single niche, allowing us to pivot wherever high-quality design leads us. 
                  </p>
                </div>
                <div>
                   <h4 className="text-charcoal text-[10px] uppercase tracking-widest font-bold mb-4">Strict Vetting</h4>
                  <p className="text-stone text-lg leading-relaxed font-light">
                    Every item in our collection has been vetted for utility and durability. If a product doesn't genuinely simplify or elevate your routine, it simply doesn't make the cut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-8 bg-offWhite">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-amber uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Archive 01</span>
              <h2 className="text-4xl font-serif italic text-charcoal">Browse Categories</h2>
            </div>
            <div className="text-stone/40 text-[10px] uppercase tracking-widest font-mono">Total curated: 03</div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { id: '01', title: 'Tech & Tools', status: 'Coming Soon', img: '/images/tech-tools.avif', mt: '' },
              { id: '02', title: 'Home Goods', status: 'In Selection', img: '/images/home-goods.avif', mt: 'md:mt-24' },
              { id: '03', title: 'Lifestyle', status: 'Hunting', img: '/images/lifestyle.avif', mt: 'md:mt-12' }
            ].map((cat) => (
              <Link key={cat.id} href="/shop" className={`group relative flex flex-col interactive ${cat.mt}`}>
                <div className="relative aspect-[4/5] bg-stone-200 overflow-hidden mb-6">
                  <Image 
                    width={800} height={1000} 
                    alt={cat.title} 
                    src={cat.img} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out" 
                  />
                  <div className="absolute top-4 right-4 glass px-3 py-1 text-[8px] uppercase tracking-tighter text-charcoal font-bold">
                    {cat.id}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif italic text-charcoal group-hover:text-amber transition-colors duration-500">{cat.title}</h3>
                    <p className="text-stone text-[10px] uppercase tracking-widest mt-1">Status: {cat.status}</p>
                  </div>
                  <motion.div whileHover={{ x: 5 }} className="text-amber">
                    <ArrowRight size={20} />
                  </motion.div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}