import {test, expect} from '@playwright/test'
const LoginPage= require("../pages/loginpage")

test('login with pom', async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    const loginPage=new LoginPage(page)
    await loginPage.LoginToApplication()
}

)