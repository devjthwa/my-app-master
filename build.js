const path = require('path');
const fs = require('fs/promises');

const outDir = path.join(__dirname, 'dlist');
const filesToCopy = ['index.js', 'package.json', 'README.md'];

async function main() {
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  for (const file of filesToCopy) {
    const src = path.join(__dirname, file);
    const dest = path.join(outDir, file);
    await fs.copyFile(src, dest);
  }

  console.log(`Build output generated in ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
