import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('path').first().click();
  await page.locator('li').filter({ hasText: 'Check Box' }).click();
  await page.locator('#tree-node').getByRole('img').nth(3).click();
  await page.getByLabel('Toggle').click();
  await page.locator('li').filter({ hasText: /^Downloads$/ }).getByLabel('Toggle').click();
  await page.locator('li').filter({ hasText: /^DownloadsWord File\.docExcel File\.doc$/ }).getByLabel('Toggle').click();
  await page.locator('span').filter({ hasText: 'Home' }).first().click();
  await page.locator('li').filter({ hasText: /^Desktop$/ }).getByLabel('Toggle').click();
  await page.locator('li').filter({ hasText: /^Downloads$/ }).getByLabel('Toggle').click();
  await page.locator('li').filter({ hasText: 'Upload and Download' }).click();
});