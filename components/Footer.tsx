"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/about#leadership", label: "Leadership" },
      { href: "/about#story", label: "Our Story" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#customer-support", label: "Customer Support" },
      { href: "/services#virtual-assistance", label: "Virtual Assistance" },
      { href: "/services#finance", label: "Finance Process Outsourcing" },
      { href: "/services#back-office", label: "Back Office Operations" },
      { href: "/services#it-helpdesk", label: "IT Helpdesk" },
      { href: "/services#automation", label: "Process Automation" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Get in Touch" },
    ],
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.446 18.627 0.073 12 0.073S0 5.446 0 12.073C0 18.06 4.388 23.023 10.125 23.927v-8.385H7.078v-3.47h3.047V9.42c0-3.007 1.792-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875v2.253h3.328l-.532 3.47h-2.796v8.385C19.612 23.023 24 18.06 24 12.073z" />
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
  const pathname = usePathname();
  const isContact = pathname === "/contact";
  return (
    <footer
      className="relative overflow-hidden pt-2 pb-6 bg-[#F1F2F5] dark:bg-[#080B1C] transition-colors duration-300"
    >
      <div className="container-wide relative">
        <motion.div
          {...reveal(0)}
          className="relative rounded-[28px] overflow-hidden border border-navy/8 dark:border-white/10 bg-white dark:bg-[#12173a]"
          style={{
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.8) inset, 0 1px 2px rgba(15,19,48,0.03), 0 40px 90px -34px rgba(15,19,48,0.22)",
          }}
        >
          {/* subtle corner wash */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,87,34,0.06), transparent 70%)",
            }}
          />
          {/* faint arc lines top-right */}
          <span
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 w-[45%] h-full opacity-[0.5]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(15,19,48,0.02) 0 1px, transparent 1px 26px)",
              maskImage:
                "radial-gradient(120% 120% at 100% 0%, black, transparent 60%)",
              WebkitMaskImage:
                "radial-gradient(120% 120% at 100% 0%, black, transparent 60%)",
            }}
          />

          {/* ── Main grid ── */}
          <div className="relative px-8 lg:px-12 pt-9 lg:pt-10 pb-8">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mt-1">
              {/* Brand column */}
              <div className="lg:col-span-4 lg:pr-8">
                <Logo size="lg" />
                <p className="mt-2.5 text-[12.5px] tracking-[0.02em] text-navy/50 dark:text-ivory/80 font-medium">
                  {site.tagline}
                </p>
                <p className="mt-4 max-w-xs text-[15px] leading-[1.6] text-navy/60 dark:text-ivory/85">
                  We partner with ambitious businesses to build, scale, and
                  transform—through technology and trust.
                </p>

                {/* contact rows */}
                <div className="mt-5 space-y-3">
                  <a
                    href={site.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3"
                  >
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-navy/[0.04] text-orange shrink-0 group-hover:bg-orange group-hover:text-ivory transition-colors">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21c4-4 6-7 6-10a6 6 0 10-12 0c0 3 2 6 6 10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                        <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </span>
                    <p className="text-[15px] leading-[1.5] text-navy/75 dark:text-ivory/85 font-medium mt-1 group-hover:text-orange transition-colors">
                      {site.addressLine1},
                      <br />
                      {site.addressLine2}
                    </p>
                  </a>
                  <a href={site.phoneHref} className="group flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-navy/[0.04] text-orange shrink-0 group-hover:bg-orange group-hover:text-ivory transition-colors">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M6 4h2.6L10.6 8 8.4 9.6c1.4 2.5 3.5 4.6 6 6L16 13.4 20 15.4V18c0 .8-.7 1.5-1.5 1.5-8.6 0-15.5-6.9-15.5-15.5C3 3.7 3.7 3 4.5 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[13.5px] text-navy/75 dark:text-ivory/85 font-medium tabular-nums group-hover:text-orange transition-colors">
                      {site.phone}
                    </span>
                  </a>
                  <a href={site.emailHref} className="group flex items-center gap-3">
                    <span className="grid place-items-center w-9 h-9 rounded-full bg-navy/[0.04] text-orange shrink-0 group-hover:bg-orange group-hover:text-ivory transition-colors">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[13.5px] text-navy/75 dark:text-ivory/85 font-medium group-hover:text-orange transition-colors">
                      {site.email}
                    </span>
                  </a>
                </div>

                {/* socials */}
                <div className="mt-5 flex items-center gap-2.5">
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
                        className="grid place-items-center w-10 h-10 rounded-full bg-navy/[0.04] border border-navy/8 dark:border-white/10 text-navy/65 dark:text-ivory/75 hover:bg-orange hover:text-ivory hover:border-orange transition-all duration-300"
                      >
                        {s.icon}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-6">
                {columns.map((c, ci) => (
                  <motion.div key={c.title} {...reveal(0.08 + ci * 0.05)}>
                    <div className="text-[12px] uppercase tracking-[0.2em] text-navy dark:text-ivory font-bold">
                      {c.title}
                    </div>
                    <span aria-hidden className="mt-2.5 block w-7 h-[2px] bg-orange rounded-full" />
                    <ul className="mt-5 space-y-3">
                      {c.links.map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            className="group inline-flex items-center gap-1.5 text-[13.5px] text-navy/60 dark:text-ivory/90 hover:text-orange transition-colors font-medium"
                          >
                            <span className="block w-0 h-px bg-orange transition-all duration-500 ease-editorial group-hover:w-3" />
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
                {/* Made in Kolkata — one line; bottom on mobile, bottom-right on desktop */}
                <div className="col-span-2 sm:col-span-3 flex justify-start sm:justify-end mt-6 sm:mt-8">
                  <div className="flex items-center gap-2 whitespace-nowrap text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-navy/55 dark:text-ivory/70 font-bold">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-orange shrink-0">
                      <path d="M12 21c4-4 6-7 6-10a6 6 0 10-12 0c0 3 2 6 6 10z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                    Made in Kolkata, Est. 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA strip ── */}
          <div className="relative border-t border-navy/8 dark:border-white/10 px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-navy/[0.015]">
            <div className="flex items-center gap-4">
              <span className="grid place-items-center w-12 h-12 rounded-full bg-orange/10 text-orange shrink-0">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                  <path d="M6 4h2.6L10.6 8 8.4 9.6c1.4 2.5 3.5 4.6 6 6L16 13.4 20 15.4V18c0 .8-.7 1.5-1.5 1.5-8.6 0-15.5-6.9-15.5-15.5C3 3.7 3.7 3 4.5 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <div className="text-[12.5px] text-navy/55 dark:text-ivory/70 font-medium">
                  Ready to build something great together?
                </div>
                <div className="font-display text-[18px] sm:text-[20px] text-navy dark:text-ivory font-bold tracking-[-0.02em] leading-tight">
                  Let&apos;s create impact that lasts.
                </div>
              </div>
            </div>
            {!isContact && (
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-navy text-ivory pl-6 pr-6 py-3.5 text-[12.5px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 hover:bg-orange shrink-0"
                style={{ boxShadow: "0 14px 30px -14px rgba(15,19,48,0.5)" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-orange group-hover:text-ivory transition-colors group-hover:translate-x-0.5 duration-300">
                  <path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Book a Call
              </Link>
            )}
          </div>
        </motion.div>

        {/* ── Copyright bar ── */}
        <motion.div
          {...reveal(0)}
          className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 px-2"
        >
          <span className="text-[12.5px] text-navy/50 dark:text-ivory/65">
            © {new Date().getFullYear()} Urbanwiz Private Limited. All rights
            reserved.
          </span>
          <div className="flex items-center gap-4 text-[12.5px]">
            <Link href="/privacy" className="text-navy/55 dark:text-ivory/70 hover:text-orange transition-colors font-medium">
              Privacy Policy
            </Link>
            <span className="block w-px h-3 bg-navy/20" />
            <Link href="/terms" className="text-navy/55 dark:text-ivory/70 hover:text-orange transition-colors font-medium">
              Terms &amp; Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
