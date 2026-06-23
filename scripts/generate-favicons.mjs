// Generates favicon PNGs from scripts/favicon-source.png.
// Run with: node scripts/generate-favicons.mjs
// Uses sharp, which ships with Astro, so no extra dependency.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const src = fileURLToPath(new URL('./favicon-source.png', import.meta.url));
const outDir = fileURLToPath(new URL('../public/', import.meta.url));

const targets = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-512.png', size: 512 },
];

for (const { name, size } of targets) {
  await sharp(src)
    .trim() // crop the white padding so the circle fills the frame
    .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(join(outDir, name));
  console.log('wrote', name);
}
