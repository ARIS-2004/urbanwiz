"use client";

import { FadeUp, Stagger, StaggerItem } from "./Reveal";

const values = [
  { label: "24×7 Support", sublabel: "Around the clock" },
  { label: "Human + AI", sublabel: "Workflows" },
  { label: "Multilingual", sublabel: "Operations" },
  { label: "Customer-First", sublabel: "Approach" },
];

export default function TrustStrip() {
  return (
    <section className="bg-ivory border-y border-navy/8 py-10">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <FadeUp>
              <p className="font-display text-[19px] sm:text-[22px] tracking-tight leading-[1.25] text-navy font-semibold">
                Built in Kolkata.{" "}
                <span className="text-orange">Supporting businesses</span>{" "}
                across India and beyond.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <Stagger gap={0.08} className="grid grid-cols-2 sm:grid-cols-4">
              {values.map((v, i) => (
                <StaggerItem
                  key={v.label}
                  className={i > 0 ? "sm:border-l sm:border-navy/10 sm:pl-6" : ""}
                >
                  <div>
                    <div className="text-[12.5px] uppercase tracking-[0.14em] text-navy font-semibold leading-tight">
                      {v.label}
                    </div>
                    <div className="mt-1 text-[12px] text-navy/45">
                      {v.sublabel}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
