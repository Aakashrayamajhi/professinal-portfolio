"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}` },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { label: profile.githubLabel, href: profile.github },
  { label: profile.linkedinLabel, href: profile.linkedin },
  { label: profile.leetcodeLabel, href: profile.leetcode },
];

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-cream-line scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] tracking-[0.2em] uppercase text-red mb-3">Contact</p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight">
              Let&apos;s build something
            </h2>
            <p className="text-ink-soft mt-3 max-w-md leading-relaxed">
              Open to full-stack, product, and AI-enabled roles — or just a good conversation about building
              software that works end-to-end.
            </p>

            <div className="mt-9 space-y-4">
              {contactLinks.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener" : undefined}
                  className="flex items-center gap-3 text-sm text-ink-soft hover:text-red transition-colors duration-300 w-fit"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red" />
                  {c.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-ink-soft mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg bg-cream-soft border border-cream-line px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-red/50 focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-ink-soft mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-cream-soft border border-cream-line px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-red/50 focus:outline-none transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-ink-soft mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-lg bg-cream-soft border border-cream-line px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-red/50 focus:outline-none transition-colors duration-300 resize-none"
                placeholder="What are you building?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-navy text-cream font-medium px-5 py-3.5 text-sm hover:bg-ink hover:-translate-y-0.5 transition-all duration-300 shadow-[0_14px_34px_-14px_rgba(31,58,95,0.6)]"
            >
              Send message
            </button>
            <p className="text-xs text-ink-soft/70">
              Opens your email client with the message pre-filled — nothing is sent from this page.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
