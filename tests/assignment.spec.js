import { test, expect } from '@playwright/test';

test.describe('kitchen', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');
  });

  test('Kitchen Link Test', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/ingredients/links');
    await page.locator('text=The Kitchen - Table').click();
    await page.pause();
  });

});
