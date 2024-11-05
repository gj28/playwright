import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('practice');

  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

  await page.getByRole('button', { name: 'Login' }).click();


  await page.pause();

});
