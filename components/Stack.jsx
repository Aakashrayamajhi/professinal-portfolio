"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";

const brandSlugs = {
  JavaScript: "javascript",
  Python: "python",
  "C++": "cplusplus",
  C: "c",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  GraphQL: "graphql",
  WebRTC: "webrtc",
  "Socket.IO": "socketdotio",
  "Apache Kafka": "apachekafka",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Cassandra: "apachecassandra",
  Redis: "redis",
  Elasticsearch: "elasticsearch",
  Docker: "docker",
  Kubernetes: "kubernetes",
  Vercel: "vercel",
  React: "react",
  "React Native": "react",
  "Tailwind CSS": "tailwindcss",
  LangChain: "langchain",
  n8n: "n8n",
  Pandas: "pandas",
  "Scikit-learn": "scikitlearn",
  Prometheus: "prometheus",
  Grafana: "grafana",
  JMeter: "apachejmeter",
  k6: "k6",
  Jira: "jira",
};

const brandSources = {
  AWS: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg",
};

const brandColors = {
  JavaScript: "F7DF1E",
  Python: "3776AB",
  "C++": "00599C",
  C: "A8B9CC",
  "Node.js": "5FA04E",
  "Express.js": "222222",
  GraphQL: "E10098",
  WebRTC: "333333",
  "Socket.IO": "010101",
  "Apache Kafka": "231F20",
  PostgreSQL: "4169E1",
  MongoDB: "47A248",
  Cassandra: "1287B1",
  Redis: "D82C20",
  Elasticsearch: "005571",
  Docker: "2496ED",
  Kubernetes: "326CE5",
  Vercel: "111111",
  React: "61DAFB",
  "React Native": "61DAFB",
  "Tailwind CSS": "06B6D4",
  LangChain: "1C3C3C",
  n8n: "EA4B71",
  Pandas: "150458",
  "Scikit-learn": "F7931E",
  Prometheus: "E6522C",
  Grafana: "F46800",
  JMeter: "D22128",
  k6: "7D64FF",
  Jira: "2684FF",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

function TechnologyMark({ tech }) {
  const slug = brandSlugs[tech];
  const source = brandSources[tech] || (slug ? `https://cdn.simpleicons.org/${slug}/${brandColors[tech]}` : null);

  if (!source) return <span className="h-4 w-4 shrink-0" aria-hidden="true" />;

  return (
    <img
      src={source}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="h-[18px] w-[18px] object-contain opacity-70 grayscale transition-all duration-200 group-hover:opacity-100 group-hover:grayscale-0"
    />
  );
}

export default function Stack() {
  return (
    <section id="stack" className="border-t border-cream-line py-20 scroll-mt-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.65fr)] md:items-end"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-red">04 / Toolkit</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-5xl">
              Tools for building systems that last.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-ink-soft md:justify-self-end">
            A practical working set across product interfaces, distributed backends, data, and the infrastructure that holds them together.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid border-t border-cream-line md:grid-cols-2 md:gap-x-12"
        >
          {stack.map((group) => (
            <motion.div key={group.category} variants={item} className="border-b border-cream-line py-8">
              <div className="mb-6 flex items-baseline justify-between gap-4">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-navy-soft">{group.category}</h3>
                <span className="font-mono text-[11px] text-ink-soft/60">{String(group.items.length).padStart(2, "0")}</span>
              </div>

              <div className="grid grid-cols-2 gap-x-5 gap-y-0 sm:grid-cols-3">
                {group.items.map((tech) => (
                  <div
                    key={tech}
                    className="group flex min-h-12 items-center gap-3 border-t border-cream-line/70 py-3 text-sm text-ink transition-colors duration-200 hover:text-red"
                  >
                    <TechnologyMark tech={tech} />
                    <span className="leading-tight">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}