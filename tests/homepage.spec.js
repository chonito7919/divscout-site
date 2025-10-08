const { test, expect } = require('@playwright/test');

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/DivScout/);
  });

  test('should display hero section with correct content', async ({ page }) => {
    await page.goto('/');

    // Check hero heading
    await expect(page.locator('.hero h1')).toContainText('DivScout');

    // Check tagline
    await expect(page.locator('.tagline')).toContainText('Clean dividend data from SEC filings');

    // Check CTA buttons are visible
    await expect(page.locator('.hero-cta >> text=Launch Dashboard')).toBeVisible();
    await expect(page.locator('.hero-cta >> text=Learn More')).toBeVisible();
  });

  test('should display featured blog post section', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.badge')).toContainText('Featured Article');
    await expect(page.locator('.featured-content h2')).toContainText('I Built a Tool to Parse SEC Dividend Data');
  });

  test('should display all feature cards', async ({ page }) => {
    await page.goto('/');

    const features = [
      'SEC Data Extraction',
      'Smart Validation',
      'Clean Database',
      'Dividend Calendar',
      'Company Tracking',
      'Mobile-First Design'
    ];

    for (const feature of features) {
      await expect(page.locator('.feature-card h3', { hasText: feature })).toBeVisible();
    }
  });

  test('should display tech stack section', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.tech-stack >> text=Backend')).toBeVisible();
    await expect(page.locator('.tech-stack >> text=Frontend')).toBeVisible();
    await expect(page.locator('.tech-stack >> text=Infrastructure')).toBeVisible();

    // Check specific technologies
    await expect(page.locator('.tech-stack >> text=Python 3.13 parser')).toBeVisible();
    await expect(page.locator('.tech-stack >> text=Flask REST API')).toBeVisible();
    await expect(page.locator('.tech-stack >> text=PostgreSQL database')).toBeVisible();
  });

  test('should display how it works section', async ({ page }) => {
    await page.goto('/');

    const steps = ['Extract', 'Validate', 'Store', 'Display'];

    for (const step of steps) {
      await expect(page.locator('.step h3', { hasText: step })).toBeVisible();
    }
  });

  test('should display CTA section', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('.cta-section h2')).toContainText('Start Exploring Dividend Data');
    await expect(page.locator('.cta-section >> text=Launch Dashboard')).toBeVisible();
    await expect(page.locator('.cta-section >> text=View on GitHub')).toBeVisible();
  });
});
