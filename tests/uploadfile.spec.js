const { test, expect } = require('@playwright/test');

test('drop down box testing', async ({ page }) => {
  await page.goto('https://cgi-lib.berkeley.edu/ex/fup.html');
  await page.locator("input[name='upfile']").setInputFiles("C:/Users/sayed.nasooha/OneDrive - ascendion/Desktop/New Text Document.txt");
  await page.locator("//input[@value='Press']").click()
  await page.pause()
});