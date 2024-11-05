import { test, Page } from '@playwright/test';
test.describe.configure({mode:'serial'});
let page = Page;
test.beforeAll('Login', async ({ browser }) => {
    page=await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
});
test.afterAll(async()=>{
    await page.close()
})
test('first test',async()=>{
   
})
test('second test',async()=>{
   
})