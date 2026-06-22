import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactQuote from "@/components/ContactQuote";
import { FadeUp } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Urbanwiz",
  description:
    "Speak with Urbanwiz about customer support, finance operations and IT-enabled services. We reply within one business day.",
};

const commitments = [
  {
    title: "One real reply",
    body: "From a senior partner. Never a chatbot, never a template.",
  },
  {
    title: "One business day",
    body: "Most inquiries hear back within four hours of landing.",
  },
  {
    title: "One clear next step",
    body: "Either a call, a written scope, or a polite no — never silence.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />

      {/* Form section */}
      <section id="form" className="relative bg-ivory overflow-hidden">
        {/* Layered ambient washes */}
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-[440px] h-[440px] rounded-full pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,87,34,0.07), rgba(255,87,34,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 w-[460px] h-[460px] rounded-full pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(closest-side, rgba(30,58,186,0.06), rgba(30,58,186,0) 70%)",
          }}
        />

        <div className="container-content relative py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
            {/* Aside */}
            <aside className="lg:col-span-5 relative">
              {/* Editorial number watermark */}
              <div
                aria-hidden
                className="absolute -top-8 -left-2 font-display text-[150px] sm:text-[200px] leading-none font-bold text-navy/[0.04] tracking-[-0.03em] pointer-events-none select-none"
              >
                01
              </div>

              <div className="relative">
                <FadeUp>
                  <div className="flex items-center gap-3">
                    <span className="block w-7 h-[2px] bg-orange" />
                    <span className="text-[11px] uppercase tracking-[0.26em] text-orange font-semibold">
                      Send us a message
                    </span>
                    <span
                      className="hidden sm:block flex-1 max-w-[140px] h-[1.5px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,87,34,0.55), rgba(30,58,186,0.4) 60%, transparent)",
                      }}
                    />
                  </div>
                </FadeUp>

                <FadeUp delay={0.05}>
                  <h2 className="mt-5 font-display text-[40px] sm:text-[48px] xl:text-[56px] tracking-[-0.025em] leading-[1.0] text-navy font-bold">
                    Tell us about
                    <br />
                    your{" "}
                    <span className="text-orange">business.</span>
                  </h2>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <p className="mt-6 max-w-md text-[14px] leading-[1.7] text-navy/55">
                    A senior partner reads every inquiry. Share what
                    you&apos;re trying to solve and the friction you&apos;re
                    feeling — a real reply lands within one business day.
                  </p>
                </FadeUp>

                {/* Commitments — neumorphic raised cards */}
                <FadeUp delay={0.18}>
                  <ul className="mt-10 space-y-4">
                    {commitments.map((c, i) => (
                      <li
                        key={c.title}
                        className="group relative rounded-2xl bg-ivory px-5 py-4 transition-all duration-500 ease-editorial hover:-translate-y-0.5"
                        style={{
                          boxShadow:
                            "8px 8px 20px rgba(15,19,48,0.08), -8px -8px 20px rgba(255,255,255,0.95), inset 0 1px 0 rgba(255,255,255,0.8)",
                        }}
                      >
                        <div className="flex items-start gap-4">
                          {/* Neumorphic number tile */}
                          <span
                            className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-ivory text-navy font-display text-[13px] font-bold tabular-nums group-hover:text-orange transition-colors duration-500"
                            style={{
                              boxShadow:
                                "4px 4px 10px rgba(15,19,48,0.08), -3px -3px 8px rgba(255,255,255,0.95), inset 0 1px 0 rgba(255,255,255,0.6)",
                            }}
                          >
                            0{i + 1}
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="text-[13.5px] font-semibold text-navy leading-tight group-hover:text-orange transition-colors duration-300">
                              {c.title}
                            </div>
                            <div className="mt-1 text-[12.5px] text-navy/55 leading-snug">
                              {c.body}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </FadeUp>

              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-7">
              <FadeUp>
                <ContactForm />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <ContactQuote />
    </>
  );
}
