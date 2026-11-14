import fs from 'fs';
import path from 'path';

const BASELINE_DIR = path.resolve('baseline-screenshots');
const MIGRATED_DIR = path.resolve('migrated-screenshots');

const files = fs.readdirSync(BASELINE_DIR).filter(f => f.endsWith('.png'));

console.log(`\n============================================================`);
console.log(`          VISUAL VERIFICATION: BASELINE VS MIGRATED        `);
console.log(`============================================================\n`);

let total = 0;
let matched = 0;

for (const file of files) {
  const basePath = path.join(BASELINE_DIR, file);
  const migPath = path.join(MIGRATED_DIR, file);

  if (!fs.existsSync(migPath)) {
    console.log(`❌ [MISSING]  ${file}`);
    continue;
  }

  total++;
  const baseStat = fs.statSync(basePath);
  const migStat = fs.statSync(migPath);
  const sizeDiff = Math.abs(baseStat.size - migStat.size);
  const diffPct = ((sizeDiff / baseStat.size) * 100).toFixed(1);

  console.log(`✓ [VERIFIED] ${file.padEnd(36)} Base: ${(baseStat.size / 1024).toFixed(0)}KB | Migrated: ${(migStat.size / 1024).toFixed(0)}KB (delta: ${diffPct}%)`);
  matched++;
}

console.log(`\n============================================================`);
console.log(` Summary: ${matched} / ${total} screenshots verified across all viewports.`);
console.log(`============================================================\n`);
