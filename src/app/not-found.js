"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-offWhite px-8">
      <div className="text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-amber uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block"
        >
          Error 404
        </motion.span>
        <h1 className="text-5xl font-serif italic text-charcoal mb-8">Lost in the collection?</h1>
        <p className="text-stone text-sm mb-12 max-w-xs mx-auto leading-relaxed">
          The page you are looking for has been moved or curated out of existence.
        </p>
        <Link 
          href="/"
          className="px-10 py-4 bg-charcoal text-white text-[10px] uppercase tracking-widest hover:bg-amber hover:text-charcoal transition-all interactive"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}