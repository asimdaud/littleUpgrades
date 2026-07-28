"use client";

import { startTransition, useRef, useState } from "react";
import Link from "next/link";
import PremiumImage from "@/components/PremiumImage";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/site-content";

export default function Contact() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || !form.current) {
      setError(`Email service is not configured yet. Please use ${siteContent.email}.`);
      return;
    }

    setIsSending(true);
    setError("");
    setStatus("Sending your enquiry...");

    try {
      const emailjs = await import("@emailjs/browser");

      const elements = form.current.elements;
      elements.from_name.value = elements.user_name.value;
      elements.reply_to.value = elements.user_email.value;
      elements.date.value = new Date().toLocaleString();

      await emailjs.sendForm(serviceId, templateId, form.current, {
        publicKey,
      });

      form.current.reset();
      startTransition(() => {
        setSubmitted(true);
        setStatus("Your enquiry has been sent.");
      });
    } catch (submitError) {
      console.error("EmailJS error:", submitError);
      setError(`Service unavailable. Please email ${siteContent.email} directly.`);
      setStatus("");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="section-pad mx-auto max-w-7xl pb-12 lg:pb-16">
        <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="grid gap-4">
            <Reveal className="surface-panel px-6 py-7 sm:px-8">
              <p className="section-label">Contact</p>
              <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[0.94] text-ink sm:text-6xl lg:text-7xl">
                Product leads, sourcing ideas, and early launch interest all go here.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Use the form for product suggestions, sourcing opportunities, early-access
                interest, or general brand enquiries while the storefront is being built.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.06}>
                <div className="surface-card p-6">
                  <p className="section-label">Email</p>
                  <a
                    className="mt-3 block break-all font-serif text-[clamp(1.9rem,5vw,3rem)] leading-[1.02] text-ink hover:text-accent"
                    href={`mailto:${siteContent.email}`}
                  >
                    {siteContent.email}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="surface-card p-6">
                  <p className="section-label">Location</p>
                  <p className="mt-3 font-serif text-3xl text-ink">{siteContent.location}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Operating from the UK with sourcing spread across practical daily-life
                    categories.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <div className="surface-card overflow-hidden p-2">
                <PremiumImage
                  alt={siteContent.media.collection.alt}
                  sources={siteContent.media.collection.sources}
                  fill
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="relative aspect-[5/4] rounded-[1.2rem]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="surface-card p-6">
                <p className="section-label">Common enquiries</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {siteContent.inquiryTopics.map((topic) => (
                    <span key={topic} className="stat-chip">
                      {topic}
                    </span>
                  ))}
                </div>
                <Link className="button-secondary mt-6 w-fit" href="/shop">
                  Back to shop direction
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="surface-panel p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="grid gap-4 py-4">
                  <p className="section-label">Enquiry sent</p>
                  <h2 className="font-serif text-4xl text-ink sm:text-5xl">
                    Thanks. Your message is on its way.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-muted">
                    If anything interrupts delivery, you can always email {siteContent.email}
                    directly.
                  </p>
                  <div className="glass-panel px-4 py-4 text-sm leading-7 text-muted">
                    The contact route stays intentionally simple while the collection is still
                    being assembled.
                  </div>
                  <button
                    type="button"
                    className="button-primary w-fit"
                    onClick={() => {
                      setSubmitted(false);
                      setStatus("");
                      setError("");
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  ref={form}
                  className="grid gap-6"
                  onSubmit={handleSubmit}
                  aria-busy={isSending}
                >
                  <input name="from_name" type="hidden" />
                  <input name="reply_to" type="hidden" />
                  <input name="date" type="hidden" />

                  <div>
                    <p className="section-label">Send an enquiry</p>
                    <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
                      Tell us what you are looking for.
                    </h2>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor="user_name">
                      Name
                      <input
                        id="user_name"
                        name="user_name"
                        type="text"
                        required
                        disabled={isSending}
                        className="field-input"
                        placeholder="Your name"
                      />
                    </label>

                    <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor="user_email">
                      Email
                      <input
                        id="user_email"
                        name="user_email"
                        type="email"
                        required
                        disabled={isSending}
                        className="field-input"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor="message">
                    Message
                    <textarea
                      id="message"
                      name="message"
                      required
                      disabled={isSending}
                      className="field-input"
                      placeholder="Tell us what you want us to source, what category you are watching, or how you want to stay in touch."
                    />
                  </label>

                  <div aria-live="polite" className="min-h-6 text-sm">
                    {status ? (
                      <p className="rounded-[1rem] border border-line bg-white/65 px-4 py-3 text-muted">
                        {status}
                      </p>
                    ) : null}
                    {error ? (
                      <p className="mt-3 rounded-[1rem] border border-red-200 bg-red-50 px-4 py-3 text-red-700">
                        {error}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="button-primary w-full sm:w-fit"
                    >
                      {isSending ? "Sending..." : "Send enquiry"}
                    </button>
                    <p className="text-sm leading-7 text-muted">
                      If the form is unavailable, email {siteContent.email} directly.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
