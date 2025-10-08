const { test, expect } = require('@playwright/test');

test.describe('About Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/about');
    await expect(page).toHaveTitle(/About.*DivScout/);
  });

  test('should display page header', async ({ page }) => {
    await page.goto('/about');

    await expect(page.locator('.page-header h1')).toContainText('About DivScout');
    await expect(page.locator('.lead')).toContainText('Building a clean dividend payment database');
  });

  test('should display all content sections', async ({ page }) => {
    await page.goto('/about');

    const sections = ['Mission', 'Data Quality', 'Open Source', 'Current Status', 'Important Disclaimer'];

    for (const section of sections) {
      await expect(page.locator('.about-section h2', { hasText: section })).toBeVisible();
    }
  });

  test('should display GitHub repo links', async ({ page }) => {
    await page.goto('/about');

    await expect(page.locator('.about-content a[href*="github.com/chonito7919/DivScout"]')).toBeVisible();
    await expect(page.locator('.about-content a[href*="github.com/chonito7919/divscout-web"]')).toBeVisible();
  });

  test('should display disclaimer box', async ({ page }) => {
    await page.goto('/about');

    const disclaimer = page.locator('.disclaimer-box');
    await expect(disclaimer).toBeVisible();
    await expect(disclaimer).toContainText('educational and informational purposes only');
    await expect(disclaimer).toContainText('does not constitute financial advice');
  });

  test('should display data quality details', async ({ page }) => {
    await page.goto('/about');

    await expect(page.locator('text=confidence scoring')).toBeVisible();
    await expect(page.locator('text=≥0.8 score')).toBeVisible();
  });
});
