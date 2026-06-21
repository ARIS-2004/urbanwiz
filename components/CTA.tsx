"use client";

import Link from "next/link";
import { FadeUp } from "./Reveal";

export default function CTA() {
  return (
    <section className="pt-10 pb-12 bg-white border-b border-navy/8">
      <div className="container-content">
        <FadeUp>
          <div
            data-theme="dark"
            className="relative overflow-hidden rounded-2xl bg-navy text-ivory px-6 sm:px-8 py-7"
          >
            <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10 rounded-2xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="flex items-start md:items-center gap-4">
                <span className="hidden sm:block w-6 h-[2px] bg-orange mt-2 md:mt-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-orange font-semibold">
                    Ready when you are
                  </div>
                  <h2 className="mt-1.5 font-display text-[22px] sm:text-[26px] leading-tight tracking-tight">
                    Let&apos;s build something{" "}
                    <span className="text-orange">dependable.</span>
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 md:shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-orange px-5 text-[13px] font-medium text-ivory hover:bg-orange-soft transition-colors"
                >
                  Start a Conversation
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="tel:+919051234876"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-ivory/20 px-5 text-[13px] text-ivory hover:bg-ivory/10 transition-colors tabular-nums"
                >
                  +91 90512 34876
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
