"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const pathname = usePathname();
  // On the contact page the "Book a call" CTA would just link back here, so hide it.
  const isContact = pathname === "/contact";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease }}
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial py-3"
    >
      <div className="container-wide">
        <div
          className={`relative flex items-center justify-between rounded-[22px] h-[80px] pl-8 pr-4 transition-all duration-500 ease-editorial overflow-hidden dark:border-white/10 ${
            scrolled
              ? "bg-white/90 dark:bg-[#12173a]/90 backdrop-blur-xl border border-navy/10 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_20px_48px_-16px_rgba(15,19,48,0.26)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_20px_48px_-16px_rgba(0,0,0,0.5)]"
              : "bg-white/80 dark:bg-[#12173a]/80 backdrop-blur-xl border border-navy/10 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_16px_40px_-18px_rgba(15,19,48,0.22)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_16px_40px_-18px_rgba(0,0,0,0.45)]"
          }`}
        >
          {/* Faint orange gradient sheen on the right */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-[55%] opacity-60"
            style={{
              background:
                "linear-gradient(to left, rgba(255,87,34,0.07), rgba(255,87,34,0) 70%)",
            }}
          />
          {/* Top inset highlight for glass depth */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
            }}
          />

          {/* Left: Logo — favicon + wordmark.
              At top: favicon + wordmark side by side.
              On scroll: favicon collapses/hides and the wordmark slides into its place. */}
          <Link
            href="/"
            aria-label="Urbanwiz home"
            className="relative flex items-center select-none"
          >
            {/* Favicon icon — collapses away on scroll */}
            <motion.span
              aria-hidden
              animate={{
                width: scrolled ? 0 : 52,
                opacity: scrolled ? 0 : 1,
                marginRight: scrolled ? 0 : 12,
                scale: scrolled ? 0.7 : 1,
              }}
              transition={{ duration: 0.45, ease }}
              className="relative block h-[52px] shrink-0 overflow-hidden"
            >
              <Image
                src="/favicon.png"
                alt="Urbanwiz"
                width={52}
                height={52}
                priority
                className="h-[52px] w-[52px] object-contain"
              />
            </motion.span>

            {/* Wordmark — slides left into the favicon's spot on scroll */}
            <motion.span
              animate={{ x: 0 }}
              transition={{ duration: 0.45, ease }}
              className="relative block shrink-0"
            >
              <Image
                src="/textlogo.png"
                alt="Urbanwiz"
                width={160}
                height={60}
                priority
                className="h-9 sm:h-10 w-auto object-contain dark:brightness-0 dark:invert"
              />
            </motion.span>
          </Link>

          {/* Center: Nav links */}
          <nav className="relative hidden md:flex items-center gap-1.5">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`group relative px-5 py-2.5 text-[14.5px] transition-colors font-medium ${
                    active ? "text-orange" : "text-navy/70 hover:text-navy dark:text-ivory/70 dark:hover:text-ivory"
                  }`}
                >
                  <span className="relative z-10">{l.label}</span>
                  {/* active underline */}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-5 right-5 -bottom-0.5 h-[2px] rounded-full bg-orange"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* hover hairline (inactive) */}
                  {!active && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-5 right-5 -bottom-0.5 h-[2px] rounded-full bg-orange/50 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA */}
          <div className="relative hidden md:flex items-center gap-3.5">
            <span className="hidden xl:inline-flex text-[11px] uppercase tracking-[0.24em] text-navy/45 dark:text-ivory/45 font-semibold">
              Est. 2026
            </span>
            <ThemeToggle />
            {!isContact && (
              <>
                <span className="hidden xl:block w-px h-6 bg-navy/10" />
                <Link
                  href="/contact"
                  className="group relative inline-flex h-[56px] items-center gap-3 rounded-2xl bg-navy pl-7 pr-2.5 text-[14.5px] font-semibold text-ivory transition-colors hover:bg-blue-deep shadow-[0_14px_32px_-10px_rgba(15,19,48,0.6),inset_0_1px_0_rgba(255,255,255,0.12)]"
                >
                  <span>Book a call</span>
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-orange text-ivory transition-transform duration-300 group-hover:rotate-[-30deg]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6h7m0 0L6 3m3 3L6 9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile: theme toggle + menu */}
          <div className="relative md:hidden flex items-center gap-2.5">
            <ThemeToggle />
          <button
            className="relative h-10 w-10 rounded-full grid place-items-center bg-white/70 border border-navy/10 hover:bg-white transition shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] dark:bg-white/10 dark:border-white/15"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="relative block w-4 h-3">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-navy transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-px w-4 bg-navy transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-4 bg-navy transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease }}
            className="md:hidden container-wide mt-3"
          >
            <div className="rounded-3xl border border-navy/10 dark:border-white/10 bg-white/90 dark:bg-[#12173a]/95 backdrop-blur-xl p-3 shadow-[0_20px_40px_-20px_rgba(15,19,48,0.25)]">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3, ease }}
                >
                  <Link
                    href={l.href}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] transition-colors ${
                      pathname === l.href
                        ? "bg-navy/[0.06] text-navy font-medium dark:bg-white/10 dark:text-ivory"
                        : "text-navy/70 hover:bg-navy/[0.04] dark:text-ivory/70 dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`block w-1 h-1 rounded-full ${
                          pathname === l.href ? "bg-orange" : "bg-navy/20"
                        }`}
                      />
                      {l.label}
                    </span>
                    <span className="text-[10px] tabular-nums text-navy/35">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.div>
              ))}
              {!isContact && (
              <Link
                href="/contact"
                className="mt-2 flex items-center justify-between rounded-2xl bg-navy px-4 py-3.5 text-ivory text-[14px] font-medium"
              >
                Book a call
                <span className="grid place-items-center w-7 h-7 rounded-full bg-orange">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h7m0 0L6 3m3 3L6 9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
