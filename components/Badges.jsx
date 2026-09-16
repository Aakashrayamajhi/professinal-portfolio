"use client";

import { motion } from "framer-motion";
import { badges } from "@/lib/data";

const toneStyles = {
  navy: "bg-navy text-cream border-navy",
  red: "bg-red text-cream border-red",
  outline: "bg-transparent text-ink-soft border-dashed border-ink/30",
};

export default function Badges() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-12"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-red mb-3">Achievements</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight">
            Qualifications &amp; wins
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`rounded-lg border-2 aspect-square flex flex-col items-center justify-center text-center px-3 ${toneStyles[b.tone]} transition-colors duration-300`}
            >
              <p className="font-display font-semibold text-lg sm:text-xl">{b.detail}</p>
              <p className="text-[10px] sm:text-xs uppercase tracking-wide mt-2 opacity-80">{b.title}</p>
              <p className="text-[10px] sm:text-[11px] mt-1 opacity-70">{b.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
