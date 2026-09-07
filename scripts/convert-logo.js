const { createCanvas } = require('canvas');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');
const fs = require('fs');
const path = require('path');

// Source and destination
const pdfPath = path.join(__dirname, 'public', 'images', 'logo', 'toteindo- logo.pdf');
const outPng = path.join(__dirname, 'public', 'images', 'logo', 'toteindo-logo.png');

async function convertPdfToImage() {
  try {
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const loadingTask = pdfjsLib.getDocument({ data });
    const pdf = await loadingTask.promise;
    
    console.log(`PDF loaded: ${pdf.numPages} page(s)`);
    
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 4.0 }); // high resolution
    
    console.log(`Viewport: ${viewport.width} x ${viewport.height}`);
    
    const canvas = createCanvas(viewport.width, viewport.height);
    const ctx = canvas.getContext('2d');

    // White background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, viewport.width, viewport.height);

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };
    
    await page.render(renderContext).promise;
    
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outPng, buffer);
    
    console.log(`✅ Logo saved to: ${outPng}`);
    console.log(`File size: ${buffer.length} bytes`);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

convertPdfToImage();
