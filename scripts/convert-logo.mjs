import { createCanvas } from 'canvas';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Import the legacy build PDFJS
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';

// Setup worker
import 'pdfjs-dist/legacy/build/pdf.worker.mjs';

const pdfPath = join(__dirname, '..', 'public', 'images', 'logo', 'toteindo- logo.pdf');
const outPng = join(__dirname, '..', 'public', 'images', 'logo', 'toteindo-logo.png');

async function convertPdfToImage() {
  try {
    console.log('Reading PDF:', pdfPath);
    const data = new Uint8Array(readFileSync(pdfPath));
    
    const loadingTask = pdfjs.getDocument({ 
      data,
      isEvalSupported: false,
      useSystemFonts: true,
      disableFontFace: false,
    });
    
    const pdf = await loadingTask.promise;
    console.log(`PDF loaded: ${pdf.numPages} page(s)`);
    
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 0.5 });
    
    console.log(`Rendering at: ${Math.round(viewport.width)} x ${Math.round(viewport.height)}`);
    
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, viewport.width, viewport.height);

    await page.render({ canvasContext: ctx, viewport }).promise;
    
    const buffer = canvas.toBuffer('image/png');
    writeFileSync(outPng, buffer);
    
    console.log(`✅ Logo successfully converted!`);
    console.log(`   Saved: ${outPng} (${(buffer.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

convertPdfToImage();
