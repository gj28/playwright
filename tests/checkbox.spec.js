// @ts-check
const { test, expect } = require('@playwright/test');
 
test('Check box Testing', async ({ page }) => {     
await page.goto('https://artoftesting.com/samplesiteforselenium');
const checkbox1 = page.locator("//input[@value='Automation']")
await checkbox1.check();
await expect(checkbox1).toBeChecked
// second Option to be checked 
const checkbox2 = page.locator("//input[@value='Performance']")
await checkbox2.check();
await expect(checkbox2).toBeChecked
await page.pause()
});