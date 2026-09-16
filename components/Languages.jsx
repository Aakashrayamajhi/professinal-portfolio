"use client";

import { motion } from "framer-motion";
import { languages } from "@/lib/data";

export default function Languages() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-red">Languages</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink">Communication, collaboration, and clarity</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {languages.map((item, index) => (
            <motion.div
              key={item.language}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-cream-line bg-cream-soft/70 p-6 shadow-[0_12px_30px_-22px_rgba(31,58,95,0.5)]"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-2xl text-ink">{item.language}</h3>
                <span className="rounded-full border border-red/30 bg-red/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-red">
                  {item.level}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
