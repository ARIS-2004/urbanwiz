"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Social = { label: "Instagram" | "Facebook" | "LinkedIn"; href: string };

type Principle = {
  key: string;
  title: string;
  // verbatim pull from the source PDF
  text: string;
  icon?: string; // legacy field, no longer rendered
};

type Leader = {
  name: string;
  role: string;
  initials: string;
  accent: "orange" | "blue" | "navy";
  quote: string;
  roots: string;
  photo?: string; // grayscale headshot in /public (falls back to initials)
  principles: [Principle, Principle, Principle];
  paragraphs: (string | { type: "closer"; text: string })[];
  socials: Social[];
};

const leaders: Leader[] = [
  {
    name: "Subhajit Dutta",
    role: "Founder & Managing Director",
    initials: "SD",
    photo: "/founder-subhajit.jpg",
    accent: "orange",
    quote:
      "Can a business achieve global success without compromising its values?",
    roots: "Kolkata, West Bengal",
    principles: [
      {
        key: "ethics",
        title: "Ethics, Every Day",
        text: "Ethics are not policies written in a handbook; they are promises that must be honored every single day.",
        icon: "shield",
      },
      {
        key: "people",
        title: "People First",
        text: "No business can truly prosper if the people behind it are undervalued.",
        icon: "people",
      },
      {
        key: "vision",
        title: "Global Vision",
        text: "It deserved to become a destination for innovation, technology, and world-class business services.",
        icon: "globe",
      },
    ],
    paragraphs: [
      "For Subhajit Dutta, Urbanwiz was never meant to be just another company. It was born from a question that stayed with him throughout his journey:",
      { type: "closer", text: "Can a business achieve global success without compromising its values?" },
      "With a background as a Company Secretary aspirant, Subhajit developed a deep appreciation for corporate governance, ethical leadership, and the responsibility that every organization carries toward its employees, clients, and society. Those principles became the foundation upon which Urbanwiz was built.",
      "Growing up in Kolkata, he witnessed both the incredible talent the city has to offer and the opportunities that often slipped away because of outdated work cultures, limited career growth, and inconsistent professional standards. He believed Kolkata deserved more than being a source of talent—it deserved to become a destination for innovation, technology, and world-class business services.",
      "That vision continues to drive him every day.",
      "Subhajit is a firm believer that no business can truly prosper if the people behind it are undervalued. He stands strongly against labour exploitation, unfair wages, and workplace practices that treat individuals as disposable resources. Instead, he advocates for transparency, mutual respect, industry-standard compensation, and a culture where every individual is empowered to grow professionally while maintaining dignity and balance in life.",
      "To him, ethics are not policies written in a handbook; they are promises that must be honored every single day.",
      "As the Founder and Managing Director, his ambition reaches far beyond building a successful enterprise. He wants Urbanwiz to become a symbol of what modern businesses from Kolkata can achieve—an organization that competes confidently on the global stage while remaining deeply rooted in integrity, accountability, and compassion.",
      "Whether serving a startup across the street or an enterprise across the world, Subhajit's philosophy remains unchanged: every client deserves excellence, every commitment deserves honesty, and every employee deserves to be respected, rewarded fairly, and given the opportunity to thrive.",
      "His dream is not simply to grow Urbanwiz.",
      "His dream is to help redefine the future of Kolkata's technology ecosystem, proving that a company can be globally competitive while remaining profoundly human.",
      "Because success is not measured only by revenue or recognition. It is measured by the lives we improve, the trust we earn, and the legacy we leave behind.",
      "We are Human, before we are Corporate.",
    ],
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/samael_the_light_bringer?igsh=OGg0c3k5anFxaTdz",
      },
      { label: "Facebook", href: "https://www.facebook.com/share/19QaeKZY3a/" },
    ],
  },
  {
    name: "Shilanjan Ghosh",
    role: "Co-Founder & Director of Information Systems",
    initials: "SG",
    photo: "/founder-shilanjan.jpg",
    accent: "blue",
    quote: "Technology should serve people, not the other way around.",
    roots: "Information Systems · B.Tech, IT",
    principles: [
      {
        key: "purpose",
        title: "Purposeful Tech",
        text: "Technology should serve people, not the other way around.",
        icon: "compass",
      },
      {
        key: "optimism",
        title: "An Optimist",
        text: "Every challenge presents an opportunity to grow, every obstacle inspires innovation.",
        icon: "spark",
      },
      {
        key: "impact",
        title: "Measured In Trust",
        text: "They are measured by the trust they inspire, the businesses they empower, and the lives they help improve.",
        icon: "people",
      },
    ],
    paragraphs: [
      "Technology has always been more than code and machines for Shilanjan Ghosh.",
      "As a graduate in B.Tech in Information Technology, he has always believed that the true purpose of technology is to make life simpler, businesses stronger, and people more capable—not to replace the human touch, but to enhance it.",
      "From the very beginning of Urbanwiz, Shilanjan envisioned an organization where innovation would never come at the cost of humanity. His passion lies in designing dependable information systems, building intelligent digital ecosystems, and creating technology that quietly solves complex problems while allowing people to focus on what they do best.",
      "As the Co-Founder & Director of Information Systems, he is the driving force behind Urbanwiz's technological foundation. Whether it is developing scalable digital infrastructure, integrating AI-driven solutions, or ensuring seamless operational efficiency, his approach is guided by one simple belief: technology should serve people, not the other way around.",
      "But beyond technical expertise, Shilanjan is an optimist. He believes every challenge presents an opportunity to grow, every obstacle inspires innovation, and every milestone is only the beginning of a greater journey. His confidence in Urbanwiz's future stems not only from the technology the company builds, but from the people who bring that technology to life every day.",
      "As Urbanwiz continues its journey from delivering operational excellence to becoming a global provider of IT, AI, fintech, and business solutions, Shilanjan remains committed to building systems that are secure, scalable, and future-ready—without ever losing sight of the values that define the company.",
      "For him, the greatest innovations are not measured by algorithms or infrastructure alone. They are measured by the trust they inspire, the businesses they empower, and the lives they help improve.",
      "Because while technology builds powerful systems, it is people who build extraordinary companies. As we believe,",
      "We are Human, before we are Corporate.",
    ],
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/shilanjanghosh?igsh=MTVldGRsdHYxeWhuMQ==",
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/shilanjan.ghosh.2025",
      },
    ],
  },
  {
    name: "Vineet Pandit",
    role: "Co-Founder & Executive Director",
    initials: "VP",
    photo: "/founder-vineet.jpg",
    accent: "navy",
    quote:
      "Behind every successful operation are motivated employees, trusted clients, and leaders who genuinely care about both.",
    roots: "Howrah, West Bengal",
    principles: [
      {
        key: "roots",
        title: "Honest Roots",
        text: "Success was never measured by titles, but by honesty, hard work, and keeping one's word.",
        icon: "leaf",
      },
      {
        key: "people",
        title: "How People Work",
        text: "Behind every successful operation are motivated employees, trusted clients, and leaders who genuinely care about both.",
        icon: "people",
      },
      {
        key: "impact",
        title: "Lasting Impact",
        text: "Every client is more than a contract, every employee is more than a resource, and every challenge is an opportunity to create lasting impact.",
        icon: "spark",
      },
    ],
    paragraphs: [
      "Every meaningful company begins with someone who chooses to see possibilities where others see limitations. For Urbanwiz, one of those people is Vineet Pandit.",
      "Born and raised in Howrah, Vineet comes from a humble middle-class family where success was never measured by titles, but by honesty, hard work, and keeping one's word. Those values became the foundation of his professional journey.",
      "Nearly seven years ago, he stepped into the world of Business Process Outsourcing (BPO). What started as a career soon became a passion. Over the years, he immersed himself in every aspect of BPO operations—from managing teams and streamlining processes to ensuring exceptional customer experiences and delivering measurable business outcomes.",
      "Rather than simply learning how a BPO works, Vineet learned how people work. He discovered that behind every successful operation are motivated employees, trusted clients, and leaders who genuinely care about both.",
      "That belief has shaped his leadership ever since.",
      "As the Co-Founder and Executive Director of Urbanwiz, Vineet brings deep operational expertise and a practical understanding of building scalable customer support solutions. His experience enables Urbanwiz to deliver reliable, efficient, and people-centric outsourcing services to businesses across the globe.",
      "Yet, if you ask him what his greatest achievement is, it won't be the years of experience or the number of successful projects. It will be the opportunity to create a company where people are valued before profits, where trust is earned through action, and where every client relationship is treated as a long-term partnership.",
      "Urbanwiz was never envisioned as just another IT and BPO company. It was built to prove that business excellence and human values can grow together.",
      "For Vineet, every client is more than a contract, every employee is more than a resource, and every challenge is an opportunity to create lasting impact.",
      "Because at Urbanwiz, we believe in one simple philosophy:",
      "We are Human, before we are Corporate.",
    ],
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/vineet_d_devilboy?igsh=MXFsNjQ2b3ZlYXU3aQ==",
      },
      { label: "Facebook", href: "https://www.facebook.com/share/188fw2oCMS/" },
    ],
  },
];

const accents = {
  orange: {
    text: "text-orange",
    bar: "bg-orange",
    border: "border-orange",
    rgb: "255,87,34",
    monoBg: "#0F1330",
    monoInk: "#FF7A4D",
    softBg: "#FFF3ED",
    softBorder: "rgba(255,87,34,0.18)",
    iconBg: "rgba(255,87,34,0.10)",
    iconInk: "#FF5722",
  },
  blue: {
    text: "text-blue-deep",
    bar: "bg-blue-deep",
    border: "border-blue-deep",
    rgb: "23,42,138",
    monoBg: "#0F1330",
    monoInk: "#6E86FF",
    softBg: "#EEF1FC",
    softBorder: "rgba(23,42,138,0.16)",
    iconBg: "rgba(23,42,138,0.09)",
    iconInk: "#172A8A",
  },
  navy: {
    text: "text-navy",
    bar: "bg-navy",
    border: "border-navy",
    rgb: "15,19,48",
    monoBg: "#0F1330",
    monoInk: "#C9CEE8",
    softBg: "#F1F2F6",
    softBorder: "rgba(15,19,48,0.12)",
    iconBg: "rgba(15,19,48,0.07)",
    iconInk: "#0F1330",
  },
} as const;

function SocialIcon({ label }: { label: Social["label"] }) {
  const shared =
    "grid place-items-center w-8 h-8 rounded-full text-white transition-transform duration-300 group-hover/soc:scale-110";
  if (label === "LinkedIn") {
    return (
      <span className={shared} style={{ background: "#0A66C2" }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.73C24 .77 23.2 0 22.22 0z" />
        </svg>
      </span>
    );
  }
  if (label === "Facebook") {
    return (
      <span className={shared} style={{ background: "#1877F2" }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073C24 5.446 18.627 0.073 12 0.073S0 5.446 0 12.073C0 18.06 4.388 23.023 10.125 23.927v-8.385H7.078v-3.47h3.047V9.42c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875v2.253h3.328l-.532 3.47h-2.796v8.385C19.612 23.023 24 18.06 24 12.073z" />
        </svg>
      </span>
    );
  }
  return (
    <span
      className={shared}
      style={{
        background:
          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
      </svg>
    </span>
  );
}

function FounderProfile({ leader, forceOpen }: { leader: Leader; forceOpen?: boolean }) {
  const a = accents[leader.accent];
  const [open, setOpen] = useState(!!forceOpen);

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.85, ease }}
      className="group/card relative rounded-[26px] bg-white border border-navy/10 overflow-hidden transition-shadow duration-500 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_30px_60px_-34px_rgba(15,19,48,0.22)] hover:shadow-[0_1px_2px_rgba(15,19,48,0.04),0_44px_80px_-40px_rgba(15,19,48,0.34)]"
    >
      {/* Accent edge that reveals on scroll */}
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease, delay: 0.1 }}
        className={`absolute top-0 left-0 right-0 h-[3px] origin-left ${a.bar}`}
      />
      {/* ── Masthead ── */}
      <div className="relative flex items-center px-6 sm:px-8 lg:px-10 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <span className={`block w-8 h-[2px] ${a.bar}`} />
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-navy/50">
            Founder Profile
          </span>
        </div>
      </div>

      {/* ── Identity block ── */}
      <div className="relative mx-6 sm:mx-8 lg:mx-10 rounded-2xl border border-navy/8 bg-navy/[0.015] px-5 sm:px-7 py-6 sm:py-7">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
          {/* Portrait — grayscale photo over initials fallback */}
          <div
            className="relative shrink-0 grid place-items-center w-[84px] h-[84px] sm:w-[96px] sm:h-[96px] rounded-2xl overflow-hidden transition-transform duration-500 ease-editorial group-hover/card:-translate-y-1"
            style={{
              backgroundColor: a.monoBg,
              boxShadow: `0 20px 38px -16px rgba(${a.rgb},0.5), inset 0 1px 0 rgba(255,255,255,0.08)`,
            }}
          >
            {/* initials fallback (behind photo) */}
            <span
              aria-hidden
              className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              }}
            />
            <span
              className="absolute font-display font-black text-[32px] sm:text-[36px] tracking-[-0.04em]"
              style={{ color: a.monoInk }}
            >
              {leader.initials}
            </span>
            {/* photo layer — hides itself if missing */}
            {leader.photo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={leader.photo}
                alt={leader.name}
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-500 ease-editorial group-hover/card:grayscale-0"
              />
            )}
            {/* subtle inner ring */}
            <span aria-hidden className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>

          {/* Name + role + quote */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-display text-[24px] sm:text-[28px] tracking-[-0.025em] leading-[1.05] text-navy font-bold">
                  {leader.name}
                </h3>
                <div
                  className={`mt-1.5 text-[9.5px] sm:text-[10px] uppercase tracking-[0.22em] font-bold ${a.text}`}
                >
                  {leader.role}
                </div>
              </div>
              {/* Socials */}
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                {leader.socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${leader.name} on ${s.label}`}
                    className="group/soc"
                  >
                    <SocialIcon label={s.label} />
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="mt-3.5 pt-3.5 flex items-start gap-2.5"
              style={{ borderTop: `1px solid rgba(${a.rgb},0.15)` }}
            >
              <span
                className={`font-display font-black text-[30px] leading-[0.7] ${a.text} opacity-40 select-none`}
              >
                &ldquo;
              </span>
              <p className="font-display text-[15px] sm:text-[16.5px] leading-[1.4] text-navy/80 font-semibold tracking-[-0.01em]">
                {leader.quote}
                <span className={`${a.text} opacity-40`}>&rdquo;</span>
              </p>
            </div>

            {/* Socials — mobile */}
            <div className="sm:hidden mt-4 flex items-center gap-2">
              {leader.socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${leader.name} on ${s.label}`}
                  className="group/soc"
                >
                  <SocialIcon label={s.label} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Principle strip — editorial, numeral-led (no icons) ── */}
      <div className="relative px-6 sm:px-8 lg:px-10 pt-9 pb-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 sm:gap-0 sm:divide-x divide-navy/8">
          {leader.principles.map((pr, i) => (
            <motion.div
              key={pr.key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease, delay: 0.08 * i }}
              className="group/pr relative sm:px-8 first:sm:pl-0 last:sm:pr-0"
            >
              <span
                className={`font-display font-black text-[22px] leading-none tabular-nums ${a.text} opacity-30 transition-opacity duration-300 group-hover/pr:opacity-60`}
              >
                {["I", "II", "III"][i]}
              </span>
              <h4 className="mt-3 font-display text-[16px] sm:text-[16.5px] tracking-[-0.015em] text-navy font-bold leading-[1.2]">
                {pr.title}
              </h4>
              <span
                aria-hidden
                className={`mt-3 mb-3.5 block h-[2px] w-7 rounded-full ${a.bar} opacity-60 origin-left transition-transform duration-500 ease-editorial group-hover/pr:scale-x-[1.5]`}
              />
              <p className="text-[13px] leading-[1.7] text-navy/62">
                {pr.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Footer: expand + meta ── */}
      <div className="relative mt-4 border-t border-navy/8">
        <div
          className="px-6 sm:px-8 lg:px-10 py-5 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center"
          style={{ backgroundColor: a.softBg }}
        >
          <div className="lg:col-span-8 flex items-center gap-5">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              className="group/btn relative inline-flex items-center gap-3 rounded-xl bg-navy text-ivory pl-6 pr-2.5 py-3.5 overflow-hidden transition-colors duration-300 hover:bg-navy-soft shrink-0"
              style={{
                boxShadow:
                  "0 16px 30px -14px rgba(15,19,48,0.6), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <span className="text-[11.5px] uppercase tracking-[0.2em] font-bold">
                {open ? "Hide Full Story" : "Read Full Story"}
              </span>
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.4, ease }}
                className="grid place-items-center w-7 h-7 rounded-full bg-orange text-ivory"
              >
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
            </button>
            <div className="hidden sm:flex items-center gap-2.5">
              <span aria-hidden className={`block w-5 h-[1.5px] ${a.bar} opacity-50`} />
              <p className="text-[12.5px] leading-[1.4] text-navy/55 font-medium">
                The complete story, in his own words.
              </p>
            </div>
          </div>

          {/* Meta */}
          <div className="lg:col-span-4 flex items-center lg:justify-end">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white border border-navy/8 pl-3 pr-4 py-2 shadow-[0_1px_2px_rgba(15,19,48,0.03)]">
              <span className={`block w-1.5 h-1.5 rounded-full ${a.bar}`} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-navy/45">
                Roots
              </span>
              <span className="text-[12.5px] text-navy/70 font-medium">
                {leader.roots}
              </span>
            </div>
          </div>
        </div>

        {/* Expanded verbatim bio — editorial reading layout */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="bio"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.55, ease }}
              className="overflow-hidden"
            >
              <div
                className="relative border-t border-navy/8"
                style={{ backgroundColor: "#FCFBFA" }}
              >
                {/* faint accent wash */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-0 w-[45%] h-40"
                  style={{
                    background: `radial-gradient(60% 100% at 0% 0%, rgba(${a.rgb},0.05), rgba(${a.rgb},0) 70%)`,
                  }}
                />
                <div className="relative px-6 sm:px-8 lg:px-10 pt-8 pb-9 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                  {/* Sticky rail */}
                  <div className="lg:col-span-3">
                    <div className="lg:sticky lg:top-24">
                      <span
                        aria-hidden
                        className="block font-display font-black leading-[0.8] tracking-[-0.05em] select-none"
                        style={{ fontSize: "54px", color: `rgba(${a.rgb},0.12)` }}
                      >
                        {leader.initials}
                      </span>
                      <div className={`mt-3 text-[9.5px] uppercase tracking-[0.28em] font-bold ${a.text}`}>
                        In His Own Words
                      </div>
                      <h4 className="mt-1.5 font-display text-[19px] tracking-[-0.02em] text-navy font-bold leading-[1.1]">
                        {leader.name}
                      </h4>
                      <div className="mt-1 text-[9.5px] uppercase tracking-[0.2em] text-navy/45 font-semibold">
                        {leader.role}
                      </div>
                      <span
                        aria-hidden
                        className={`mt-4 block h-[2px] w-9 rounded-full ${a.bar} opacity-70`}
                      />
                    </div>
                  </div>

                  {/* Article body */}
                  <div className="lg:col-span-9 max-w-[42rem]">
                    {(() => {
                      let firstPara = true;
                      return leader.paragraphs.map((p, i) => {
                        if (typeof p !== "string") {
                          // pull-quote — left-ruled feature, same font (no italic)
                          return (
                            <figure
                              key={i}
                              className="my-7 pl-6"
                              style={{ borderLeft: `3px solid rgba(${a.rgb},0.5)` }}
                            >
                              <blockquote className="font-display text-[19px] sm:text-[23px] leading-[1.3] text-navy font-bold tracking-[-0.025em]">
                                {p.text}
                              </blockquote>
                            </figure>
                          );
                        }
                        if (p === "We are Human, before we are Corporate.") {
                          // signature flourish
                          return (
                            <div
                              key={i}
                              className="mt-7 pt-6 flex items-center gap-3"
                              style={{ borderTop: `1px solid rgba(${a.rgb},0.12)` }}
                            >
                              <span className={`block w-7 h-[2px] ${a.bar}`} />
                              <p className="font-display text-[16px] sm:text-[18px] text-navy font-bold tracking-[-0.02em]">
                                {p}
                              </p>
                            </div>
                          );
                        }
                        // short single-line paragraphs → colored emphasis (same font)
                        const isShort = p.length < 62;
                        if (firstPara) {
                          firstPara = false;
                          const first = p.charAt(0);
                          const rest = p.slice(1);
                          return (
                            <motion.p
                              key={i}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.55, ease, delay: 0.08 }}
                              className="text-[15.5px] sm:text-[16.5px] leading-[1.8] text-navy/85"
                            >
                              <span
                                className={`float-left mr-3.5 mt-1 font-display font-black leading-[0.62] text-[52px] sm:text-[60px] select-none ${a.text}`}
                              >
                                {first}
                              </span>
                              {rest}
                            </motion.p>
                          );
                        }
                        if (isShort) {
                          return (
                            <motion.p
                              key={i}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.45, ease }}
                              className={`mt-5 font-display text-[16px] sm:text-[17px] leading-[1.4] font-bold tracking-[-0.02em] ${a.text}`}
                            >
                              {p}
                            </motion.p>
                          );
                        }
                        return (
                          <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, ease }}
                            className="mt-5 text-[15px] sm:text-[16px] leading-[1.9] text-navy/72"
                          >
                            {p}
                          </motion.p>
                        );
                      });
                    })()}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "#FAF8F6" }}
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
        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-14 flex items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease }}
            className="font-display text-[22px] sm:text-[28px] xl:text-[32px] tracking-[-0.025em] leading-[1.1] text-navy font-bold whitespace-nowrap"
          >
            Meet the Three Pillars of{" "}
            <span className="text-orange">Urbanwiz</span>
          </motion.h2>
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.15, duration: 0.9, ease }}
            className="hidden sm:block flex-1 h-px origin-left bg-navy/12"
          />
        </div>

        {/* Founder profiles */}
        <div className="space-y-8 lg:space-y-10">
          {leaders.map((l) => (
            <FounderProfile key={l.name} leader={l} />
          ))}
        </div>
      </div>
    </section>
  );
}
