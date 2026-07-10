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

const lineOne = "We're not a vendor.".split(" ");
const lineTwoLead = "We're a".split(" ");

export default function ContactQuote() {
  return (
    <section
      data-theme="dark"
      className="relative bg-navy text-ivory overflow-hidden py-12 lg:py-14"
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

      {/* Dot grid */}
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

      {/* Top + bottom hairlines */}
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

      {/* Decorative dot grids */}
      <div
        aria-hidden
        className="absolute top-10 left-8 hidden lg:block w-24 h-16 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,87,34,0.45) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
          maskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-10 right-8 hidden lg:block w-24 h-16 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,58,186,0.55) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
          maskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />

      <div className="container-content relative">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Big watermark quote glyph behind content */}
          <span
            aria-hidden
            className="absolute -top-12 left-1/2 -translate-x-1/2 font-display text-[240px] sm:text-[300px] leading-none font-black text-orange pointer-events-none select-none"
            style={{ opacity: 0.06 }}
          >
            &ldquo;
          </span>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="relative inline-flex items-center gap-3"
          >
            <span className="block w-7 h-[2px] bg-orange" />
            <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
              A note from the founder
            </span>
            <span className="block w-7 h-[2px] bg-orange" />
          </motion.div>

          {/* Decorative quote SVG in a glass circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            className="relative mt-5 flex justify-center"
          >
            <div className="relative">
              <span
                aria-hidden
                className="absolute -inset-6 rounded-full blur-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,87,34,0.45), rgba(255,87,34,0) 70%)",
                }}
              />
              <span
                className="relative grid place-items-center w-14 h-14 rounded-full"
                style={{
                  background: "rgba(255,87,34,0.12)",
                  boxShadow:
                    "0 12px 28px -8px rgba(255,87,34,0.50), inset 0 1px 0 rgba(255,255,255,0.18), 0 0 0 1px rgba(255,87,34,0.30)",
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 120 120"
                  fill="none"
                  className="text-orange"
                >
                  <path
                    d="M30 80V60c0-14 8-22 22-26l3 8c-9 3-15 9-15 16h12v22H30zm45 0V60c0-14 8-22 22-26l3 8c-9 3-15 9-15 16h12v22H75z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } },
            }}
            className="relative mt-5 font-display text-[28px] sm:text-[38px] xl:text-[46px] leading-[1.05] tracking-[-0.025em] font-bold"
          >
            <motion.div variants={wordContainer} className="inline-block">
              {lineOne.map((w, i) => (
                <motion.span
                  key={`l1-${i}`}
                  variants={wordItem}
                  className="inline-block mx-[0.11em] text-ivory"
                >
                  {w}
                </motion.span>
              ))}
            </motion.div>
            <br />
            <motion.div variants={wordContainer} className="inline-block mt-1">
              {lineTwoLead.map((w, i) => (
                <motion.span
                  key={`l2-${i}`}
                  variants={wordItem}
                  className="inline-block mx-[0.11em] text-ivory/65"
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.9, ease },
                  },
                }}
                className="inline-block text-orange mx-[0.11em]"
              >
                partner.
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Decorative hairline */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.9, ease }}
            className="relative mx-auto mt-6 block w-16 h-px origin-center"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,87,34,0.6), transparent)",
            }}
          />

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.55, duration: 0.8, ease }}
            className="relative mt-4 text-[13px] sm:text-[14px] leading-[1.65] text-ivory/65 max-w-lg mx-auto"
          >
            Prefer a conversation? Twenty minutes, no obligation — just a quick chat.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.8, ease }}
            className="relative mt-7 flex justify-center"
          >
            <Link
              href="mailto:info@urbanwiz.co.in?subject=Book%20a%20call"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-orange text-ivory pl-5 pr-2 py-2 text-[11px] uppercase tracking-[0.22em] font-bold transition-colors duration-300 hover:bg-ivory hover:text-navy"
              style={{
                boxShadow:
                  "0 16px 32px -12px rgba(255,87,34,0.50), inset 0 1px 0 rgba(255,255,255,0.20)",
              }}
            >
              Book a call
              <span className="grid place-items-center w-7 h-7 rounded-full bg-ivory/15 group-hover:bg-orange group-hover:text-ivory transition-colors">
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
