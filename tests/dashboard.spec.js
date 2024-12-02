import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.js';
import { login } from '../command.js';  // Import the login function from command.js

test('Dashboard functionalities', async ({ page }) => {
  const dashboard = new DashboardPage(page);

  // Log in before accessing the dashboard
  await login(page);  // Call the login function from command.js

  // Verify successful login (ensure we land on the dashboard)
  await expect(page).toHaveURL('/dashboard/addressing'); 

  // Navigate to the dashboard page
  await dashboard.navigateToDashboard(); 
  
  // Interact with dashboard tabs
  await dashboard.interactWithTabs();
  await dashboard.switchInformationTabs();
  
  // Download report and verify it
  const download = await dashboard.downloadReport();
  expect(download.suggestedFilename()).toContain('.png'); // Verify the downloaded file
});

