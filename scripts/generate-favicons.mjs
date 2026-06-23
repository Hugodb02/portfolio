// Generates favicon PNGs from scripts/favicon-source.png.
// Run with: node scripts/generate-favicons.mjs
// Uses sharp, which ships with Astro, so no extra dependency.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const src = fileURLToPath(new URL('./favicon-source.png', import.meta.url));
const outDir = fileURLToPath(new URL('../public/', import.meta.url));

// Browser + PWA icons: trim the white padding, fill the frame (cover), then
// mask to a circle so there are no white bars or corners on the tab.
const circular = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'icon-512.png', size: 512 },
];

for (const { name, size } of circular) {
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );
  await sharp(src)
    .trim()
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(join(outDir, name));
  console.log('wrote', name);
}

// Apple touch icon: opaque square (iOS adds its own rounded corners).
await sharp(src)
  .trim()
  .resize(180, 180, { fit: 'cover', position: 'centre' })
  .flatten({ background: '#ffffff' })
  .png()
  .toFile(join(outDir, 'apple-touch-icon.png'));
console.log('wrote apple-touch-icon.png');
