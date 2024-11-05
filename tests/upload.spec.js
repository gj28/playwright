import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://practice.expandtesting.com/upload');
//   await page.getByTestId('file-input').click();
//   await page.getByTestId('file-input').setInputFiles('Unconfirmed 91578.crdownload');
//   await page.getByTestId('file-submit').click();
// });

test('test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/upload');
    await page.locator('input[name='upfile']").setInputFile('hello.js')
    await page.locator('//button[@type='submit']).click();
    await page.pause()
  });