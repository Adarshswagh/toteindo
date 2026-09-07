import { loadImage, createCanvas } from 'canvas';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, '..', 'public', 'images', 'logo', 'toteindo-logo.png');

async function makeLogoTransparent() {
  try {
    const img = await loadImage(logoPath);
    const cv = createCanvas(img.width, img.height);
    const ctx = cv.getContext('2d');
    ctx.drawImage(img, 0, 0);
    
    const imgData = ctx.getImageData(0, 0, img.width, img.height);
    const data = imgData.data;
    
    let transparentCount = 0;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      const a = data[i+3];
      
      // If pixel is pure white (or very close to white, e.g. R,G,B > 245)
      // we make it transparent to clean up edges
      if (r > 240 && g > 240 && b > 240) {
        data[i+3] = 0; // Set Alpha to 0 (transparent)
        transparentCount++;
      }
    }
    
    ctx.putImageData(imgData, 0, 0);
    const buffer = cv.toBuffer('image/png');
    writeFileSync(logoPath, buffer);
    
    console.log(`✅ Success! Transparent logo processed.`);
    console.log(`   Made ${transparentCount} white background pixels transparent.`);
    console.log(`   New file size: ${(buffer.length / 1024).toFixed(1)} KB`);
  } catch (err) {
    console.error('Error making logo transparent:', err);
  }
}

makeLogoTransparent();
