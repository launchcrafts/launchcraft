export interface Document {
  slug: string;
  title: string;
  description: string;
  category: string;
  file: string; // path inside /public/documents/
  fileSize: string; // e.g. "2.4 MB"
  fileType: string; // e.g. "PDF", "DOCX"
  date: string; // YYYY-MM-DD
}

export const CATEGORIES = [
  "All",
  "Guides",
  "Templates",
  "Reports",
  "Checklists",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const documents: Document[] = [
  // Add documents here. Example:
  // {
  //   slug: "website-launch-checklist",
  //   title: "Website Launch Checklist",
  //   description: "A step-by-step checklist to make sure your website is ready before going live.",
  //   category: "Checklists",
  //   file: "/documents/website-launch-checklist.pdf",
  //   fileSize: "180 KB",
  //   fileType: "PDF",
  //   date: "2026-11-10",
  // },
];
