import { test, expect } from '@playwright/test';
import { login } from '../command.js';  // Import the login function from command.js

test('test the flow of add buildings, delete buildings', async ({ page }) => {

  // Log in before accessing the dashboard
  await login(page);  // Call the login function from command.js

  // Verify successful login (ensure we land on the dashboard)
  await expect(page).toHaveURL('/dashboard/addressing');

  // await page.goto('https://dma-dev.naxa.com.np/dashboard/addressing');
  //Navigate to the Building Data page
  await page.getByRole('link', { name: 'Data' }).click();
  await page.getByRole('link', { name: 'Building Data' }).click();

  await page.getByRole('button', { name: 'add Add New Building' }).click();
  await page.getByText('Select Building Association Typearrow_drop_down').click();
  await page.getByText('Main').click();
  await page.getByText('Select Building Ownershiparrow_drop_down').click();
  await page.getByText('Governmental', { exact: true }).click();
  await page.getByText('Select Permanency of Buildingarrow_drop_down').click();
  await page.getByText('Temporary', { exact: true }).click();
  await page.getByPlaceholder('Enter Owner Name').click();
  await page.getByPlaceholder('Enter Owner Name').fill('Tilak Pathak');
  await page.getByPlaceholder('Enter tole name').click();
  await page.getByPlaceholder('Enter tole name').fill('Shantitole');
  await page.getByRole('button', { name: 'Next chevron_right' }).click();
  await page.waitForTimeout(30000); // Waits for 1 minute (60,000 ms)
  await page.getByRole('button', { name: 'center_focus_weak' }).click();
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByRole('button', { name: 'add' }).click();
  await page.getByLabel('Map').click({
    position: {
      x: 237,
      y: 372
    }
  });
  await page.getByLabel('Map').click({
    position: {
      x: 229,
      y: 388
    }
  });
  await page.getByLabel('Map').click({
    position: {
      x: 248,
      y: 396
    }
  });
  await page.getByLabel('Map').dblclick({
    position: {
      x: 252,
      y: 376
    }
  });
  await page.getByRole('button', { name: 'Next chevron_right' }).click();
  await page.waitForTimeout(30000); // Waits for 1 minute (60,000 ms)
  await page.getByLabel('Map').click({
    position: {
      x: 234,
      y: 381
    }
  });
  await page.getByRole('button', { name: 'Next chevron_right' }).click();
  await page.waitForTimeout(30000); // Waits for 1 minute (60,000 ms)
  await page.getByLabel('Map').click({
    position: {
      x: 218,
      y: 369
    }
  });
  await page.waitForTimeout(30000); // Waits for 1 minute (60,000 ms)
  await page.getByRole('button', { name: 'Next chevron_right' }).dblclick();
  await page.getByText('Select Registration Typearrow_drop_down').click();
  await page.getByText('Registered and completed').click();
  await page.getByPlaceholder('Enter no of Building Floor').click();
  await page.getByPlaceholder('Enter no of Building Floor').fill('2');
  await page.getByText('Select Structure of Buildingarrow_drop_down').click();
  await page.getByText('Framed').click();
  await page.getByText('Select Building Roof Typearrow_drop_down').click();
  await page.getByText('RCC').click();
  await page.getByText('Select Building Use Categoryarrow_drop_down').click();
  await page.getByText('Residential', { exact: true }).click();
  await page.getByPlaceholder('Select Specific Building Use').click();
  await page.locator('li').filter({ hasText: 'Hospitality' }).click();
  await page.locator('div').filter({ hasText: /^infoInfo$/ }).locator('i').click();
  
  //click the uplad image are 
  await page.getByText('cloud_uploadundefined').first().click();
  await page.waitForEvent('filechooser')
    .then(fileChooser => fileChooser.setFiles('../assets/image-1.png'));
  
  // click the upload image area
  await page.getByText('cloud_uploadundefined').nth(1).click();
  // Upload the second image
  await page.waitForEvent('filechooser')
    .then(fileChooser => fileChooser.setFiles('../assets/image-2.png'));
  

  await page.getByRole('button', { name: 'Next chevron_right' }).click();
  await page.getByText('keyboard_arrow_down').nth(1).click();
  await page.getByText('keyboard_arrow_down').first().click();
  await page.getByRole('button', { name: 'Complete chevron_right' }).click();
  await page.getByRole('button', { name: 'Submit Anyways chevron_right' }).click();
  await page.waitForLoadState('networkidle'); 
  // await page.waitForTimeout(30000); // Waits for 1 minute (60,000 ms)
  await page.getByRole('button', { name: 'close Close modal' }).dblclick();
  await page.getByRole('button', { name: 'close Close modal' }).dblclick();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'download' }).click();
  const download = await downloadPromise;
  await page.getByPlaceholder('Search by HN, Owner Name or').click();
  await page.getByPlaceholder('Search by HN, Owner Name or').fill('Tilak Pathak');
  await page.getByRole('row').getByRole('button').first().click(); // moreinfo button
  await page.getByRole('heading', { name: 'Building Structure' }).click();
  await page.getByRole('heading', { name: 'Media' }).click();
  await page.getByRole('heading', { name: 'Road Inventory Information' }).click();
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'download' }).click();
  const download1 = await download1Promise;
  await page.getByRole('button', { name: 'close Close modal' }).click();
  await page.getByRole('button', { name: 'history' }).click();
  await page.getByRole('button', { name: 'arrow_back' }).click();
  await page.getByRole('button', { name: 'edit' }).click();
  await page.getByPlaceholder('Enter Owner Name').click();
  await page.getByPlaceholder('Enter Owner Name').fill('Tilak Pathak Testing');
  await page.locator('div:nth-child(6) > div > div > .naxatw-bg-primary-400 > .naxatw-flex > .naxatw-cursor-pointer').click();
  // Click the "Complete" button and confirm "Submit Anyways"
  await page.getByRole('button', { name: 'Complete chevron_right' }).click();
  await page.getByRole('button', { name: 'Submit Anyways chevron_right' }).click();

  // Navigate to the building data page and wait for it to load
  await page.goto('https://dma-dev.naxa.com.np/data-management/building-data');
  await page.waitForLoadState('networkidle');  // Wait for network activity to finish

  // Perform search and wait for results
  await page.getByPlaceholder('Search by HN, Owner Name or').click();
  await page.getByPlaceholder('Search by HN, Owner Name or').fill('Tilak Pathak Testing');
  await page.waitForTimeout(1000);  // Optional: Small delay to ensure search results load

  // Click the three-dot button in the row where the search result is
  await page.getByRole('row', { name: 'Tilak Pathak Testing' })  // Filter for correct row
    .getByRole('button')
    .nth(2)
    .click();

  // Click delete confirmation
  await page.getByText('deleteDelete').click();
  await page.getByPlaceholder('Type Delete').fill('delete');
  await page.getByRole('button', { name: 'delete Confirm' }).click();
});