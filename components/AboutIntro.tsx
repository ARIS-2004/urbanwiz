"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// Verbatim from the Home Page Content PDF.
const evolvingInto = [
  "IT",
  "AI / ML",
  "FinTech",
  "Legal Process Services",
  "Next-generation business solutions",
];

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function AboutIntro() {
  return (
    <section
      id="about-intro"
      className="relative overflow-hidden py-16 lg:py-24 bg-ivory"
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 w-[440px] h-[440px] rounded-full pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.06), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 right-0 w-[420px] h-[420px] rounded-full pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.05), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* decorative dot grid — bottom left */}
      <div
        aria-hidden
        className="absolute bottom-8 left-4 hidden lg:block w-28 h-16 opacity-70 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,87,34,0.35) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
          maskImage: "radial-gradient(closest-side, black, transparent 85%)",
          WebkitMaskImage: "radial-gradient(closest-side, black, transparent 85%)",
        }}
      />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="block w-8 h-[2px] bg-orange" />
              <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-bold">
                About Urbanwiz
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-6 font-display text-[34px] sm:text-[44px] xl:text-[50px] tracking-[-0.03em] leading-[1.03] text-navy font-bold"
            >
              A <span className="text-orange">people-first</span> business
              solutions company.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-6 max-w-xl text-[15px] sm:text-[16px] leading-[1.8] text-navy/65"
            >
              <span className="text-navy font-semibold">
                Urbanwiz is a people-first business solutions company
              </span>{" "}
              delivering BPO, customer support, and data operations services to
              growing businesses.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="mt-5 max-w-xl text-[15px] sm:text-[16px] leading-[1.8] text-navy/60"
            >
              As we evolve, we&apos;re expanding into IT, AI/ML, FinTech, Legal
              Process Services, and next-generation business solutions to
              support businesses at every stage of growth.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="/about"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-orange text-ivory pl-6 pr-2 py-2 text-[11.5px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 hover:bg-orange-soft"
                style={{
                  boxShadow:
                    "0 16px 34px -12px rgba(255,87,34,0.5), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                Read our story
                <span className="grid place-items-center w-8 h-8 rounded-full bg-ivory/20 text-ivory transition-all duration-300 group-hover:bg-ivory group-hover:text-orange">
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 rounded-full border border-navy/15 text-navy px-6 py-3 text-[11.5px] uppercase tracking-[0.2em] font-bold hover:border-orange hover:text-orange transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
                  <path d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
                  <path d="M14 3v5h5M8.5 13h7M8.5 16.5h7" />
                </svg>
                View company profile
              </Link>
            </motion.div>
          </div>

          {/* Right — dark roadmap card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.15, ease }}
            className="lg:col-span-6"
          >
            <div
              className="relative rounded-[26px] overflow-hidden p-7 sm:p-8 lg:p-9"
              style={{
                background: "linear-gradient(158deg, #0F1330 0%, #141A44 100%)",
                boxShadow: "0 40px 90px -44px rgba(8,15,45,0.7)",
              }}
            >
              {/* corner wash — orange only in the far corner (hairline accent) */}
              <span
                aria-hidden
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,87,34,0.16), rgba(255,87,34,0) 70%)",
                }}
              />
              {/* dot texture */}
              <span
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.35]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="block w-6 h-[2px] rounded-full bg-orange" />
                    <span className="text-[10.5px] uppercase tracking-[0.26em] text-ivory font-bold">
                      Where we&apos;re headed
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.24em] text-orange font-bold tabular-nums">
                    05 areas
                  </span>
                </div>

                {/* Roadmap rows — ringed number + orange divider + label + arrow */}
                <ul className="mt-7">
                  {evolvingInto.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.09, ease }}
                      className="group/row flex items-center gap-4 py-[15px] border-b border-ivory/[0.08] last:border-b-0"
                    >
                      {/* ringed number badge */}
                      <span
                        className="grid place-items-center w-9 h-9 rounded-full shrink-0 transition-all duration-300 group-hover/row:scale-105"
                        style={{
                          border: "1.5px solid rgba(255,87,34,0.35)",
                          boxShadow: "inset 0 0 0 4px rgba(255,87,34,0.04)",
                        }}
                      >
                        <span className="font-display text-[12.5px] font-black tabular-nums text-orange leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </span>
                      {/* orange divider */}
                      <span aria-hidden className="block w-[2px] h-4 rounded-full bg-orange shrink-0" />
                      <span className="flex-1 text-[14px] sm:text-[15px] font-semibold text-ivory/90 leading-tight transition-transform duration-300 group-hover/row:translate-x-0.5">
                        {item}
                      </span>
                      {/* arrow */}
                      <span className="grid place-items-center w-8 h-8 rounded-full bg-white/[0.05] text-ivory/45 shrink-0 transition-all duration-300 group-hover/row:bg-orange group-hover/row:text-ivory">
                        <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Signature */}
                <div className="mt-6 -mx-7 sm:-mx-8 lg:-mx-9 -mb-7 sm:-mb-8 lg:-mb-9 px-7 sm:px-8 lg:px-9 pt-6 pb-7 sm:pb-8 lg:pb-9 border-t border-ivory/10 flex items-center gap-4 bg-white/[0.02]">
                  <span
                    className="grid place-items-center w-11 h-11 rounded-full text-orange shrink-0"
                    style={{
                      background: "rgba(255,87,34,0.12)",
                      border: "1px solid rgba(255,87,34,0.22)",
                    }}
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" {...stroke}>
                      <circle cx="9" cy="8.5" r="2.8" />
                      <circle cx="16.5" cy="9.5" r="2.2" />
                      <path d="M3.5 19c0-2.8 2.5-4.8 5.5-4.8s5.5 2 5.5 4.8" />
                      <path d="M14.5 19c0-2.2 1.8-3.9 4-3.9" />
                    </svg>
                  </span>
                  <p className="font-display text-[15px] sm:text-[15.5px] leading-[1.45] text-ivory font-bold tracking-[-0.01em]">
                    We are Human,
                    <br />
                    before we are{" "}
                    <span className="text-orange">Corporate.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
