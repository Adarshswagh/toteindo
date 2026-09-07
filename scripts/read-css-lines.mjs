import { readFileSync } from 'fs';

const cssFile = 'D:\\toteindo\\.next\\dev\\static\\chunks\\src_app_globals_162hn9o.css';
try {
  const content = readFileSync(cssFile, 'utf8');
  const lines = content.split('\n');
  console.log('Searching for position: absolute occurrences...');
  lines.forEach((line, idx) => {
    if (line.includes('position: absolute') || line.includes('position:absolute')) {
      console.log(`\nLine ${idx + 1}: ${line}`);
      // Find the selector by looking backwards
      let selectorLines = [];
      for (let j = idx - 1; j >= Math.max(0, idx - 10); j--) {
        selectorLines.unshift(lines[j]);
        if (lines[j].includes('}') || lines[j].includes('{') && !lines[j].includes('position:')) {
          break;
        }
      }
      console.log(`Context:\n${selectorLines.join('\n')}`);
    }
  });
} catch (err) {
  console.error('Error:', err.message);
}
