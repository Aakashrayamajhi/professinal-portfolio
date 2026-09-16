"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { journey } from "@/lib/data";

export default function Journey() {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    let ctx;
    (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 75%",
              end: "bottom 85%",
              scrub: 0.6,
            },
          }
        );
      }, wrapRef);
    })();

    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="journey" className="py-20 sm:py-24 border-t border-cream-line scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-red mb-3">Journey</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight">
            From esports to backend systems
          </h2>
          <p className="text-ink-soft mt-3">From leading esports teams to leading backend architecture.</p>
        </motion.div>

        <div ref={wrapRef} className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-cream-line" />
          <div ref={lineRef} className="absolute left-[7px] top-2 w-px bg-red" style={{ height: "0%" }} />

          {journey.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative pl-9 ${i === journey.length - 1 ? "" : "pb-12"}`}
            >
              <span className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-cream border-2 border-red" />
              <p className="font-mono text-xs text-red mb-1.5">{step.period}</p>
              <h3 className="font-display font-medium text-lg text-ink">{step.title}</h3>
              <p className="text-ink-soft mt-2 leading-relaxed max-w-xl">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
