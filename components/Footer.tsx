"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";

const ease = [0.22, 1, 0.36, 1] as const;

const cols = [
  {
    title: "Company",
    links: [
      { href: "/#partner", label: "About" },
      { href: "mailto:careers@urbanwiz.com", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#customer-support", label: "Customer Support" },
      { href: "/services#finance", label: "Finance Operations" },
      { href: "/services#it-helpdesk", label: "IT Helpdesk" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about#story", label: "Origin story" },
      { href: "/about#leadership", label: "Leadership" },
      { href: "/about#studio", label: "Studio" },
    ],
  },
];

const emails = [
  { href: "mailto:hello@urbanwiz.com", label: "hello@urbanwiz.com", tag: "General" },
  { href: "mailto:partners@urbanwiz.com", label: "partners@urbanwiz.com", tag: "Partners" },
  { href: "mailto:careers@urbanwiz.com", label: "careers@urbanwiz.com", tag: "Careers" },
];

const socials = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease, delay },
});

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      {/* Layered ambient washes */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.10), rgba(255,87,34,0) 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.65, 0.4], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-40 -left-32 w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.08), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* Faint diagonal hairline pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(15,19,48,0.025) 0 1px, transparent 1px 22px)",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Top hairline gradient — orange to blue */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,87,34,0.7) 0%, rgba(30,58,186,0.7) 100%)",
        }}
      />

      <div className="container-wide relative">
        {/* Marquee tagline strip */}
        <div className="relative border-b border-navy/10 mt-10 lg:mt-12 py-5 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 whitespace-nowrap"
          >
            {Array.from({ length: 2 }).map((_, batch) => (
              <div key={batch} className="flex items-center gap-12">
                {[
                  "Customer Support",
                  "Finance Operations",
                  "Back Office",
                  "IT Helpdesk",
                  "Virtual Assistance",
                  "Process Automation",
                ].map((s) => (
                  <span key={`${batch}-${s}`} className="flex items-center gap-12 text-[12.5px] uppercase tracking-[0.26em] text-navy/55 font-medium">
                    {s}
                    <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Main columns — premium white card on ivory */}
        <div className="py-10">
          <motion.div
            {...reveal(0)}
            className="relative rounded-3xl overflow-hidden border border-navy/8 bg-white"
            style={{
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.7) inset, 0 1px 2px rgba(15,19,48,0.03), 0 40px 80px -30px rgba(15,19,48,0.20)",
            }}
          >
            {/* Top accent strip (orange→blue) inside the card */}
            <span
              aria-hidden
              className="absolute top-0 left-0 right-0 h-[3px]"
              style={{
                background:
                  "linear-gradient(90deg, #FF5722 0%, #1E3ABA 100%)",
              }}
            />

            {/* Ambient inside */}
            <div
              aria-hidden
              className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,87,34,0.08), rgba(255,87,34,0) 70%)",
              }}
            />

            {/* Header bar — Logo + tagline */}
            <div className="relative px-7 lg:px-10 pt-8 pb-6 border-b border-navy/8 flex items-center justify-between gap-4">
              <Logo size="lg" />
              <div className="hidden sm:flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-navy/55 font-semibold">
                <span className="block w-5 h-[2px] bg-orange" />
                Made in Kolkata · Est. 2017
              </div>
            </div>

            {/* Columns row */}
            <div className="relative grid grid-cols-2 lg:grid-cols-12 gap-y-8 lg:gap-0 px-7 lg:px-0 py-9">
              {/* Studio */}
              <motion.div
                {...reveal(0)}
                className="col-span-2 lg:col-span-3 lg:px-10 lg:border-r lg:border-navy/8"
              >
                <ColHeader title="Studio" />
                <address className="mt-4 not-italic font-display text-[15px] text-navy leading-[1.5] tracking-tight font-semibold">
                  Salt Lake Sector V
                  <br />
                  Kolkata 700091
                </address>
                <div className="mt-1 text-[12px] text-navy/55">
                  West Bengal, India
                </div>
                <a
                  href="tel:+919051234876"
                  className="group mt-4 inline-flex items-center gap-2 rounded-full bg-white border border-navy/10 px-3.5 py-2 text-[12.5px] text-navy hover:text-orange hover:border-orange/40 hover:-translate-y-0.5 transition-all duration-300 font-semibold tabular-nums shadow-[0_1px_2px_rgba(15,19,48,0.03),0_10px_24px_-14px_rgba(15,19,48,0.18)]"
                >
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-orange/10 text-orange group-hover:bg-orange group-hover:text-ivory transition-colors">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4 3h1.8L7 6 5.5 7c.9 1.7 2.3 3.1 4 4L10.5 9.5 13.5 11V13c0 .55-.45 1-1 1-5.8 0-10.5-4.7-10.5-10.5 0-.55.45-1 1-1z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  +91 90512 34876
                </a>
              </motion.div>

              {/* Link columns */}
              {cols.map((c, i) => (
                <motion.div
                  key={c.title}
                  {...reveal(0.1 + i * 0.06)}
                  className="lg:col-span-2 lg:px-6 lg:border-r lg:border-navy/8"
                >
                  <ColHeader title={c.title} />
                  <ul className="mt-4 space-y-2.5">
                    {c.links.map((l) => (
                      <li key={`${c.title}-${l.label}`}>
                        <Link
                          href={l.href}
                          className="group inline-flex items-center gap-2 text-[12.5px] text-navy/70 hover:text-orange transition-colors font-medium"
                        >
                          <span className="block w-0 h-px bg-orange transition-all duration-500 ease-editorial group-hover:w-3" />
                          <span>{l.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Direct lines */}
              <motion.div
                {...reveal(0.28)}
                className="col-span-2 lg:col-span-3 lg:px-10"
              >
                <ColHeader title="Direct lines" />
                <ul className="mt-4 space-y-3">
                  {emails.map((e) => (
                    <li key={e.href}>
                      <a href={e.href} className="group block">
                        <span className="block text-[9.5px] uppercase tracking-[0.22em] text-navy/45 font-semibold">
                          {e.tag}
                        </span>
                        <span className="mt-0.5 inline-flex items-center gap-1.5 text-[12.5px] text-navy/75 group-hover:text-orange transition-colors font-medium">
                          {e.label}
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                          >
                            <path
                              d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Bottom hairline gradient inside card */}
            <span
              aria-hidden
              className="absolute left-0 right-0 bottom-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,87,34,0.4) 0%, rgba(30,58,186,0.4) 100%)",
              }}
            />
          </motion.div>
        </div>

        {/* Copyright bar */}
        <motion.div
          {...reveal(0)}
          className="border-t border-navy/10 py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4 text-[12px] text-navy/55">
            <span>© {new Date().getFullYear()} Urbanwiz Private Limited.</span>
            <span className="hidden sm:block w-px h-3 bg-navy/15" />
            <span className="hidden sm:inline text-navy/45">
              Made with care in Kolkata.
            </span>
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-4 text-[12px]">
              <Link href="#" className="text-navy/55 hover:text-orange transition-colors font-medium">
                Privacy Policy
              </Link>
              <span className="block w-px h-3 bg-navy/15" />
              <Link href="#" className="text-navy/55 hover:text-orange transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
            <span className="hidden md:block w-px h-4 bg-navy/15" />
            <div className="flex items-center gap-2">
              {socials.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: 0.1 + i * 0.06 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={s.href}
                    aria-label={s.name}
                    className="grid place-items-center w-10 h-10 rounded-full bg-white border border-navy/10 text-navy/65 hover:bg-orange hover:text-ivory hover:border-orange transition-all duration-300 shadow-[0_1px_2px_rgba(15,19,48,0.03)]"
                  >
                    {s.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function ColHeader({ title }: { title: string }) {
  return (
    <div>
      <div className="text-[10.5px] uppercase tracking-[0.26em] text-orange font-semibold">
        {title}
      </div>
      <div className="mt-2.5 w-7 h-[2px] bg-orange/40 rounded-full" />
    </div>
  );
}
