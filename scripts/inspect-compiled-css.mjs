import { readdirSync, readFileSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const nextDir = join(__dirname, '..', '.next');

function walkDir(dir, callback) {
  readdirSync(dir).forEach(f => {
    let dirPath = join(dir, f);
    let isDirectory = statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

try {
  console.log('Searching for CSS files in .next folder...');
  let cssFiles = [];
  walkDir(nextDir, (filePath) => {
    if (filePath.endsWith('.css')) {
      cssFiles.push(filePath);
    }
  });

  console.log(`Found ${cssFiles.length} CSS files.`);
  cssFiles.forEach(file => {
    console.log(`\n--- CSS File: ${file} ---`);
    const content = readFileSync(file, 'utf8');
    // Check if there are absolute styles or reveal styles
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('.reveal') || line.includes('absolute')) {
        console.log(`Line ${idx+1}: ${line.substring(0, 150)}`);
      }
    });
  });
} catch (err) {
  console.error('Error walking directory:', err.message);
}
