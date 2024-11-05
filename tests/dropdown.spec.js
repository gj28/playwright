// @ts-check
const { test, expect } = require('@playwright/test');

test('drop down box testing', async ({ page }) => {
  await page.goto('http://autopract.com/selenium/dropdown1/');
  //custom select -item1
  await page.locator('.custom-select').selectOption('item2')
  await page.pause()
});
