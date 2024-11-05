// @ts-check
const { test, expect } = require('@playwright/test');

test('Implicit Roles', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole("link",{name:"Hello,sign in Account & Lists"}).click()
  await page.getByRole("textbox",{name:"Email or mobile phone number"}).fill("user1")
  await page.getByRole("button",{name:"Continue"}).click()
  await page.pause()
});

test('Aria Attributes', async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    await page.getByRole("textbox",{name:"Email or mobile phone number"}).fill("Dell Laptop")
    await page.pause()
  });

