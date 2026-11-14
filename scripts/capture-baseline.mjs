import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:4321';
const OUTPUT_DIR = path.resolve('baseline-screenshots');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1024', width: 1024, height: 768 },
  { name: '810', width: 810, height: 1080 },
  { name: '390', width: 390, height: 844 },
];

const ROUTES = [
  { name: 'esper', path: '/esper' },
  { name: 'esper_inter', path: '/esper/inter' },
  { name: 'esper_intra', path: '/esper/intra' },
  { name: 'esper_open', path: '/esper/open' },
  { name: 'esper_inter_register', path: '/esper/inter/register' },
  { name: 'esper_intra_register', path: '/esper/intra/register' },
  { name: 'esper_open_register', path: '/esper/open/register' },
  { name: 'igniterc', path: '/igniterc' },
  { name: 'igniterc_register', path: '/igniterc/register' },
  { name: 'evo', path: '/evo' },
  { name: 'evo_register', path: '/evo/register' },
];

async function run() {
  console.log('Launching browser...');
  const browser = await chromium.launch();

  for (const vp of VIEWPORTS) {
    console.log(`\n=== Capturing Viewport: ${vp.width}x${vp.height} (${vp.name}) ===`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route.path}`;
      const filename = `${route.name}-${vp.name}.png`;
      const filePath = path.join(OUTPUT_DIR, filename);

      try {
        console.log(`Navigating to ${url}...`);
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        // Scroll down and up to trigger any lazy-loaded assets/animations
        await page.evaluate(async () => {
          await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 400;
            const timer = setInterval(() => {
              const scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;
              if (totalHeight >= scrollHeight) {
                clearInterval(timer);
                window.scrollTo(0, 0);
                resolve();
              }
            }, 100);
          });
        });
        await page.waitForTimeout(2000);

        await page.screenshot({ path: filePath, fullPage: true });
        console.log(`✓ Saved ${filename}`);
      } catch (err) {
        console.error(`✗ Failed ${route.name} at ${vp.name}:`, err.message);
      }
    }
    await context.close();
  }

  await browser.close();
  console.log('\nAll baseline screenshots captured successfully!');
}

run().catch(console.error);
