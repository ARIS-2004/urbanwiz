"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Wraps a single service block. When the page URL hash matches this block's
 * id (e.g. arriving from a footer link like /services#finance), it scrolls
 * the block into view and plays a "pop + glow" highlight to draw the eye.
 */
export default function ServiceHighlight({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    const highlight = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash.replace("#", "");
      if (hash !== id) return;

      const el = ref.current;
      if (!el) return;

      // Scroll into view (respects scroll-mt on the element for navbar offset).
      el.scrollIntoView({ behavior: "smooth", block: "center" });

      // Pop + glow highlight sequence.
      controls.start({
        scale: [1, 1.025, 1],
        boxShadow: [
          "0 1px 2px rgba(15,19,48,0.03), 0 18px 40px -22px rgba(15,19,48,0.16)",
          "0 0 0 3px rgba(255,87,34,0.35), 0 30px 70px -20px rgba(255,87,34,0.35)",
          "0 0 0 0px rgba(255,87,34,0.0), 0 18px 40px -22px rgba(15,19,48,0.16)",
        ],
        transition: { duration: 1.5, ease, times: [0, 0.3, 1] },
      });
    };

    // Run on mount (deep link) and whenever the hash changes.
    // Small delay on mount so layout/scroll settles first.
    const t = setTimeout(highlight, 350);
    window.addEventListener("hashchange", highlight);
    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", highlight);
    };
  }, [id, controls]);

  return (
    <motion.div ref={ref} animate={controls} className="rounded-3xl">
      {children}
    </motion.div>
  );
}
