"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

type Leader = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  accent: "orange" | "blue";
  linkedin?: string;
};

const leaders: Leader[] = [
  {
    name: "Abc",
    role: "Founder & CEO",
    initials: "A",
    bio: "Leads strategy and client partnerships. Eight years building operations practices that founders return to.",
    accent: "orange",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Abc",
    role: "Head of Operations",
    initials: "A",
    bio: "Runs the floor. Ensures every SLA is met, every handoff documented, every client account has a senior owner.",
    accent: "blue",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Abc",
    role: "Head of Client Success",
    initials: "A",
    bio: "Owns the client relationship — from onboarding through to long-term partnership. Bridges teams and outcomes.",
    accent: "orange",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Abc",
    role: "Head of Finance Ops",
    initials: "A",
    bio: "Leads the finance practice. Audit-grade discipline applied to bookkeeping, reconciliations and reporting.",
    accent: "blue",
    linkedin: "https://www.linkedin.com",
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden py-14 lg:py-16"
      style={{ backgroundColor: "#FAF8F6" }}
    >
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
                Leadership
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-5 font-display text-[30px] sm:text-[40px] xl:text-[48px] tracking-[-0.025em] leading-[1.02] text-navy font-bold"
            >
              Senior owners on{" "}
              <span className="text-orange">every</span>{" "}
              <span className="text-blue-deep">account.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-5 lg:pb-2 text-[13.5px] text-navy/55 leading-[1.65] max-w-md lg:ml-auto lg:text-right"
          >
            Career operators with five to fifteen years of experience —
            the people who read your inquiry, run your account, and reply
            to your email.
          </motion.p>
        </div>

        {/* Leader cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {leaders.map((l, idx) => {
            const isBlue = l.accent === "blue";
            return (
              <motion.div
                key={`${l.role}-${idx}`}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                }}
                className="group relative rounded-3xl bg-white border border-navy/8 p-6 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_22px_44px_-22px_rgba(15,19,48,0.20)] hover:border-navy/15 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_34px_60px_-22px_rgba(15,19,48,0.28)] transition-all duration-500 ease-editorial overflow-hidden"
              >
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

                {/* Initials avatar */}
                <span
                  className={`relative grid place-items-center w-16 h-16 rounded-2xl font-display text-[20px] font-extrabold ring-2 ring-white ${
                    isBlue
                      ? "bg-blue-deep/10 text-blue-deep"
                      : "bg-orange/10 text-orange"
                  }`}
                  style={{
                    boxShadow: isBlue
                      ? "0 12px 26px -8px rgba(30,58,186,0.35), inset 0 1px 0 rgba(255,255,255,0.7)"
                      : "0 12px 26px -8px rgba(255,87,34,0.35), inset 0 1px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  {l.initials}
                </span>

                <h3 className="relative mt-5 font-display text-[18px] sm:text-[20px] tracking-[-0.02em] text-navy font-bold leading-tight">
                  {l.name}
                </h3>
                <div
                  className={`relative mt-1 text-[10.5px] uppercase tracking-[0.22em] font-bold ${
                    isBlue ? "text-blue-deep" : "text-orange"
                  }`}
                >
                  {l.role}
                </div>

                <p className="relative mt-3 text-[12.5px] leading-[1.6] text-navy/60">
                  {l.bio}
                </p>

                {/* LinkedIn link */}
                {l.linkedin && (
                  <Link
                    href={l.linkedin}
                    target="_blank"
                    aria-label={`${l.name} on LinkedIn`}
                    className="relative mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-navy/70 hover:text-orange transition-colors"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                    LinkedIn
                  </Link>
                )}

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
