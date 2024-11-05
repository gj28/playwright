const { test, expect } = require('@playwright/test');

test('has selectors', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('user');
    await page.locator('id=password').fill('secret_sauce');
    //using css selectors - #login-button
    //await page.locator('#login-button').click();
    // using x path
    await page.locator('xpath=//input[@name="password"]').fill('user2');
    //by using text
    await page.locator('input:has-text("login")').click();
    await page.pause();

    
})