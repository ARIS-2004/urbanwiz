import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import { FadeUp } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — UrbanWizz",
  description:
    "Speak with UrbanWizz about customer support, finance operations and IT-enabled services. We reply within one business day.",
};

const directLines = [
  {
    label: "General inquiries",
    value: "hello@urbanwizz.com",
    href: "mailto:hello@urbanwizz.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M3 5l5 3.5L13 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Partnerships",
    value: "partners@urbanwizz.com",
    href: "mailto:partners@urbanwizz.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M3 13c0-2.2 2.2-4 5-4s5 1.8 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Careers",
    value: "careers@urbanwizz.com",
    href: "mailto:careers@urbanwizz.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="5" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 5V4a1 1 0 011-1h2a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 90512 34876",
    href: "tel:+919051234876",
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path
          d="M4 3h1.8L7 6 5.5 7c.9 1.7 2.3 3.1 4 4L10.5 9.5 13.5 11V13c0 .55-.45 1-1 1-5.8 0-10.5-4.7-10.5-10.5 0-.55.45-1 1-1z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* Form section */}
      <section id="form" className="pt-8 lg:pt-10 pb-12 lg:pb-14 bg-ivory">
        <div className="container-content">
          <FadeUp>
            <div className="max-w-3xl mb-8 lg:mb-10">
              <div className="flex items-center gap-3">
                <span className="block w-7 h-[2px] bg-orange" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-orange font-semibold">
                  Send us a message
                </span>
              </div>
              <h2 className="mt-4 font-display text-[32px] sm:text-[40px] tracking-tight leading-[1.08] text-navy font-semibold">
                We believe important conversations should{" "}
                <span className="text-orange">remain human.</span>
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10">
            <aside className="lg:col-span-4">
              <FadeUp>
                <div className="flex items-center gap-3">
                  <span className="block w-6 h-[2px] bg-orange" />
                  <span className="text-[10.5px] uppercase tracking-[0.26em] text-orange font-semibold">
                    Direct lines
                  </span>
                </div>
                <h2 className="mt-3 font-display text-[22px] tracking-tight text-navy leading-tight font-semibold">
                  Reach the right team within one business day.
                </h2>
              </FadeUp>

              <ul className="mt-6 rounded-2xl bg-white border border-navy/8 overflow-hidden divide-y divide-navy/8">
                {directLines.map((d, i) => (
                  <FadeUp key={d.label} delay={0.05 * i}>
                    <li>
                      <a
                        href={d.href}
                        className="group relative flex items-center gap-4 px-5 py-4 transition-colors duration-500 hover:bg-ivory/60"
                      >
                        <span className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-ivory text-navy/60 transition-all duration-500 ease-editorial group-hover:bg-orange group-hover:text-ivory">
                          {d.icon}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[10.5px] uppercase tracking-[0.18em] text-navy/45 font-medium">
                            {d.label}
                          </span>
                          <span className="mt-0.5 block text-[14px] text-navy group-hover:text-orange transition-colors duration-500 font-medium">
                            {d.value}
                          </span>
                        </span>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="shrink-0 text-navy/30 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-orange transition-all duration-500 ease-editorial"
                        >
                          <path
                            d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </li>
                  </FadeUp>
                ))}
              </ul>

              <FadeUp delay={0.15}>
                <div
                  data-theme="dark"
                  className="mt-6 relative overflow-hidden rounded-2xl bg-navy text-ivory p-6"
                >
                  <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10 rounded-2xl pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="block w-6 h-[2px] bg-orange" />
                      <span className="text-[10.5px] uppercase tracking-[0.22em] text-orange font-semibold">
                        Discovery call
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-[22px] tracking-tight leading-[1.15] font-semibold">
                      A focused thirty minutes,{" "}
                      <span className="text-orange">on us.</span>
                    </h3>

                    <p className="mt-3 text-[13px] text-ivory/65 leading-[1.65]">
                      An honest conversation about where your operations
                      stand today — and what a calmer next quarter could
                      look like.
                    </p>

                    <ul className="mt-5 space-y-2">
                      {[
                        "Senior operator on the call",
                        "No decks, no scripts",
                        "Walk away with one usable insight",
                      ].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[12.5px] text-ivory/80"
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="shrink-0 mt-[3px] text-orange"
                          >
                            <path
                              d="M3 7.5L6 10.5L11.5 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-ivory/12 flex items-center justify-between gap-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/50 font-medium">
                        Mon–Fri · IST
                      </div>
                      <a
                        href="#form"
                        className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-ivory hover:text-orange transition-colors"
                      >
                        Book the slot
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
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </aside>

            <div className="lg:col-span-8">
              <FadeUp>
                <ContactForm />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="border-t border-navy/8 py-12 lg:py-16 bg-white">
        <div className="container-content">
          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-start">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3">
                  <span className="block w-7 h-[2px] bg-orange" />
                  <span className="text-[11px] uppercase tracking-[0.26em] text-orange font-semibold">
                    What happens next
                  </span>
                </div>
                <h2 className="mt-5 font-display text-[36px] sm:text-[48px] xl:text-[56px] tracking-tight leading-[1.05] text-navy font-semibold">
                  A straightforward path{" "}
                  <span className="text-orange">forward.</span>
                </h2>
              </div>
              <p className="lg:col-span-4 lg:pt-5 text-[13.5px] leading-[1.65] text-navy/55 max-w-xs lg:ml-auto lg:text-right">
                Three simple steps. No runarounds. Just real conversations
                that move your business ahead.
              </p>
            </div>
          </FadeUp>

          <div className="relative pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {nextSteps.map((s, i) => (
                <FadeUp key={s.title} delay={i * 0.1}>
                  <div className="relative group">
                    {/* Floating chevron arrow between cards */}
                    {i < nextSteps.length - 1 && (
                      <>
                        {/* Dashed connector line on the right edge */}
                        <div
                          aria-hidden
                          className="hidden md:block absolute -right-8 lg:-right-10 top-1/2 -translate-y-1/2 w-8 lg:w-10 z-0"
                          style={{
                            borderTop: "1.5px dashed rgba(255,87,34,0.35)",
                          }}
                        />
                        <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-9 h-9 rounded-full bg-white shadow-[0_4px_12px_-2px_rgba(15,19,48,0.1)] text-orange">
                          <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                            <path
                              d="M4 2.5L9.5 7L4 11.5"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </>
                    )}

                    {/* Numbered chip floating above card */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-10">
                      <div className="grid place-items-center w-11 h-11 rounded-full bg-orange text-ivory font-display text-[12px] font-semibold tabular-nums shadow-[0_10px_24px_-6px_rgba(255,87,34,0.55)] ring-[5px] ring-white transition-transform duration-500 group-hover:scale-110">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Card */}
                    <article className="relative overflow-hidden h-full rounded-3xl bg-white border border-navy/8 pt-10 px-8 pb-0 shadow-[0_2px_4px_rgba(15,19,48,0.03),0_20px_40px_-20px_rgba(15,19,48,0.1)] transition-all duration-500 ease-editorial hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(15,19,48,0.03),0_30px_50px_-20px_rgba(15,19,48,0.16)] hover:border-navy/15">
                      {/* Soft tinted icon circle */}
                      <span className="grid place-items-center w-14 h-14 rounded-full bg-orange/10 text-orange transition-all duration-500 group-hover:bg-orange group-hover:text-ivory group-hover:shadow-[0_8px_20px_-4px_rgba(255,87,34,0.45)]">
                        {s.icon}
                      </span>

                      <h3 className="mt-6 font-display text-[24px] tracking-tight text-navy leading-[1.1] font-semibold">
                        {s.title}
                      </h3>

                      {/* Orange underline accent */}
                      <span className="mt-3 block w-9 h-[2px] bg-orange rounded-full" />

                      <p className="mt-4 text-[13.5px] text-navy/60 leading-[1.7] pb-8 max-w-[260px]">
                        {s.body}
                      </p>

                      {/* Meta footer */}
                      <div className="-mx-8 px-8 pt-5 pb-6 border-t border-navy/8 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2.5">
                          <span className="text-orange shrink-0">{s.metaIcon}</span>
                          <span className="text-[10.5px] uppercase tracking-[0.22em] text-navy font-semibold">
                            {s.meta}
                          </span>
                        </div>
                        <span className="text-[10.5px] tracking-[0.18em] text-navy/35 tabular-nums font-medium">
                          0{i + 1}/03
                        </span>
                      </div>

                      {/* Bottom orange hairline */}
                      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange/30 group-hover:bg-orange transition-colors duration-500" />
                    </article>
                  </div>
                </FadeUp>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

const nextSteps = [
  {
    title: "Share",
    body: "Send a note via the form or call directly. Tell us about the business and the friction you're feeling.",
    meta: "Today",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 3L10.5 13.5M21 3L14 21L10.5 13.5M21 3L3 10L10.5 13.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    metaIcon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3.5" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 6.5h12M5.5 2v3M10.5 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Respond",
    body: "A senior member of our team reads your message and reaches out personally — not a templated reply.",
    meta: "Within 24 hours",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6a2 2 0 012-2h9a2 2 0 012 2v7a2 2 0 01-2 2h-4l-4 3v-3H6a2 2 0 01-2-2V6z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 19a2 2 0 002 2h5l3 3v-3h1a2 2 0 002-2v-5a2 2 0 00-2-2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
    metaIcon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Connect",
    body: "A thirty-minute conversation about your operations and goals. No decks, no scripts, no commitment.",
    meta: "On your schedule",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4.5 20c0-3.5 3.5-6 7.5-6s7.5 2.5 7.5 6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    metaIcon: (
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3.5" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 6.5h12M5.5 2v3M10.5 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];
