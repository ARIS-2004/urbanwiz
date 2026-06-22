"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  animate,
  Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DURATION = 3800;
const ease = [0.22, 1, 0.36, 1] as const;

const lineOne = ["We", "are"];
const lineTwoLead = ["before", "we", "are"];
const humanLetters = ["H", "U", "M", "A", "N"];

const wordFade: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

export default function Loader() {
  // Only show the loader on the user's first visit per browser session.
  // Subsequent client-side navigations and refreshes within the session skip it.
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const SEEN_KEY = "uw_loader_seen";
    if (sessionStorage.getItem(SEEN_KEY)) {
      setShow(false);
      return;
    }
    setShow(true);
    sessionStorage.setItem(SEEN_KEY, "1");
    const t = setTimeout(() => setShow(false), DURATION);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease } }}
          className="fixed inset-0 z-[200] overflow-hidden bg-white"
        >
          {/* Staggered 4-slat exit */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`slat-${i}`}
              initial={{ y: 0 }}
              exit={{ y: i % 2 === 0 ? "-100%" : "100%" }}
              transition={{
                duration: 1.0,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.05 + i * 0.07,
              }}
              className="absolute top-0 bottom-0 bg-white"
              style={{ left: `${i * 25}%`, width: "25%" }}
            />
          ))}

          {/* Background breathing washes */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.65, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,87,34,0.12), rgba(255,87,34,0) 70%)",
            }}
          />
          <motion.div
            aria-hidden
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(30,58,186,0.07), rgba(30,58,186,0) 70%)",
            }}
          />

          {/* Subtle grid background */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-[0.5]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,19,48,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,19,48,0.035) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />

          {/* Editorial corner brackets */}
          <CornerBrackets />

          {/* Vertical centerline */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.05, duration: 1.4, ease }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-transparent via-navy/8 to-transparent pointer-events-none"
          />

          {/* One-pass scan line */}
          <motion.div
            aria-hidden
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 0.85, 0] }}
            transition={{ delay: 0.3, duration: 1.8, ease: [0.4, 0, 0.2, 1], times: [0, 0.5, 1] }}
            className="absolute inset-x-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,87,34,0.6) 50%, transparent 100%)",
              boxShadow: "0 0 12px rgba(255,87,34,0.4)",
            }}
          />

          {/* Center stack */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
            {/* Logo with aura + curtain reveal */}
            <div className="relative">
              {/* Soft orange aura behind logo */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{
                  opacity: [0, 0.6, 0.45],
                  scale: [0.6, 1.1, 1],
                }}
                transition={{
                  delay: 0.4,
                  duration: 2.0,
                  ease,
                  times: [0, 0.6, 1],
                }}
                className="absolute -inset-x-32 -inset-y-20 pointer-events-none -z-10"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,87,34,0.20), rgba(255,87,34,0) 70%)",
                  filter: "blur(20px)",
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease }}
                className="relative overflow-hidden inline-flex items-baseline font-display font-extrabold tracking-[-0.02em] leading-none text-[44px] sm:text-[56px] lg:text-[68px]"
                aria-label="Urbanwiz"
              >
                <span className="text-navy">Urban</span>
                <span className="text-orange">wiz</span>
                {/* White curtain panel slides off to the right */}
                <motion.span
                  aria-hidden
                  initial={{ x: "0%" }}
                  animate={{ x: "101%" }}
                  transition={{ delay: 0.75, duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 bg-white"
                />
              </motion.div>
            </div>

            {/* Orange hairline + dot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5, ease }}
              className="mt-7 sm:mt-9 flex items-center gap-2.5"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.7, ease }}
                className="origin-right block h-[1.5px] w-12 sm:w-16 bg-orange"
              />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                className="block w-1.5 h-1.5 rounded-full bg-orange"
              />
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.7, ease }}
                className="origin-left block h-[1.5px] w-12 sm:w-16 bg-orange"
              />
            </motion.div>

            {/* Proverb */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 1.4 } },
              }}
              className="mt-6 sm:mt-8 text-center max-w-[760px] px-4 font-display text-[17px] sm:text-[28px] lg:text-[40px] leading-[1.25] text-navy/70 font-medium tracking-[-0.015em]"
            >
              <div className="block">
                {lineOne.map((w, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    variants={wordFade}
                    className="inline-block mr-[0.28em]"
                  >
                    {w}
                  </motion.span>
                ))}
                {/* HUMAN — letter cascade with warm glow */}
                <motion.span
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
                  }}
                  className="relative inline-block text-orange font-bold tracking-[-0.005em]"
                >
                  <motion.span
                    aria-hidden
                    animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.75, 0.35] }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2.2,
                    }}
                    className="absolute inset-0 -z-10 blur-2xl bg-orange/55 rounded-full"
                  />
                  {humanLetters.map((c, i) => (
                    <motion.span
                      key={`h-${i}`}
                      variants={{
                        hidden: { opacity: 0, y: 24, scale: 0.6, filter: "blur(10px)" },
                        show: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          filter: "blur(0px)",
                          transition: { duration: 0.7, ease: [0.34, 1.4, 0.64, 1] },
                        },
                      }}
                      className="relative inline-block"
                    >
                      {c}
                    </motion.span>
                  ))}
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 2.4,
                      duration: 0.7,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="absolute left-0 right-0 -bottom-1 sm:-bottom-1.5 h-[3px] bg-orange origin-left rounded-full"
                  />
                </motion.span>
              </div>

              <div className="block mt-3 sm:mt-4">
                {lineTwoLead.map((w, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    variants={wordFade}
                    className="inline-block mr-[0.28em]"
                  >
                    {w}
                  </motion.span>
                ))}
                {/* CORPORATE */}
                <motion.span
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { duration: 0.4, ease } },
                  }}
                  className="relative inline-flex items-baseline text-navy font-bold"
                >
                  <motion.span
                    aria-hidden
                    initial={{ opacity: 0, x: 12, scale: 0.6 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 2.8, duration: 0.55, ease }}
                    className="mr-1.5 text-orange font-normal"
                  >
                    [
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, letterSpacing: "0.3em", filter: "blur(8px)" }}
                    animate={{ opacity: 1, letterSpacing: "0em", filter: "blur(0px)" }}
                    transition={{ delay: 2.9, duration: 0.95, ease }}
                    className="inline-block"
                  >
                    CORPORATE
                  </motion.span>
                  <motion.span
                    aria-hidden
                    initial={{ opacity: 0, x: -12, scale: 0.6 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 2.8, duration: 0.55, ease }}
                    className="ml-1.5 text-orange font-normal"
                  >
                    ]
                  </motion.span>
                </motion.span>
              </div>
            </motion.div>

            {/* Frame hairline under proverb */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 3.1, duration: 0.9, ease }}
              className="mt-7 sm:mt-9 h-px w-[180px] sm:w-[240px] origin-center"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(15,19,48,0.15) 50%, transparent 100%)",
              }}
            />
          </div>

          {/* Bottom — progress */}
          <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 w-[260px] sm:w-[320px] lg:w-[380px] flex flex-col items-center gap-2.5 sm:gap-3">
            <ProgressCounter />
            <ProgressBar />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CornerBrackets() {
  const length = "w-10 h-10 sm:w-14 sm:h-14";
  return (
    <>
      {/* Top-left */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease }}
        className={`absolute top-6 sm:top-10 left-6 sm:left-10 ${length}`}
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease }}
          className="absolute top-0 left-0 h-px w-full bg-navy/25 origin-left"
        />
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease }}
          className="absolute top-0 left-0 w-px h-full bg-navy/25 origin-top"
        />
      </motion.div>

      {/* Top-right */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5, ease }}
        className={`absolute top-6 sm:top-10 right-6 sm:right-10 ${length}`}
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease }}
          className="absolute top-0 right-0 h-px w-full bg-navy/25 origin-right"
        />
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease }}
          className="absolute top-0 right-0 w-px h-full bg-navy/25 origin-top"
        />
      </motion.div>

      {/* Bottom-left */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease }}
        className={`absolute bottom-6 sm:bottom-10 left-6 sm:left-10 ${length}`}
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease }}
          className="absolute bottom-0 left-0 h-px w-full bg-navy/25 origin-left"
        />
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease }}
          className="absolute bottom-0 left-0 w-px h-full bg-navy/25 origin-bottom"
        />
      </motion.div>

      {/* Bottom-right */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.5, ease }}
        className={`absolute bottom-6 sm:bottom-10 right-6 sm:right-10 ${length}`}
      >
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="absolute bottom-0 right-0 h-px w-full bg-navy/25 origin-right"
        />
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease }}
          className="absolute bottom-0 right-0 w-px h-full bg-navy/25 origin-bottom"
        />
      </motion.div>
    </>
  );
}

function ProgressBar() {
  return (
    <div className="relative w-full h-px bg-navy/10 overflow-visible">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: DURATION / 1000 - 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-orange via-orange to-orange/40 origin-left"
      />
      {/* Shimmer */}
      <motion.div
        aria-hidden
        initial={{ x: "-40%" }}
        animate={{ x: "140%" }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-y-0 w-1/3"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)",
        }}
      />
      {/* Traveling tick marker */}
      <motion.div
        aria-hidden
        initial={{ left: "0%" }}
        animate={{ left: "100%" }}
        transition={{ duration: DURATION / 1000 - 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
      >
        <span className="block w-0.5 h-3 bg-orange rounded-full shadow-[0_0_8px_rgba(255,87,34,0.7)]" />
      </motion.div>
    </div>
  );
}

function ProgressCounter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    `${String(Math.round(v)).padStart(3, "0")}`
  );
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: DURATION / 1000 - 0.5,
      ease: [0.4, 0, 0.2, 1],
    });
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [count, rounded]);

  return (
    <div className="w-full flex items-center justify-between text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.22em] sm:tracking-[0.24em] font-semibold tabular-nums">
      <span className="text-navy/45">Loading</span>
      <span className="text-navy/80">
        <span ref={ref}>000</span>
        <span className="text-navy/35 ml-0.5">/ 100</span>
      </span>
    </div>
  );
}
