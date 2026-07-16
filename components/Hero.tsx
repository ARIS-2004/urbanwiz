"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function Hero() {
  return (
    <section id="hero" className="relative bg-ivory dark:bg-[#0B0E24] -mt-24 overflow-hidden transition-colors duration-300">
      {/* ── Two-column band: light copy (left) · photo + roadmap card (right) ── */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        {/* Left — copy */}
        <div className="relative bg-ivory dark:bg-[#0B0E24] order-2 lg:order-1 transition-colors duration-300">
          {/* ambient wash */}
          <div
            aria-hidden
            className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none opacity-70"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,87,34,0.06), rgba(255,87,34,0) 70%)",
            }}
          />
          <div className="relative px-6 sm:px-10 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-14 pt-10 pb-14 lg:pt-40 lg:pb-24 max-w-[720px] lg:max-w-none lg:ml-auto lg:w-full">
            <div className="lg:max-w-[560px] lg:ml-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="flex items-center gap-3"
              >
                <span className="block w-8 h-[2px] bg-orange" />
                <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-bold">
                  People · Process · Progress
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                className="mt-6 font-display text-[34px] sm:text-[52px] xl:text-[60px] tracking-[-0.032em] leading-[1.0] sm:leading-[0.98] text-navy dark:text-ivory font-bold"
              >
                Operational
                <br />
                excellence.
                <br />
                <span className="text-navy/45 dark:text-ivory/45 font-semibold">
                  Delivered by{" "}
                </span>
                <span className="text-orange">people who care.</span>
              </motion.h1>

              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="mt-7 block w-12 h-[3px] rounded-full bg-orange origin-left"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease }}
                className="mt-7 text-[15px] sm:text-[16.5px] leading-[1.8] text-navy/65 dark:text-ivory/60"
              >
                <span className="text-navy dark:text-ivory font-semibold">
                  Urbanwiz helps growing businesses build reliable operations
                </span>{" "}
                through skilled people, efficient processes, and dependable
                support.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="mt-5 text-[15px] sm:text-[16.5px] leading-[1.8] text-navy/60 dark:text-ivory/55"
              >
                From customer support to data operations, we become an extension
                of your team — helping you scale without sacrificing quality.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact#form"
                  className="group inline-flex items-center justify-between gap-3 rounded-full bg-orange text-ivory pl-6 pr-2 py-2 text-[11.5px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 hover:bg-orange-soft"
                  style={{
                    boxShadow:
                      "0 16px 34px -12px rgba(255,87,34,0.5), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  Get a custom proposal
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-ivory/20 text-ivory transition-all duration-300 group-hover:bg-ivory group-hover:text-orange">
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                      <path d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right — office photo (framed on desktop) with floating tagline chip */}
        <div className="relative order-1 lg:order-2 pt-24 lg:pt-6 px-4 sm:px-6 lg:px-0 lg:py-6 lg:pr-[max(1.5rem,calc((100vw-1200px)/2))]">
          <div className="relative min-h-[400px] sm:min-h-[480px] h-full lg:min-h-[600px] overflow-hidden rounded-[24px] lg:rounded-[28px] shadow-[0_30px_60px_-30px_rgba(15,19,48,0.4)] lg:shadow-[0_40px_90px_-40px_rgba(15,19,48,0.5)]">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80"
              alt="Urbanwiz office"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* navy tint — deeper at the bottom for the floating chip */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11,14,36,0.28) 0%, rgba(11,14,36,0.08) 38%, rgba(11,14,36,0.58) 100%)",
              }}
            />
            {/* soft inner ring for the framed look */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[24px] lg:rounded-[28px] ring-1 ring-inset ring-white/10"
            />
            {/* orange corner glow */}
            <div
              aria-hidden
              className="absolute -top-10 -right-10 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,87,34,0.26), rgba(255,87,34,0) 70%)",
              }}
            />

          {/* Bottom floating glass tagline chip */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5, ease }}
            className="absolute left-6 right-6 sm:left-8 sm:right-8 bottom-8 sm:bottom-10"
          >
            <div
              className="relative rounded-2xl p-5 sm:p-6 overflow-hidden"
              style={{
                background: "rgba(15,19,48,0.55)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(16px) saturate(130%)",
                WebkitBackdropFilter: "blur(16px) saturate(130%)",
                boxShadow: "0 24px 60px -28px rgba(0,0,0,0.7)",
              }}
            >
              <div className="flex items-center gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-orange text-ivory shrink-0 shadow-[0_10px_24px_-8px_rgba(255,87,34,0.7)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
                    <circle cx="9" cy="8.5" r="2.8" />
                    <circle cx="16.5" cy="9.5" r="2.2" />
                    <path d="M3.5 19c0-2.8 2.5-4.8 5.5-4.8s5.5 2 5.5 4.8" />
                    <path d="M14.5 19c0-2.2 1.8-3.9 4-3.9" />
                  </svg>
                </span>
                <div>
                  <div className="text-[9.5px] uppercase tracking-[0.26em] text-ivory/60 font-bold">
                    Our philosophy
                  </div>
                  <p className="mt-1 font-display text-[16px] sm:text-[18px] leading-[1.3] text-ivory font-bold tracking-[-0.01em]">
                    We are Human, before we are{" "}
                    <span className="text-orange">Corporate.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
