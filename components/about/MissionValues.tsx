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

const pillars = [
  {
    title: "Mission",
    body:
      "Run the operations growing companies depend on — quietly, accountably, and with senior owners on every account.",
    accent: "orange" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    title: "Vision",
    body:
      "To become the partner founders return to — measured in years, not quarters; in trust, not tickets.",
    accent: "blue" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Values",
    body:
      "Calm over noise. Documentation over heroics. Long relationships over quick wins. Real people on every reply.",
    accent: "orange" as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function MissionValues() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-16 bg-white">
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
                What guides us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-5 font-display text-[30px] sm:text-[40px] xl:text-[48px] tracking-[-0.025em] leading-[1.02] text-navy font-bold"
            >
              The reason we{" "}
              <span className="text-orange">started.</span>{" "}
              <span className="text-blue-deep">And kept going.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-5 lg:pb-2 text-[13.5px] text-navy/55 leading-[1.65] max-w-md lg:ml-auto lg:text-right"
          >
            Three principles that shape every account, every reply, every
            handoff.
          </motion.p>
        </div>

        {/* Pillars grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5"
        >
          {pillars.map((p) => {
            const isBlue = p.accent === "blue";
            return (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
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
                  className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: isBlue
                      ? "radial-gradient(closest-side, rgba(30,58,186,0.14), rgba(30,58,186,0) 70%)"
                      : "radial-gradient(closest-side, rgba(255,87,34,0.16), rgba(255,87,34,0) 70%)",
                  }}
                />

                {/* Icon tile */}
                <motion.span
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`relative grid place-items-center w-12 h-12 rounded-2xl ${
                    isBlue ? "text-blue-deep" : "text-orange"
                  }`}
                  style={{
                    background: isBlue ? "rgba(30,58,186,0.08)" : "#FFF2EB",
                    boxShadow: isBlue
                      ? "0 10px 22px -8px rgba(30,58,186,0.30), inset 0 1px 0 rgba(255,255,255,0.7)"
                      : "0 10px 22px -8px rgba(255,87,34,0.30), inset 0 1px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  {p.icon}
                </motion.span>

                <h3 className="relative mt-5 font-display text-[22px] sm:text-[24px] tracking-[-0.02em] text-navy font-bold">
                  {p.title}
                </h3>

                <span
                  className={`relative block mt-3 w-8 h-[2px] rounded-full ${
                    isBlue ? "bg-blue-deep/40" : "bg-orange/45"
                  }`}
                />

                <p className="relative mt-4 text-[13px] leading-[1.65] text-navy/60">
                  {p.body}
                </p>

                {/* Bottom accent hairline that fills on hover */}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-[2px] transition-colors duration-500 ${
                    isBlue
                      ? "bg-transparent group-hover:bg-blue-deep"
                      : "bg-transparent group-hover:bg-orange"
                  }`}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
