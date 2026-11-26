import { defineConfig } from '@playwright/test';
import chromium from '@sparticuz/chromium';

const executablePath = process.platform === 'linux' ? await chromium.executablePath() : undefined;

export default defineConfig({
  testDir: './tests',
  workers: 1,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:6006',
    browserName: 'chromium',
    viewport: { width: 800, height: 600 },
    locale: 'ru-RU',
    launchOptions: {
      executablePath,
      args: executablePath ? chromium.args.filter(arg => arg !== '--single-process') : [],
    },
  },
  expect: {
    toHaveScreenshot: { threshold: 0.25, maxDiffPixels: 200, maxDiffPixelRatio: 0.01 },
  },
  webServer: {
    command: 'npm run serve',
    url: 'http://127.0.0.1:6006/iframe.html',
  },
});
