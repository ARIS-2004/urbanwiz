"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Promise = {
  // verbatim line, split so key words can take the accent color
  lead: string;
  accent: string;
  tail: string;
  icon: string; // brand icon medallion in /public (used as the corner badge)
  img: string; // remote photo (Unsplash CDN, whitelisted in next.config)
};

// Unsplash photo IDs — loaded from the whitelisted CDN, nothing stored locally
const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const promises: Promise[] = [
  {
    lead: "To build technology with ",
    accent: "purpose",
    tail: ".",
    icon: "/promise-purpose.svg",
    img: U("1522071820081-009f0129c71c"), // team building / collaboration
  },
  {
    lead: "To pursue growth with ",
    accent: "integrity",
    tail: ".",
    icon: "/promise-integrity.svg",
    img: U("1521737604893-d14cc237f11d"), // handshake / partnership
  },
  {
    lead: "To carry the pride of Kolkata onto the ",
    accent: "global stage",
    tail: ".",
    icon: "/promise-global.svg",
    img: U("1558431382-27e303142255"), // city / skyline
  },
  {
    lead: "And to never forget the belief that started it all",
    accent: "",
    tail: "—",
    icon: "/promise-belief.svg",
    img: U("1600880292203-757bb62b4baf"), // people / human connection
  },
];

export default function MissionValues() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden py-16 lg:py-24 bg-[#FAF8F6] dark:bg-[#0E1230] transition-colors duration-300"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(15,19,48,0.10) 50%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 0%, rgba(255,87,34,0.05), rgba(255,87,34,0) 70%)",
        }}
      />

      <div className="container-content relative">
        {/* Centered header */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-3"
          >
            <span
              className="block w-9 h-[1.5px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #FF5722)" }}
            />
            <span className="text-[10.5px] uppercase tracking-[0.32em] text-navy/55 dark:text-ivory/70 font-bold">
              Our Promise
            </span>
            <span
              className="block w-9 h-[1.5px] rounded-full"
              style={{ background: "linear-gradient(90deg, #FF5722, transparent)" }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.85, ease }}
            className="mt-6 font-display text-[30px] sm:text-[44px] xl:text-[52px] tracking-[-0.03em] leading-[1.04] text-navy dark:text-ivory font-bold"
          >
            This is more than our story.
            <br />
            It is our <span className="text-orange">promise</span>.
          </motion.h2>

          {/* Small divider dot */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.7, ease }}
            className="mx-auto mt-6 flex items-center justify-center gap-2"
          >
            <span className="block w-10 h-px bg-navy/15" />
            <span className="block w-1 h-1 rounded-full bg-orange" />
            <span className="block w-10 h-px bg-navy/15" />
          </motion.div>
        </div>

        {/* Four promise cards — photo banner + badge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {promises.map((pr, i) => (
            <motion.div
              key={pr.lead}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.1 * i, duration: 0.75, ease }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[22px] bg-white dark:bg-[#12173a] border border-navy/10 dark:border-white/10 overflow-hidden flex flex-col shadow-[0_1px_2px_rgba(15,19,48,0.02),0_24px_48px_-30px_rgba(15,19,48,0.22)] hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_46px_80px_-38px_rgba(15,19,48,0.38)] transition-shadow duration-500"
            >
              {/* accent top edge grows on hover */}
              <span
                aria-hidden
                className="absolute top-0 left-0 right-0 h-[3px] z-10 bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-editorial"
              />
              {/* Photo banner */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pr.img}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-105"
                />
                {/* brand tint + bottom fade */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,19,48,0.10) 0%, rgba(15,19,48,0.02) 45%, rgba(255,255,255,0.0) 70%, #ffffff 100%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-multiply opacity-60"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,87,34,0.10), rgba(15,19,48,0.14))",
                  }}
                />

                {/* Sheen sweep on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-editorial"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
                  }}
                />
              </div>

              {/* Body */}
              <div className="relative px-5 pt-5 pb-6 flex-1 flex flex-col">
                <span className="font-display font-black text-[24px] leading-none text-orange/25 tabular-nums transition-colors duration-300 group-hover:text-orange/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-[16px] sm:text-[17px] leading-[1.3] text-navy dark:text-ivory font-bold tracking-[-0.02em]">
                  {pr.lead}
                  {pr.accent && <span className="text-orange">{pr.accent}</span>}
                  {pr.tail}
                </p>
                <span
                  aria-hidden
                  className="mt-4 block h-[2.5px] w-8 rounded-full bg-orange/70 origin-left transition-transform duration-500 ease-editorial group-hover:scale-x-[1.7]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer ribbon — verbatim tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mt-12 lg:mt-14 rounded-2xl px-6 sm:px-10 py-6 flex items-center justify-center gap-3"
          style={{ backgroundColor: "rgba(255,87,34,0.07)", border: "1px solid rgba(255,87,34,0.15)" }}
        >
          <span aria-hidden className="font-display font-black text-[30px] leading-[0.5] text-orange/50 select-none shrink-0 self-start mt-1">
            &ldquo;
          </span>
          <p className="font-display text-[17px] sm:text-[21px] tracking-[-0.01em] text-navy dark:text-ivory font-bold text-center">
            We are human, before we are{" "}
            <span className="text-orange">Corporate.</span>
          </p>
          <span aria-hidden className="font-display font-black text-[30px] leading-[0.5] text-orange/50 select-none shrink-0 self-end mb-1">
            &rdquo;
          </span>
        </motion.div>
      </div>
    </section>
  );
}
