"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Phase = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: string[];
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
      "Customer Support",
      "Data Operations",
      "Service Resolution",
      "Business Operations",
    ],
  },
  {
    eyebrow: "Tomorrow",
    title: "Technology & Innovation",
    subtitle: "Rolling out · next horizon",
    accent: "blue",
    status: "Rolling out",
    items: [
      "Information Technology",
      "AI & Machine Learning",
      "Intelligent Process Automation",
    ],
  },
  {
    eyebrow: "And Beyond",
    title: "Professional Services",
    subtitle: "In exploration · next chapter",
    accent: "navy",
    status: "In exploration",
    items: [
      "FinTech Operations",
      "Legal Process Services",
      "Strategic Business Solutions",
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
      className="relative overflow-hidden py-16 lg:py-20 bg-[#FAF8F6] dark:bg-[#0E1230] transition-colors duration-300"
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
              className="mt-5 font-display text-[32px] sm:text-[42px] xl:text-[50px] tracking-[-0.025em] leading-[1.02] text-navy dark:text-ivory font-bold"
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
            className="lg:col-span-5 lg:pb-2 text-[15px] text-navy/55 dark:text-ivory/70 leading-[1.7] max-w-md lg:ml-auto lg:text-right"
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
                className="group relative flex flex-col rounded-[24px] bg-white dark:bg-[#12173a] border border-navy/8 dark:border-white/10 p-7 lg:p-8 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_22px_44px_-22px_rgba(15,19,48,0.20)] hover:border-navy/15 hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_36px_64px_-24px_rgba(15,19,48,0.30)] transition-all duration-500 ease-editorial overflow-hidden"
              >
                {/* Top accent border — reveals on hover */}
                <span
                  aria-hidden
                  className={`absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-editorial ${a.bar}`}
                />
                {/* Inner top highlight */}
                <span
                  aria-hidden
                  className="absolute top-0 left-7 right-7 h-px bg-white dark:bg-white/10 pointer-events-none"
                />

                {/* Corner accent wash on hover */}
                <span
                  aria-hidden
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: a.wash }}
                />

                {/* Ghost phase number — anchor */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-5 right-4 font-display text-[64px] leading-none font-black tracking-[-0.05em] select-none transition-transform duration-500 group-hover:scale-110 text-navy/[0.05] dark:text-white/[0.09]"
                >
                  0{phaseIdx + 1}
                </span>

                {/* Header: eyebrow chip */}
                <div className="relative flex items-center gap-2.5">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-[9.5px] uppercase tracking-[0.24em] font-bold ${a.eyebrowColor} ${
                      phase.accent === "orange"
                        ? "dark:text-[#FF7A4D]"
                        : phase.accent === "blue"
                        ? "dark:text-[#8FA3FF]"
                        : "dark:text-ivory"
                    }`}
                    style={{
                      background:
                        phase.accent === "orange"
                          ? "rgba(255,87,34,0.10)"
                          : phase.accent === "blue"
                          ? "rgba(120,140,235,0.16)"
                          : "rgba(180,190,230,0.14)",
                    }}
                  >
                    {phase.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mt-5 font-display text-[23px] sm:text-[25px] xl:text-[27px] tracking-[-0.022em] text-navy dark:text-ivory font-bold leading-[1.08]">
                  {phase.title}
                </h3>
                {phase.subtitle && (
                  <div className="relative mt-2 text-[10.5px] text-navy/45 dark:text-ivory/65 uppercase tracking-[0.2em] font-semibold">
                    {phase.subtitle}
                  </div>
                )}

                {/* Hairline */}
                <span
                  aria-hidden
                  className={`relative block mt-5 w-9 h-[2px] rounded-full ${a.bar}`}
                />

                {/* Items list — indexed rows, no icons */}
                <ul className="relative mt-4 flex-1">
                  {phase.items.map((item, itemIdx) => (
                    <li
                      key={item}
                      className="group/row flex items-baseline gap-3.5 py-3 border-b border-navy/8 dark:border-white/10 last:border-b-0"
                    >
                      <span
                        className={`shrink-0 font-display text-[11px] font-bold tabular-nums leading-none ${a.eyebrowColor} opacity-45 group-hover/row:opacity-90 transition-opacity duration-300`}
                      >
                        {String(itemIdx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[14px] sm:text-[14.5px] font-semibold text-navy dark:text-ivory leading-snug transition-transform duration-300 group-hover/row:translate-x-0.5">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
