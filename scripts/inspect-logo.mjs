import { loadImage } from 'canvas';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logoPath = join(__dirname, '..', 'public', 'images', 'logo', 'toteindo-logo.png');

async function inspectLogo() {
  try {
    const img = await loadImage(logoPath);
    console.log(`Image loaded successfully!`);
    console.log(`Dimensions: ${img.width}x${img.height}`);
  } catch (err) {
    console.error('❌ Failed to load image:', err.message);
  }
}

inspectLogo();
