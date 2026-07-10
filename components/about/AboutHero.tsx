"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};
const wordItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function AboutHero() {
  return (
    <section
      className="relative -mt-24 pt-32 pb-14 lg:pt-36 lg:pb-16 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 80% 15%, rgba(255,87,34,0.06), transparent 45%), radial-gradient(circle at 10% 90%, rgba(23,42,138,0.05), transparent 45%), linear-gradient(180deg, #FAFAFA, #F4F5F7)",
      }}
    >
      {/* Faint diagonal hairlines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(15,19,48,0.02) 0 1px, transparent 1px 24px)",
          maskImage:
            "radial-gradient(ellipse at 70% 40%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 40%, black 20%, transparent 80%)",
        }}
      />
      {/* dotted grid top-right */}
      <div
        aria-hidden
        className="absolute top-28 right-10 hidden lg:block w-32 h-32 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,87,34,0.35) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          maskImage: "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* Left — copy */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3"
            >
              <span className="block w-8 h-[2px] bg-orange rounded-full" />
              <span className="text-[10.5px] uppercase tracking-[0.3em] text-navy/55 font-bold">
                Our Story
              </span>
            </motion.div>

            <motion.h1
              variants={wordContainer}
              initial="hidden"
              animate="show"
              className="mt-7 font-display text-[38px] sm:text-[54px] xl:text-[64px] tracking-[-0.03em] leading-[1.0] text-navy font-bold"
            >
              <motion.span variants={wordItem} className="inline-block mr-[0.25em]">Story</motion.span>
              <motion.span variants={wordItem} className="inline-block mr-[0.25em]">of</motion.span>
              <motion.span variants={wordItem} className="inline-block text-orange">Urbanwiz</motion.span>
              <br />
              <motion.span variants={wordItem} className="inline-block mr-[0.25em]">&amp; The</motion.span>
              <motion.span variants={wordItem} className="inline-block text-blue-deep">Three Pillars.</motion.span>
            </motion.h1>

            {/* Sub-line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease }}
              className="relative mt-7 max-w-md pl-5"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #FF5722 0%, rgba(255,87,34,0) 100%)",
                }}
              />
              <p className="font-display text-[16px] sm:text-[18px] leading-[1.5] text-navy/80 font-semibold tracking-[-0.01em]">
                We are human, before we are Corporate.
              </p>
            </motion.div>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8, ease }}
              className="mt-9 flex items-center gap-6"
            >
              <div>
                <div className="font-display text-[26px] sm:text-[32px] font-bold text-navy tabular-nums leading-none">
                  2026
                </div>
                <div className="mt-1.5 text-[9.5px] uppercase tracking-[0.24em] text-navy/50 font-semibold">
                  Founded in Kolkata
                </div>
              </div>
              <span aria-hidden className="block w-px h-9 bg-navy/12" />
              <div>
                <div className="font-display text-[26px] sm:text-[32px] font-bold text-navy tabular-nums leading-none">
                  03
                </div>
                <div className="mt-1.5 text-[9.5px] uppercase tracking-[0.24em] text-navy/50 font-semibold">
                  The Three Pillars
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — framed photo */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative w-full max-w-[440px] sm:max-w-[540px] mx-auto lg:ml-auto aspect-[4/3]">
              {/* soft aura */}
              <motion.div
                aria-hidden
                animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,87,34,0.14), rgba(255,87,34,0) 70%)",
                  filter: "blur(28px)",
                }}
              />
              {/* orange offset block */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: 18, y: 18 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 1.0, ease }}
                className="absolute -bottom-4 -right-4 w-[60%] h-[55%] rounded-3xl bg-orange/90"
              />
              {/* floating accent dot */}
              <motion.span
                aria-hidden
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.8, ease }}
                className="hidden lg:block absolute -top-6 right-10 w-16 h-16 rounded-full border border-orange/30 pointer-events-none z-20"
              />
              {/* navy outline block */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: -14, y: -14 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.45, duration: 1.0, ease }}
                className="absolute -top-3 -left-3 w-[34%] h-[34%] rounded-3xl border border-navy/15 pointer-events-none"
              />
              {/* main image */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 1.0, ease }}
                className="absolute inset-0 rounded-3xl overflow-hidden border border-navy/10 shadow-[0_2px_4px_rgba(15,19,48,0.03),0_40px_74px_-32px_rgba(15,19,48,0.32)] z-10"
              >
                <Image
                  src="/contacthero.png"
                  alt="Urbanwiz office — Ecospace Business Park, Kolkata"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,19,48,0.05) 0%, transparent 42%, rgba(15,19,48,0.3) 100%)",
                  }}
                />
                <div className="absolute bottom-5 left-5 flex items-center gap-2">
                  <span className="block w-5 h-[1.5px] bg-white" />
                  <span className="text-[9.5px] uppercase tracking-[0.26em] text-white/90 font-bold">
                    Est. 2026 · Kolkata
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
