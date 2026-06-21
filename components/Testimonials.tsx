"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FadeUp } from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    body: "UrbanWizz quickly became an extension of our team. Their responsiveness and operational discipline helped us improve efficiency while maintaining customer satisfaction across every channel.",
    name: "Arijit Chatterjee",
    role: "Director",
    company: "Shree Ganesh Realty",
  },
  {
    body: "We came for finance ops; we kept them for the relationship. Their team caught reconciliation issues our auditors had missed for two cycles. Quiet, careful, very senior work.",
    name: "Soumyajit Banerjee",
    role: "Chief Financial Officer",
    company: "Merlin Group",
  },
  {
    body: "Onboarding felt deliberate, not rushed. Within three weeks they were running our IT helpdesk like they'd been there for years. The SLA hasn't slipped once.",
    name: "Neha Malhotra",
    role: "Head of Operations",
    company: "Indus Health Pvt Ltd",
  },
  {
    body: "Their playbooks are some of the cleanest documentation we've ever received from a partner. The handoff was painless and our team adopted them immediately.",
    name: "Rohan Mehta",
    role: "VP Operations",
    company: "Bengal Mercantile",
  },
  {
    body: "What I appreciate most is the candor. They told us when a process wasn't worth automating yet — that kind of honesty saved us a quarter of wasted spend.",
    name: "Priya Nair",
    role: "Founder",
    company: "Wayside Logistics",
  },
  {
    body: "Calm, considered, and accountable. UrbanWizz feels less like an outsourcing partner and more like a senior teammate we forgot we hired.",
    name: "Vikram Singh",
    role: "COO",
    company: "Lotus Capital Advisors",
  },
];

const ROTATE_MS = 5500;
const BATCH_SIZE = 3;

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
    <section className="py-14 lg:py-16">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-end">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-3">
                <span className="block w-7 h-[2px] bg-orange" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-orange font-semibold">
                  Voices
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-5 font-display text-[34px] sm:text-[42px] xl:text-[48px] tracking-tight leading-[1.05] text-navy font-semibold">
                What partners <span className="text-orange">tell us.</span>
              </h2>
            </FadeUp>
          </div>

          {/* Carousel controls */}
          <FadeUp delay={0.1} className="lg:col-span-5 lg:ml-auto">
            <div className="flex items-center gap-3 lg:justify-end">
              <div className="flex items-center gap-1.5">
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === page ? "w-7 bg-orange" : "w-1.5 bg-navy/20 hover:bg-navy/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 ml-2">
                <NavBtn
                  onClick={() => setPage((p) => (p - 1 + total) % total)}
                  label="Previous"
                  flip
                />
                <NavBtn
                  onClick={() => setPage((p) => (p + 1) % total)}
                  label="Next"
                />
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {visible.map((t, i) => (
                <motion.figure
                  key={`${page}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                  className="relative h-full rounded-2xl border border-navy/8 bg-white p-7 sm:p-8 overflow-hidden shadow-[0_2px_4px_rgba(15,19,48,0.03)]"
                >
                  <div className="absolute top-4 right-5 font-display text-[90px] leading-none text-orange/12 pointer-events-none select-none font-semibold">
                    &ldquo;
                  </div>

                  <div className="relative flex items-center gap-1 text-orange">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <svg key={s} width="13" height="13" viewBox="0 0 14 14" fill="currentColor">
                        <path d="M7 1l1.8 3.7L13 5.4l-3 2.9.7 4.2L7 10.6 3.3 12.5 4 8.3 1 5.4l4.2-.7L7 1z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="relative mt-4 font-display text-[16px] sm:text-[17px] leading-[1.55] tracking-tight text-navy">
                    {t.body}
                  </blockquote>

                  <figcaption className="relative mt-6 pt-5 border-t border-navy/8 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[13.5px] text-navy font-semibold truncate">
                        {t.name}
                      </div>
                      <div className="text-[12px] text-navy/55 mt-0.5 truncate">
                        {t.role} · {t.company}
                      </div>
                    </div>
                    <span className="shrink-0 grid place-items-center w-9 h-9 rounded-full bg-orange/10 text-orange">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" />
                        <path
                          d="M2.5 12c0-2.2 2-3.8 4.5-3.8s4.5 1.6 4.5 3.8"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function NavBtn({
  onClick,
  label,
  flip = false,
}: {
  onClick: () => void;
  label: string;
  flip?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="grid place-items-center w-9 h-9 rounded-full bg-ivory text-navy/55 shadow-[3px_3px_8px_rgba(15,19,48,0.06),-3px_-3px_8px_rgba(255,255,255,0.95)] hover:text-orange hover:shadow-[inset_2px_2px_5px_rgba(15,19,48,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.95)] transition-all duration-300"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 14 14"
        fill="none"
        className={flip ? "rotate-180" : ""}
      >
        <path
          d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
