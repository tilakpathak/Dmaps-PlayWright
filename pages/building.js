// // building.js
// export class BuildingPage {
//   constructor(page) {
//     this.page = page;
//   }

//   async navigateTo(url) {
//     await this.page.goto(url);
//   }

//   // async navigateToDashboard() {
//   //   await this.navigateTo('https://dma-dev.naxa.com.np/dashboard/addressing');
//   // }

//   async navigateToBuildingData() {
//     await page.getByRole('link', { name: 'Data' }).click();
//     await page.getByRole('link', { name: 'Building Data' }).click();
//   }

//   async selectDropdownOption(dropdownText, optionText) {
//     await this.page.getByText(dropdownText).click();
//     await this.page.getByText(optionText, { exact: true }).click();
//   }

//   async fillInputField(placeholder, value) {
//     const input = this.page.getByPlaceholder(placeholder);
//     await input.click();
//     await input.fill(value);
//   }

//   async addNewBuilding() {
//     await this.page.getByRole('button', { name: 'add Add New Building' }).click();
//     await this.selectDropdownOption('Select Building Association Typearrow_drop_down', 'Main');
//     await this.selectDropdownOption('Select Building Ownershiparrow_drop_down', 'Governmental');
//     await this.selectDropdownOption('Select Permanency of Buildingarrow_drop_down', 'Temporary');
    
//     await this.fillInputField('Enter Owner Name', 'Tilak Pathak');
//     await this.fillInputField('Enter tole name', 'shantitole');
//     await this.page.getByRole('button', { name: 'Next chevron_right' }).click();
//     await this.page.getByRole('button', { name: 'add' }).click();
//     await this.page.getByRole('button', { name: 'add' }).click();
//     // await this.page.getByRole('button', { name: 'add' }).click();
    
//     // Map interactions (coordinates can be customized)
//     await this.page.getByLabel('Map').click({
//       position: {
//         x: 266,
//         y: 181
//       }
//     });
//     await this.page.getByLabel('Map').click({
//       position: {
//         x: 265,
//         y: 223
//       }
//     });
//     await this.page.getByLabel('Map').click({
//       position: {
//         x: 313,
//         y: 207
//       }
//     });
//     await this.page.getByLabel('Map').dblclick({
//       position: {
//         x: 303,
//         y: 176
//       }
//     });
//     await this.page.getByRole('button', { name: 'Next chevron_right' }).click();
//     await this.page.getByLabel('Map').click({
//       position: {
//         x: 283,
//         y: 180
//       }
//     });
//     await this.page.getByRole('button', { name: 'Next chevron_right' }).click();
//     await this.page.getByLabel('Map').click({
//       position: {
//         x: 253,
//         y: 147
//       }
//     });

//     await this.page.getByRole('button', { name: 'Next chevron_right' }).click();
//     await this.fillInputField('Enter no of Building Floor', '2');
//     await this.selectDropdownOption('Select Structure of Buildingarrow_drop_down', 'Framed');
//     await this.selectDropdownOption('Select Building Roof Typearrow_drop_down', 'RCC');
//     await this.selectDropdownOption('Select Building Use Categoryarrow_drop_down', 'Residential');
//     await this.page.getByPlaceholder('Select Specific Building Use').click();
//     await this.page.locator('li').filter({ hasText: 'Hospitality' }).click();
    
//     await this.page.getByRole('button', { name: 'Next chevron_right' }).click();
//     await this.selectDropdownOption('Select Registration Typearrow_drop_down', 'Registered and completed');
//     await this.page.getByRole('button', { name: 'Complete chevron_right' }).click();
//     await this.page.getByRole('button', { name: 'Submit Anyways chevron_right' }).click();
//   }

//   async searchBuilding(ownerName) {
//     await this.navigateToBuildingData();
//     await this.fillInputField('Search by HN, Owner Name or', ownerName);
//     await this.page.getByRole('button', { name: 'map' }).first().click();
//   }

//   async deleteBuilding(ownerName) {
//     await this.navigateToBuildingData();
//     await this.fillInputField('Search by HN, Owner Name or', ownerName);
//     await this.page.getByRole('button', { name: 'more_vert' }).first().click();
//     await this.page.getByText('Delete', { exact: true }).click();
//     await this.fillInputField('Type Delete', 'delete');
//     await this.page.getByRole('button', { name: 'delete Confirm' }).click();
//   }
// }

// building.js
export class BuildingPage {
  constructor(page) {
    this.page = page;  // Store the page instance for later use
  }

  // Method to add a building
  async addBuilding(ownerName, toleName) {
    await this.page.getByRole('button', { name: 'add Add New Building' }).click();
    await this.page.getByText('Select Building Association Typearrow_drop_down').click();
    await this.page.getByText('Main').click();
    await this.page.getByText('Select Building Ownershiparrow_drop_down').click();
    await this.page.getByText('Governmental', { exact: true }).click();
    await this.page.getByText('Select Permanency of Buildingarrow_drop_down').click();
    await this.page.getByText('Temporary', { exact: true }).click();
    await this.page.getByPlaceholder('Enter Owner Name').fill(ownerName);
    await this.page.getByPlaceholder('Enter tole name').fill(toleName);
    await this.page.getByRole('button', { name: 'Next chevron_right' }).click();
    await this.page.waitForTimeout(30000); // Wait for 30 seconds
    // await this.page.getByRole('button', { name: 'center_focus_weak' }).click();
    // await this.page.getByRole('button', { name: 'add' }).click();
    // await this.page.getByRole('button', { name: 'add' }).click();
    // await this.page.getByRole('button', { name: 'add' }).click();

    // // Click on map positions
    // await this.page.getByLabel('Map').click({ position: { x: 237, y: 372 } });
    // await this.page.getByLabel('Map').click({ position: { x: 229, y: 388 } });
    // await this.page.getByLabel('Map').click({ position: { x: 248, y: 396 } });
    // await this.page.getByLabel('Map').dblclick({ position: { x: 252, y: 376 } });

    // await this.page.getByRole('button', { name: 'Next chevron_right' }).click();
    // await this.page.waitForTimeout(30000); // Wait for 30 seconds
    // await this.page.getByLabel('Map').click({ position: { x: 234, y: 381 } });
    // await this.page.getByRole('button', { name: 'Next chevron_right' }).click();
    // await this.page.waitForTimeout(30000); // Wait for 30 seconds
    // await this.page.getByLabel('Map').click({ position: { x: 218, y: 369 } });
    // await this.page.waitForTimeout(30000); // Wait for 30 seconds
    // await this.page.getByRole('button', { name: 'Next chevron_right' }).dblclick();

    // Fill in registration and building details
    await this.page.getByText('Select Registration Typearrow_drop_down').click();
    await this.page.getByText('Registered and completed').click();
    await this.page.getByPlaceholder('Enter no of Building Floor').fill('2');
    await this.page.getByText('Select Structure of Buildingarrow_drop_down').click();
    await this.page.getByText('Framed').click();
    await this.page.getByText('Select Building Roof Typearrow_drop_down').click();
    await this.page.getByText('RCC').click();
    await this.page.getByText('Select Building Use Categoryarrow_drop_down').click();
    await this.page.getByText('Residential', { exact: true }).click();
    await this.page.getByPlaceholder('Select Specific Building Use').click();
    await this.page.locator('li').filter({ hasText: 'Hospitality' }).click();
    await this.page.locator('div').filter({ hasText: /^infoInfo$/ }).locator('i').click();
  }

  // // Method to upload images for the building
  // async uploadBuildingImages() {
  //   await this.page.getByText('cloud_uploadundefined').first().click();
  //   const fileChooser = await this.page.waitForEvent('filechooser');
  //   await fileChooser.setFiles('../assets/image-1.png');

  //   await this.page.getByText('cloud_uploadundefined').nth(1).click();
  //   const fileChooser2 = await this.page.waitForEvent('filechooser');
  //   await fileChooser2.setFiles('../assets/image-2.png');
  // }

  // Method to save the building
  async saveBuilding() {
    await this.page.getByRole('button', { name: 'Next chevron_right' }).click();
    await this.page.getByText('keyboard_arrow_down').nth(1).click();
    await this.page.getByText('keyboard_arrow_down').first().click();
    await this.page.getByRole('button', { name: 'Complete chevron_right' }).click();
    await this.page.getByRole('button', { name: 'Submit Anyways chevron_right' }).click();
    await this.page.waitForLoadState('networkidle');
    await this.page.getByRole('button', { name: 'close Close modal' }).dblclick();
    // await this.page.getByRole('button', { name: 'close Close modal' }).dblclick();
  }

  // Method to download building data
  async downloadBuilding() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.page.getByRole('button', { name: 'download' }).click();
    await downloadPromise;
  }

  // Method to view building details
  async buildingDetails(ownerName) {
    await this.page.getByPlaceholder('Search by HN, Owner Name or').fill(ownerName);
    await this.page.getByRole('row').getByRole('button').first().click(); // Click on more info
    await this.page.getByRole('heading', { name: 'Building Structure' }).click();
    await this.page.getByRole('heading', { name: 'Media' }).click();
    await this.page.getByRole('heading', { name: 'Road Inventory Information' }).click();

    const download1Promise = this.page.waitForEvent('download');
    await this.page.getByRole('button', { name: 'download' }).click();
    await download1Promise;

    await this.page.getByRole('button', { name: 'close Close modal' }).click();
    await this.page.getByRole('button', { name: 'history' }).click();
    await this.page.getByRole('button', { name: 'arrow_back' }).click();
  }

  // Method to edit a building
  async editBuilding(updatedOwnerName) {
    await this.page.getByRole('button', { name: 'edit' }).click();
    await this.page.getByPlaceholder('Enter Owner Name').fill(updatedOwnerName);
    await this.page.locator('div:nth-child(6) > div > div > .naxatw-bg-primary-400 > .naxatw-flex > .naxatw-cursor-pointer').click();
    await this.page.getByRole('button', { name: 'Complete chevron_right' }).click();
    await this.page.getByRole('button', { name: 'Submit Anyways chevron_right' }).click();

    // Navigate to the building data page and wait for it to load
    await this.page.goto('https://dma-dev.naxa.com.np/data-management/building-data');
    await this.page.waitForLoadState('networkidle'); // Wait for network activity to finish

    // Perform search and wait for results
    await this.page.getByPlaceholder('Search by HN, Owner Name or').fill(updatedOwnerName);
    await this.page.waitForTimeout(1000); // Optional: Small delay to ensure search results load
  }

  // Method to delete a building
  async deleteBuilding(updatedOwnerName) {
    await this.page.getByPlaceholder('Search by HN, Owner Name or').fill(updatedOwnerName);
    await this.page.getByRole('row', { name: updatedOwnerName })
      .getByRole('button')
      .nth(2)
      .click();
    await this.page.getByText('deleteDelete').click();
    await this.page.getByPlaceholder('Type Delete').fill('delete');
    await this.page.getByRole('button', { name: 'delete Confirm' }).click();
  }
}
