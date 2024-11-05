// @ts-check
const { test, expect } = require('@playwright/test');
test('has selectors', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('id=firstname').fill('user');
    await page.locator('id=lastname').fill('user');
    //user email
    await page.locator('id=userEmail').fill('user1@yahoo');
    //user number
    await page.locator('id=userNumber').fill('1235433213');
    await page.locator('id=currentAddress').fill('west tambaram')
    await page.locator('input:has-text("submit")').click()
    await page.pause();

});