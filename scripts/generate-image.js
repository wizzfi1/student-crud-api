const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const html = fs.readFileSync('og-template.html', 'utf8');
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.setViewport({ width: 1200, height: 630 });

  await page.screenshot({ path: 'og-image.png' });

  await browser.close();
})();
