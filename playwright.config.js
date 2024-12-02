import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 900000,  // Global test timeout (15 minutes)
  ignoreHTTPSErrors: true,  // Apply to all tests globally

  use: {
    browserName: 'chromium',  // Default browser
    headless: false,  // Set to false to see the browser UI (change to true for headless mode)
    
    launchOptions: {
      args: ['--start-maximized'],  // Maximizes the window on startup
    },

    baseURL: 'https://dma-dev.naxa.com.np',  // Base URL for the application
    // viewport: null,  // Default viewport size
    viewport: ({ width: 1530, height: 790 }) // viewport: 1280,720"
  },
});
