// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');
const { trace } = require('node:console');



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  timeout: 60 * 1000,

  expect: {

      timeout: 5000,

  },

  reporter:'html',
  
  use: {
    browserName: 'chromium',
    headless : true,
    screenshot : 'on',
    trace: 'retain-on-failure', //on - off
    navigationTimeout: 30000,
    // trace: 'on'

    
  },

  retries: 2,
  
};


module.exports = config;
