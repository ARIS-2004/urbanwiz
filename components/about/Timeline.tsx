"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Milestone = {
  year: string;
  shortYear: string;
  title: string;
  body: string;
  accent: "orange" | "blue";
};

const milestones: Milestone[] = [
  {
    year: "2017",
    shortYear: "'17",
    title: "Founded in Salt Lake",
    body: "Urbanwiz starts as a small operations practice in Sector V, Kolkata.",
    accent: "orange",
  },
  {
    year: "2019",
    shortYear: "'19",
    title: "First international account",
    body: "Crossed into international support work — APAC and EMEA time zones.",
    accent: "blue",
  },
  {
    year: "2022",
    shortYear: "'22",
    title: "100+ operators",
    body: "The team grows past one hundred trained operators across practices.",
    accent: "orange",
  },
  {
    year: "Today",
    shortYear: "Now",
    title: "150+ operators · 60+ clients",
    body: "Still in Kolkata. Still senior owners on every account. Just more of it.",
    accent: "blue",
  },
];

export default function Timeline() {
  return (
    <section
      className="relative overflow-hidden py-14 lg:py-16"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-24 right-0 w-[460px] h-[460px] rounded-full pointer-events-none opacity-65"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.10), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-0 w-[440px] h-[440px] rounded-full pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.08), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* Decorative dot grids */}
      <div
        aria-hidden
        className="absolute top-12 left-8 hidden lg:block w-24 h-16 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,87,34,0.42) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
          maskImage: "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />

      <div className="container-content relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-3"
          >
            <span className="block w-7 h-[2px] bg-orange" />
            <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
              Timeline
            </span>
            <span className="block w-7 h-[2px] bg-orange" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mt-5 font-display text-[30px] sm:text-[40px] xl:text-[48px] tracking-[-0.025em] leading-[1.02] text-navy font-bold"
          >
            Eight years.{" "}
            <span className="text-orange">Four</span>{" "}
            <span className="text-blue-deep">milestones.</span>
          </motion.h2>
        </div>

        {/* Timeline track */}
        <div className="relative">
          {/* Connecting hairline — horizontal on desktop */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="absolute hidden lg:block left-[6%] right-[6%] top-[36px] h-[2px] origin-left rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,87,34,0.50), rgba(30,58,186,0.50))",
            }}
          />
          {/* Vertical hairline on mobile */}
          <span
            aria-hidden
            className="absolute lg:hidden left-[34px] top-2 bottom-2 w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,87,34,0.40), rgba(30,58,186,0.40))",
            }}
          />

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
            }}
            className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-5"
          >
            {milestones.map((m) => {
              const isBlue = m.accent === "blue";
              return (
                <motion.li
                  key={m.year}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
                  }}
                  className="relative pl-20 lg:pl-0"
                >
                  {/* Year chip */}
                  <div className="flex items-start lg:flex-col">
                    <span
                      className={`absolute left-0 lg:relative grid place-items-center w-[68px] h-[68px] rounded-2xl bg-white ring-1 ring-navy/8 ${
                        isBlue ? "text-blue-deep" : "text-orange"
                      }`}
                      style={{
                        boxShadow: isBlue
                          ? "0 16px 30px -10px rgba(30,58,186,0.32), inset 0 1px 0 rgba(255,255,255,0.85), 0 0 0 4px rgba(30,58,186,0.05)"
                          : "0 16px 30px -10px rgba(255,87,34,0.32), inset 0 1px 0 rgba(255,255,255,0.85), 0 0 0 4px rgba(255,87,34,0.06)",
                      }}
                    >
                      <span className="font-display text-[18px] font-extrabold tracking-tight tabular-nums">
                        {m.shortYear}
                      </span>
                      {/* Pulse dot top-right */}
                      <span
                        aria-hidden
                        className="absolute -top-1.5 -right-1.5 grid place-items-center w-3 h-3"
                      >
                        <span
                          className={`absolute inline-flex h-full w-full rounded-full ${
                            isBlue ? "bg-blue-deep/40" : "bg-orange/40"
                          } animate-ping`}
                        />
                        <span
                          className={`relative inline-flex w-2 h-2 rounded-full ring-2 ring-white ${
                            isBlue ? "bg-blue-deep" : "bg-orange"
                          }`}
                        />
                      </span>
                    </span>
                  </div>

                  {/* Card */}
                  <div className="mt-3 lg:mt-7 lg:pr-3">
                    <div
                      className={`text-[10px] uppercase tracking-[0.24em] font-bold ${
                        isBlue ? "text-blue-deep" : "text-orange"
                      }`}
                    >
                      {m.year}
                    </div>
                    <h3 className="mt-1.5 font-display text-[18px] sm:text-[20px] xl:text-[22px] tracking-[-0.02em] text-navy font-bold leading-tight">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-[1.6] text-navy/60 max-w-[260px]">
                      {m.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

      </div>
    </section>
  );
}
