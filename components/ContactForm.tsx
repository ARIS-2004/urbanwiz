"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  "Customer Support",
  "Virtual Assistance",
  "Finance Operations",
  "Back Office",
  "IT Helpdesk",
  "Process Automation",
  "Other",
];

const sizes = ["1 — 10", "10 — 50", "50 — 200", "200 — 1000", "1000+"];

const raisedShadow =
  "16px 16px 36px rgba(15,19,48,0.10), -12px -12px 28px rgba(255,255,255,0.95), inset 0 1px 0 rgba(255,255,255,0.8)";

const insetShadow =
  "inset 4px 4px 10px rgba(15,19,48,0.07), inset -4px -4px 10px rgba(255,255,255,0.95)";

const insetFocusShadow =
  "inset 5px 5px 12px rgba(15,19,48,0.10), inset -5px -5px 12px rgba(255,255,255,0.95)";

const tileRaised =
  "6px 6px 14px rgba(15,19,48,0.10), -4px -4px 10px rgba(255,255,255,0.95), inset 0 1px 0 rgba(255,255,255,0.6)";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="relative rounded-3xl bg-ivory overflow-hidden"
      style={{ boxShadow: raisedShadow }}
    >
      {/* Colored gradient top strip */}
      <span
        aria-hidden
        className="absolute top-0 inset-x-0 h-1 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #FF5722 0%, #FF5722 40%, #1E3ABA 60%, #1E3ABA 100%)",
        }}
      />

      {/* Card header */}
      <div className="relative flex items-center justify-between gap-4 px-4 sm:px-9 py-5 sm:py-6">
        {/* Faint dot grid */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(rgba(15,19,48,0.04) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
            maskImage:
              "linear-gradient(to right, transparent, black 60%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 60%, transparent)",
          }}
        />

        <div className="relative flex items-center gap-3.5">
          {/* Neumorphic icon tile */}
          <span
            className="relative grid place-items-center w-11 h-11 rounded-xl bg-ivory text-orange"
            style={{ boxShadow: tileRaised }}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 4.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H6l-3 2.5V11H4c-1.1 0-2-.9-2-2v-4.5z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            {/* Active indicator ping */}
            <span className="absolute -top-1 -right-1 flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-orange animate-ping opacity-70" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-orange ring-2 ring-ivory" />
            </span>
          </span>
          <div>
            <div className="text-[10.5px] uppercase tracking-[0.24em] text-orange font-semibold">
              Inquiry form
            </div>
            <div className="text-[12px] text-navy/55 mt-1">
              Takes about a minute. Read by a senior partner.
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-9 pb-6 sm:pb-7 space-y-6 sm:space-y-8">
        {/* Section: About you */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-[1.5px] bg-orange rounded-full" />
            <span className="text-[10px] uppercase tracking-[0.26em] text-orange font-semibold">
              About you
            </span>
            <span className="flex-1 h-px bg-navy/8" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6">
            <NeuField label="Full name" name="name" placeholder="Your full name" />
            <NeuField
              label="Work email"
              name="email"
              type="email"
              placeholder="name@company.com"
            />
            <NeuField label="Company name" name="company" placeholder="Your company" />
            <NeuSelect
              label="Team size"
              name="size"
              options={sizes}
              placeholder="Select range"
            />
          </div>
        </div>

        {/* Section: About the work */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-5 h-[1.5px] bg-orange rounded-full" />
            <span className="text-[10px] uppercase tracking-[0.26em] text-orange font-semibold">
              About the work
            </span>
            <span className="flex-1 h-px bg-navy/8" />
          </div>
          <div className="space-y-6">
            <NeuSelect
              label="What are you looking for?"
              name="service"
              options={services}
              placeholder="Choose a service"
            />

            <NeuTextarea
              label="Tell us about the work"
              name="message"
              placeholder="A few sentences on what you're trying to solve, your current setup, and a target timeline."
            />
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="relative flex justify-center sm:justify-end px-4 sm:px-9 py-5 sm:py-6 mt-2">
        {/* Inset divider */}
        <span
          aria-hidden
          className="absolute top-0 left-4 right-4 sm:left-9 sm:right-9 h-px bg-navy/8"
        />

        {/* Neumorphic raised submit button */}
        <motion.button
          type="submit"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97, y: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="group relative inline-flex h-14 items-center gap-3 rounded-2xl bg-ivory pl-6 pr-2 text-[12px] uppercase tracking-[0.2em] font-semibold text-navy self-start sm:self-auto"
          style={{
            boxShadow:
              "10px 10px 24px rgba(15,19,48,0.12), -8px -8px 20px rgba(255,255,255,0.95), inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          <span className="relative">Send inquiry</span>
          {/* Orange action chip */}
          <span
            className="relative grid place-items-center w-10 h-10 rounded-xl bg-orange text-ivory transition-transform duration-500 group-hover:rotate-[-35deg] group-hover:scale-110"
            style={{
              boxShadow:
                "4px 4px 10px rgba(255,87,34,0.40), -2px -2px 6px rgba(255,255,255,0.4), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.button>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 sm:px-9 py-5 flex items-center gap-3 text-[13px] text-navy/80 mx-6 sm:mx-9 mb-6 rounded-2xl bg-orange/[0.06]"
            style={{ boxShadow: insetShadow }}
          >
            <span className="grid place-items-center w-7 h-7 rounded-full bg-orange text-ivory shrink-0">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7.5l2.5 2.5L11 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>
              Thank you. Your inquiry is queued — a senior partner will reply
              within one business day.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function NeuField({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block group">
      <span className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-navy/55 font-semibold mb-2.5 group-focus-within:text-orange transition-colors duration-300">
        <span
          aria-hidden
          className="block w-1 h-1 rounded-full bg-navy/25 group-focus-within:bg-orange transition-colors duration-300"
        />
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full h-12 rounded-xl bg-ivory px-4 text-[14.5px] text-navy placeholder:text-navy/30 focus:outline-none transition-all duration-300"
        style={{ boxShadow: insetShadow }}
        onFocus={(e) => (e.currentTarget.style.boxShadow = insetFocusShadow)}
        onBlur={(e) => (e.currentTarget.style.boxShadow = insetShadow)}
      />
    </label>
  );
}

function NeuSelect({
  label,
  name,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <label className="block group">
      <span className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-navy/55 font-semibold mb-2.5 group-focus-within:text-orange transition-colors duration-300">
        <span
          aria-hidden
          className="block w-1 h-1 rounded-full bg-navy/25 group-focus-within:bg-orange transition-colors duration-300"
        />
        {label}
      </span>
      <div className="relative">
        <select
          name={name}
          defaultValue=""
          required
          className="w-full h-12 rounded-xl bg-ivory pl-4 pr-12 text-[14.5px] text-navy focus:outline-none transition-all duration-300 appearance-none"
          style={{ boxShadow: insetShadow }}
          onFocus={(e) => (e.currentTarget.style.boxShadow = insetFocusShadow)}
          onBlur={(e) => (e.currentTarget.style.boxShadow = insetShadow)}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 grid place-items-center w-7 h-7 rounded-lg bg-ivory text-navy/55 group-focus-within:text-orange transition-colors pointer-events-none"
          style={{ boxShadow: tileRaised }}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300 group-focus-within:rotate-180"
          >
            <path
              d="M3 5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </label>
  );
}

function NeuTextarea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="block group">
      <span className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-navy/55 font-semibold mb-2.5 group-focus-within:text-orange transition-colors duration-300">
        <span
          aria-hidden
          className="block w-1 h-1 rounded-full bg-navy/25 group-focus-within:bg-orange transition-colors duration-300"
        />
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        required
        placeholder={placeholder}
        className="w-full rounded-xl bg-ivory px-4 py-3.5 text-[14.5px] text-navy placeholder:text-navy/30 focus:outline-none transition-all duration-300 resize-none"
        style={{ boxShadow: insetShadow }}
        onFocus={(e) => (e.currentTarget.style.boxShadow = insetFocusShadow)}
        onBlur={(e) => (e.currentTarget.style.boxShadow = insetShadow)}
      />
    </label>
  );
}
