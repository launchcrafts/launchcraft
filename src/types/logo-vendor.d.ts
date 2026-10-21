// Minimal type declarations for the two browser libraries used by the AI Logo Maker.

declare module "imagetracerjs" {
  export interface TraceSegment {
    type: "L" | "Q";
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    x3?: number;
    y3?: number;
  }
  export interface TracePath {
    segments: TraceSegment[];
    boundingbox: [number, number, number, number];
    holechildren: number[];
    isholepath: boolean;
  }
  export interface TraceData {
    layers: TracePath[][];
    palette: { r: number; g: number; b: number; a: number }[];
    width: number;
    height: number;
  }
  interface ImageTracerApi {
    imagedataToTracedata(
      imgd: { width: number; height: number; data: Uint8ClampedArray },
      options?: Record<string, unknown>,
    ): TraceData;
  }
  const ImageTracer: ImageTracerApi;
  export default ImageTracer;
}

declare module "opentype.js" {
  export interface BoundingBox {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }
  export type PathCommand =
    | { type: "M" | "L"; x: number; y: number }
    | { type: "Q"; x1: number; y1: number; x: number; y: number }
    | { type: "C"; x1: number; y1: number; x2: number; y2: number; x: number; y: number }
    | { type: "Z" };
  export interface Path {
    commands: PathCommand[];
    getBoundingBox(): BoundingBox;
  }
  export interface Glyph {
    index: number;
    advanceWidth?: number;
    getPath(x: number, y: number, fontSize: number, options?: object, font?: Font): Path;
  }
  export interface Font {
    unitsPerEm: number;
    charToGlyph(c: string): Glyph;
    getKerningValue(left: Glyph, right: Glyph): number;
    position?: {
      getKerningTables(script: string, language?: string): unknown;
      getKerningValue(tables: unknown, left: number, right: number): number;
    };
  }
  export function parse(buffer: ArrayBuffer): Font;
}
