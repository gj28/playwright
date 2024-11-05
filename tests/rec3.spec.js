import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button452442"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="remove"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByText('A red light isn\'t the desired').click();
  await page.locator('[data-test="item-0-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-1-title-link"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  await page.getByText('Swag Labs').click();
  await page.locator('[data-test="about-sidebar-link"]').click();
});