/**
 * SVG Wave Section Divider Generator
 * Based on svgwave's open-source bezier spline algorithm (github.com/anup-a/svgwave)
 * Generates smooth, organic wave dividers for section transitions.
 *
 * Usage: node generate-waves.js
 * Output: public/svg/*.svg
 */

const fs = require("fs");
const path = require("path");

// --- Bezier Spline (from svgwave, credit: Lubos Brieda, Particle In Cell) ---
function computeControlPoints(K) {
  const n = K.length - 1;
  const p1 = new Array(n);
  const p2 = new Array(n);

  const a = new Array(n);
  const b = new Array(n);
  const c = new Array(n);
  const r = new Array(n);

  a[0] = 0;
  b[0] = 2;
  c[0] = 1;
  r[0] = K[0] + 2 * K[1];

  for (let i = 1; i < n - 1; i++) {
    a[i] = 1;
    b[i] = 4;
    c[i] = 1;
    r[i] = 4 * K[i] + 2 * K[i + 1];
  }

  a[n - 1] = 2;
  b[n - 1] = 7;
  c[n - 1] = 0;
  r[n - 1] = 8 * K[n - 1] + K[n];

  // Thomas algorithm
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

// --- Wave Point Generator ---
function generateWavePoints(width, height, segments, variance, seed) {
  // Simple seeded random for reproducibility
  let s = seed;
  function rand() {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  }

  const segmentWidth = width / segments;
  const points = [];

  for (let i = 0; i <= segments; i++) {
    const x = i * segmentWidth;
    // Use a sine base for natural wave shape, then add randomness
    const sineBase = Math.sin((i / segments) * Math.PI) * variance * 0.8;
    const randomOffset = (rand() - 0.5) * 2 * variance * 0.5;
    // Start near top (low Y), dip down (high Y) in the middle
    const y = 10 + sineBase + randomOffset;
    points.push({ x, y: Math.max(5, Math.min(height - 5, y)) });
  }

  return points;
}

// --- SVG Path from Points using Bezier Splines ---
function buildCurvePath(points) {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);

  const cpX = computeControlPoints(xs);
  const cpY = computeControlPoints(ys);

  let d = `M ${points[0].x},${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    d += ` C ${cpX.p1[i]},${cpY.p1[i]} ${cpX.p2[i]},${cpY.p2[i]} ${points[i + 1].x},${points[i + 1].y}`;
  }

  return d;
}

// --- Generate a single wave divider SVG ---
function generateWaveDivider({
  width = 1440,
  height = 120,
  topColor,
  bottomColor,
  layers = 1,
  segments = 5,
  variance = 30,
  seed = 42,
}) {
  const paths = [];

  for (let layer = 0; layer < layers; layer++) {
    const layerSeed = seed + layer * 1000;
    const layerVariance = variance * (1 - layer * 0.2);
    const layerOffset = (layer * height * 0.15);

    const points = generateWavePoints(width, height - layerOffset, segments, layerVariance, layerSeed);

    // Shift points down by layer offset for layering effect
    const shifted = points.map((p) => ({ x: p.x, y: p.y + layerOffset }));

    const curvePath = buildCurvePath(shifted);

    // Close the path: go to bottom-right, bottom-left, back to start
    const closedPath = `${curvePath} L ${width},${height} L 0,${height} Z`;

    // Layer opacity (front layer is fully opaque, back layers visible enough for dark palettes)
    const opacity = layer === layers - 1 ? 1 : 0.55 + (layer / layers) * 0.3;

    paths.push(`    <path d="${closedPath}" fill="${bottomColor}" opacity="${opacity}" />`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
  <rect width="${width}" height="${height}" fill="${topColor}" />
${paths.join("\n")}
</svg>`;
}

// --- Configuration for Salt Flat Coffee ---
const DARK = "#070606";
const CREAM = "#faf8f5";
const GREY = "#1a1a1a";

const waves = [
  // Homepage waves (dark ↔ grey)
  {
    name: "wave-dark-to-grey-1",
    topColor: DARK,
    bottomColor: GREY,
    layers: 3,
    segments: 7,
    variance: 60,
    seed: 834,
    height: 140,
    description: "Home: Facts → Intro",
  },
  {
    name: "wave-grey-to-dark-1",
    topColor: GREY,
    bottomColor: DARK,
    layers: 3,
    segments: 5,
    variance: 65,
    seed: 777,
    height: 130,
    description: "Home: Intro → Shop CTA",
  },
  {
    name: "wave-dark-to-grey-2",
    topColor: DARK,
    bottomColor: GREY,
    layers: 3,
    segments: 6,
    variance: 50,
    seed: 303,
    height: 130,
    description: "Home: Shop CTA → Spotlight",
  },
  {
    name: "wave-grey-to-dark-2",
    topColor: GREY,
    bottomColor: DARK,
    layers: 2,
    segments: 5,
    variance: 55,
    seed: 616,
    height: 120,
    description: "Home: Spotlight → Action",
  },
  // About page waves (dark ↔ grey)
  {
    name: "wave-dark-to-grey-3",
    topColor: DARK,
    bottomColor: GREY,
    layers: 2,
    segments: 5,
    variance: 50,
    seed: 421,
    height: 120,
    description: "About: Facts → Process",
  },
  {
    name: "wave-grey-to-dark-3",
    topColor: GREY,
    bottomColor: DARK,
    layers: 2,
    segments: 6,
    variance: 55,
    seed: 538,
    height: 120,
    description: "About: Process → Testimonials",
  },
];

// --- Generate all waves ---
const outDir = path.join(__dirname, "public", "svg");

waves.forEach((config) => {
  const svg = generateWaveDivider(config);
  const filePath = path.join(outDir, `${config.name}.svg`);
  fs.writeFileSync(filePath, svg, "utf-8");
  console.log(`Generated: ${config.name}.svg  (${config.description})`);
});

console.log(`\nDone! ${waves.length} wave dividers saved to public/svg/`);
