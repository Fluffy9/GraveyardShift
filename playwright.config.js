// Playwright config: runs the built game (dist/) in headless Chromium with software WebGL.
// Projects: desktop 1280x720, window 640x360 (BUILD_SPEC §11 legibility size), touch (coarse pointer).
const { defineConfig } = require('@playwright/test');

const PORT = 4173;
const launchOptions = {
  args: [
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader',
    '--ignore-gpu-blocklist',
  ],
};

module.exports = defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.js/,
  fullyParallel: true,
  workers: +process.env.PW_WORKERS || Math.max(2, require('os').cpus().length),   // default is cores/2, i.e. ONE worker on a 2-core box
  forbidOnly: !!process.env.CI,
  reporter: [['list']],
  timeout: 60_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    launchOptions,
    trace: 'retain-on-failure',
  },
  webServer: {
    command: `node tests/serve.js ${PORT}`,
    url: `http://127.0.0.1:${PORT}/index.html`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
  projects: [
    {
      name: 'desktop',
      use: { browserName: 'chromium', viewport: { width: 1280, height: 720 }, hasTouch: false },
    },
    {
      name: 'window',
      // only the specs whose result depends on screen size; the game-logic specs run once, on desktop
      testMatch: /(ui|modeselect|session)\.spec\.js/,
      use: { browserName: 'chromium', viewport: { width: 640, height: 360 }, hasTouch: false },
    },
    {
      // coarse pointer + touch events => IS_TOUCH, body.touch
      name: 'touch',
      testMatch: /touch-ui\.spec\.js/,
      use: {
        browserName: 'chromium',
        viewport: { width: 844, height: 390 },
        hasTouch: true,
        isMobile: true,
        deviceScaleFactor: 2,
      },
    },
  ],
});
