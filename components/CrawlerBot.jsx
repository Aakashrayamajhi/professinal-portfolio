"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const BOT_COUNT = 3;
const SAFE_MARGIN = { top: 96, right: 24, bottom: 32, left: 24 };

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function createBounds() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    width,
    height,
    minX: SAFE_MARGIN.left,
    maxX: Math.max(40, width - SAFE_MARGIN.right),
    minY: SAFE_MARGIN.top,
    maxY: Math.max(80, height - SAFE_MARGIN.bottom),
  };
}

function createBot(index, bounds) {
  return {
    id: index,
    x: randomBetween(bounds.minX, bounds.maxX),
    y: randomBetween(bounds.minY, bounds.maxY),
    trail: [],
    isCaptured: false,
    pulse: false,
  };
}

export default function CrawlerBot() {
  const prefersReducedMotion = useReducedMotion();
  const [bots, setBots] = useState([]);
  const [toast, setToast] = useState(null);
  const botTimersRef = useRef([]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const resetBots = () => {
      const bounds = createBounds();
      setBots(Array.from({ length: BOT_COUNT }, (_, index) => createBot(index, bounds)));
    };

    resetBots();
    window.addEventListener("resize", resetBots);

    return () => window.removeEventListener("resize", resetBots);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || bots.length === 0) return;

    const timers = bots.map((bot, botIndex) => {
      const moveBot = () => {
        setBots((currentBots) =>
          currentBots.map((item, idx) => {
            if (idx !== botIndex || item.isCaptured) return item;

            const bounds = createBounds();
            const nextX = clamp(randomBetween(bounds.minX, bounds.maxX), bounds.minX, bounds.maxX);
            const nextY = clamp(randomBetween(bounds.minY, bounds.maxY), bounds.minY, bounds.maxY);
            const shouldPulse = Math.random() < 0.25;

            const nextTrail = [...item.trail, { id: Date.now() + Math.random(), x: nextX, y: nextY }].slice(-3);

            return {
              ...item,
              x: nextX,
              y: nextY,
              pulse: shouldPulse,
              trail: nextTrail,
            };
          })
        );

        const pause = randomBetween(2200, 4200);
        const timer = window.setTimeout(moveBot, pause);
        botTimersRef.current[botIndex] = timer;
      };

      const initialPause = randomBetween(800, 2200);
      const timer = window.setTimeout(moveBot, initialPause);
      botTimersRef.current[botIndex] = timer;
      return timer;
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      botTimersRef.current.forEach((timer) => timer && window.clearTimeout(timer));
    };
  }, [bots.length, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handlePointerDown = (event) => {
      const pointerX = event.clientX;
      const pointerY = event.clientY;

      let didCatch = false;

      setBots((currentBots) =>
        currentBots.map((bot) => {
          if (bot.isCaptured) return bot;

          const distance = Math.hypot(pointerX - bot.x, pointerY - bot.y);
          if (distance < 38) {
            didCatch = true;
            return { ...bot, isCaptured: true, pulse: false };
          }

          return bot;
        })
      );

      if (didCatch) {
        setToast({ x: pointerX, y: pointerY, text: "Scanned and cleared" });
        window.setTimeout(() => setToast(null), 750);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden" aria-hidden="true">
      {bots
        .filter((bot) => !bot.isCaptured)
        .map((bot) => (
          <div key={bot.id} className="absolute" style={{ left: 0, top: 0 }}>
            {bot.trail.map((dot, index) => (
              <motion.span
                key={dot.id}
                initial={{ opacity: 0.24, scale: 0.7 }}
                animate={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: index * 0.08 }}
                className="absolute block h-1.5 w-1.5 rounded-full bg-red/40 shadow-[0_0_10px_rgba(168,58,43,0.45)]"
                style={{
                  left: dot.x,
                  top: dot.y,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            <motion.div
              animate={{ x: bot.x, y: bot.y }}
              transition={{ type: "spring", stiffness: 34, damping: 20, mass: 1.1 }}
              className="absolute"
              style={{ left: 0, top: 0, translateX: "-50%", translateY: "-50%" }}
            >
              <motion.div
                animate={
                  bot.pulse
                    ? { scale: [1, 1.7, 1], opacity: [0.35, 0.9, 0.45] }
                    : { scale: 1, opacity: 0.7 }
                }
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red/40"
                style={{ width: 32, height: 32 }}
              />

              <motion.div
                animate={{ y: [0, -1, 0, 1, 0], rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute left-1/2 top-[-10px] h-2.5 w-[2px] -translate-x-1/2 rounded-full bg-red/80" />
                <div className="absolute left-1/2 top-[-14px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-red shadow-[0_0_12px_rgba(168,58,43,0.75)]" />

                <div className="relative flex h-7 w-7 items-center justify-center rounded-[0.7rem] border border-red/50 bg-navy/85 shadow-[0_0_18px_rgba(31,58,95,0.3)]">
                  <span className="block h-1.5 w-1.5 rounded-full bg-red shadow-[0_0_10px_rgba(168,58,43,0.9)]" />
                  <span className="absolute -left-1 top-2 h-1.5 w-1.5 rounded-full bg-red/90" />
                  <span className="absolute -right-1 top-2 h-1.5 w-1.5 rounded-full bg-red/90" />
                </div>

                <div className="relative mt-1 flex items-center justify-center gap-1.5">
                  <motion.span
                    animate={{ rotate: [18, -18, 18] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                    className="block h-4 w-[2px] origin-top rounded-full bg-red/80"
                  />
                  <motion.span
                    animate={{ rotate: [-18, 18, -18] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                    className="block h-4 w-[2px] origin-top rounded-full bg-red/80"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}

      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.text + toast.x + toast.y}
            initial={{ opacity: 0, y: 10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none fixed z-[95] rounded-full border border-red/20 bg-navy/75 px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase text-cream shadow-[0_12px_30px_-18px_rgba(17,24,39,0.9)] backdrop-blur-sm"
            style={{ left: toast.x + 16, top: toast.y - 18, transform: "translate(-50%, -50%)" }}
          >
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
