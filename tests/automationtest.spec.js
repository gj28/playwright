const { test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require('./five.json')));

test.describe("Signup form automation", function () {
    for (const data of testdata) {
        test.describe(`Signup with data ${data.id}`, function () {
            test('Data-driven form submission', async ({ page }) => {
                await page.goto('https://freelance-learn-automation.vercel.app/signup');

                await page.getByPlaceholder('Name').fill(data.name);
                await page.getByPlaceholder('Email').fill(data.email);
                await page.getByPlaceholder('Password').fill(data.password);
                for (const skill of data.skillsToCheck) {
                    await page.getByLabel(skill).check();
                    await page.waitForTimeout(1000);
                }

                for (const skill of data.skillsToUncheck) {
                    await page.getByLabel(skill).uncheck();
                    await page.waitForTimeout(1000);
                }
                await page.locator('#state').selectOption(data.state);
                await page.locator('#hobbies').selectOption(data.hobbies);
                await page.getByRole('button', { name: 'Sign up' }).click();
            });
        });
    }
});

test.afterAll('Page close',async({page})=>{
    await page.close()
})