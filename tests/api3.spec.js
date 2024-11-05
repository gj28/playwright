const { test, expect } = require('@playwright/test');
const testdata=JSON.parse(JSON.stringify(require("./testapi.json")))

 
test("data driven test",async ({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
    await page.getByPlaceholder("Username").fill(testdata.username)
    await page.getByPlaceholder("Password").fill(testdata.Password)
    await page.click('#login-button');
})
