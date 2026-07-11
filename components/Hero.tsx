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

const stats = [
  {
    value: "150+",
    label: "Trained Professionals",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 13a8 8 0 1116 0v3a2 2 0 01-2 2h-1v-6h3" />
        <path d="M4 13v3a2 2 0 002 2h1v-6H4" />
      </svg>
    ),
  },
  {
    value: "Global",
    label: "Clients",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 4 6.1 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6.1-4-9s1.5-6.4 4-9z" />
      </svg>
    ),
  },
  {
    value: "90%+",
    label: "Client Retention",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 19V5M4 19h16M7 15l3-4 3 2 4-6" />
        <path d="M17 7h3v3" />
      </svg>
    ),
  },
  {
    value: "24/7",
    label: "Global Operations",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative bg-ivory -mt-24">
      {/* ── Two-column band: light copy (left) · photo + roadmap card (right) ── */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        {/* Left — copy */}
        <div className="relative bg-ivory order-2 lg:order-1">
          {/* ambient wash */}
          <div
            aria-hidden
            className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full pointer-events-none opacity-70"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,87,34,0.06), rgba(255,87,34,0) 70%)",
            }}
          />
          <div className="relative px-6 sm:px-10 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-14 pt-14 pb-16 lg:pt-40 lg:pb-24 max-w-[720px] lg:max-w-none lg:ml-auto lg:w-full">
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
                className="mt-6 font-display text-[36px] sm:text-[50px] xl:text-[58px] tracking-[-0.03em] leading-[1.0] text-navy font-bold"
              >
                Operational excellence.
                <br />
                <span className="text-navy/55">Delivered by </span>
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
                className="mt-7 text-[15px] sm:text-[16.5px] leading-[1.8] text-navy/65"
              >
                <span className="text-navy font-semibold">
                  Urbanwiz helps growing businesses build reliable operations
                </span>{" "}
                through skilled people, efficient processes, and dependable
                support.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease }}
                className="mt-5 text-[15px] sm:text-[16.5px] leading-[1.8] text-navy/60"
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
                  href="/contact"
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
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-full border border-navy/15 text-navy px-6 py-3 text-[11.5px] uppercase tracking-[0.2em] font-bold hover:border-orange hover:text-orange transition-colors duration-300"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
                    <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
                    <path d="M3 9h18M8 2.5v4M16 2.5v4" />
                  </svg>
                  Schedule a consultation
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right — office photo with floating roadmap card */}
        <div className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-0 overflow-hidden order-1 lg:order-2">
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
                "linear-gradient(180deg, rgba(11,14,36,0.30) 0%, rgba(11,14,36,0.10) 40%, rgba(11,14,36,0.55) 100%)",
            }}
          />
          {/* orange corner glow */}
          <div
            aria-hidden
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,87,34,0.28), rgba(255,87,34,0) 70%)",
            }}
          />

          {/* Top-left location pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="absolute top-28 lg:top-36 left-6 sm:left-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3.5 py-2"
          >
            <span className="grid place-items-center w-3.5 h-3.5 text-orange">
              <svg width="12" height="12" viewBox="0 0 24 24" {...stroke}>
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
                <circle cx="12" cy="9" r="2.4" />
              </svg>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-white font-bold">
              Kolkata, India
            </span>
          </motion.div>

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

      {/* ── Full-width stats bar ── */}
      <div className="relative container-wide -mt-8 lg:-mt-10 z-20 pb-14 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="rounded-2xl bg-white border border-navy/8 overflow-hidden shadow-[0_1px_2px_rgba(15,19,48,0.03),0_30px_60px_-30px_rgba(15,19,48,0.25)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-navy/8 lg:divide-y-0">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group flex items-center gap-4 px-6 sm:px-8 py-7"
              >
                <span className="grid place-items-center w-12 h-12 rounded-full bg-orange/10 text-orange shrink-0 transition-colors duration-300 group-hover:bg-orange group-hover:text-ivory">
                  {s.icon}
                </span>
                <div className="min-w-0">
                  <div className="font-display text-[24px] sm:text-[27px] font-bold text-navy leading-none tracking-[-0.02em]">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[12px] text-navy/55 font-medium">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
