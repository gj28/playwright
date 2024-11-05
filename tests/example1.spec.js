// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.toolsqa.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Enroll Yourself' }).click();

  // Expects page to have a heading with the name of Installation.
//  await expect(page.getByRole('heading', { name: 'Selenium Online Trainings' })).toBeVisible();
//  await expect(page.getByRole('heading', { name: 'Selenium online Trainings' })).toBeVisible({ timeout: 10000 });
});
