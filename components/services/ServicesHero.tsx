"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease } },
};

export default function ServicesHero() {
  const headlineWords = "Operations,".split(" ");

  return (
    <section className="relative bg-white dark:bg-[#12173a] overflow-hidden pt-14 sm:pt-20 lg:pt-24 pb-14 lg:pb-20">
      {/* Layered ambient washes */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 right-0 w-[70%] h-[110%] pointer-events-none"
        style={{
          background:
            "radial-gradient(45% 50% at 70% 40%, rgba(255,87,34,0.14), rgba(255,87,34,0) 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 -left-20 w-[65%] h-[80%] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 55% at 30% 70%, rgba(30,58,186,0.09), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* Diagonal hairline pattern */}
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

      {/* Decorative dot grid top-right */}
      <div
        aria-hidden
        className="absolute top-24 right-6 hidden lg:block w-32 h-32 opacity-70 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,87,34,0.4) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
        }}
      />

      {/* Editorial corner brackets */}
      <CornerBrackets />

      {/* Floating orange accents */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease }}
        className="hidden lg:block absolute top-40 right-[8%] w-2 h-2 rounded-full bg-orange/40"
      />
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease }}
        className="hidden lg:block absolute bottom-28 right-[16%] w-1.5 h-1.5 rounded-full bg-orange/60"
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-5 xl:col-span-5 relative order-2 lg:order-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="relative flex items-center gap-3"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.15, duration: 0.7, ease }}
                className="block w-7 h-[2px] bg-orange origin-left"
              />
              <span className="text-[11px] uppercase tracking-[0.3em] text-orange font-semibold">
                What we do
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="relative mt-6 font-display text-[36px] sm:text-[58px] xl:text-[72px] leading-[0.96] tracking-[-0.028em] text-navy dark:text-ivory font-bold">
              <motion.span
                variants={wordContainer}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {headlineWords.map((w, i) => (
                  <motion.span
                    key={`${w}-${i}`}
                    variants={wordItem}
                    className="inline-block mr-[0.22em]"
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.span>
              <br />
              <motion.span
                variants={wordItem}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.55, duration: 0.9, ease }}
                className="inline-block text-orange"
              >
                handled.
              </motion.span>
            </h1>

            {/* Sub-copy with vertical orange gradient bar */}
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
              <p className="font-display text-[16.5px] sm:text-[17.5px] leading-[1.5] tracking-[-0.005em] text-navy dark:text-ivory font-bold">
                Six interlocking practices.
              </p>
              <p className="mt-2 text-[15px] leading-[1.65] text-navy/55 dark:text-ivory/70">
                Adopt one or run them all together. Same standards, same
                accountability, same senior ownership on every account.
              </p>
            </motion.div>

            {/* Info cards row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.8, ease }}
              className="relative mt-7 grid grid-cols-2 gap-3 max-w-md"
            >
              {/* Practices */}
              <div className="group relative rounded-xl bg-white dark:bg-[#12173a] border border-navy/8 dark:border-white/10 px-4 py-3.5 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_18px_36px_-22px_rgba(15,19,48,0.20)] hover:border-navy/15 hover:-translate-y-0.5 transition-all duration-500 ease-editorial">
                <div className="flex items-start gap-3">
                  <span
                    className="relative shrink-0 grid place-items-center w-10 h-10 rounded-full text-orange"
                    style={{
                      background: "#FFF2EB",
                      boxShadow:
                        "0 5px 12px -4px rgba(255,87,34,0.22), inset 0 1px 0 rgba(255,255,255,0.7)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9.5px] uppercase tracking-[0.22em] text-navy/55 dark:text-ivory/70 font-semibold">
                      Practices
                    </div>
                    <div className="mt-1 font-display text-[18px] text-navy dark:text-ivory font-bold leading-none tabular-nums">
                      <span className="text-orange">06</span> · core
                    </div>
                    <div className="mt-1.5 text-[10.5px] text-navy/50 dark:text-ivory/65 leading-tight">
                      Adopted alone or together
                    </div>
                  </div>
                </div>
              </div>

              {/* Coverage */}
              <div className="group relative rounded-xl bg-white dark:bg-[#12173a] border border-navy/8 dark:border-white/10 px-4 py-3.5 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_18px_36px_-22px_rgba(15,19,48,0.20)] hover:border-navy/15 hover:-translate-y-0.5 transition-all duration-500 ease-editorial">
                <div className="flex items-start gap-3">
                  <span
                    className="relative shrink-0 grid place-items-center w-10 h-10 rounded-full text-blue-deep dark:text-[#8FA3FF] bg-[rgba(30,58,186,0.08)] dark:bg-[rgba(143,163,255,0.14)]"
                    style={{
                      boxShadow:
                        "0 5px 12px -4px rgba(30,58,186,0.22), inset 0 1px 0 rgba(255,255,255,0.7)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9.5px] uppercase tracking-[0.22em] text-navy/55 dark:text-ivory/70 font-semibold">
                      Coverage
                    </div>
                    <div className="mt-1 font-display text-[18px] text-navy dark:text-ivory font-bold leading-none">
                      24<span className="text-orange">×</span>7
                    </div>
                    <div className="mt-1.5 text-[10.5px] text-navy/50 dark:text-ivory/65 leading-tight">
                      Across time zones
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease }}
              className="relative mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md"
            >
              <a
                href="#customer-support"
                className="group relative inline-flex items-center justify-between gap-3 rounded-xl bg-navy text-ivory pl-5 pr-2 py-3 overflow-hidden transition-all duration-300 hover:bg-orange"
                style={{
                  boxShadow:
                    "0 16px 32px -14px rgba(15,19,48,0.50), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                <span className="relative text-[11.5px] uppercase tracking-[0.22em] font-bold">
                  Explore services
                </span>
                <span className="relative grid place-items-center w-8 h-8 rounded-full bg-ivory/12 group-hover:bg-ivory/25 transition-colors">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <path
                      d="M7 2v9m0 0L3.5 7.5M7 11l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl bg-white dark:bg-[#12173a] border border-navy/15 dark:border-white/15 px-4 py-3 transition-all duration-300 hover:border-orange hover:-translate-y-0.5 shadow-[0_1px_2px_rgba(15,19,48,0.03)]"
              >
                <span className="grid place-items-center w-6 h-6 rounded-full bg-orange/10 text-orange group-hover:bg-orange group-hover:text-ivory transition-colors">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 3h1.8L7 6 5.5 7c.9 1.7 2.3 3.1 4 4L10.5 9.5 13.5 11V13c0 .55-.45 1-1 1-5.8 0-10.5-4.7-10.5-10.5 0-.55.45-1 1-1z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[11.5px] uppercase tracking-[0.22em] font-bold text-navy dark:text-ivory group-hover:text-orange transition-colors">
                  Talk to a partner
                </span>
              </Link>
            </motion.div>

          </div>

          {/* Right — layered visual composition */}
          <div className="lg:col-span-7 xl:col-span-7 relative order-1 lg:order-2">
            <div className="relative w-full max-w-[640px] lg:max-w-none lg:w-full mx-auto">
              {/* Bold orange backdrop block */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.55, duration: 1.0, ease }}
                className="absolute -bottom-5 -right-5 sm:-bottom-7 sm:-right-7 lg:-bottom-8 lg:-right-8 w-[78%] h-[78%] rounded-3xl bg-orange"
              />

              {/* Secondary white panel */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.45, duration: 1.0, ease }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-[42%] h-[42%] rounded-3xl border border-navy/15 dark:border-white/15 bg-white dark:bg-[#12173a] pointer-events-none"
              />

              {/* Soft orange aura */}
              <motion.div
                aria-hidden
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1.4, ease }}
                className="absolute -inset-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,87,34,0.16), rgba(255,87,34,0) 70%)",
                  filter: "blur(28px)",
                }}
              />

              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.1, ease }}
                className="relative aspect-[3/2] rounded-3xl overflow-hidden border border-navy/10 dark:border-white/10 shadow-[0_2px_4px_rgba(15,19,48,0.03),0_40px_80px_-28px_rgba(15,19,48,0.35)] z-10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80"
                  alt="Urbanwiz operations practice"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none"
                />
              </motion.div>

              {/* Orange ring peek */}
              <motion.span
                aria-hidden
                initial={{ opacity: 0, rotate: -25, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ delay: 0.7, duration: 1.2, ease }}
                className="hidden lg:block absolute -top-10 right-8 w-24 h-24 rounded-full border border-orange/30 pointer-events-none z-0"
              />
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
        transition={{ delay: 0.3, duration: 0.5, ease }}
        className={`absolute top-6 sm:top-10 left-6 sm:left-10 ${length}`}
      >
        <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.35, duration: 0.7, ease }} className="absolute top-0 left-0 h-px w-full bg-navy/20 origin-left" />
        <motion.span initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.35, duration: 0.7, ease }} className="absolute top-0 left-0 w-px h-full bg-navy/20 origin-top" />
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5, ease }}
        className={`absolute top-6 sm:top-10 right-6 sm:right-10 ${length}`}
      >
        <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.7, ease }} className="absolute top-0 right-0 h-px w-full bg-navy/20 origin-right" />
        <motion.span initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.4, duration: 0.7, ease }} className="absolute top-0 right-0 w-px h-full bg-navy/20 origin-top" />
      </motion.div>
    </>
  );
}
