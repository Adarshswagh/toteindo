import { loadImage } from 'canvas';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, '..', 'public', 'images', 'logo', 'toteindo-logo.png');

async function checkPixels() {
  try {
    const img = await loadImage(logoPath);
    const canvas = {
      width: img.width,
      height: img.height
    };
    // Let's check if the image has any non-white and non-transparent pixels
    // We can draw it to a canvas and read imageData
    const { createCanvas } = await import('canvas');
    const cv = createCanvas(img.width, img.height);
    const ctx = cv.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, img.width, img.height);
    const data = imgData.data;
    
    let transparent = 0;
    let white = 0;
    let colored = 0;
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      const a = data[i+3];
      
      if (a === 0) {
        transparent++;
      } else if (r === 255 && g === 255 && b === 255) {
        white++;
      } else {
        colored++;
        if (colored < 10) {
          console.log(`Colored pixel found at index ${i/4}: R=${r}, G=${g}, B=${b}, A=${a}`);
        }
      }
    }
    
    console.log(`Total pixels: ${data.length / 4}`);
    console.log(`Transparent: ${transparent}`);
    console.log(`White: ${white}`);
    console.log(`Colored (actual logo content): ${colored}`);
  } catch (err) {
    console.error(err);
  }
}

checkPixels();
