// Shared options for the AI Logo Maker — used by both the page (client)
// and the /api/logo route (server). Keep this file free of browser/server-only APIs.

export const INDUSTRIES = [
  { id: "healthcare", label: "Healthcare & Clinic", prompt: "healthcare clinic" },
  { id: "aesthetics", label: "Beauty & Aesthetics", prompt: "beauty and aesthetics studio" },
  { id: "food", label: "Restaurant & Café", prompt: "restaurant and café" },
  { id: "realestate", label: "Real Estate & Construction", prompt: "real estate and construction company" },
  { id: "tech", label: "Tech & SaaS", prompt: "technology and software company" },
  { id: "education", label: "Education & Coaching", prompt: "education and coaching centre" },
  { id: "fashion", label: "Fashion & Retail", prompt: "fashion and retail brand" },
  { id: "fitness", label: "Fitness & Wellness", prompt: "fitness and wellness studio" },
  { id: "finance", label: "Finance & Consulting", prompt: "finance and consulting firm" },
  { id: "organic", label: "Agriculture & Organic", prompt: "agriculture and organic produce brand" },
  { id: "pets", label: "Pets & Veterinary", prompt: "pet care and veterinary clinic" },
  { id: "travel", label: "Travel & Hospitality", prompt: "travel and hospitality brand" },
  { id: "creative", label: "Media & Creative", prompt: "creative media studio" },
  { id: "other", label: "Something else", prompt: "modern business" },
] as const;

export type IndustryId = (typeof INDUSTRIES)[number]["id"];

export const FONTS = [
  { id: "manrope", label: "Manrope", file: "/fonts/logo/manrope-700.woff", weight: 700 },
  { id: "cormorant", label: "Cormorant", file: "/fonts/logo/cormorant-garamond-600.woff", weight: 600 },
  { id: "fredoka", label: "Fredoka", file: "/fonts/logo/fredoka-600.woff", weight: 600 },
  { id: "space-grotesk", label: "Grotesk", file: "/fonts/logo/space-grotesk-700.woff", weight: 700 },
  { id: "fraunces", label: "Fraunces", file: "/fonts/logo/fraunces-600.woff", weight: 600 },
  { id: "lora", label: "Lora", file: "/fonts/logo/lora-600.woff", weight: 600 },
] as const;

export type FontId = (typeof FONTS)[number]["id"];

export const STYLES = [
  {
    id: "minimal",
    label: "Minimal",
    hint: "Clean & geometric",
    prompt: "ultra-minimal geometric mark built from a few simple lines and circles, Swiss modernist",
    font: "manrope",
    uppercase: false,
  },
  {
    id: "luxury",
    label: "Luxury",
    hint: "Refined & elegant",
    prompt: "elegant refined emblem with graceful balanced curves, high-end boutique feel",
    font: "cormorant",
    uppercase: true,
  },
  {
    id: "playful",
    label: "Playful",
    hint: "Friendly & rounded",
    prompt: "friendly mascot-like rounded shapes with soft cheerful curves",
    font: "fredoka",
    uppercase: false,
  },
  {
    id: "bold",
    label: "Bold",
    hint: "Strong & modern",
    prompt: "strong heavy chunky geometric shapes, confident and modern",
    font: "space-grotesk",
    uppercase: true,
  },
  {
    id: "organic",
    label: "Organic",
    hint: "Natural & crafted",
    prompt: "natural organic flowing forms inspired by leaves and hand-drawn curves",
    font: "fraunces",
    uppercase: false,
  },
] as const satisfies ReadonlyArray<{
  id: string;
  label: string;
  hint: string;
  prompt: string;
  font: FontId;
  uppercase: boolean;
}>;

export type StyleId = (typeof STYLES)[number]["id"];

export const PALETTE = [
  { id: "forest", label: "Forest", hex: "#2D6B2D" },
  { id: "ember", label: "Ember", hex: "#E8641A" },
  { id: "ink", label: "Ink", hex: "#1A1A1A" },
  { id: "navy", label: "Navy", hex: "#1E3A5F" },
  { id: "teal", label: "Teal", hex: "#0F766E" },
  { id: "plum", label: "Plum", hex: "#6D2E5B" },
  { id: "gold", label: "Gold", hex: "#A67C2E" },
  { id: "crimson", label: "Crimson", hex: "#B3261E" },
] as const;

/** Each generation asks the AI for one symbol per hint, so the 4 results differ. */
export const VARIANT_HINTS = [
  "an abstract geometric interpretation",
  "a simple pictorial icon",
  "a line-art outline symbol with one uniform stroke weight",
  "a clever negative-space design",
] as const;

export const LIMITS = { name: 30, tagline: 40, idea: 60 } as const;

/** Latin letters (incl. accents), digits and a few safe punctuation marks — matches the bundled fonts. */
export const TEXT_PATTERN = /^[A-Za-z0-9À-ÖØ-öø-ÿ &'’.,!?+\-]*$/;
/** Symbol idea: plain words only. */
export const IDEA_PATTERN = /^[A-Za-z0-9À-ÖØ-öø-ÿ ,'’\-]*$/;

export function isIndustryId(v: unknown): v is IndustryId {
  return typeof v === "string" && INDUSTRIES.some((i) => i.id === v);
}

export function isStyleId(v: unknown): v is StyleId {
  return typeof v === "string" && STYLES.some((s) => s.id === v);
}

export function getStyle(id: StyleId) {
  return STYLES.find((s) => s.id === id) ?? STYLES[0];
}

export function getIndustry(id: IndustryId) {
  return INDUSTRIES.find((i) => i.id === id) ?? INDUSTRIES[INDUSTRIES.length - 1];
}
