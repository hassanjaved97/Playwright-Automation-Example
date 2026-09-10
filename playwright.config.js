// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');
const { trace } = require('node:console');



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  timeout: 40*1000,

  expect: {

      timeout: 5000,

  },

  reporter:'html',
  
  use: {
    browserName: 'chromium',
    headless : true,
    screenshot : 'on',
    trace: 'retain-on-failure' //on - off
    // trace: 'on'

   
  },

  
};


module.exports = config;

