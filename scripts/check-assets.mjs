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
      console.error(`ERROR for ${url}:`, err.message);
      resolve();
    });
  });
}

async function run() {
  await checkUrl('http://localhost:3000/images/logo/toteindo-logo.png');
  console.log('\n-----------------------------------------\n');
  await checkUrl('http://localhost:3000/images/lifestyle/hero.jpg');
}

run();
