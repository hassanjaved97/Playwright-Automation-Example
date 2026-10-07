// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 10 * 1000,
  expect: {
    timeout: 1000,
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
        trace: 'on',                 // logs
        video : 'retain-on-failure',
        ignoreHTTPSErrors : true,
        permissions : ['geolocation'],                // trace for every test
        //viewport: { width: 720, height: 720 },
        ...devices ['Galaxy S III'],
        
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