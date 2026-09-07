import http from 'http';

function checkUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      console.log(`URL: ${url}`);
      console.log(`STATUS: ${res.statusCode}`);
      console.log(`HEADERS:`, res.headers);
      
      let data = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => {
        const body = Buffer.concat(data);
        console.log(`BODY SIZE: ${body.length} bytes`);
        if (res.statusCode !== 200) {
          console.log(`BODY (first 200 chars):`, body.toString('utf8').substring(0, 200));
        }
        resolve();
      });
    }).on('error', (err) => {
      console.error(`ERROR:`, err.message);
      resolve();
    });
  });
}

async function run() {
  // Test Next.js optimization endpoint for logo
  await checkUrl('http://localhost:3000/_next/image?url=%2Fimages%2Flogo%2Ftoteindo-logo.png&w=256&q=75');
  console.log('\n-----------------------------------------\n');
  // Test Next.js optimization endpoint for hero image
  await checkUrl('http://localhost:3000/_next/image?url=%2Fimages%2Flifestyle%2Fhero.jpg&w=1920&q=90');
}

run();
