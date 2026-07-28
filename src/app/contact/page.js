"use client";

import { startTransition, useRef, useState } from "react";
import Link from "next/link";
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

    const templateParams = {
      from_name: form.current.user_name.value,
      reply_to: form.current.user_email.value,
      message: form.current.message.value,
      date: new Date().toLocaleString(),
    };

    try {
      const emailjs = await import("@emailjs/browser");

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

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
      <section className="section-pad mx-auto max-w-7xl pb-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="section-label">Contact</p>
            <h1 className="mt-3 font-serif text-5xl leading-[0.96] text-ink sm:text-6xl lg:text-7xl">
              Built around better daily objects.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Use the form for product suggestions, sourcing opportunities, early-access
              interest, or general brand enquiries while the storefront is being built.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="surface-card p-6">
                <p className="section-label">Email</p>
                <a
                  className="mt-3 block font-serif text-3xl text-ink hover:text-accent"
                  href={`mailto:${siteContent.email}`}
                >
                  {siteContent.email}
                </a>
              </div>

              <div className="surface-card p-6">
                <p className="section-label">Location</p>
                <p className="mt-3 text-xl font-semibold text-ink">{siteContent.location}</p>
              </div>

              <div className="surface-card p-6">
                <p className="section-label">Common enquiries</p>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
                  {siteContent.inquiryTopics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>

              <Link className="button-secondary w-fit" href="/shop">
                Back to shop direction
              </Link>
            </div>
          </div>

          <div className="surface-panel p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="grid gap-4 py-6">
                <p className="section-label">Enquiry sent</p>
                <h2 className="font-serif text-4xl text-ink sm:text-5xl">
                  Thanks. Your message is on its way.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-muted">
                  If anything interrupts delivery, you can always email {siteContent.email}
                  directly.
                </p>
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
              <form ref={form} className="grid gap-6" onSubmit={handleSubmit}>
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
                    placeholder="Tell us what you are looking for, what you want us to source, or how you want to stay in touch."
                  />
                </label>

                <div aria-live="polite" className="min-h-6 text-sm">
                  {status && <p className="text-muted">{status}</p>}
                  {error && <p className="text-red-700">{error}</p>}
                </div>

                <button type="submit" disabled={isSending} className="button-primary w-full sm:w-fit">
                  {isSending ? "Sending..." : "Send enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
