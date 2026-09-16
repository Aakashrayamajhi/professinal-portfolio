"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { profile } from "@/lib/data";

export default function Hero() {
  const nameRef = useRef(null);

  useEffect(() => {
    if (!nameRef.current) return;
    const words = nameRef.current.querySelectorAll(".word");
    gsap.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.15,
      }
    );
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.25em] text-red uppercase mb-6"
            >
              Portfolio &middot; 2026
            </motion.p>

            <h1
              ref={nameRef}
              className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.03] text-ink"
            >
              {profile.name.split(" ").map((w, i) => (
                <span key={i} className="inline-block overflow-hidden pb-1 mr-4 align-bottom">
                  <span className="word inline-block">{w}</span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-display italic text-2xl sm:text-3xl text-navy mt-3"
            >
              {profile.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-6 text-ink-soft text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {profile.blurb}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-navy text-cream px-6 py-3 text-sm font-medium hover:bg-ink hover:-translate-y-0.5 transition-all duration-300 shadow-[0_14px_34px_-14px_rgba(31,58,95,0.6)]"
              >
                View my work
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink hover:border-red hover:text-red hover:-translate-y-0.5 transition-all duration-300"
              >
                Download résumé
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6"
            >
              <div>
                <p className="font-mono text-2xl sm:text-3xl text-ink">300+</p>
                <p className="text-xs text-ink-soft mt-1">LeetCode problems solved</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-cream-line" />
              <div>
                <p className="font-mono text-2xl sm:text-3xl text-ink">500+</p>
                <p className="text-xs text-ink-soft mt-1">Total across platforms</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-cream-line" />
              <div>
                <p className="font-mono text-2xl sm:text-3xl text-ink">Runner-up</p>
                <p className="text-xs text-ink-soft mt-1">National Hackathon</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto lg:mx-0 w-full max-w-[19rem]"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-2 border-ink bg-cream-soft">
              <Image
                src="/aakash.JPG"
                alt="Aakash Rayamajhi"
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 320px"
                className="object-cover"
              />
            </div>
            <div className="stamp-tilt absolute -bottom-5 -left-5 bg-red text-cream text-[11px] font-mono tracking-widest uppercase px-4 py-3 rounded-sm border-2 border-cream shadow-xl leading-tight">
              Always
              <br />
              Building
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
