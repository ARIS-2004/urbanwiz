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

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (s: string) =>
    setSelected((v) => (v.includes(s) ? v.filter((x) => x !== s) : [...v, s]));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="relative rounded-3xl bg-ivory border border-navy/10 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,12px_18px_36px_-12px_rgba(15,19,48,0.18),-6px_-6px_20px_rgba(255,255,255,0.95)] overflow-hidden"
    >
      {/* Card header */}
      <div className="flex items-center justify-between gap-4 px-7 sm:px-9 pt-6 pb-5 border-b border-navy/8">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-orange/10 text-orange">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 4.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H6l-3 2.5V11H4c-1.1 0-2-.9-2-2v-4.5z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-orange font-semibold">
              New inquiry
            </div>
            <div className="mt-0.5 text-[12.5px] text-navy/55">
              Takes about a minute
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-navy/55">
          <span className="relative flex w-1.5 h-1.5">
            <span className="absolute inset-0 rounded-full bg-orange animate-ping opacity-70" />
            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-orange" />
          </span>
          <span className="uppercase tracking-[0.18em] font-medium">Live</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-7 sm:px-9 py-7 space-y-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
          <Field label="Name" name="name" placeholder="Your full name" />
          <Field
            label="Work email"
            name="email"
            type="email"
            placeholder="name@company.com"
          />
          <Field label="Company" name="company" placeholder="Your company" />
          <SelectField
            label="Team size"
            name="size"
            options={sizes}
            placeholder="Select range"
          />
        </div>

        <div>
          <label className="block text-[12px] uppercase tracking-[0.18em] text-navy/55 font-medium mb-4">
            Service of interest
          </label>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => {
              const on = selected.includes(s);
              return (
                <motion.button
                  key={s}
                  type="button"
                  onClick={() => toggle(s)}
                  whileTap={{ scale: 0.94 }}
                  whileHover={{ y: -1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className={`inline-flex h-10 items-center rounded-full px-4 text-[12.5px] tracking-tight transition-all duration-300 ${
                    on
                      ? "bg-navy text-ivory shadow-[4px_4px_10px_rgba(15,19,48,0.18),-3px_-3px_8px_rgba(255,255,255,0.9)]"
                      : "bg-ivory text-navy/75 shadow-[3px_3px_8px_rgba(15,19,48,0.06),-3px_-3px_8px_rgba(255,255,255,0.9)] hover:text-navy"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId={`chip-check-${s}`}
                      className="mr-2 inline-block"
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path
                          d="M2 6.5l2.5 2.5L10 3.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  )}
                  {s}
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="group">
          <label className="block text-[12px] uppercase tracking-[0.18em] text-navy/55 font-medium mb-3 group-focus-within:text-orange transition-colors duration-300">
            Tell us about the work
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="A few sentences on what you're trying to solve, your current setup, and a target timeline."
            className="w-full rounded-2xl bg-ivory px-5 py-4 text-[14.5px] text-navy placeholder:text-navy/35 shadow-[inset_4px_4px_10px_rgba(15,19,48,0.06),inset_-4px_-4px_10px_rgba(255,255,255,0.95)] focus:outline-none focus:ring-2 focus:ring-orange/40 transition-all duration-300 resize-none"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="px-7 sm:px-9 py-5 border-t border-navy/8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-white border border-navy/10 text-navy/55">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <rect
                x="3"
                y="7"
                width="10"
                height="7"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M5.5 7V5a2.5 2.5 0 015 0v2"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </span>
          <p className="text-[12.5px] text-navy/55 leading-snug">
            We reply within one business day.
            <br />
            Your details are never shared.
          </p>
        </div>
        <motion.button
          type="submit"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="group relative inline-flex h-12 items-center gap-3 rounded-xl bg-orange px-7 text-[14px] font-medium text-ivory hover:bg-orange-soft transition-colors self-start sm:self-auto shadow-[0_10px_24px_-10px_rgba(255,87,34,0.6)]"
        >
          <span>Send inquiry</span>
          <span className="relative w-3.5 h-3.5 overflow-hidden">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="absolute inset-0 transition-transform duration-500 ease-editorial group-hover:translate-x-5"
            >
              <path
                d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="absolute inset-0 -translate-x-5 transition-transform duration-500 ease-editorial group-hover:translate-x-0"
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
        </motion.button>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="px-7 sm:px-9 py-5 border-t border-navy/8 bg-orange/[0.04] flex items-center gap-3 text-[13.5px] text-navy/75"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 400 }}
              className="grid place-items-center w-7 h-7 rounded-full bg-orange text-ivory"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7.5l2.5 2.5L11 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
            <span>
              Thank you. Your inquiry is queued — we&apos;ll reply within one
              business day.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({
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
      <span className="block text-[12px] uppercase tracking-[0.18em] text-navy/55 font-medium mb-3 group-focus-within:text-orange transition-colors duration-300">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full h-[52px] rounded-2xl bg-ivory px-5 text-[14.5px] text-navy placeholder:text-navy/35 shadow-[inset_4px_4px_10px_rgba(15,19,48,0.06),inset_-4px_-4px_10px_rgba(255,255,255,0.95)] focus:outline-none focus:ring-2 focus:ring-orange/40 transition-all duration-300"
      />
    </label>
  );
}

function SelectField({
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
      <span className="block text-[12px] uppercase tracking-[0.18em] text-navy/55 font-medium mb-3 group-focus-within:text-orange transition-colors duration-300">
        {label}
      </span>
      <div className="relative">
        <select
          name={name}
          defaultValue=""
          required
          className="w-full h-[52px] rounded-2xl bg-ivory px-5 pr-12 text-[14.5px] text-navy shadow-[inset_4px_4px_10px_rgba(15,19,48,0.06),inset_-4px_-4px_10px_rgba(255,255,255,0.95)] focus:outline-none focus:ring-2 focus:ring-orange/40 transition-all duration-300 appearance-none"
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
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="absolute right-5 top-1/2 -translate-y-1/2 text-navy/45 pointer-events-none transition-transform duration-300 group-focus-within:rotate-180 group-focus-within:text-orange"
        >
          <path
            d="M3 5l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </label>
  );
}
