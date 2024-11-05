const { test, expect } = require('@playwright/test');
const testdata=JSON.parse(JSON.stringify(require("./testdata2.json")))

test.describe("data driven login",function()
{
    for(const data of testdata){
        test.describe(`login with users ${data.id}`, function()
    {
        test("data driven test",async ({page})=>{
            await page.goto("https://freelance-learn-automation.vercel.app/login")
            await page.locator("id=email1").fill(data.username)
            await page.locator("id=password1").fill(data.password)
            await page.pause()
        })
    }
    )
    }
}


)
 
