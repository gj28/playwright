const { test, expect } = require('@playwright/test');

test('radio button', async ({page}) =>{
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    // male selection button 
    const maleradio = page.locator("#male")
    await maleradio.check();
    await expect(maleradio).toBeChecked
    await page.pause()
    const femaleradio = page.locator("#female")
    await femaleradio.check();
    await expect(femaleradio).toBeChecked
    await page.pause()
});