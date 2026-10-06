// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
  retries: 0,

  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,             // visible browser
        screenshot: 'on',            // screenshot for every test
        trace: 'on',                 // trace for every test
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: true,              // runs in the background
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
      },
    },
  ],
});