"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

/**
 * Shared layout for legal pages (Privacy Policy, Terms & Conditions).
 * Fully theme-aware and reads contact details from the central site config.
 * Supports simple {{email}} / {{phone}} / {{address}} tokens in text.
 */
export default function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  const fill = (s: string) =>
    s
      .replaceAll("{{email}}", site.email)
      .replaceAll("{{phone}}", site.phone)
      .replaceAll("{{address}}", site.addressFull)
      .replaceAll("{{name}}", site.name)
      .replaceAll("{{website}}", site.website);

  return (
    <section className="relative overflow-hidden bg-ivory dark:bg-[#0B0E24] pt-28 sm:pt-32 pb-20 lg:pb-28 transition-colors duration-300">
      {/* Soft ambient washes */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 w-[45%] h-[420px] opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 70% 30%, rgba(255,87,34,0.06), rgba(255,87,34,0) 70%)",
        }}
      />

      <div className="container-content relative max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="flex items-center gap-3">
            <span className="block w-8 h-[2px] rounded-full bg-orange" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-orange font-bold">
              {eyebrow}
            </span>
          </div>
          <h1 className="mt-5 font-display text-[32px] sm:text-[42px] xl:text-[48px] tracking-[-0.03em] leading-[1.04] text-navy dark:text-ivory font-bold">
            {title}
          </h1>
          <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.75] text-navy/65 dark:text-ivory/80 max-w-2xl">
            {fill(intro)}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy/[0.04] dark:bg-white/[0.06] border border-navy/8 dark:border-white/10 px-3.5 py-1.5">
            <span className="block w-1.5 h-1.5 rounded-full bg-orange" />
            <span className="text-[11px] uppercase tracking-[0.18em] text-navy/60 dark:text-ivory/70 font-semibold">
              Last updated · {updated}
            </span>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <motion.div
              key={s.heading}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease, delay: 0.04 * (i % 4) }}
            >
              <h2 className="flex items-baseline gap-3 font-display text-[20px] sm:text-[22px] tracking-[-0.02em] text-navy dark:text-ivory font-bold">
                <span className="font-display text-[13px] tabular-nums font-black text-orange/80 leading-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </h2>
              {s.paragraphs?.map((p, j) => (
                <p
                  key={j}
                  className="mt-3.5 text-[14.5px] sm:text-[15px] leading-[1.8] text-navy/70 dark:text-ivory/80"
                >
                  {fill(p)}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {s.bullets.map((b, k) => (
                    <li
                      key={k}
                      className="flex items-start gap-3 text-[14.5px] leading-[1.7] text-navy/70 dark:text-ivory/80"
                    >
                      <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-orange/70 shrink-0" />
                      <span>{fill(b)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact footer */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mt-14 rounded-2xl border border-navy/10 dark:border-white/10 bg-white dark:bg-[#12173a] px-6 sm:px-8 py-7"
        >
          <h3 className="font-display text-[18px] sm:text-[20px] text-navy dark:text-ivory font-bold tracking-[-0.02em]">
            Questions about this policy?
          </h3>
          <p className="mt-2 text-[14px] leading-[1.7] text-navy/65 dark:text-ivory/75">
            Reach our team and a real person will get back to you within one
            business day.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={site.emailHref}
              className="inline-flex items-center gap-2 rounded-xl bg-navy dark:bg-white/10 text-ivory px-5 py-3 text-[12.5px] uppercase tracking-[0.16em] font-bold hover:bg-orange transition-colors"
            >
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-xl border border-navy/15 dark:border-white/20 text-navy dark:text-ivory px-5 py-3 text-[12.5px] uppercase tracking-[0.16em] font-bold hover:border-orange hover:text-orange transition-colors tabular-nums"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[12.5px] uppercase tracking-[0.16em] font-bold text-orange hover:underline"
            >
              Contact us →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
