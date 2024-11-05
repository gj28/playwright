import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();


  await page.waitForTimeout(5000)
  const options= await page.$$("//div[@role='listbox']//span")

  for ( let option of options){
    const jobTitle=await option.textContent()
    //console.log(jobTitle)
    if (jobTitle.includes('QA Engineer'))
    {
        await option.click()
        break
    }
  }


//   await page.getByRole('link', { name: 'PIM' }).click();
//   await page.getByText('-- Select --').nth(1).click();
// await page.locator('.oxd-select-wrapper').click();
});