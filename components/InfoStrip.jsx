"use client";

import { motion } from "framer-motion";
import { infoStrip } from "@/lib/data";

export default function InfoStrip() {
  return (
    <section className="border-y border-cream-line bg-cream-soft/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {infoStrip.map((item, i) => {
            const borderLeft = i % 2 !== 0 ? "border-l" : "sm:border-l";
            const borderTop = i >= 2 ? "border-t sm:border-t-0" : "";
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`py-7 px-5 sm:px-8 border-cream-line ${borderLeft} ${borderTop}`}
              >
                <p className="text-[11px] tracking-[0.18em] uppercase text-navy mb-2">{item.label}</p>
                <p className="font-display font-medium text-lg text-ink">{item.value}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
