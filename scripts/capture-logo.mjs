import { exec } from 'child_process';
import { writeFileSync } from 'fs';
import http from 'http';

const CHROME_PATH = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"';
const PORT = 9222;
const TARGET_URL = 'http://localhost:3000/convert.html';
const OUTPUT_PNG = 'public/images/logo/toteindo-logo.png';

function startChrome() {
  console.log('Starting Chrome in headless mode with remote debugging...');
  const cmd = `${CHROME_PATH} --headless=new --disable-gpu --remote-debugging-port=${PORT} "${TARGET_URL}"`;
  const proc = exec(cmd);
  proc.unref();
  return proc;
}

function getWebSocketUrl() {
  return new Promise((resolve, reject) => {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (attempts > 15) {
        clearInterval(interval);
        reject(new Error('Timeout waiting for Chrome debugger to start'));
        return;
      }
      
      http.get(`http://localhost:${PORT}/json/list`, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          try {
            const targets = JSON.parse(data);
            const target = targets.find(t => t.url === TARGET_URL || t.url.includes('convert.html'));
            if (target && target.webSocketDebuggerUrl) {
              clearInterval(interval);
              resolve(target.webSocketDebuggerUrl);
            }
          } catch (e) {
            // Keep trying
          }
        });
      }).on('error', () => {
        // Keep trying
      });
    }, 500);
  });
}

function connectAndScreenshot(wsUrl) {
  return new Promise((resolve, reject) => {
    console.log('Connecting to Chrome via WebSocket:', wsUrl);
    const ws = new WebSocket(wsUrl);
    let id = 1;
    
    ws.onopen = () => {
      // 1. Enable Page domain
      ws.send(JSON.stringify({ id: id++, method: 'Page.enable' }));
      
      // 2. Poll for rendering complete
      const checkInterval = setInterval(() => {
        ws.send(JSON.stringify({
          id: id++,
          method: 'Runtime.evaluate',
          params: { expression: "document.body.getAttribute('data-status')" }
        }));
      }, 500);
      
      ws.onmessage = async (event) => {
        const msg = JSON.parse(event.data);
        
        // Handle Runtime.evaluate responses
        if (msg.result && msg.result.result && msg.result.result.value) {
          const status = msg.result.result.value;
          console.log('Current rendering status:', status);
          
          if (status === 'ready') {
            clearInterval(checkInterval);
            console.log('Rendering complete! Setting transparent background...');
            
            // Set transparent background for Chrome screenshot
            ws.send(JSON.stringify({
              id: id++,
              method: 'Emulation.setDefaultBackgroundColorOverride',
              params: { color: { r: 0, g: 0, b: 0, a: 0 } }
            }));
            
            // Wait 100ms for emulation to apply, then take screenshot
            setTimeout(() => {
              console.log('Capturing transparent screenshot...');
              ws.send(JSON.stringify({
                id: 999,
                method: 'Page.captureScreenshot',
                params: { format: 'png', fromSurface: true }
              }));
            }, 100);
          } else if (status === 'error') {
            clearInterval(checkInterval);
            ws.close();
            reject(new Error('Rendering failed in browser'));
          }
        }
        
        // Handle Page.captureScreenshot response
        if (msg.id === 999) {
          if (msg.result && msg.result.data) {
            const base64Data = msg.result.data;
            const buffer = Buffer.from(base64Data, 'base64');
            writeFileSync(OUTPUT_PNG, buffer);
            console.log(`✅ Success! Screenshot saved to ${OUTPUT_PNG}`);
            ws.close();
            resolve();
          } else {
            ws.close();
            reject(new Error('Failed to capture screenshot'));
          }
        }
      };
    };
    
    ws.onerror = (err) => {
      reject(err);
    };
  });
}

async function run() {
  const proc = startChrome();
  try {
    const wsUrl = await getWebSocketUrl();
    await connectAndScreenshot(wsUrl);
    console.log('Done!');
  } catch (err) {
    console.error('Error during capture:', err.message);
  } finally {
    console.log('Killing headless Chrome process...');
    // Kill Chrome on port 9222
    exec('taskkill /F /IM chrome.exe /FI "WINDOWTITLE eq about:blank"', () => {
      process.exit(0);
    });
  }
}

run();
