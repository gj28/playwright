import {test,expect } from '@playwright/test'

test ('iframe test', async({page})=>{
    await page.goto('https://docs.oracle.com/javase/8/docs/api/');
    //store frame value in i frame
    const iframe=await page.frameLocator("//frame[@name='packageListFrame']")

    await iframe.getByRole("link",{name:"java.applet"}).click()
    await page.pause()
})