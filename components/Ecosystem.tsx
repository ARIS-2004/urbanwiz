"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type Phase = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: { label: string; icon: React.ReactNode }[];
  accent: "orange" | "blue" | "navy";
  status: string;
};

const phases: Phase[] = [
  {
    eyebrow: "Today",
    title: "What we run",
    subtitle: "Core services · shipping now",
    accent: "orange",
    status: "Live",
    items: [
      {
        label: "Customer Support",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <path d="M4 13a8 8 0 1116 0v3a2 2 0 01-2 2h-1v-6h3" />
            <path d="M4 13v3a2 2 0 002 2h1v-6H4" />
          </svg>
        ),
      },
      {
        label: "Data Operations",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <ellipse cx="12" cy="6" rx="7" ry="2.5" />
            <path d="M5 6v6c0 1.5 3 2.5 7 2.5s7-1 7-2.5V6M5 12v6c0 1.5 3 2.5 7 2.5s7-1 7-2.5v-6" />
          </svg>
        ),
      },
      {
        label: "Service Resolution",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <path d="M9 12l2 2 4-4" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        ),
      },
      {
        label: "Business Operations",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" />
          </svg>
        ),
      },
    ],
  },
  {
    eyebrow: "Tomorrow",
    title: "Technology & Innovation",
    subtitle: "Rolling out · next horizon",
    accent: "blue",
    status: "Rolling out",
    items: [
      {
        label: "Information Technology",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <rect x="3" y="5" width="18" height="12" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        ),
      },
      {
        label: "AI & Machine Learning",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        ),
      },
      {
        label: "Intelligent Process Automation",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <path d="M4 7h12M16 7l-3-3M16 7l-3 3" />
            <path d="M20 17H8M8 17l3-3M8 17l3 3" />
          </svg>
        ),
      },
    ],
  },
  {
    eyebrow: "And Beyond",
    title: "Professional Services",
    subtitle: "In exploration · next chapter",
    accent: "navy",
    status: "In exploration",
    items: [
      {
        label: "FinTech Operations",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <path d="M12 4a8 8 0 108 8h-8z" />
            <path d="M12 4v8h8a8 8 0 00-8-8z" />
          </svg>
        ),
      },
      {
        label: "Legal Process Services",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <path d="M12 3v3M6 6h12M8 6l-3 8h6l-3-8zM19 6l-3 8h6l-3-8z" />
            <path d="M12 6v12M8 18h8" />
          </svg>
        ),
      },
      {
        label: "Strategic Business Solutions",
        icon: (
          <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}>
            <path d="M3 3l7 7-4 4-3-3zM14 14l7 7-4-1-3-3z" />
            <path d="M10 10l4 4" />
          </svg>
        ),
      },
    ],
  },
];

const accentToClasses = (accent: Phase["accent"]) => {
  switch (accent) {
    case "orange":
      return {
        chip: "bg-orange text-ivory",
        chipShadow: "0 10px 22px -6px rgba(255,87,34,0.55)",
        tile: "bg-orange/10 text-orange",
        tileShadow: "0 6px 14px -4px rgba(255,87,34,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",
        bar: "bg-orange/40",
        wash: "radial-gradient(closest-side, rgba(255,87,34,0.14), rgba(255,87,34,0) 70%)",
        eyebrowColor: "text-orange",
      };
    case "blue":
      return {
        chip: "bg-blue-deep text-ivory",
        chipShadow: "0 10px 22px -6px rgba(30,58,186,0.55)",
        tile: "bg-blue-deep/10 text-blue-deep",
        tileShadow: "0 6px 14px -4px rgba(30,58,186,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",
        bar: "bg-blue-deep/40",
        wash: "radial-gradient(closest-side, rgba(30,58,186,0.14), rgba(30,58,186,0) 70%)",
        eyebrowColor: "text-blue-deep",
      };
    default:
      return {
        chip: "bg-navy text-ivory",
        chipShadow: "0 10px 22px -6px rgba(15,19,48,0.60)",
        tile: "bg-navy/10 text-navy",
        tileShadow: "0 6px 14px -4px rgba(15,19,48,0.25), inset 0 1px 0 rgba(255,255,255,0.7)",
        bar: "bg-navy/40",
        wash: "radial-gradient(closest-side, rgba(15,19,48,0.14), rgba(15,19,48,0) 70%)",
        eyebrowColor: "text-navy",
      };
  }
};

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-65"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.10), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-0 w-[460px] h-[460px] rounded-full pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.08), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* Decorative dot grid */}
      <div
        aria-hidden
        className="absolute top-12 left-8 hidden lg:block w-28 h-16 opacity-60 pointer-events-none"
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
                Our ecosystem
              </span>
              <span
                className="hidden sm:block flex-1 max-w-[200px] h-[1.5px] rounded-full"
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
              className="mt-5 font-display text-[32px] sm:text-[42px] xl:text-[50px] tracking-[-0.025em] leading-[1.02] text-navy font-bold"
            >
              Today.{" "}
              <span className="text-orange">Tomorrow.</span>{" "}
              <span className="text-blue-deep">And beyond.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-5 lg:pb-2 text-[13.5px] text-navy/55 leading-[1.65] max-w-md lg:ml-auto lg:text-right"
          >
            We&apos;re a people-first business solutions company. What we ship
            today, what we&apos;re building next, and where we&apos;re headed —
            all on one operating standard.
          </motion.p>
        </div>

        {/* Phases */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {phases.map((phase, phaseIdx) => {
            const a = accentToClasses(phase.accent);
            return (
              <motion.div
                key={phase.eyebrow}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
                }}
                className="group relative rounded-3xl bg-white border border-navy/8 p-6 lg:p-7 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_22px_44px_-22px_rgba(15,19,48,0.20)] hover:border-navy/15 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_34px_60px_-22px_rgba(15,19,48,0.28)] transition-all duration-500 ease-editorial overflow-hidden"
              >
                {/* Inner top highlight */}
                <span
                  aria-hidden
                  className="absolute top-0 left-7 right-7 h-px bg-white pointer-events-none"
                />

                {/* Corner accent wash on hover */}
                <span
                  aria-hidden
                  className="absolute -top-14 -right-14 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: a.wash }}
                />

                {/* Header row: eyebrow */}
                <div className="relative flex items-center gap-3">
                  <div className={`text-[10.5px] uppercase tracking-[0.28em] font-bold ${a.eyebrowColor}`}>
                    {phase.eyebrow}
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative mt-4 font-display text-[22px] sm:text-[24px] xl:text-[26px] tracking-[-0.022em] text-navy font-bold leading-tight">
                  {phase.title}
                </h3>
                {phase.subtitle && (
                  <div className="relative mt-1.5 text-[11px] text-navy/50 uppercase tracking-[0.2em] font-semibold">
                    {phase.subtitle}
                  </div>
                )}

                {/* Hairline */}
                <span
                  aria-hidden
                  className={`relative block mt-4 w-8 h-[2px] rounded-full ${a.bar}`}
                />

                {/* Items list */}
                <ul className="relative mt-4 space-y-2.5">
                  {phase.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl bg-white border border-navy/6 px-3 py-2.5 transition-all duration-300 hover:border-navy/12 hover:bg-navy/[0.02]"
                    >
                      <span
                        className={`shrink-0 grid place-items-center w-8 h-8 rounded-lg ${a.tile}`}
                        style={{ boxShadow: a.tileShadow }}
                      >
                        {item.icon}
                      </span>
                      <span className="text-[12.5px] font-semibold text-navy leading-tight">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent hairline that fills on hover */}
                <span
                  aria-hidden
                  className={`absolute left-0 right-0 bottom-0 h-[2px] transition-colors duration-500 bg-transparent ${
                    phase.accent === "orange"
                      ? "group-hover:bg-orange"
                      : phase.accent === "blue"
                      ? "group-hover:bg-blue-deep"
                      : "group-hover:bg-navy"
                  }`}
                />

                {/* Phase index — subtle bottom-left */}
                <span className="absolute bottom-4 left-6 text-[9px] uppercase tracking-[0.22em] text-navy/30 font-semibold tabular-nums pointer-events-none">
                  0{phaseIdx + 1} / 03
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
