"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

function ProjectCard({ project, index }) {
  const [videoError, setVideoError] = useState(false);

  const isRed = project.tone === "red";
  const toneBorder = isRed ? "hover:border-red/40" : "hover:border-navy/40";
  const toneShadow = isRed
    ? "hover:shadow-[0_28px_60px_-28px_rgba(168,58,43,0.45)]"
    : "hover:shadow-[0_28px_60px_-28px_rgba(31,58,95,0.45)]";
  const toneText = isRed ? "text-red" : "text-navy";
  const toneBg = isRed ? "bg-red" : "bg-navy";
  const toneBorderChip = isRed ? "border-red/25" : "border-navy/25";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group rounded-2xl border border-cream-line bg-cream-soft/40 overflow-hidden transition-all duration-300 ${toneBorder} ${toneShadow}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <div className={`absolute inset-0 flex items-center justify-center ${toneBg}`}>
          <span className="font-display text-4xl sm:text-5xl text-cream/25 tracking-tight">
            {project.name}
          </span>
        </div>

        {!videoError && (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-7 sm:p-8">
        <h3 className="font-display font-semibold text-xl text-ink">{project.name}</h3>
        <p className="text-ink-soft text-sm mt-1.5">{project.tagline}</p>
        <p className="text-ink-soft text-sm mt-4 leading-relaxed">{project.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-ink-soft leading-relaxed">
          {project.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex gap-2.5">
              <span className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${toneBg}`} />
              {b}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`font-mono text-[11px] rounded-full border px-2.5 py-1 ${toneText} ${toneBorderChip}`}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener"
          className={`mt-7 inline-flex items-center gap-2 text-sm ${toneText} hover:gap-3 transition-all duration-300`}
        >
          View on GitHub
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-cream-line scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-12"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-red mb-3">Projects</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight">
            Selected work
          </h2>
          <p className="text-ink-soft mt-3">
            Two systems I designed and built, shown in motion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
