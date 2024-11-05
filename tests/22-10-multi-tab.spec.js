import {test,expect } from '@playwright/test'

test ('multi Tab test', async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    const [newPage]=await Promise.all(
        [
            context.waitForEvent('page'),
            page.locator("(//a[contains(@href,'facebook')])[1]").click()
        ]
    )
    await newPage.waitForSelector("//input[@name='email']");
    await newPage.locator("(//input[@name='email'])").fill("gaurav@gmail.com")
    await page.pause()
})


// import { test, expect } from '@playwright/test';

// test('multi Tab test', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto('https://freelance-learn-automation.vercel.app/login');

//   // Wait for the new page to open after the click
//   const [newPage] = await Promise.all([
//     context.waitForEvent('page'), // Wait for the new page event
//     page.locator("(//a[contains(@href,'facebook')])[1]").click(), // Click the Facebook link
//   ]);

//   await newPage.waitForLoadState('load');

//   await newPage.waitForSelector("//input[@name='email']");

//   await newPage.locator("//input[@name='email']").fill("gaurav@gmail.com");

//   await page.pause(); 
// });
