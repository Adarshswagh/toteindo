import { loadImage, createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, '..', 'public', 'images', 'logo', 'toteindo-logo.png');

async function cropLogo() {
  try {
    console.log(`Loading image from ${logoPath}...`);
    const img = await loadImage(logoPath);
    const w = img.width;
    const h = img.height;

    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    let minX = w, minY = h, maxX = 0, maxY = 0;
    let found = false;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = (y * w + x) * 4;
        const alpha = data[idx + 3];

        if (alpha > 0) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
          found = true;
        }
      }
    }

    if (!found) {
      console.log('No non-transparent pixels found. Cannot crop.');
      return;
    }

    const cropW = maxX - minX + 1;
    const cropH = maxY - minY + 1;
    console.log(`Original: ${w}x${h}`);
    console.log(`Bounding Box: X: ${minX}..${maxX}, Y: ${minY}..${maxY}`);
    console.log(`Cropped dimensions: ${cropW}x${cropH}`);

    // Add a small padding of 4 pixels to prevent edge clipping
    const pad = 4;
    const finalW = cropW + pad * 2;
    const finalH = cropH + pad * 2;

    const cropCanvas = createCanvas(finalW, finalH);
    const cropCtx = cropCanvas.getContext('2d');

    // Draw the sub-image with padding
    cropCtx.drawImage(
      img,
      minX, minY, cropW, cropH, // Source rectangle
      pad, pad, cropW, cropH   // Destination rectangle
    );

    const buffer = cropCanvas.toBuffer('image/png');
    writeFileSync(logoPath, buffer);
    console.log(`✅ Cropped logo successfully saved! New dimensions: ${finalW}x${finalH}`);
  } catch (err) {
    console.error('Error cropping logo:', err);
  }
}

cropLogo();
