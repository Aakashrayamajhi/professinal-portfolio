"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

function getLogo(tech) {
  const commonClasses = "h-5 w-5 transition-all duration-300";

  switch (tech) {
    case "JavaScript":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="JavaScript" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#F7DF1E"/>
          <path d="M12 7.3 8.9 16.2h1.8l.6-1.8h2.8l.5 1.8h1.8L12 7.3Zm.8 5.1h-1.7l.8-2.8.9 2.8Z" fill="#1F2937"/>
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Python" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAF3FF"/>
          <path d="M9 7.5h5.5c1.6 0 2.8 1.2 2.8 2.8v1.8H13V10.5h-2v6.3h2v-1.6h4.3v2.6c0 1.6-1.2 2.8-2.8 2.8H9c-1.6 0-2.8-1.2-2.8-2.8V10.3c0-1.6 1.2-2.8 2.8-2.8Z" fill="#3776AB"/>
          <path d="M13.3 7.5H17c1.6 0 2.8 1.2 2.8 2.8v1.1h-2V10.5h-2.5V7.5Z" fill="#FFD43B"/>
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Node.js" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAF5EA"/>
          <path d="M12 6.5 7.7 8.8v6.3l4.3 2.4 4.3-2.4V8.8L12 6.5Zm0 2.2 2.8 1.6-2.8 1.6-2.8-1.6L12 8.7Zm-3.3 3 2.4 1.3-2.4 1.3v-2.6Zm6.6 0v2.6l-2.4-1.3 2.4-1.3Z" fill="#68A063"/>
        </svg>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="React" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAF9FF"/>
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="7.4" ry="3.2"/>
            <ellipse cx="12" cy="12" rx="7.4" ry="3.2" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="7.4" ry="3.2" transform="rotate(120 12 12)"/>
          </g>
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="PostgreSQL" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAF4FF"/>
          <path d="M8.5 7.5h6.8c1.8 0 3.2 1.4 3.2 3.2v4.8c0 1.8-1.4 3.2-3.2 3.2H8.5c-1.8 0-3.2-1.4-3.2-3.2V10.7c0-1.8 1.4-3.2 3.2-3.2Zm.7 2h5.4c.8 0 1.4.6 1.4 1.4v.9H8v-.9c0-.8.6-1.4 1.4-1.4Zm-1.4 5.1h7.2v2.5c0 .7-.5 1.2-1.2 1.2H9.8c-.7 0-1.2-.5-1.2-1.2v-2.5Z" fill="#336791"/>
          <path d="M8 10.7h8M8 13.3h8M8 16h8" stroke="#F2F7FF" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="MongoDB" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAF9EC"/>
          <path d="M12 6.1c1.3 1.9 3.7 4.7 3.7 7.8 0 3.1-1.9 5.1-3.7 6.1-1.8-1-3.7-3-3.7-6.1 0-3.1 2.4-5.9 3.7-7.8Z" fill="#4DB33D"/>
          <path d="M11.9 9.7c-.8.9-2 1.9-2.7 2.4-.3.2-.5.6-.5 1.1 0 1.1.8 1.9 2 1.9 1.1 0 2-.8 2-1.9 0-.5-.2-.8-.7-1.1-.7-.5-1.3-1.1-1.8-2.4Z" fill="#F4FFF6"/>
        </svg>
      );
    case "Redis":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Redis" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#FFF0EF"/>
          <path d="M12 6.5c3.3 0 6 1.4 6 3.2s-2.7 3.2-6 3.2-6-1.4-6-3.2 2.7-3.2 6-3.2Zm0 6.5c3.3 0 6 1.4 6 3.2S15.3 19.5 12 19.5s-6-1.4-6-3.2 2.7-3.2 6-3.2Z" fill="#D82C20"/>
          <path d="M12 8.2v9.1" stroke="#FFF7F6" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Docker" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAF5FF"/>
          <path d="M8 15.8h10.5v2.2H8zm-2-4.9h2.4v2.2H6zm2.8-2.8h2.2v2.2H8.8zm2.8 0h2.2v2.2h-2.2zm2.8 0h2.2v2.2h-2.2zm-5.4 5.2h2.2v2.2H9zm2.8 0h2.2v2.2h-2.2zm2.8 0h2.2v2.2h-2.2Z" fill="#2496ED"/>
          <path d="M5 12h2.5v2.2H5zm.2-4h1.6v1.6H5.2zm2-1.8h1.6v1.6H7.2zm2.2 0H11v1.6H9.4zm2.2 0h1.6v1.6h-1.6zm2.2 0h1.6v1.6h-1.6Z" fill="#0D62B1"/>
        </svg>
      );
    case "Kubernetes":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Kubernetes" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EDF3FF"/>
          <path d="M12 6 17 8.4v7.2L12 18l-5-2.4V8.4L12 6Zm0 2.2 3 1.6-3 1.7-3-1.7 3-1.6Zm-3.8 3.1 3.1 1.7 3.1-1.7v3.1l-3.1 1.7-3.1-1.7v-3.1Z" fill="#326CE5"/>
        </svg>
      );
    case "React Native":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="React Native" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAF8FF"/>
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="7.3" ry="3.1"/>
            <ellipse cx="12" cy="12" rx="7.3" ry="3.1" transform="rotate(60 12 12)"/>
            <ellipse cx="12" cy="12" rx="7.3" ry="3.1" transform="rotate(120 12 12)"/>
          </g>
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Tailwind CSS" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#ECF9FF"/>
          <path d="M7.4 15.2c.9-1.7 2.4-2.5 4.9-2.5 2 0 3.3 1 4.2 2.2.8 1.1 1 2.1 2.4 2.1 1.7 0 2.8-1.7 2.8-3.8 0-2.5-1.7-4.7-5-4.7-3.2 0-4.8 2.2-5.4 4.1l-2.3-1.2c.7-2.7 3.2-5.6 7.8-5.6 4.9 0 7.8 3.1 7.8 7 0 4.5-3.6 7.4-8.4 7.4-4.1 0-6.5-1.9-7.8-4.5l2.8-1.5Z" fill="#38BDF8"/>
        </svg>
      );
    case "OpenAI APIs":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="OpenAI" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAF9F6"/>
          <path d="M12 6.2a5.8 5.8 0 0 0-5.1 3.2A5.8 5.8 0 0 0 8.9 17a5.8 5.8 0 0 0 7.3-1.4A5.8 5.8 0 0 0 12 6.2Zm-2 4.7 1.7-2.5 2.2 1.7-1.4 2.5 1.9 1.6-2.8 1.7-2.4-1.8.8-1.2Z" fill="#111827"/>
          <path d="m9.7 10.6 2.3 1.6v1.5l-1.8-1.5-1.2-1.6Zm4 1.7 1.7-1.5.1 1.8-1.7 1.4v-1.7Z" fill="#10A37F"/>
        </svg>
      );
    case "LangChain":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="LangChain" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#F3F4F6"/>
          <path d="M7 7.4h4.6c1.7 0 3.2.8 4.3 2.1l1.2 1.3-2 2-1.4-1.4c-.6-.6-1.3-.9-2.2-.9H9.4v4.2H7V7.4Zm10 9.2h-4.5c-1.7 0-3.2-.8-4.3-2.1L7 13.2l2-2 1.4 1.4c.6.6 1.3.9 2.2.9h2.3v4.1Z" fill="#0A0A0A"/>
        </svg>
      );
    case "RAG":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="RAG" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#F4EEFF"/>
          <path d="M7 8.2h10v2.7H7zm1.8 4.1h6.4v3.1H8.8zm2 3.5h2.4v2.1H10.8z" fill="#8B5CF6"/>
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="n8n" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#FFF0F4"/>
          <path d="M7 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm10 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM7 21.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm10 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM9.5 7.5h5v9h-5z" fill="#EA4B71"/>
        </svg>
      );
    case "Pandas":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Pandas" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#FFF8E7"/>
          <path d="M10 7h2.6v4.6H10zm0 6.2h2.6v4.6H10zM5.8 13.1h2.6v4.6H5.8zm9.8-6.1H18v4.6h-2.4zm0 6.2H18v4.6h-2.4Z" fill="#E5A623"/>
        </svg>
      );
    case "Prometheus":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Prometheus" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#FFF1EE"/>
          <circle cx="12" cy="12" r="5.8" fill="#E6522C"/>
          <path d="M12 7.5v9M7.5 12h9" stroke="#FFF8F5" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case "Grafana":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Grafana" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#FFF2EC"/>
          <path d="M12 7.1c2.6 0 4.8 2.1 4.8 4.8v.2a4.8 4.8 0 0 1-9.6 0v-.2c0-2.7 2.2-4.8 4.8-4.8Zm-4.5 7.4c0 2.2 1.8 4 4 4h.8v2.7H7.8a1 1 0 0 1-1-1V14.5h1.7Zm9 0h1.7v6.7a1 1 0 0 1-1 1h-4.4v-2.7h.8c2.2 0 4-1.8 4-4Z" fill="#F05A28"/>
        </svg>
      );
    case "JMeter":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="JMeter" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#F6EEFF"/>
          <rect x="6" y="10" width="12" height="5" rx="1.8" fill="#A855F7"/>
          <path d="M9 10V7.8M12 10V6.8M15 10V8.3" stroke="#FDF4FF" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7.5 16h9" stroke="#FDF4FF" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
      );
    case "k6":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="k6" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#F4EEFF"/>
          <path d="M7 16.5h10M9 13.5l2.6-5.2 2.4 4.8 2.1-3.4" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "Jira":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Jira" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAF3FF"/>
          <path d="M12 7 6.5 12.5 12 18l5.5-5.5L12 7Zm0 3.1 2.2 2.2L12 14.5l-2.2-2.2L12 10.1Z" fill="#2684FF"/>
        </svg>
      );
    case "Agile / Scrum":
      return (
        <svg viewBox="0 0 24 24" className={commonClasses} aria-label="Agile Scrum" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#EAFBF2"/>
          <path d="M7 8h10M7 12h8M7 16h6" stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="16.8" cy="16" r="2.2" fill="#22C55E"/>
        </svg>
      );
    default:
      return (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-navy to-red text-[8px] font-bold text-cream">
          {tech.substring(0, 2).toUpperCase()}
        </span>
      );
  }
}

export default function Stack() {
  return (
    <section id="stack" className="py-20 sm:py-24 border-t border-cream-line scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-12"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-red mb-3">Stack</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink tracking-tight">
            What I work with
          </h2>
          <p className="text-ink-soft mt-3">The tools I use to ship ideas from prototype to production.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 lg:grid-cols-2"
        >
          {stack.map((group, index) => (
            <motion.div
              key={group.category}
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-cream-line bg-[linear-gradient(135deg,rgba(255,255,255,0.85),rgba(242,236,227,0.95))] p-5 shadow-[0_24px_60px_-36px_rgba(31,58,95,0.7)]"
            >
              <div
                className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100"
                style={{
                  background:
                    index % 2 === 0
                      ? "radial-gradient(circle at top left, rgba(31,58,95,0.18), transparent 40%), linear-gradient(135deg, rgba(255,255,255,0.2), rgba(168,58,43,0.06))"
                      : "radial-gradient(circle at bottom right, rgba(168,58,43,0.18), transparent 38%), linear-gradient(135deg, rgba(255,255,255,0.18), rgba(31,58,95,0.08))",
                }}
              />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/80 px-2.5 py-1 shadow-[0_10px_18px_-18px_rgba(17,24,39,0.5)]">
                    <span className="h-2 w-2 rounded-full bg-red" />
                    <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-navy-soft">{group.category}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ y: -3, scale: 1.04 }}
                      transition={{ duration: 0.18 }}
                      className="inline-flex items-center gap-2.5 rounded-full border border-navy/15 bg-white/90 px-3 py-2 shadow-[0_18px_25px_-24px_rgba(17,24,39,0.75)] backdrop-blur-sm"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-white via-cream-soft to-cream shadow-inner ring-1 ring-navy/10">
                        {getLogo(tech)}
                      </span>
                      <span className="font-mono text-[10px] font-bold tracking-[0.13em] uppercase text-navy">
                        {tech}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
