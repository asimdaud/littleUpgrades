"use client"; // This is mandatory in Next.js for interactive components

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
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
  Package,
} from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Load EmailJS from CDN for the preview environment
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!window.emailjs) {
      setError("Email service is still loading. Please try again in a second.");
      return;
    }
    setIsSending(true);
    setError(null);

    // Prepare variables to match your EmailJS template exactly
    const templateParams = {
      from_name: form.current.user_name.value,
      reply_to: form.current.user_email.value,
      message: form.current.message.value,
      date: new Date().toLocaleString(),
    };

    try {
      // In your local Next.js app, you'd use: import emailjs from '@emailjs/browser'
      // For this preview, we access the global 'emailjs' object from the CDN
      if (window.emailjs) {
        await window.emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        );
        setSubmitted(true);
      } else {
        throw new Error("Email service not initialized");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      // Even if it fails in preview due to missing keys, we show success if you want to test the UI
      // To actually test sending, replace the YOUR_ strings above with real keys
      setError(
        "Something went wrong. Please ensure your EmailJS keys are correct or email us directly at hello@littleupgrades.co.uk",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="pt-32 bg-charcoal min-h-screen text-offWhite">
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif italic mb-4">Get in Touch</h1>
          <p className="text-stone tracking-widest uppercase text-xs">
            Wholesale Inquiries & Customer Support
          </p>
        </div>

        <div className="bg-white/5 p-12 backdrop-blur-md rounded-sm border border-white/10">
          {submitted ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-serif italic mb-4">Message Sent.</h3>
              <p className="text-stone">We'll get back to you shortly.</p>
            </div>
          ) : (
            // <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <form ref={form} className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone block mb-2">
                    Full Name
                  </label>
                  <input
                    name="user_name"
                    autoComplete="name"
                    className="w-full bg-transparent border-b border-[#8B8589]/30 py-2 focus:border-[#8B8589] outline-none transition-colors"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-stone block mb-2">
                    Email Address
                  </label>
                  <input
                    name="user_email"
                    autoComplete="email"
                    className="w-full bg-transparent border-b  border-[#8B8589]/30 py-2 focus:border-[#8B8589] outline-none transition-colors"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone block mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  className="w-full bg-transparent border border-[#8B8589]/30 p-4 focus:border-[#8B8589] outline-none transition-colors h-40 resize-none rounded-sm"
                  placeholder="How can we help?"
                  required
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs italic rounded-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-amber text-charcoal py-4 font-bold uppercase tracking-widest text-sm hover:bg-white transition-all interactive flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};