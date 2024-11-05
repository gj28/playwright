const { test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("./testdatat5.json")));

test.describe("Data-driven login", function() {
    for (const data of testdata) {
        test.describe(`Login with user ${data.id}`, function() {
            test("Data-driven test", async ({ page }) => {
                await page.goto('https://www.saucedemo.com/');
                await page.locator('[data-test="username"]').fill(data.username);
                await page.locator('[data-test="password"]').fill(data.password);
                await page.locator('[data-test="login-button"]').click()

                await page.getByRole('button', { name: 'Open Menu' }).click();
                await page.locator('[data-test="logout-sidebar-link"]').click();
                await page.waitForTimeout(5000);
            });
        });
    }
});
