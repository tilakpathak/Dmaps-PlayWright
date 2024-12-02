export class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to the dashboard page
  async navigateToDashboard() {
    await this.page.goto('https://dma-dev.naxa.com.np/dashboard/addressing');
  }

  // Interact with various tabs on the dashboard
  async interactWithTabs() {
    await this.page.getByText('Building Count').click();
    await this.page.getByText('Building Density').click();
    // await this.page.getByText('Numbering Status').click();
  }

  // Download the report and return the download object
  async downloadReport() {
    await this.page.locator('button').filter({ hasText: 'download' }).click();
    const downloadPromise = this.page.waitForEvent('download');
    await this.page.getByRole('button', { name: 'Export as PNG' }).click();
    const download = await downloadPromise;
    return download;
  }

  // Switch between different information tabs
  async switchInformationTabs() {
    await this.page.getByText('general overviewdemographic').click();
    await this.page.getByRole('tab', { name: 'demographic information' }).click();
    await this.page.getByRole('tab', { name: 'road information' }).click();
  }
}
