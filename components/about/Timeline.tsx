"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Milestone = {
  marker: string;
  kicker: string;
  title: string;
  body: string;
  accent: "orange" | "blue" | "navy";
  status: "done" | "current" | "next";
};

const milestones: Milestone[] = [
  {
    marker: "2017",
    kicker: "Founded",
    title: "Three founders. One belief.",
    body: "Subhajit, Shilanjan and Vineet start Urbanwiz at Ecospace Business Park, New Town — with a philosophy before they had a client list.",
    accent: "orange",
    status: "done",
  },
  {
    marker: "Today",
    kicker: "Operating",
    title: "Building the operating standard.",
    body: "Customer support, data operations, and business process support delivered from a single in-house team in Kolkata.",
    accent: "blue",
    status: "current",
  },
  {
    marker: "Ahead",
    kicker: "Next chapter",
    title: "IT, AI, and fintech ecosystem.",
    body: "Extending the practice into intelligent systems, AI-assisted workflows, and fintech services — always guided by the same belief.",
    accent: "navy",
    status: "next",
  },
];

const accents = {
  orange: { text: "text-orange", bg: "bg-orange", ring: "ring-orange/25" },
  blue: {
    text: "text-blue-deep",
    bg: "bg-blue-deep",
    ring: "ring-blue-deep/25",
  },
  navy: { text: "text-navy", bg: "bg-navy", ring: "ring-navy/25" },
} as const;

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden py-20 lg:py-28 bg-white"
    >
      {/* Editorial rule */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(15,19,48,0.10) 50%, transparent 100%)",
        }}
      />

      <div className="container-content relative">
        {/* Header — same editorial system */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3"
          >
            <span className="block w-6 h-[2px] bg-orange" />
            <span className="text-[10.5px] uppercase tracking-[0.32em] text-navy/55 font-bold">
              The path so far
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.85, ease }}
            className="mt-6 font-display text-[36px] sm:text-[52px] xl:text-[60px] tracking-[-0.03em] leading-[0.98] text-navy font-bold"
          >
            One{" "}
            <span className="text-orange">chapter</span> in,
            <br />
            <span className="text-blue-deep">many</span> to come.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.25, duration: 0.85, ease }}
            className="mt-6 text-[15px] sm:text-[16px] leading-[1.75] text-navy/70 max-w-xl"
          >
            A young company, deliberately paced. We&apos;ll update this
            timeline as we grow — one earned milestone at a time.
          </motion.p>
        </div>

        {/* Vertical timeline — editorial */}
        <div className="relative max-w-3xl">
          {/* Central vertical rule */}
          <span
            aria-hidden
            className="absolute left-[13px] top-2 bottom-2 w-px bg-navy/12 pointer-events-none"
          />

          <div className="space-y-12 lg:space-y-14">
            {milestones.map((m, i) => {
              const a = accents[m.accent];
              return (
                <motion.article
                  key={m.marker}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease }}
                  className="relative pl-12 sm:pl-14"
                >
                  {/* Node */}
                  <span
                    className={`absolute left-0 top-0.5 grid place-items-center w-[27px] h-[27px] rounded-full ring-4 ring-white ${
                      m.status === "next" ? "bg-white border-2 border-navy/30" : a.bg
                    }`}
                  >
                    {m.status === "current" && (
                      <span
                        aria-hidden
                        className={`absolute inset-0 rounded-full ${a.bg} opacity-40 animate-ping`}
                      />
                    )}
                    {m.status === "done" && (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.5 6.5l2.5 2.5L9.5 3.5"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {m.status === "next" && (
                      <span className="block w-1.5 h-1.5 rounded-full bg-navy/50" />
                    )}
                  </span>

                  {/* Content */}
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span
                      className={`font-display text-[26px] sm:text-[32px] leading-none tracking-[-0.025em] font-black ${a.text}`}
                    >
                      {m.marker}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-navy/45 font-bold">
                      {m.kicker}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-[19px] sm:text-[22px] xl:text-[24px] tracking-[-0.02em] leading-[1.2] text-navy font-bold">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.7] text-navy/65 max-w-lg">
                    {m.body}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
