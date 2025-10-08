const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {
  test('should have working header navigation', async ({ page }) => {
    await page.goto('/');

    // Check logo link
    await expect(page.locator('.logo a')).toHaveAttribute('href', '/');

    // Check nav links exist
    await expect(page.locator('nav >> text=Home')).toBeVisible();
    await expect(page.locator('nav >> text=About')).toBeVisible();
    await expect(page.locator('nav >> text=Launch App')).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');

    await page.click('nav >> text=About');
    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator('.page-header h1')).toContainText('About DivScout');
  });

  test('should navigate back to Home', async ({ page }) => {
    await page.goto('/about');

    await page.click('nav >> text=Home');
    await expect(page).toHaveURL(/divscout\.com\/$/);
    await expect(page.locator('.hero h1')).toContainText('DivScout');
  });

  test('should have footer with links', async ({ page }) => {
    await page.goto('/');

    // Check footer sections
    await expect(page.locator('footer h3:has-text("DivScout")')).toBeVisible();
    await expect(page.locator('footer h3:has-text("Links")')).toBeVisible();
    await expect(page.locator('footer h3:has-text("Legal")')).toBeVisible();

    // Check disclaimer in footer
    await expect(page.locator('footer >> text=For educational and informational purposes only')).toBeVisible();
  });
});

test.describe('External Links', () => {
  test('should have correct divscout.app links', async ({ page }) => {
    await page.goto('/');

    const appLinks = page.locator('a[href="https://divscout.app"]');
    await expect(appLinks.first()).toHaveAttribute('target', '_blank');
  });

  test('should have correct GitHub links', async ({ page }) => {
    await page.goto('/');

    // Backend repo
    const backendLink = page.locator('a[href="https://github.com/chonito7919/DivScout"]').first();
    await expect(backendLink).toHaveAttribute('target', '_blank');

    // Frontend repo
    const frontendLink = page.locator('a[href="https://github.com/chonito7919/divscout-web"]').first();
    await expect(frontendLink).toHaveAttribute('target', '_blank');
  });

  test('should have correct DEV Community blog link', async ({ page }) => {
    await page.goto('/');

    const blogLink = page.locator('a[href*="dev.to/chonito7919"]');
    await expect(blogLink).toBeVisible();
    await expect(blogLink).toHaveAttribute('target', '_blank');
  });

  test('www should redirect to non-www', async ({ page, context }) => {
    // This test checks the .htaccess redirect
    const response = await page.goto('https://www.divscout.com');

    // Should redirect to non-www
    expect(page.url()).toBe('https://divscout.com/');
  });
});
