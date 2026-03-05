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

// --- Theme Constants ---
const COLORS = {
  amber: '#FFBF00',
  stone: '#8B8589',
  charcoal: '#121212',
  offWhite: '#F5F5F7'
};

// --- Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .interactive')) setIsHovering(true);
      else setIsHovering(false);
    };
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: COLORS.amber
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    />
  );
};

const Navbar = ({ activePage, setActivePage }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0; // Add the || 0 fallback
    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    // Check if at the very top for styling
    setIsTop(latest < 50);
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center transition-all duration-300 ${
        isTop 
          ? "bg-transparent mix-blend-difference text-white" 
          : "bg-charcoal/80 backdrop-blur-md border-b border-white/5 text-white"
      }`}
    >
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="text-xl font-serif tracking-tighter cursor-pointer interactive"
        onClick={() => setActivePage('home')}
      >
        LITTLE UPGRADES
      </motion.div>
      <div className="flex gap-8 text-xs uppercase tracking-widest">
        {['home', 'shop', 'about', 'contact'].map((page) => (
          <button 
            key={page}
            onClick={() => setActivePage(page)}
            className={`hover:text-amber transition-colors interactive relative ${
              activePage === page ? 'text-amber' : ''
            }`}
          >
            {page}
            {activePage === page && (
              <motion.div 
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-[1px] bg-amber"
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

// --- Pages ---

const HomePage = ({ setActivePage }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="h-screen w-full relative overflow-hidden bg-charcoal flex items-center justify-center">
        <div className="max-w-7xl w-full px-8 grid lg:grid-cols-12 items-center gap-12 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span className="text-amber uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Launching Feb 2026</span>
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-serif leading-[0.9] tracking-tighter text-offWhite uppercase mb-8">
              Everyday <br />
              <span className="text-amber italic">Essentials</span>
            </h1>
            <p className="text-stone text-base md:text-lg font-light tracking-wide max-w-md mb-10 leading-relaxed">
              We hunt for high-quality, useful products and bring them together in one place. Simple upgrades for your daily routine.
            </p>
            <div className="flex gap-4">
               <button 
                onClick={() => setActivePage('shop')}
                className="px-8 py-4 bg-amber text-charcoal text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors interactive"
               >
                 View Collection
               </button>
               <button 
                onClick={() => setActivePage('about')}
                className="px-8 py-4 border border-stone/30 text-offWhite text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors interactive"
               >
                 Our Story
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group">
              <div className="absolute inset-0 border border-[#c1c1c1] -m-6 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700" />
              <Image 
                width={800} 
                height={1000} 
                priority={true}
                src="/images/hero-product.avif" 
                alt="Product Aesthetic" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5] shadow-2xl" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-8 flex flex-col items-start gap-4"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <span className="text-[9px] uppercase tracking-[0.5em] text-stone vertical-text">Scroll to explore</span>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 bg-offWhite border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber uppercase tracking-widest text-xs font-bold mb-6 block">What we do</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 italic">"We look for the things that make life just a little bit better."</h2>
          <p className="text-stone text-lg leading-relaxed">
            Little Upgrades is an Amazon-based storefront. We don't stick to one niche. Instead, we spend our time product hunting across different categories to find items that are actually worth your money. If it's useful, well-made, and adds value to your day, it makes the cut.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative aspect-[4/5] bg-stone-100 overflow-hidden cursor-pointer interactive" onClick={() => setActivePage('shop')}>
               <Image width={800} height={1000} alt="Tech & Tools" src="/images/tech-tools.avif" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-3xl font-serif italic">Tech & Tools</h3>
                  <span className="text-white/70 text-[10px] uppercase tracking-widest">Coming Soon</span>
               </div>
            </div>
            <div className="group relative aspect-[4/5] bg-stone-100 overflow-hidden cursor-pointer interactive" onClick={() => setActivePage('shop')}>
                <Image width={800} height={1000} alt="Home Goods" src="/images/home-goods.avif" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-3xl font-serif italic">Home Goods</h3>
                  <span className="text-white/70 text-[10px] uppercase tracking-widest">In Selection</span>
               </div>
            </div>
            <div className="group relative aspect-[4/5] bg-stone-100 overflow-hidden cursor-pointer interactive" onClick={() => setActivePage('shop')}>
                <Image width={800} height={1000} alt="Lifestyle" src="/images/lifestyle.avif" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500" />
               <div className="absolute bottom-8 left-8">
                  <h3 className="text-white text-3xl font-serif italic">Lifestyle</h3>
                  <span className="text-white/70 text-[10px] uppercase tracking-widest">Hunting</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ShopPage = () => (
  <main className="pt-32 bg-offWhite min-h-screen">
    <div className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex flex-col items-center text-center mb-20">
        <Package size={40} className="text-amber mb-6" />
        <h1 className="text-6xl font-serif italic text-charcoal mb-4">The Selection</h1>
        <p className="text-stone max-w-xl">Our inventory is currently in the "hunting" phase. We are vetting suppliers and testing products to ensure only the best make it to our Amazon store.</p>
      </div>
      
      <div className="bg-white border border-stone-200 p-20 text-center rounded-sm">
        <h3 className="text-2xl font-serif italic text-charcoal mb-4">Stocking the shelves...</h3>
        <p className="text-stone text-sm uppercase tracking-widest mb-8">Follow us on Instagram for the first drop.</p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-charcoal text-white text-[10px] uppercase tracking-widest hover:bg-amber hover:text-charcoal transition-all interactive">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  </main>
);

const AboutPage = () => (
  <main className="pt-32 bg-offWhite min-h-screen">
    <div className="max-w-6xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-amber uppercase tracking-widest text-sm font-bold mb-6 block">Our Story</span>
          <h1 className="text-6xl font-serif leading-tight mb-8 text-charcoal italic">From Software to Physical Goods.</h1>
          <p className="text-stone text-lg mb-6 leading-relaxed">
            Little Upgrades is a small, family-run business founded in February 2026. After years spent in software engineering, we decided to pivot towards something more tangible.
          </p>
          <p className="text-stone text-lg mb-10 leading-relaxed">
            We don't have a "niche" because we don't think good design should be limited to one. We spend our time hunting for interesting products, testing them out, and if they meet our standards, we list them on our Amazon store. It's as simple as that.
          </p>
          <div className="flex items-center gap-4 py-8 border-t border-stone-200">
             <div className="w-12 h-12 rounded-full bg-amber flex items-center justify-center font-serif italic text-xl">L</div>
             <div>
               <p className="text-charcoal font-bold text-sm">The Little Upgrades Team</p>
               <p className="text-stone text-xs">UK Based Storefront</p>
             </div>
          </div>
        </motion.div>
        
        <div className="relative">
          <div className="aspect-[3/4] bg-stone-200 overflow-hidden shadow-2xl">
            <Image 
              width={800} 
              height={1000}
              src="/images/workspace.avif"
              className="w-full h-full object-cover grayscale"
              alt="Workspace"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
);

const ContactPage = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Load EmailJS from CDN for the preview environment
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
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
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
        setSubmitted(true);
      } else {
        throw new Error("Email service not initialized");
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      // Even if it fails in preview due to missing keys, we show success if you want to test the UI
      // To actually test sending, replace the YOUR_ strings above with real keys
      setError("Something went wrong. Please ensure your EmailJS keys are correct or email us directly at hello@littleupgrades.co.uk");
    } finally {
      setIsSending(false);
    }
  };
  
  return (
    <main className="pt-32 bg-charcoal min-h-screen text-offWhite">
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif italic mb-4">Get in Touch</h1>
          <p className="text-stone tracking-widest uppercase text-xs">Wholesale Inquiries & Customer Support</p>
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
                  <label className="text-[10px] uppercase tracking-widest text-stone block mb-2">Full Name</label>
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
                  <label className="text-[10px] uppercase tracking-widest text-stone block mb-2">Email Address</label>
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
                <label className="text-[10px] uppercase tracking-widest text-stone block mb-2">Your Message</label>
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
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [mounted, setMounted] = useState(false);

  // This useEffect only runs in the browser
  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, [activePage]);

  // If we aren't mounted yet, return a shell or null 
  // to prevent the server from trying to render the cursor/animations
  if (!mounted) {
    return <div className="bg-offWhite min-h-screen" />;
  }

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [activePage]);

  return (
    <div className="bg-offWhite min-h-screen font-sans selection:bg-amber selection:text-charcoal overflow-x-hidden">
      <CustomCursor />
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
          {activePage === 'shop' && <ShopPage />}
          {activePage === 'about' && <AboutPage />}
          {activePage === 'contact' && <ContactPage />}
        </motion.div>
      </AnimatePresence>

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
    </div>
  );
}