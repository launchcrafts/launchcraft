// Builds the final logo: the AI symbol + the business name set in a real
// font, converted to outlines so the SVG works anywhere without the font.
import type { Font, Path } from "opentype.js";
import type { VectorIcon } from "./vectorize";

export type Layout = "stacked" | "inline";

export type LogoDrawing = {
  width: number;
  height: number;
  title: string;
  paths: { d: string; fill: string; transform: string }[];
};

type TextShape = { d: string; x1: number; y1: number; x2: number; y2: number };

const PAD = 64;
const n2 = (v: number) => Math.round(v * 100) / 100;

/**
 * Serialises glyph outlines ourselves: opentype.js's toPathData() can emit
 * "NaN" for coordinates that sit a hair away from a whole number.
 */
function pathToD(path: Path) {
  let d = "";
  for (const c of path.commands) {
    if (c.type === "Z") {
      d += "Z";
      continue;
    }
    const nums =
      c.type === "Q"
        ? [c.x1, c.y1, c.x, c.y]
        : c.type === "C"
          ? [c.x1, c.y1, c.x2, c.y2, c.x, c.y]
          : [c.x, c.y];
    if (!nums.every(Number.isFinite)) return "";
    d += c.type + nums.map(n2).join(" ");
  }
  return d;
}

/* ───────────────────────── Fonts ───────────────────────── */

const fontCache = new Map<string, Promise<Font>>();

export function loadFont(file: string): Promise<Font> {
  let p = fontCache.get(file);
  if (!p) {
    p = (async () => {
      const [mod, res] = await Promise.all([import("opentype.js"), fetch(file)]);
      if (!res.ok) throw new Error(`Font failed to load: ${file}`);
      return mod.parse(await res.arrayBuffer());
    })();
    p.catch(() => fontCache.delete(file));
    fontCache.set(file, p);
  }
  return p;
}

/**
 * Lays out text glyph by glyph (with kerning and tracking). Done manually
 * because some fonts' substitution tables trip up opentype.js's shaper.
 */
function textShape(font: Font, text: string, size: number, trackingEm: number): TextShape | null {
  const scale = size / font.unitsPerEm;
  const chars = Array.from(text);
  const glyphs = chars.map((c) => font.charToGlyph(c));
  let kernTables: unknown = null;
  try {
    kernTables = font.position?.getKerningTables("latn") ?? null;
  } catch {
    kernTables = null;
  }

  let x = 0;
  const parts: string[] = [];
  const box = { x1: Infinity, y1: Infinity, x2: -Infinity, y2: -Infinity };

  glyphs.forEach((g, i) => {
    const path = g.getPath(x, 0, size, {}, font);
    const d = pathToD(path);
    if (d) {
      parts.push(d);
      const b = path.getBoundingBox();
      box.x1 = Math.min(box.x1, b.x1);
      box.y1 = Math.min(box.y1, b.y1);
      box.x2 = Math.max(box.x2, b.x2);
      box.y2 = Math.max(box.y2, b.y2);
    }
    x += (g.advanceWidth ?? 0) * scale;
    if (i < glyphs.length - 1) {
      let k = 0;
      try {
        k =
          kernTables && font.position
            ? font.position.getKerningValue(kernTables, g.index, glyphs[i + 1].index)
            : font.getKerningValue(g, glyphs[i + 1]);
      } catch {
        k = 0;
      }
      x += (k || 0) * scale + trackingEm * size;
    }
  });

  if (!parts.length || !isFinite(box.x1)) return null;
  return { d: parts.join(" "), ...box };
}

/** Text at the largest size ≤ `size` that fits within `maxWidth`. */
function fittedText(font: Font, text: string, size: number, trackingEm: number, maxWidth: number) {
  let shape = textShape(font, text, size, trackingEm);
  if (shape && shape.x2 - shape.x1 > maxWidth) {
    const s = (size * maxWidth) / (shape.x2 - shape.x1);
    shape = textShape(font, text, s, trackingEm);
    return { shape, size: s };
  }
  return { shape, size };
}

/* ───────────────────────── Layout ───────────────────────── */

export type ComposeInput = {
  icon: VectorIcon;
  name: string;
  tagline: string;
  font: Font;
  uppercase: boolean;
  tracking: number;
  layout: Layout;
  iconColor: string;
  nameColor: string;
  taglineColor: string;
};

export function composeLogo(o: ComposeInput): LogoDrawing {
  const nameText = (o.uppercase ? o.name.toUpperCase() : o.name).trim() || "Your Brand";
  const tagText = o.tagline.trim().toUpperCase();
  const paths: LogoDrawing["paths"] = [];
  const iconT = (x: number, y: number, s: number) =>
    `translate(${n2(x)} ${n2(y)}) scale(${Math.round(s * 10000) / 10000}) translate(${n2(-o.icon.x)} ${n2(-o.icon.y)})`;

  if (o.layout === "stacked") {
    const s = Math.min(300 / o.icon.height, 400 / o.icon.width);
    const iw = o.icon.width * s;
    const ih = o.icon.height * s;

    const { shape: name, size } = fittedText(o.font, nameText, 128, o.tracking, 1000);
    const nameW = name ? name.x2 - name.x1 : 0;
    const tag = tagText ? fittedText(o.font, tagText, Math.max(28, size * 0.28), 0.22, Math.max(nameW, iw) * 1.15).shape : null;
    const tagW = tag ? tag.x2 - tag.x1 : 0;

    const contentW = Math.max(iw, nameW, tagW);
    const width = contentW + PAD * 2;
    let y = PAD;

    paths.push({ d: o.icon.d, fill: o.iconColor, transform: iconT((width - iw) / 2, y, s) });
    y += ih + size * 0.42;

    if (name) {
      paths.push({ d: name.d, fill: o.nameColor, transform: `translate(${n2((width - nameW) / 2 - name.x1)} ${n2(y - name.y1)})` });
      y += name.y2 - name.y1;
    }
    if (tag) {
      y += size * 0.34;
      paths.push({ d: tag.d, fill: o.taglineColor, transform: `translate(${n2((width - tagW) / 2 - tag.x1)} ${n2(y - tag.y1)})` });
      y += tag.y2 - tag.y1;
    }
    return { width: n2(width), height: n2(y + PAD), title: nameText, paths };
  }

  // inline: symbol on the left, name (and tagline) on the right
  const { shape: name, size } = fittedText(o.font, nameText, 128, o.tracking, 1200);
  const nameW = name ? name.x2 - name.x1 : 0;
  const nameH = name ? name.y2 - name.y1 : 0;
  const tag = tagText ? fittedText(o.font, tagText, Math.max(26, size * 0.26), 0.22, Math.max(nameW, 500)).shape : null;
  const tagGap = size * 0.3;
  const textH = nameH + (tag ? tagGap + (tag.y2 - tag.y1) : 0);
  const textW = Math.max(nameW, tag ? tag.x2 - tag.x1 : 0);

  const targetH = Math.max(textH * 1.25, size * 1.15);
  const s = Math.min(targetH / o.icon.height, (targetH * 1.5) / o.icon.width);
  const iw = o.icon.width * s;
  const ih = o.icon.height * s;
  const blockH = Math.max(ih, textH);
  const gap = size * 0.38;

  paths.push({ d: o.icon.d, fill: o.iconColor, transform: iconT(PAD, PAD + (blockH - ih) / 2, s) });

  const tx = PAD + iw + gap;
  let ty = PAD + (blockH - textH) / 2;
  if (name) {
    paths.push({ d: name.d, fill: o.nameColor, transform: `translate(${n2(tx - name.x1)} ${n2(ty - name.y1)})` });
    ty += nameH;
  }
  if (tag) {
    ty += tagGap;
    paths.push({ d: tag.d, fill: o.taglineColor, transform: `translate(${n2(tx - tag.x1)} ${n2(ty - tag.y1)})` });
  }

  return { width: n2(tx + textW + PAD), height: n2(blockH + PAD * 2), title: nameText, paths };
}

/* ───────────────────────── Export ───────────────────────── */

function escapeXml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c]!);
}

export function drawingToSvg(dr: LogoDrawing, background?: string) {
  const bg = background ? `<rect width="100%" height="100%" fill="${background}"/>` : "";
  const body = dr.paths.map((p) => `<path fill="${p.fill}" transform="${p.transform}" d="${p.d}"/>`).join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${dr.width} ${dr.height}" width="${dr.width}" height="${dr.height}">` +
    `<title>${escapeXml(dr.title)} logo</title>${bg}${body}</svg>`
  );
}

export function svgToPngBlob(svg: string, width: number, height: number, targetWidth = 2400): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = targetWidth / width;
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas unavailable"));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("PNG export failed"))), "image/png");
    };
    img.onerror = () => reject(new Error("PNG export failed"));
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
