// One-off generator for the Open Graph social card (public/images/og-image.png).
// Run with: node scripts/generate-og.mjs
// Uses sharp, which ships with Astro, so no extra dependency.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../public/images/og-image.png', import.meta.url));
await mkdir(fileURLToPath(new URL('../public/images', import.meta.url)), { recursive: true });

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0e0e10"/>
  <rect x="0" y="0" width="1200" height="8" fill="#3b5bdb"/>
  <g fill="#f2f2f0" font-family="Georgia, 'Times New Roman', serif">
    <text x="80" y="270" font-size="92" font-weight="400">Hugo De Bosschere</text>
  </g>
  <text x="84" y="200" fill="#7c93f0" font-family="Arial, sans-serif" font-size="28" letter-spacing="4" font-weight="700">JUNIOR SOFTWARE ENGINEER · GHENT, BELGIUM</text>
  <text x="84" y="345" fill="#9a9a9a" font-family="Arial, sans-serif" font-size="34">Software engineer, strongest in C# / .NET, across the stack.</text>
  <g font-family="Arial, sans-serif" font-size="26" fill="#9a9a9a">
    <text x="84" y="540">github.com/Hugodb02</text>
  </g>
  <g transform="translate(1010, 470)">
    <rect width="110" height="110" rx="24" fill="#3b5bdb"/>
    <text x="55" y="78" fill="#ffffff" font-family="Georgia, serif" font-size="64" font-weight="700" text-anchor="middle">H.</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
