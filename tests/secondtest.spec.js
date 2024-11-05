import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/form-validation');
  await page.getByLabel('Contact Name').click();
  await page.getByLabel('Contact Name').fill('gaurav');
  await page.getByPlaceholder('-3456789').click();
  await page.getByPlaceholder('-3456789').fill('012-3456789');
  await page.locator('input[name="pickupdate"]').fill('2024-10-23');
  await page.getByLabel('Payment Method').selectOption('card');
  await page.getByRole('button', { name: 'Register' }).click();
});