/**
 * ── Urbanwiz site config ──────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for every contact detail on the website.
 *
 * Every value here is read from a NEXT_PUBLIC_* environment variable
 * (see Frontend/.env) with a sensible fallback. Change a value in .env,
 * rebuild, and it updates EVERYWHERE across the site automatically.
 *
 * NOTE: these are used inside client components, so they MUST be prefixed
 * with NEXT_PUBLIC_ to be available in the browser.
 * ─────────────────────────────────────────────────────────────────────
 */

const env = process.env;

// Raw phone (with country code, spaces allowed) → used for display.
const phoneDisplay = env.NEXT_PUBLIC_BRAND_PHONE || "+91 90388 16866";
// Same number, digits only → used for tel: links.
const phoneTel = "+" + phoneDisplay.replace(/[^\d]/g, "");

export const site = {
  name: env.NEXT_PUBLIC_BRAND_NAME || "Urbanwiz",
  tagline: env.NEXT_PUBLIC_BRAND_TAGLINE || "People. Process. Progress.",

  // ── Email ──
  email: env.NEXT_PUBLIC_BRAND_EMAIL || "info@urbanwiz.co.in",
  emailHref: `mailto:${env.NEXT_PUBLIC_BRAND_EMAIL || "info@urbanwiz.co.in"}`,

  // ── Phone ──
  phone: phoneDisplay, // "+91 90388 16866"
  phoneHref: `tel:${phoneTel}`, // "tel:+919038816866"

  // ── Address ──
  addressLine1: env.NEXT_PUBLIC_BRAND_ADDRESS_LINE1 || "Ecospace Business Park",
  addressLine2:
    env.NEXT_PUBLIC_BRAND_ADDRESS_LINE2 || "New Town, Kolkata 700160",
  addressFull:
    env.NEXT_PUBLIC_BRAND_ADDRESS ||
    "Ecospace Business Park, Action Area II, New Town, Kolkata 700160",
  city: env.NEXT_PUBLIC_BRAND_CITY || "Kolkata",
  area: env.NEXT_PUBLIC_BRAND_AREA || "New Town",

  // ── Website / maps ──
  website: env.NEXT_PUBLIC_BRAND_WEBSITE || "https://urbanwiz.co.in",
  mapsLink:
    env.NEXT_PUBLIC_BRAND_MAPS_LINK ||
    "https://www.google.com/maps/place/Ecospace+Business+Park,+Action+Area+II,+Newtown,+Kolkata",

  // ── Backend API ──
  apiUrl: env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
} as const;

/** Convenience: a mailto with a prefilled subject. */
export const emailHrefWithSubject = (subject: string) =>
  `${site.emailHref}?subject=${encodeURIComponent(subject)}`;
