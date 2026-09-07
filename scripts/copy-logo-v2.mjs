import { copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '..', 'public', 'images', 'logo', 'toteindo-logo.png');
const dest = join(__dirname, '..', 'public', 'images', 'logo', 'toteindo-logo-v2.png');

try {
  copyFileSync(src, dest);
  console.log(`✅ Copied logo to ${dest}`);
} catch (err) {
  console.error('Error copying file:', err);
}
