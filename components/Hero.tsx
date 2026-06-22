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

const line1 = "Outsource the busy work.".split(" ");
const line2Lead = "Keep the".split(" ");

export default function Hero() {
  return (
    <section className="relative -mt-24 pt-24 sm:pt-32 lg:pt-36 pb-10 sm:pb-20 lg:pb-24 overflow-hidden bg-white">
      {/* Layered ambient washes */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 right-0 w-[70%] h-[110%] pointer-events-none"
        style={{
          background:
            "radial-gradient(45% 50% at 75% 40%, rgba(255,87,34,0.13), rgba(255,87,34,0) 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 -left-20 w-[60%] h-[80%] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 55% at 30% 70%, rgba(30,58,186,0.10), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* Faint diagonal hairline pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(15,19,48,0.025) 0 1px, transparent 1px 22px)",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />

      {/* Decorative dot grid — top right */}
      <div
        aria-hidden
        className="absolute top-32 right-6 hidden lg:block w-32 h-32 opacity-70 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,87,34,0.4) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
          maskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />

      {/* Editorial corner brackets */}
      <CornerBrackets />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-10 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            {/* Big watermark numeral behind copy */}
            <span
              aria-hidden
              className="absolute -top-12 -left-4 font-display text-[160px] sm:text-[200px] xl:text-[240px] leading-none font-black tracking-[-0.05em] pointer-events-none select-none"
              style={{ color: "rgba(15,19,48,0.04)" }}
            >
              UW
            </span>

            <motion.h1
              variants={wordContainer}
              initial="hidden"
              animate="show"
              className="relative font-display text-[30px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[74px] leading-[1.05] sm:leading-[0.98] tracking-[-0.028em] text-navy font-bold"
            >
              {line1.map((w, i) => (
                <motion.span
                  key={`l1-${i}-${w}`}
                  variants={wordItem}
                  className="inline-block mr-[0.22em]"
                >
                  {w}
                </motion.span>
              ))}
              <br />
              {line2Lead.map((w, i) => (
                <motion.span
                  key={`l2-${i}-${w}`}
                  variants={wordItem}
                  className="inline-block mr-[0.22em] text-navy/55"
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                variants={wordItem}
                className="relative inline-block text-orange"
              >
                customer obsession.
              </motion.span>
            </motion.h1>

            {/* Sub-copy with vertical orange bar */}
            <motion.div
              {...reveal(3.1)}
              className="relative mt-7 max-w-xl pl-5"
            >
              <span
                aria-hidden
                className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #FF5722 0%, rgba(255,87,34,0) 100%)",
                }}
              />
              <p className="text-[14.5px] sm:text-[15.5px] leading-[1.7] text-navy/60">
                Urbanwiz runs the customer support, finance and back-office
                operations behind growing companies — with senior owners,
                transparent SLAs and zero hand-off drama.
              </p>
            </motion.div>

            {/* CTAs — premium pill style */}
            <motion.div {...reveal(3.25)} className="relative mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-navy text-ivory pl-5 pr-1.5 py-1.5 text-[11.5px] uppercase tracking-[0.22em] font-bold hover:bg-orange transition-colors duration-300"
                style={{
                  boxShadow:
                    "0 14px 28px -12px rgba(15,19,48,0.50), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                Book a conversation
                <span className="grid place-items-center w-8 h-8 rounded-full bg-orange text-ivory transition-all duration-300 group-hover:bg-ivory group-hover:text-orange">
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
                href="/services"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white border border-navy/15 px-5 py-2.5 text-[11.5px] uppercase tracking-[0.22em] font-bold text-navy hover:border-orange hover:text-orange transition-all duration-300 shadow-[0_1px_2px_rgba(15,19,48,0.03)]"
              >
                Explore services
              </Link>
            </motion.div>

            {/* Premium trust card */}
            <motion.div
              {...reveal(3.45)}
              className="relative mt-9 inline-flex items-center gap-4 rounded-xl bg-white border border-navy/8 px-4 py-3 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_18px_36px_-22px_rgba(15,19,48,0.20)]"
            >
              <div className="flex -space-x-2">
                {[
                  { label: "AR", bg: "bg-navy", fg: "text-ivory" },
                  { label: "SB", bg: "bg-blue-deep", fg: "text-ivory" },
                  { label: "NM", bg: "bg-navy/75", fg: "text-ivory" },
                  { label: "PR", bg: "bg-navy/55", fg: "text-ivory" },
                ].map((c) => (
                  <span
                    key={c.label}
                    className={`grid place-items-center w-8 h-8 rounded-full ring-2 ring-white font-display text-[10px] font-bold tabular-nums ${c.bg} ${c.fg}`}
                  >
                    {c.label}
                  </span>
                ))}
                <span
                  className="grid place-items-center w-8 h-8 rounded-full ring-2 ring-white bg-orange text-ivory"
                  style={{
                    boxShadow: "0 6px 14px -4px rgba(255,87,34,0.5)",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div className="leading-tight">
                <div className="font-display text-[16px] font-bold text-navy tabular-nums">
                  150<span className="text-orange">+</span>{" "}
                  <span className="text-navy/70 font-semibold">operators</span>
                </div>
                <div className="text-[10.5px] uppercase tracking-[0.2em] text-navy/55 font-semibold mt-0.5">
                  India · APAC · Beyond
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — hero image with editorial frame */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative w-full max-w-[720px] mx-auto">
              {/* Bold orange backdrop block — offset bottom-right */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 3.05, duration: 1.0, ease }}
                className="absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-7 lg:-bottom-8 lg:-right-8 w-[72%] h-[72%] rounded-3xl bg-orange/0"
              />

              {/* Soft orange aura behind */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.0, duration: 1.4, ease }}
                className="absolute -inset-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,87,34,0.16), rgba(255,87,34,0) 70%)",
                  filter: "blur(30px)",
                }}
              />

              {/* Decorative orange ring — top right */}
              <motion.span
                aria-hidden
                initial={{ opacity: 0, rotate: -25, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ delay: 3.2, duration: 1.2, ease }}
                className="hidden lg:block absolute -top-10 right-12 w-28 h-28 rounded-full border border-orange/30 pointer-events-none z-0"
              />

              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0, duration: 1.1, ease }}
                className="relative w-full aspect-[4/3] sm:aspect-[6/5] lg:aspect-[7/6] z-10 max-w-[440px] sm:max-w-none mx-auto"
              >
                <Image
                  src="/herosection.png"
                  alt="Urbanwiz operations dashboard"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain object-center"
                />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerBrackets() {
  const length = "w-8 h-8 sm:w-10 sm:h-10";
  return (
    <>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.7, duration: 0.5, ease }}
        className={`absolute top-28 sm:top-32 left-6 sm:left-10 ${length}`}
      >
        <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.75, duration: 0.7, ease }} className="absolute top-0 left-0 h-px w-full bg-navy/20 origin-left" />
        <motion.span initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 2.75, duration: 0.7, ease }} className="absolute top-0 left-0 w-px h-full bg-navy/20 origin-top" />
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.5, ease }}
        className={`absolute top-28 sm:top-32 right-6 sm:right-10 ${length}`}
      >
        <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 2.8, duration: 0.7, ease }} className="absolute top-0 right-0 h-px w-full bg-navy/20 origin-right" />
        <motion.span initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 2.8, duration: 0.7, ease }} className="absolute top-0 right-0 w-px h-full bg-navy/20 origin-top" />
      </motion.div>
    </>
  );
}
