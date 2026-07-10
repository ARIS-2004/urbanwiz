"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease },
});

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 2.95 } },
};
const wordItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

const line1 = "Operational excellence.".split(" ");
const line2Lead = "Delivered by".split(" ");

export default function Hero() {
  return (
    <section
      className="relative -mt-24 pt-32 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 lg:pb-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0B0E24 0%, #0F1330 46%, #141A44 100%)",
      }}
    >
      {/* Ambient orange + blue washes */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[70%] h-[110%] pointer-events-none"
        style={{
          background:
            "radial-gradient(45% 50% at 78% 38%, rgba(255,87,34,0.16), rgba(255,87,34,0) 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-20 -left-20 w-[55%] h-[85%] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 55% at 30% 70%, rgba(58,86,220,0.20), rgba(58,86,220,0) 70%)",
        }}
      />

      {/* Faint diagonal hairline pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 24px)",
          maskImage:
            "radial-gradient(ellipse at 30% 40%, black 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 30% 40%, black 20%, transparent 78%)",
        }}
      />

      {/* Decorative dot grid — behind headline */}
      <div
        aria-hidden
        className="absolute top-40 left-6 hidden lg:block w-32 h-32 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,87,34,0.35) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          maskImage: "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />

      {/* Image — bleeds off the right edge on desktop */}
      <div className="absolute inset-y-0 right-0 hidden lg:block w-[52%] xl:w-[50%] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.95, duration: 1.3, ease }}
          className="relative w-full h-full"
        >
          <Image
            src="/contacthero.png"
            alt="Urbanwiz office — Ecospace Business Park, Kolkata"
            fill
            priority
            sizes="50vw"
            className="object-cover object-center"
          />
          {/* Fade the image left-edge into the navy */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0F1330 0%, rgba(15,19,48,0.65) 22%, rgba(15,19,48,0.10) 55%, transparent 100%)",
            }}
          />
          {/* Bottom fade into stats/next section */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/3"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(15,19,48,0.55) 100%)",
            }}
          />
        </motion.div>
      </div>

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <motion.h1
              variants={wordContainer}
              initial="hidden"
              animate="show"
              className="relative font-display text-[38px] sm:text-[56px] md:text-[62px] lg:text-[64px] xl:text-[76px] leading-[1.02] sm:leading-[0.98] tracking-[-0.03em] text-ivory font-bold"
            >
              {line1.map((w, i) => (
                <motion.span key={`l1-${i}-${w}`} variants={wordItem} className="inline-block mr-[0.22em]">
                  {w}
                </motion.span>
              ))}
              <br />
              {line2Lead.map((w, i) => (
                <motion.span key={`l2-${i}-${w}`} variants={wordItem} className="inline-block mr-[0.22em] text-ivory/60">
                  {w}
                </motion.span>
              ))}
              <motion.span variants={wordItem} className="relative inline-block text-orange">
                people who care.
              </motion.span>
            </motion.h1>

            {/* Sub-copy with vertical orange bar */}
            <motion.div {...reveal(3.1)} className="relative mt-7 max-w-xl pl-5">
              <span
                aria-hidden
                className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #FF5722 0%, rgba(255,87,34,0) 100%)",
                }}
              />
              <p className="font-display text-[15px] sm:text-[16.5px] leading-[1.5] tracking-[-0.005em] text-ivory font-bold">
                Skilled people. Efficient processes.
                <br />
                <span className="text-ivory/70 font-semibold">Dependable support.</span>
              </p>
              <p className="mt-3 text-[13.5px] sm:text-[14.5px] leading-[1.7] text-ivory/55">
                Managing operations can be complex. From customer support to data
                operations, Urbanwiz becomes an extension of your team — helping
                you scale without sacrificing quality.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div {...reveal(3.25)} className="relative mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-orange text-ivory pl-6 pr-2 py-2 text-[11.5px] uppercase tracking-[0.22em] font-bold transition-colors duration-300 hover:bg-orange-soft"
                style={{
                  boxShadow:
                    "0 16px 34px -12px rgba(255,87,34,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
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
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white/5 border border-white/20 px-6 py-3 text-[11.5px] uppercase tracking-[0.22em] font-bold text-ivory hover:bg-white/10 hover:border-white/35 transition-all duration-300 backdrop-blur-sm"
              >
                Schedule a consultation
              </Link>
            </motion.div>
          </div>

          {/* Right — spacer on desktop (image is absolute); stacked image on mobile */}
          <div className="lg:col-span-6 relative mt-10 lg:mt-0">
            {/* Mobile / tablet image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 1.0, ease }}
              className="lg:hidden relative aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
            >
              <Image
                src="/contacthero.png"
                alt="Urbanwiz office — Ecospace Business Park, Kolkata"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(15,19,48,0.55) 100%)" }} />
            </motion.div>

            {/* Floating quote card — verbatim brand tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 3.5, duration: 0.9, ease }}
              className="relative lg:absolute lg:bottom-24 xl:bottom-28 lg:right-2 mt-5 lg:mt-0 lg:max-w-[300px] rounded-2xl p-5 sm:p-6 z-20 overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(16px) saturate(130%)",
                WebkitBackdropFilter: "blur(16px) saturate(130%)",
                boxShadow: "0 24px 50px -24px rgba(0,0,0,0.6)",
              }}
            >
              <span aria-hidden className="font-display font-black text-[40px] leading-[0.5] text-orange/70 select-none">
                &ldquo;
              </span>
              <p className="mt-2 font-display text-[16px] sm:text-[17px] leading-[1.4] text-ivory font-bold tracking-[-0.01em]">
                We are Human, before we are Corporate.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Stats bar (placeholder values — editable) ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6, duration: 0.9, ease }}
          className="relative z-20 mt-12 lg:mt-16 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px) saturate(130%)",
            WebkitBackdropFilter: "blur(14px) saturate(130%)",
            boxShadow: "0 30px 60px -34px rgba(0,0,0,0.6)",
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center gap-3.5 px-5 sm:px-7 py-6 ${
                  i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""
                }`}
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-orange/12 text-orange shrink-0">
                  {s.icon}
                </span>
                <div className="min-w-0">
                  <div className="font-display text-[24px] sm:text-[28px] font-bold text-ivory leading-none tabular-nums">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-[10.5px] uppercase tracking-[0.18em] text-ivory/55 font-semibold">
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

const STATS: { value: string; label: string; icon: React.ReactNode }[] = [
  {
    value: "—",
    label: "Trained Professionals",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 13v-1a8 8 0 0116 0v1" />
        <rect x="3" y="13" width="4" height="6" rx="1.4" />
        <rect x="17" y="13" width="4" height="6" rx="1.4" />
      </svg>
    ),
  },
  {
    value: "—",
    label: "Global Clients",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 4 6.1 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6.1-4-9s1.5-6.4 4-9z" />
      </svg>
    ),
  },
  {
    value: "—",
    label: "Client Retention",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16M7 15l3-4 3 2 4-6" />
        <path d="M17 7h3v3" />
      </svg>
    ),
  },
  {
    value: "24/7",
    label: "Global Operations",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
];
