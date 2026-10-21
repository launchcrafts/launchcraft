// Turns the AI's black-on-white symbol (a JPEG) into a clean vector path.
// Runs in the browser; the pure helpers below also work in Node for testing.
import type { TraceData, TracePath, TraceSegment } from "imagetracerjs";

export type VectorIcon = {
  /** SVG path data in the traced image's coordinate space */
  d: string;
  /** bounding box of the symbol inside that space */
  x: number;
  y: number;
  width: number;
  height: number;
};

type Tracer = {
  imagedataToTracedata(
    imgd: { width: number; height: number; data: Uint8ClampedArray },
    options?: Record<string, unknown>,
  ): TraceData;
};

const WORK_SIZE = 640;

/** Otsu's method: best threshold to split ink from background. */
function otsu(hist: Uint32Array, total: number) {
  let sum = 0;
  for (let i = 0; i < 256; i++) sum += i * hist[i];
  let sumB = 0;
  let wB = 0;
  let best = 0;
  let threshold = 128;
  for (let t = 0; t < 256; t++) {
    wB += hist[t];
    if (wB === 0) continue;
    const wF = total - wB;
    if (wF === 0) break;
    sumB += t * hist[t];
    const mB = sumB / wB;
    const mF = (sum - sumB) / wF;
    const between = wB * wF * (mB - mF) * (mB - mF);
    if (between > best) {
      best = between;
      threshold = t;
    }
  }
  return threshold;
}

/** Converts RGBA pixels to pure black (symbol) / white (background) RGBA pixels. */
export function binarize(src: Uint8ClampedArray, w: number, h: number): Uint8ClampedArray {
  const n = w * h;
  const lum = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const a = src[i * 4 + 3];
    lum[i] = a < 128 ? 255 : 0.299 * src[i * 4] + 0.587 * src[i * 4 + 1] + 0.114 * src[i * 4 + 2];
  }

  // light 3×3 blur to soften JPEG noise before thresholding
  const blur = new Float32Array(n);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let s = 0;
      let c = 0;
      for (let dy = -1; dy <= 1; dy++) {
        const yy = y + dy;
        if (yy < 0 || yy >= h) continue;
        for (let dx = -1; dx <= 1; dx++) {
          const xx = x + dx;
          if (xx < 0 || xx >= w) continue;
          s += lum[yy * w + xx];
          c++;
        }
      }
      blur[y * w + x] = s / c;
    }
  }

  const hist = new Uint32Array(256);
  for (let i = 0; i < n; i++) hist[Math.max(0, Math.min(255, Math.round(blur[i])))]++;
  const t = Math.max(50, Math.min(205, otsu(hist, n)));

  let dark = 0;
  for (let i = 0; i < n; i++) if (blur[i] <= t) dark++;
  // If most of the image is dark, the AI drew a light symbol on a dark background.
  const invert = dark > n * 0.5;

  const out = new Uint8ClampedArray(n * 4);
  for (let i = 0; i < n; i++) {
    const ink = invert ? blur[i] > t : blur[i] <= t;
    const v = ink ? 0 : 255;
    out[i * 4] = v;
    out[i * 4 + 1] = v;
    out[i * 4 + 2] = v;
    out[i * 4 + 3] = 255;
  }
  return out;
}

const r1 = (v: number) => Math.round(v * 10) / 10;

function segmentPoints(s: TraceSegment): [number, number][] {
  const pts: [number, number][] = [
    [s.x1, s.y1],
    [s.x2, s.y2],
  ];
  if (s.x3 !== undefined && s.y3 !== undefined) pts.push([s.x3, s.y3]);
  return pts;
}

function bboxOf(p: TracePath) {
  let x1 = Infinity;
  let y1 = Infinity;
  let x2 = -Infinity;
  let y2 = -Infinity;
  for (const s of p.segments) {
    for (const [x, y] of segmentPoints(s)) {
      if (x < x1) x1 = x;
      if (y < y1) y1 = y;
      if (x > x2) x2 = x;
      if (y > y2) y2 = y;
    }
  }
  return { x1, y1, x2, y2 };
}

type Box = { x1: number; y1: number; x2: number; y2: number };
const area = (b: Box) => Math.max(0, b.x2 - b.x1) * Math.max(0, b.y2 - b.y1);
const union = (a: Box, b: Box): Box => ({
  x1: Math.min(a.x1, b.x1),
  y1: Math.min(a.y1, b.y1),
  x2: Math.max(a.x2, b.x2),
  y2: Math.max(a.y2, b.y2),
});
const near = (a: Box, b: Box, gap: number) =>
  b.x1 <= a.x2 + gap && b.x2 >= a.x1 - gap && b.y1 <= a.y2 + gap && b.y2 >= a.y1 - gap;

function pathData(layer: TracePath[], p: TracePath) {
  const first = p.segments[0];
  let d = `M${r1(first.x1)} ${r1(first.y1)}`;
  for (const s of p.segments) {
    d +=
      s.type === "Q" && s.x3 !== undefined && s.y3 !== undefined
        ? `Q${r1(s.x2)} ${r1(s.y2)} ${r1(s.x3)} ${r1(s.y3)}`
        : `L${r1(s.x2)} ${r1(s.y2)}`;
  }
  d += "Z";
  // holes are drawn in reverse so the default nonzero fill rule cuts them out
  for (const hi of p.holechildren) {
    const hole = layer[hi];
    if (!hole || !hole.segments.length) continue;
    const last = hole.segments[hole.segments.length - 1];
    d += `M${r1(last.x3 ?? last.x2)} ${r1(last.y3 ?? last.y2)}`;
    for (let i = hole.segments.length - 1; i >= 0; i--) {
      const s = hole.segments[i];
      d +=
        s.type === "Q" && s.x3 !== undefined
          ? `Q${r1(s.x2)} ${r1(s.y2)} ${r1(s.x1)} ${r1(s.y1)}`
          : `L${r1(s.x1)} ${r1(s.y1)}`;
    }
    d += "Z";
  }
  return d;
}

/** Traces binarized pixels and keeps only the main symbol (drops frames, specks and stray text). */
export function traceIcon(
  tracer: Tracer,
  imgd: { width: number; height: number; data: Uint8ClampedArray },
): VectorIcon | null {
  const W = imgd.width;
  const H = imgd.height;
  const td = tracer.imagedataToTracedata(imgd, {
    colorsampling: 0,
    numberofcolors: 2,
    colorquantcycles: 1,
    pal: [
      { r: 0, g: 0, b: 0, a: 255 },
      { r: 255, g: 255, b: 255, a: 255 },
    ],
    mincolorratio: 0,
    ltres: 0.8,
    qtres: 0.8,
    pathomit: 12,
    rightangleenhance: false,
    blurradius: 0,
    layering: 0,
    roundcoords: 1,
  });

  const layer = td.layers[0] ?? [];
  const parts: { p: TracePath; box: Box }[] = [];
  for (const p of layer) {
    if (p.isholepath || p.segments.length < 2) continue;
    const box = bboxOf(p);
    const bw = box.x2 - box.x1;
    const bh = box.y2 - box.y1;
    const touchesEdge = box.x1 <= 2 || box.y1 <= 2 || box.x2 >= W - 3 || box.y2 >= H - 3;
    if (touchesEdge && (bw > W * 0.6 || bh > H * 0.6)) continue; // frame or background block
    if (bw * bh < 40) continue; // speck
    parts.push({ p, box });
  }
  if (!parts.length) return null;

  // Grow a group outward from the largest shape; anything far away (usually
  // stray text the model added) is dropped if it's clearly secondary.
  parts.sort((a, b) => area(b.box) - area(a.box));
  const gap = Math.max(W, H) * 0.08;
  let group = parts[0].box;
  const inGroup = new Set([0]);
  let changed = true;
  while (changed) {
    changed = false;
    parts.forEach((part, i) => {
      if (!inGroup.has(i) && near(group, part.box, gap)) {
        inGroup.add(i);
        group = union(group, part.box);
        changed = true;
      }
    });
  }
  let outsideArea = 0;
  for (let i = 0; i < parts.length; i++) if (!inGroup.has(i)) outsideArea += area(parts[i].box);
  const kept = outsideArea > area(group) * 0.6 ? parts : parts.filter((_, i) => inGroup.has(i));

  let box = kept[0].box;
  for (const k of kept) box = union(box, k.box);
  const width = box.x2 - box.x1;
  const height = box.y2 - box.y1;
  if (width < W * 0.04 || height < H * 0.04) return null;

  return {
    d: kept.map((k) => pathData(layer, k.p)).join(""),
    x: box.x1,
    y: box.y1,
    width,
    height,
  };
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Could not load image"));
    img.src = src;
  });
}

/** Browser: AI image (data URL) → vector symbol. */
export async function vectorizeDataUrl(dataUrl: string): Promise<VectorIcon | null> {
  const [img, mod] = await Promise.all([loadImage(dataUrl), import("imagetracerjs")]);
  const tracer = (mod.default ?? mod) as Tracer;
  const scale = WORK_SIZE / Math.max(img.naturalWidth, img.naturalHeight);
  const w = Math.max(1, Math.round(img.naturalWidth * scale));
  const h = Math.max(1, Math.round(img.naturalHeight * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, w, h);
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, w, h);
  const { data } = ctx.getImageData(0, 0, w, h);
  return traceIcon(tracer, { width: w, height: h, data: binarize(data, w, h) });
}
