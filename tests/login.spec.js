import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.js';
import { validCredentials } from '../env.js';

test('Save session after login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Navigate to the login page
  await page.goto(`${validCredentials.baseURL}/login`);

  // Perform login
  await loginPage.login(validCredentials.username, validCredentials.password);

  // // Save session state (cookies, local storage, etc.)
  // await page.context().storageState({ path: 'storageState.json' });

  // Verify login success (e.g., redirected to dashboard)
  await expect(page).toHaveURL(`/dashboard/addressing`);
});

