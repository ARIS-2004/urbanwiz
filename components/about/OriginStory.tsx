"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { delay, duration: 0.8, ease },
});

export default function OriginStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "radial-gradient(circle at top center, rgba(255,87,34,0.04), transparent 45%), #F7F7F8",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(15,19,48,0.10) 50%, transparent 100%)",
        }}
      />

      <div className="container-content relative">
        {/* ── Header ── */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-3">
            <span
              className="block w-9 h-[1.5px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #FF5722)" }}
            />
            <span className="text-[10.5px] uppercase tracking-[0.34em] text-orange font-bold">
              Our Story
            </span>
            <span
              className="block w-9 h-[1.5px] rounded-full"
              style={{ background: "linear-gradient(90deg, #FF5722, transparent)" }}
            />
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
            className="mt-6 mx-auto max-w-[1000px] font-display font-bold text-navy"
            style={{
              fontSize: "clamp(1.9rem, 3.8vw, 3.1rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
            }}
          >
            <motion.span
              className="block"
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
              }}
            >
              Every company begins with an idea.
            </motion.span>
            <motion.span
              className="block mt-1.5"
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease } },
              }}
            >
              Urbanwiz began with a <span className="text-orange">belief.</span>
            </motion.span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.25)}
            className="mt-4 font-display text-[15px] sm:text-[17px] leading-[1.45] text-navy/55 tracking-[-0.01em]"
          >
            A belief that technology should never lose its humanity.
          </motion.p>
        </div>

        {/* ── Lead paragraph — centered, refined ── */}
        <motion.div
          {...fadeUp(0.15)}
          className="mx-auto mt-8 max-w-[720px] text-center"
        >
          <p className="text-[16px] sm:text-[18px] leading-[1.8] text-navy/80 font-display tracking-[-0.005em]">
            In a world where success is often measured only by numbers, we chose
            to measure ours differently. We believe every line of code
            represents a person&apos;s vision, every project carries
            someone&apos;s dream, and every partnership is built on trust before
            transactions.{" "}
            <span className="text-navy font-semibold">
              Revenue fuels growth, but people give that growth purpose.
            </span>
          </p>
          <p className="mt-6 text-[13px] sm:text-[14px] leading-[1.55] text-navy/50 tracking-[0.02em] uppercase font-semibold">
            This belief became the foundation of a simple philosophy that guides
            every decision we make
          </p>
        </motion.div>

        {/* ── Philosophy pull-quote band ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.85, ease }}
          className="relative mx-auto mt-8 max-w-3xl rounded-[28px] overflow-hidden px-10 sm:px-16 py-10 sm:py-11 text-center"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(255,87,34,0.12), transparent 40%), linear-gradient(135deg, #07133d, #0c1d57)",
            boxShadow: "0 30px 80px rgba(8,15,45,0.18)",
          }}
        >
          <span
            aria-hidden
            className="font-display font-black text-[40px] leading-[0.4] text-orange/50 select-none"
          >
            &ldquo;
          </span>
          <p className="relative mt-4 font-display text-[24px] sm:text-[32px] tracking-[-0.02em] leading-[1.25] text-ivory font-bold">
            We are human, before we are{" "}
            <span className="text-orange">Corporate.</span>
          </p>
        </motion.div>

        {/* ── 3 themed pillars ── */}
        <div className="mt-14 lg:mt-16 max-w-4xl mx-auto">
          {/* top rule */}
          <span aria-hidden className="block h-px w-full bg-navy/12" />
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.06 * i, duration: 0.7, ease }}
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 px-4 sm:px-6 py-8 lg:py-9 border-b border-navy/12 rounded-xl hover:bg-white/70 transition-colors duration-300"
            >
              {/* hover accent on left */}
              <span
                aria-hidden
                className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-orange origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-editorial"
              />
              {/* number + label */}
              <div className="md:col-span-4 flex items-start gap-4">
                <span className="font-display font-black text-[34px] sm:text-[40px] text-orange/20 tabular-nums leading-[0.75] transition-colors duration-300 group-hover:text-orange/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1.5 font-display text-[19px] sm:text-[23px] tracking-[-0.025em] text-navy font-bold leading-[1.12]">
                  {pillar.label}
                </h3>
              </div>
              {/* text */}
              <p className="md:col-span-8 text-[14px] sm:text-[15px] leading-[1.82] text-navy/68">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Chapter-ending card ── */}
        <motion.div
          {...fadeUp(0.05)}
          className="mt-12 relative mx-auto max-w-5xl rounded-[24px] overflow-hidden pl-8 sm:pl-14 pr-7 sm:pr-14 py-11 sm:py-14"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(15,19,48,0.06)",
            boxShadow: "0 12px 40px rgba(15,19,48,0.05)",
          }}
        >
          {/* accent gutter */}
          <span
            aria-hidden
            className="absolute top-0 left-0 bottom-0 w-1"
            style={{
              background: "linear-gradient(180deg, #FF5722, rgba(255,87,34,0.25))",
            }}
          />
          {/* watermark quote */}
          <span
            aria-hidden
            className="pointer-events-none absolute right-4 top-2 font-display font-black text-[170px] leading-none text-orange/[0.06] select-none"
          >
            &rdquo;
          </span>
          {/* faint corner wash */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 -bottom-10 w-64 h-64 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,87,34,0.06), transparent 70%)",
            }}
          />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-2.5">
              <span className="block w-6 h-[2px] bg-orange" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-navy/50 font-bold">
                Our Journey Together
              </span>
            </div>
            <p className="mt-6 font-display text-[19px] sm:text-[23px] leading-[1.4] text-navy font-bold tracking-[-0.02em]">
              Every client who partners with Urbanwiz becomes more than a
              customer.{" "}
              <span className="text-navy/55 font-semibold">
                You become part of our journey.
              </span>
            </p>
            <p className="mt-5 text-[15px] sm:text-[16px] leading-[1.85] text-navy/70">
              Your aspirations become our mission, your challenges become ours to
              solve, and your success becomes the measure of our own. Because at
              the end of every project, beyond every milestone and every
              achievement, there are people whose lives, businesses, and dreams
              have been shaped by what we create together.
            </p>
            <p className="mt-8 pt-7 border-t border-navy/10 font-display text-[22px] sm:text-[27px] tracking-[-0.025em] leading-[1.3] text-navy font-bold">
              This is more than our story.{" "}
              <span className="text-orange">It is our promise.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    label: "Our Commitment",
    text: "To us, these are not just words—they are a commitment. A commitment to listen before we advise, to understand before we build, and to create relationships before we create business. We believe that when people are valued, businesses naturally thrive. Commercial success is never sacrificed; it is earned through trust, integrity, and excellence.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 2.5v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10v-5L12 3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Rooted in Bengal",
    text: "Urbanwiz was founded in Kolkata—a city celebrated for its intellect, creativity, resilience, and culture. These values are deeply woven into our identity. While our roots remain firmly planted in West Bengal, our vision reaches far beyond its borders. We are building a business ecosystem that competes globally while proudly carrying the spirit of Bengal with every innovation we deliver.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c4-4 6-7 6-10a6 6 0 10-12 0c0 3 2 6 6 10z" />
        <circle cx="12" cy="11" r="2.2" />
      </svg>
    ),
  },
  {
    label: "Our Ambition",
    text: "Our ambition is not merely to become another Technology and Business Solution. We aspire to become a defining face of the IT sector in Kolkata and West Bengal—an organization that inspires confidence, nurtures talent, and demonstrates that world-class innovation can emerge from this city and serve the world.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5S14.4 18.2 12 20.5C9.6 18.2 8.3 15.2 8.3 12S9.6 5.8 12 3.5z" />
      </svg>
    ),
  },
];
