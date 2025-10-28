const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const outFile = path.join(publicDir, 'videos-manifest.json');

function main() {
  const files = fs.readdirSync(publicDir, { withFileTypes: true });
  const manifest = {};
  for (const f of files) {
    if (!f.isFile()) continue;
    if (/\.mp4$/i.test(f.name) || /\.webm$/i.test(f.name)) {
      manifest[f.name] = '/' + encodeURI(f.name);
    }
  }
  fs.writeFileSync(outFile, JSON.stringify(manifest, null, 2));
  console.log('Wrote', outFile);
}

main();
