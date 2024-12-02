// // building.spec.js
// import { test, expect } from '@playwright/test';
// import { BuildingPage } from '../pages/building.js';  // Adjust path if necessary
// import { login } from '../command.js';  // Adjust path if necessary

// test.describe('Building lifecycle functionalities', () => {
//   test('should add, search, and delete a building', async ({ page }) => {
//     const building = new BuildingPage(page);

//     // Log in before accessing the dashboard
//     await login(page);
    
//     // Ensure login was successful
//     await expect(page).toHaveURL('/dashboard/addressing');

//     // Navigate to building data page
//     await building.navigateToBuildingData();

//     // Add new building
//     await building.addNewBuilding();

//     // Search for the added building
//     await building.searchBuilding('Tilak Pathak');

//     // Delete the added building
//     await building.deleteBuilding('Tilak Pathak');
//   });
// });

import { test, expect } from '@playwright/test';
import { BuildingPage } from '../pages/building.js';
import { login } from '../command.js'; // Ensure this file exists

test('test the flow of add, view, and delete buildings', async ({ page }) => {
  // Log in before accessing the dashboard
  await login(page);

  // Verify successful login and navigate to Building Data Management
  await expect(page).toHaveURL('/dashboard/addressing');
  await page.goto('https://dma-dev.naxa.com.np/dashboard/addressing');
  await page.getByRole('link', { name: 'Data' }).click();
  await page.getByRole('link', { name: 'Building Data' }).click();

  const buildingPage = new BuildingPage(page); // Initialize BuildingPage instance

  // Step 1: Add a new building
  const ownerName = 'Test Owner';
  const toleName = 'Test Tole';
  await buildingPage.addBuilding(ownerName, toleName);
  await buildingPage.saveBuilding();

  // Verify if the building was added successfully
  await buildingPage.buildingDetails(ownerName);
  await expect(page.getByText(ownerName)).toBeVisible();

  // Step 2: Edit the building
  const updatedOwnerName = 'Tilak Pathak'; // Changed from 'Tilak Pathak' for privacy
  await buildingPage.editBuilding(updatedOwnerName);
  await expect(page.getByText(updatedOwnerName)).toBeVisible();

  // Step 3: Delete the building
  await buildingPage.deleteBuilding(updatedOwnerName);
  // Verify the building is deleted
  await buildingPage.buildingDetails(updatedOwnerName);
  await expect(page.getByText(updatedOwnerName)).not.toBeVisible();

  // Step 4: Download building details
  await buildingPage.downloadBuilding();

  // Assert that the download event was triggered and file name matches
  const download = await page.waitForEvent('download');
  expect(download.suggestedFilename()).toBe('building_details.csv'); // Adjust filename if necessary
});
