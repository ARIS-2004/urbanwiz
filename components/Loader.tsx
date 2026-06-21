"use client";

import { AnimatePresence, motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const DURATION = 2800;
const ease = [0.22, 1, 0.36, 1] as const;

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), DURATION);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease } }}
          className="fixed inset-0 z-[200] overflow-hidden bg-white"
        >
          {/* Split-panel exit */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="absolute inset-x-0 top-0 h-1/2 bg-white"
          />
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-white"
          />

          {/* Ambient orange wash */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0.45] }}
            transition={{ duration: 2.4, ease, times: [0, 0.6, 1] }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(45% 40% at 50% 50%, rgba(255,87,34,0.08), rgba(255,87,34,0) 70%)",
            }}
          />
          {/* Soft blue wash */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.3] }}
            transition={{ duration: 2.6, ease, times: [0, 0.6, 1], delay: 0.2 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 50% at 30% 30%, rgba(30,58,186,0.05), rgba(30,58,186,0) 70%)",
            }}
          />

          {/* Hairlines top and bottom */}
          <div className="absolute inset-x-0 top-10 sm:top-12 h-px bg-navy/6" />
          <div className="absolute inset-x-0 bottom-10 sm:bottom-12 h-px bg-navy/6" />

          {/* Corner labels — responsive */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease }}
            className="absolute top-5 left-5 sm:top-8 sm:left-10 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-navy/45 font-semibold"
          >
            UrbanWizz · 2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease }}
            className="absolute top-5 right-5 sm:top-8 sm:right-10 flex items-center gap-2 text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-navy/45 font-semibold"
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-orange animate-ping opacity-70" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-orange" />
            </span>
            <span className="hidden xs:inline">Salt Lake · </span>Kolkata
          </motion.div>

          {/* Center stack */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.35, duration: 1.0, ease }}
            >
              <Image
                src="/logo.png"
                alt="UrbanWizz"
                width={756}
                height={186}
                priority
                className="h-9 sm:h-11 lg:h-14 w-auto"
              />
            </motion.div>

            {/* Orange hairline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.85, duration: 0.7, ease }}
              className="origin-left block mt-5 sm:mt-7 h-[1.5px] w-12 sm:w-16 bg-orange"
            />

            {/* Tagline */}
            <motion.p
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.06, delayChildren: 1.0 },
                },
              }}
              className="mt-4 sm:mt-6 font-display text-[14px] sm:text-[18px] lg:text-[22px] leading-[1.4] text-navy/80 text-center max-w-[280px] sm:max-w-md font-medium"
            >
              {"Guiding with strength. Growing with care.".split(" ").map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                  }}
                  className={`inline-block mr-[6px] ${w.includes("care") ? "text-orange" : ""}`}
                >
                  {w}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Bottom — progress + counter — responsive */}
          <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 w-[220px] sm:w-[260px] lg:w-[320px] flex flex-col items-center gap-2.5 sm:gap-3">
            <ProgressCounter />
            <div className="relative w-full h-px bg-navy/10 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: DURATION / 1000 - 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-orange via-orange to-orange/40 origin-left"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] sm:tracking-[0.3em] text-navy/40 font-semibold text-center"
            >
              Preparing your studio
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProgressCounter() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${String(Math.round(v)).padStart(3, "0")}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: DURATION / 1000 - 0.4,
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
