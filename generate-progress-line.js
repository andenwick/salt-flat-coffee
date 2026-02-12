/**
 * SVG Progress Line Generator
 * Generates a single, clean vine-like curve for the left-gutter progress rail.
 * The shape is everything — no effects, no glow, just a beautiful curve.
 *
 * Usage: node generate-progress-line.js
 * Output: lib/progress-line-data.json
 */

const fs = require("fs");
const path = require("path");

// --- Bezier Spline (from svgwave, credit: Lubos Brieda) ---
function computeControlPoints(K) {
  const n = K.length - 1;
  if (n < 1) return { p1: [], p2: [] };

  const p1 = new Array(n);
  const p2 = new Array(n);
  const a = new Array(n);
  const b = new Array(n);
  const c = new Array(n);
  const r = new Array(n);

  a[0] = 0; b[0] = 2; c[0] = 1;
  r[0] = K[0] + 2 * K[1];

  for (let i = 1; i < n - 1; i++) {
    a[i] = 1; b[i] = 4; c[i] = 1;
    r[i] = 4 * K[i] + 2 * K[i + 1];
  }

  a[n - 1] = 2; b[n - 1] = 7; c[n - 1] = 0;
  r[n - 1] = 8 * K[n - 1] + K[n];

  for (let i = 1; i < n; i++) {
    const m = a[i] / b[i - 1];
    b[i] -= m * c[i - 1];
    r[i] -= m * r[i - 1];
  }

  p1[n - 1] = r[n - 1] / b[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    p1[i] = (r[i] - c[i] * p1[i + 1]) / b[i];
  }

  for (let i = 0; i < n - 1; i++) {
    p2[i] = 2 * K[i + 1] - p1[i + 1];
  }
  p2[n - 1] = 0.5 * (K[n] + p1[n - 1]);

  return { p1, p2 };
}

// --- Configuration ---
const NUM_PRODUCTS = 6;
const WIDTH = 80; // wider viewBox for well-defined curves
const SECTION_HEIGHT = 200;
const PADDING_TOP = 15;
const CENTER_X = WIDTH / 2;

// Organic amplitude variation — each bend has its own character
// These are large in the viewBox so they're visible after aspect-ratio stretching
const AMPLITUDES = [22, 26, 18, 24, 20, 25];
const Y_OFFSETS = [0, -5, 3, -2, 6, -4];

// --- Build waypoints ---
const waypoints = [];

// Start: top center
waypoints.push({ x: CENTER_X, y: PADDING_TOP });

for (let i = 0; i < NUM_PRODUCTS; i++) {
  const baseY = PADDING_TOP + SECTION_HEIGHT * (i + 0.5);
  const y = baseY + Y_OFFSETS[i];
  const side = i % 2 === 0 ? 1 : -1;

  // Peak point for this product
  waypoints.push({ x: CENTER_X + AMPLITUDES[i] * side, y });

  // Transition point between products — curves back past center
  if (i < NUM_PRODUCTS - 1) {
    const nextSide = (i + 1) % 2 === 0 ? 1 : -1;
    const transY = baseY + SECTION_HEIGHT * 0.5;
    // Ease toward the next side, creating a natural flow
    waypoints.push({ x: CENTER_X + AMPLITUDES[i + 1] * nextSide * 0.15, y: transY });
  }
}

// End: bottom center
const endY = PADDING_TOP + SECTION_HEIGHT * NUM_PRODUCTS + 20;
waypoints.push({ x: CENTER_X, y: endY });

// --- Bezier path ---
const xs = waypoints.map((p) => p.x);
const ys = waypoints.map((p) => p.y);
const cpX = computeControlPoints(xs);
const cpY = computeControlPoints(ys);

let mainPath = `M ${waypoints[0].x.toFixed(1)},${waypoints[0].y.toFixed(1)}`;
for (let i = 0; i < waypoints.length - 1; i++) {
  mainPath += ` C ${cpX.p1[i].toFixed(1)},${cpY.p1[i].toFixed(1)} ${cpX.p2[i].toFixed(1)},${cpY.p2[i].toFixed(1)} ${waypoints[i + 1].x.toFixed(1)},${waypoints[i + 1].y.toFixed(1)}`;
}

const totalHeight = Math.ceil(endY + 40);

// --- Output ---
const data = {
  viewBox: `0 0 ${WIDTH} ${totalHeight}`,
  viewBoxWidth: WIDTH,
  viewBoxHeight: totalHeight,
  mainPath,
  totalHeight,
};

const outPath = path.join(__dirname, "lib", "progress-line-data.json");
fs.writeFileSync(outPath, JSON.stringify(data, null, 2), "utf-8");

console.log("Generated: lib/progress-line-data.json");
console.log(`  ViewBox: 0 0 ${WIDTH} ${totalHeight}`);
console.log(`  Waypoints: ${waypoints.length}`);
console.log(`  Amplitudes: [${AMPLITUDES.join(", ")}]`);
