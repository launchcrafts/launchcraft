import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { allowLead, clientIp } from "@/lib/logo-maker/server";

const LEAD_INBOX = process.env.LEAD_EMAIL_TO || "launchcrafts.in@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,19}$/;

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/**
 * Captures a lead when a visitor unlocks a logo download.
 * Emails the agency inbox with the visitor's details and the logo they chose.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 60);
  const email = clean(body.email, 120);
  const whatsapp = clean(body.whatsapp, 20);
  const business = clean(body.business, 40);
  const tagline = clean(body.tagline, 60);
  const industry = clean(body.industry, 60);
  const style = clean(body.style, 30);
  const svg = typeof body.svg === "string" && body.svg.startsWith("<svg") && body.svg.length < 400_000 ? body.svg : "";

  if (!name) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  if (whatsapp && !PHONE_RE.test(whatsapp)) {
    return NextResponse.json({ error: "Please enter a valid WhatsApp number." }, { status: 400 });
  }

  if (!allowLead(clientIp(req))) {
    // Still let them download — just don't send more emails from this IP today.
    return NextResponse.json({ success: true });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.error("[logo-maker] Lead not emailed: GMAIL_USER / GMAIL_APP_PASSWORD are not set.", { email, business });
    return NextResponse.json({ success: true });
  }

  const waLink = whatsapp ? `https://wa.me/${whatsapp.replace(/[^\d]/g, "")}` : "";
  const rows: [string, string][] = [
    ["Name", esc(name)],
    ["Email", `<a href="mailto:${esc(email)}">${esc(email)}</a>`],
    ["WhatsApp", whatsapp ? `<a href="${esc(waLink)}">${esc(whatsapp)}</a>` : "—"],
    ["Business", esc(business) || "—"],
    ["Tagline", esc(tagline) || "—"],
    ["Industry", esc(industry) || "—"],
    ["Style", esc(style) || "—"],
  ];

  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });
    await transporter.sendMail({
      from: `"LaunchCraft Logo Maker" <${user}>`,
      to: LEAD_INBOX,
      replyTo: email,
      subject: `New Logo Maker lead — ${business || name}`,
      html: `
        <h2 style="font-family:Georgia,serif;font-style:italic;">New lead from the AI Logo Maker</h2>
        <p style="font-family:Arial,sans-serif;color:#555;">They just downloaded a logo. A great moment to offer a full brand kit.</p>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;font-size:14px;">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;width:120px;">${k}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${v}</td></tr>`,
            )
            .join("")}
        </table>
        ${svg ? `<p style="font-family:Arial,sans-serif;color:#555;">Their logo is attached (SVG).</p>` : ""}
      `,
      attachments: svg
        ? [{ filename: `${(business || "logo").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-logo.svg`, content: svg, contentType: "image/svg+xml" }]
        : [],
    });
  } catch (e) {
    console.error("[logo-maker] Failed to email lead:", e instanceof Error ? e.message : e);
  }

  // Never block the download on email problems.
  return NextResponse.json({ success: true });
}
