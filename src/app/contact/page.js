"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!window.emailjs) {
      setError("Email service is still loading.");
      return;
    }
    setIsSending(true);
    setError(null);

    const templateParams = {
      from_name: form.current.user_name.value,
      reply_to: form.current.user_email.value,
      message: form.current.message.value,
      date: new Date().toLocaleString(),
    };

    try {
      await window.emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Service unavailable. Direct: hello[at]littleupgrades.co.uk");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="pt-40 bg-offWhite min-h-screen selection:bg-amber selection:text-charcoal">
      <div className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Curator Details */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-amber" />
              <span className="text-amber uppercase tracking-[0.4em] text-[10px] font-bold">Inquiries</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-10 text-charcoal italic tracking-tight">
              Let's refine <br />
              <span className="text-stone/30 not-italic">the</span> routine.
            </h1>

            <div className="space-y-12 mt-16">
              {/* Protected Email - Copy to Clipboard */}
              <div 
                className="group interactive cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText('hello@littleupgrades.co.uk');
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-2 flex items-center gap-2">
                  Curator Direct 
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber text-[8px]">
                    (Click to copy)
                  </span>
                </p>
                <p className="text-xl text-charcoal font-serif italic group-hover:text-amber transition-colors duration-500">
                  hello[at]littleupgrades.co.uk
                </p>
              </div>

              {/* Location Info */}
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone mb-2">Base of Operations</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber rounded-full animate-pulse" />
                  <p className="text-xl text-charcoal font-serif italic">Manchester, United Kingdom</p>
                </div>
              </div>

              <div className="pt-10 border-t border-stone/10 max-w-sm">
                <p className="text-stone text-sm leading-relaxed font-light">
                  We prioritize meaningful upgrades over mass-market volume. For wholesale 
                  partnerships or product vetting requests, please utilize the secure 
                  transmission form.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Glass Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass border border-stone/10 p-8 md:p-12 rounded-3xl shadow-premium relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-16 h-16 bg-amber/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="text-amber" />
                    </div>
                    <h3 className="text-3xl font-serif italic text-charcoal mb-4">Message Received.</h3>
                    <p className="text-stone text-sm tracking-wide">Our curators will reach out shortly.</p>
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.3em] text-stone font-bold">Full Name</label>
                        <input
                          name="user_name"
                          className="w-full bg-transparent border-b border-stone/20 py-3 text-charcoal outline-none focus:border-amber transition-colors placeholder:text-stone/30"
                          type="text"
                          placeholder="Type your name..."
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] uppercase tracking-[0.3em] text-stone font-bold">Email</label>
                        <input
                          name="user_email"
                          className="w-full bg-transparent border-b border-stone/20 py-3 text-charcoal outline-none focus:border-amber transition-colors placeholder:text-stone/30"
                          type="email"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-stone font-bold">Message</label>
                      <textarea
                        name="message"
                        className="w-full bg-white/30 border border-stone/10 p-6 text-charcoal outline-none focus:border-amber transition-colors h-40 resize-none rounded-2xl placeholder:text-stone/30"
                        placeholder="Tell us about a product or inquiry..."
                        required
                      />
                    </div>

                    {error && (
                      <p className="text-xs text-red-500 italic px-2">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSending}
                      className="group relative w-full px-10 py-5 bg-charcoal text-offWhite text-[10px] font-bold uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all duration-500 hover:shadow-xl active:scale-95 interactive flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      <span className="absolute inset-0 bg-amber translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      <span className="relative z-10 group-hover:text-charcoal transition-colors duration-500 flex items-center gap-3">
                        {isSending ? <Loader2 size={16} className="animate-spin" /> : "Transmit Message"}
                        <ArrowRight size={14} />
                      </span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}