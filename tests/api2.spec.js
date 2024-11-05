const { test, expect } = require('@playwright/test');
const testdata=JSON.parse(JSON.stringify(require("./testapi.json")))

 
test("data driven test",async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("id=email1").fill(testdata.username)
    await page.locator("id=password1").fill(testdata.Password)
    await page.pause()
})
