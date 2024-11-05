import {test,expect } from '@playwright/test'

test ('Assertion Testing', async({page})=>{
   
    await page.goto('https://kitchen.applitools.com/');

    const textContent=await page.textContent('h1')
    console.log(textContent);
})