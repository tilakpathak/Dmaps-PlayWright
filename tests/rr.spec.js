import { test, expect } from '@playwright/test';
import { login } from '../command.js';  // Import the login function from command.js

test('test the flow of add buildings, delete buildings', async ({ page }) => {

  // Log in before accessing the dashboard
  await login(page);  // Call the login function from command.js

  // Verify successful login (ensure we land on the dashboard)
  await expect(page).toHaveURL('/dashboard/addressing');

  await page.goto('https://dma-dev.naxa.com.np/dashboard/addressing');
  //Navigate to the Building Data page
  await page.getByRole('link', { name: 'Data' }).click();
  await page.getByRole('link', { name: 'Building Data' }).click();
  await page.getByRole('link', { name: 'Road Data' }).click();
  await page.getByRole('button', { name: 'add Add New Road' }).click();
  await page.getByText('Select Road Categoryarrow_drop_down').click();
  await page.getByText('Major').click();
  await page.getByPlaceholder('Enter Road Name').click();
  await page.getByPlaceholder('Enter Road Name').fill('Test Road');
  await page.getByPlaceholder('Enter Road Width').click();
  await page.getByPlaceholder('Enter Road Width').fill('12');
  await page.getByRole('button', { name: 'Next chevron_right' }).click();
  await page.getByRole('button', { name: 'center_focus_weak' }).click();
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByLabel('Map').click({
    position: {
      x: 536,
      y: 197
    }
  });
  await page.getByLabel('Map').dblclick({
    position: {
      x: 675,
      y: 203
    }
  });
  await page.getByRole('button', { name: 'Next chevron_right' }).click();
  await page.getByText('Select Road Classarrow_drop_down').click();
  await page.getByText('District road').click();
  await page.getByText('Select Road Pavement Typearrow_drop_down').click();
  await page.getByText('Black Topped').click();
  await page.getByText('Select Road Lanearrow_drop_down').click();
  await page.getByText('Single lane').click();
  await page.getByPlaceholder('Remarks').click();
  await page.getByPlaceholder('Remarks').fill('Test Data');
  await page.getByRole('button', { name: 'Next chevron_right' }).click();
  await page.getByText('keyboard_arrow_down').first().click();
  await page.getByText('keyboard_arrow_down').click();
  await page.getByRole('button', { name: 'Complete chevron_right' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'download' }).click();
  const download = await downloadPromise;
  await page.getByPlaceholder('Search by Road Name, Road').click();
  await page.getByPlaceholder('Search by Road Name, Road').fill('Test Road');
  await page.getByRole('button', { name: 'info' }).click();
  await page.getByRole('button', { name: 'edit' }).click();
  await page.getByPlaceholder('Enter Road Name').click();
  await page.getByPlaceholder('Enter Road Name').fill('Test Road Tilak');
  await page.getByRole('button', { name: 'Next chevron_right' }).click();
  await page.getByText('check').nth(3).click();
  await page.getByRole('button', { name: 'Complete chevron_right' }).click();
  await page.getByPlaceholder('Search by Road Name, Road').click();
  await page.getByPlaceholder('Search by Road Name, Road').fill('Test Road Tilak');
  await page.getByRole('button', { name: 'map' }).click();
  await page.goto('https://dma-dev.naxa.com.np/data-management/road-data');
  await page.getByRole('button', { name: 'tune Filter' }).click();
  await page.locator('div').filter({ hasText: /^Wardarrow_drop_down$/ }).getByPlaceholder('Select').click();
  await page.locator('li').filter({ hasText: 'Ward 8' }).getByRole('checkbox').check();
  await page.getByRole('button', { name: 'tune Filter' }).click();
  await page.getByRole('button', { name: 'tune Filter' }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'close Clear Filters' }).click();
  await page.getByPlaceholder('Search by Road Name, Road').click();
  await page.getByPlaceholder('Search by Road Name, Road').fill('Test Road Tilak');
  await page.getByRole('button', { name: 'more_vert' }).click();
  await page.getByText('deleteDelete').click();
  await page.getByPlaceholder('Type Delete').click();
  await page.getByPlaceholder('Type Delete').fill('delete');
  await page.getByRole('button', { name: 'delete Confirm' }).click();
  await page.getByPlaceholder('Search by Road Name, Road').click();
  await page.getByPlaceholder('Search by Road Name, Road').press('Enter');
  await page.getByText('clear').click();
  await page.getByPlaceholder('Search by Road Name, Road').click();
  await page.getByPlaceholder('Search by Road Name, Road').fill('tesst road tilak ');
});