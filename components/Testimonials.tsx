"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Accent = "orange" | "blue";

type Testimonial = {
  body: string;
  name: string;
  role: string;
  company: string;
  accent: Accent;
};

const testimonials: Testimonial[] = [
  {
    body: "Urbanwiz quickly became an extension of our team. Their responsiveness and operational discipline helped us improve efficiency while maintaining customer satisfaction across every channel.",
    name: "Arijit Chatterjee",
    role: "Director",
    company: "Shree Ganesh Realty",
    accent: "orange",
  },
  {
    body: "We came for finance ops; we kept them for the relationship. Their team caught reconciliation issues our auditors had missed for two cycles. Quiet, careful, very senior work.",
    name: "Soumyajit Banerjee",
    role: "Chief Financial Officer",
    company: "Merlin Group",
    accent: "blue",
  },
  {
    body: "Onboarding felt deliberate, not rushed. Within three weeks they were running our IT helpdesk like they'd been there for years. The SLA hasn't slipped once.",
    name: "Neha Malhotra",
    role: "Head of Operations",
    company: "Indus Health Pvt Ltd",
    accent: "orange",
  },
  {
    body: "Their playbooks are some of the cleanest documentation we've ever received from a partner. The handoff was painless and our team adopted them immediately.",
    name: "Rohan Mehta",
    role: "VP Operations",
    company: "Bengal Mercantile",
    accent: "blue",
  },
  {
    body: "What I appreciate most is the candor. They told us when a process wasn't worth automating yet — that kind of honesty saved us a quarter of wasted spend.",
    name: "Priya Nair",
    role: "Founder",
    company: "Wayside Logistics",
    accent: "orange",
  },
  {
    body: "Calm, considered, and accountable. Urbanwiz feels less like an outsourcing partner and more like a senior teammate we forgot we hired.",
    name: "Vikram Singh",
    role: "COO",
    company: "Lotus Capital Advisors",
    accent: "blue",
  },
];

const ROTATE_MS = 6500;
const BATCH_SIZE = 3;

const accentStyles: Record<
  Accent,
  { text: string; glow: string; barHover: string; mono: string }
> = {
  orange: {
    text: "text-orange",
    glow: "radial-gradient(closest-side, rgba(255,87,34,0.18), rgba(255,87,34,0) 70%)",
    barHover: "group-hover:bg-orange",
    mono: "bg-orange/10 text-orange",
  },
  blue: {
    text: "text-blue-deep",
    glow: "radial-gradient(closest-side, rgba(30,58,186,0.18), rgba(30,58,186,0) 70%)",
    barHover: "group-hover:bg-blue-deep",
    mono: "bg-blue-deep/10 text-blue-deep",
  },
};

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const total = Math.ceil(testimonials.length / BATCH_SIZE);

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % total), ROTATE_MS);
    return () => clearInterval(id);
  }, [total]);

  const start = page * BATCH_SIZE;
  const visible = testimonials.slice(start, start + BATCH_SIZE);

  return (
    <section
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.09), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.07), rgba(30,58,186,0) 70%)",
        }}
      />

      <div className="container-wide relative">
        {/* Top header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-10 lg:mb-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="block w-7 h-[2px] bg-orange" />
              <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
                Voices
              </span>
              <span
                className="hidden sm:block flex-1 max-w-[180px] h-[1.5px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,87,34,0.6), rgba(30,58,186,0.45) 60%, transparent)",
                }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-5 font-display text-[34px] sm:text-[44px] xl:text-[52px] tracking-[-0.025em] leading-[0.98] text-navy font-bold"
            >
              What partners <span className="text-orange">tell</span>{" "}
              <span className="text-blue-deep">us.</span>
            </motion.h2>
          </div>

        </div>

        {/* Cards */}
        <div className="relative min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
            >
              {visible.map((t, i) => (
                <motion.figure
                  key={`${page}-${i}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                >
                  <TestimonialCard t={t} />
                </motion.figure>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const a = accentStyles[t.accent];
  const initials = getInitials(t.name);
  return (
    <div className="group relative h-full rounded-3xl border border-navy/8 bg-white p-6 sm:p-7 overflow-hidden shadow-[0_1px_2px_rgba(15,19,48,0.03),0_22px_44px_-22px_rgba(15,19,48,0.20)] hover:border-navy/15 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_34px_60px_-22px_rgba(15,19,48,0.28)] transition-all duration-500 ease-editorial flex flex-col">
      {/* Inner top highlight */}
      <span
        aria-hidden
        className="absolute top-0 left-7 right-7 h-px bg-white pointer-events-none"
      />

      {/* Corner sheen on hover */}
      <span
        aria-hidden
        className="absolute -top-16 -right-16 w-52 h-52 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: a.glow }}
      />

      {/* Big decorative quote glyph — top-left faint */}
      <span
        aria-hidden
        className={`absolute -top-4 left-4 font-display text-[140px] leading-none font-black pointer-events-none select-none ${a.text}`}
        style={{ opacity: 0.08 }}
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div className={`relative flex items-center gap-0.5 ${a.text}`}>
        {Array.from({ length: 5 }).map((_, s) => (
          <svg key={s} width="13" height="13" viewBox="0 0 14 14" fill="currentColor">
            <path d="M7 1l1.8 3.7L13 5.4l-3 2.9.7 4.2L7 10.6 3.3 12.5 4 8.3 1 5.4l4.2-.7L7 1z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="relative mt-5 font-display text-[16px] sm:text-[17px] leading-[1.55] tracking-[-0.005em] text-navy">
        {t.body}
      </blockquote>

      {/* Footer */}
      <figcaption className="relative mt-auto pt-6 border-t border-navy/8 flex items-center gap-3.5">
        {/* Initials circle — accent colored */}
        <span
          className={`shrink-0 grid place-items-center w-11 h-11 rounded-full font-display text-[13px] font-bold tabular-nums ring-2 ring-white ${a.mono}`}
          style={{
            boxShadow:
              t.accent === "orange"
                ? "0 8px 18px -6px rgba(255,87,34,0.35), inset 0 1px 0 rgba(255,255,255,0.7)"
                : "0 8px 18px -6px rgba(30,58,186,0.35), inset 0 1px 0 rgba(255,255,255,0.7)",
          }}
        >
          {initials}
        </span>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] text-navy font-bold truncate">
            {t.name}
          </div>
          <div className="text-[11.5px] text-navy/55 mt-0.5 truncate">
            {t.role} · {t.company}
          </div>
        </div>
      </figcaption>

      {/* Bottom hairline that fills on hover */}
      <span
        className={`absolute left-0 right-0 bottom-0 h-[2px] bg-transparent ${a.barHover} transition-colors duration-500`}
      />
    </div>
  );
}

