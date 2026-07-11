"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease } },
};

export default function CTA() {
  return (
    <section
      data-theme="dark"
      className="relative bg-navy text-ivory overflow-hidden py-10 lg:py-12"
    >
      {/* Ambient washes */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.28), rgba(255,87,34,0) 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.65, 0.4], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-32 -left-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.45), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* Diagonal hairline pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 22px)",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Dot grid (subtle) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
        }}
      />

      {/* Top + bottom orange→blue hairlines */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,87,34,0.7) 50%, transparent)",
        }}
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-right"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(30,58,186,0.7) 50%, transparent)",
        }}
      />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-3"
            >
              <span className="block w-7 h-[2px] bg-orange" />
              <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
                People · Process · Progress
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={wordContainer}
              className="mt-4 font-display text-[26px] sm:text-[34px] xl:text-[40px] leading-[1.05] tracking-[-0.025em] font-bold text-ivory"
            >
              {["Ready", "to", "build", "better"].map((w) => (
                <motion.span
                  key={w}
                  variants={wordItem}
                  className="inline-block mr-[0.22em]"
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                variants={wordItem}
                className="inline-block text-orange"
              >
                operations?
              </motion.span>
            </motion.h2>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.8, ease }}
              className="mt-3.5 text-[13px] sm:text-[14px] leading-[1.65] text-ivory/65 max-w-xl"
            >
              Whether you&apos;re scaling your first team or optimising an
              established business, Urbanwiz builds efficient operations powered
              by great people and proven processes.
            </motion.p>
          </div>

          {/* Right — CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.8, ease }}
            className="lg:col-span-5 flex flex-col gap-3 lg:items-end"
          >
            <Link
              href="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-between gap-3 rounded-full bg-orange text-ivory pl-6 pr-2 py-2.5 text-[11px] uppercase tracking-[0.22em] font-bold transition-colors duration-300 hover:bg-ivory hover:text-navy lg:min-w-[300px]"
              style={{
                boxShadow:
                  "0 16px 32px -12px rgba(255,87,34,0.50), inset 0 1px 0 rgba(255,255,255,0.20)",
              }}
            >
              Schedule a discovery call
              <span className="grid place-items-center w-8 h-8 rounded-full bg-ivory/15 group-hover:bg-orange group-hover:text-ivory transition-colors">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-between gap-3 rounded-full border border-ivory/25 text-ivory pl-6 pr-2 py-2.5 text-[11px] uppercase tracking-[0.22em] font-bold transition-colors duration-300 hover:border-orange hover:text-orange lg:min-w-[300px]"
            >
              Request a custom proposal
              <span className="grid place-items-center w-8 h-8 rounded-full bg-ivory/10 text-ivory group-hover:bg-orange transition-colors">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
