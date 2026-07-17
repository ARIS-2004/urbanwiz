/**
 * ── Urbanwiz site config ──────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for every contact detail on the website.
 *
 * Every value here is read from a NEXT_PUBLIC_* environment variable
 * (see Frontend/.env) with a sensible fallback. Change a value in .env,
 * rebuild, and it updates EVERYWHERE across the site automatically.
 *
 * IMPORTANT: each NEXT_PUBLIC_* var must be referenced as a *direct literal*
 * `process.env.NEXT_PUBLIC_X` so Next.js can inline it into the browser
 * bundle at build time. Do NOT alias `process.env` to a variable — that
 * breaks the inlining and throws "process is not defined" in the browser.
 * ─────────────────────────────────────────────────────────────────────
 */

// Raw phone (with country code, spaces allowed) → used for display.
const phoneDisplay = process.env.NEXT_PUBLIC_BRAND_PHONE || "+91 90388 16866";
// Same number, digits only → used for tel: links.
const phoneTel = "+" + phoneDisplay.replace(/[^\d]/g, "");

const email = process.env.NEXT_PUBLIC_BRAND_EMAIL || "info@urbanwiz.co.in";

export const site = {
  name: process.env.NEXT_PUBLIC_BRAND_NAME || "Urbanwiz",
  tagline: process.env.NEXT_PUBLIC_BRAND_TAGLINE || "People. Process. Progress.",

  // ── Email ──
  email,
  emailHref: `mailto:${email}`,

  // ── Phone ──
  phone: phoneDisplay, // "+91 90388 16866"
  phoneHref: `tel:${phoneTel}`, // "tel:+919038816866"

  // ── Address ──
  addressLine1:
    process.env.NEXT_PUBLIC_BRAND_ADDRESS_LINE1 || "Ecospace Business Towers",
  addressLine2:
    process.env.NEXT_PUBLIC_BRAND_ADDRESS_LINE2 || "New Town, Kolkata 700160",
  addressFull:
    process.env.NEXT_PUBLIC_BRAND_ADDRESS ||
    "Ecospace Business Towers, Action Area II, New Town, Kolkata 700160",
  city: process.env.NEXT_PUBLIC_BRAND_CITY || "Kolkata",
  area: process.env.NEXT_PUBLIC_BRAND_AREA || "New Town",

  // ── Website / maps ──
  website: process.env.NEXT_PUBLIC_BRAND_WEBSITE || "https://urbanwiz.co.in",
  mapsLink:
    process.env.NEXT_PUBLIC_BRAND_MAPS_LINK ||
    "https://www.google.com/maps/place/Ecospace+Business+Towers/@22.5867522,88.4848413,610m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a0277191d72d203:0xe185009156f2d3eb!8m2!3d22.5867522!4d88.4874162!16s%2Fg%2F11sfq7mftj",

  // ── Backend API ──
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
} as const;

/** Convenience: a mailto with a prefilled subject. */
export const emailHrefWithSubject = (subject: string) =>
  `${site.emailHref}?subject=${encodeURIComponent(subject)}`;
