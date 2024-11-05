import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');
  await page.getByTestId('round-trip-radio-button').locator('circle').click();
  await page.getByTestId('to-testID-origin').getByRole('textbox').click();
  await page.getByTestId('to-testID-origin').getByRole('textbox').fill('che');
  await page.getByText('Chennai', { exact: true }).click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').fill('nagp');
  await page.getByTestId('to-testID-destination').getByRole('textbox').click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').fill('del');
  await page.getByTestId('to-testID-destination').getByRole('textbox').click();
  await page.getByTestId('to-testID-destination').getByRole('textbox').fill('de');
  await page.locator('div').filter({ hasText: /^Delhi$/ }).first().click();
  await page.getByText('Tue, 29 Oct').click();
  await page.getByTestId('departure-date-dropdown-label-test-id').getByTestId('svg-img').click();
  await page.getByTestId('undefined-month-November-2024').getByTestId('undefined-calendar-day-8').locator('div').first().click();
  await page.getByTestId('undefined-month-November-2024').getByTestId('undefined-calendar-day-8').getByText('8').click();
  await page.getByTestId('return-date-dropdown-label-test-id').getByTestId('svg-img').click();
  await page.getByTestId('undefined-month-December-2024').getByTestId('undefined-calendar-day-5').getByText('5').click();
  await page.locator('div:nth-child(2) > div > div > div > div > div > svg > circle').first().click();
  await page.locator('div:nth-child(4) > div > div > div > svg > circle').click();
  await page.getByTestId('home-page-flight-cta').click();
  await page.getByRole('img').locator('rect').click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
  await page.getByText('8,261').click();
});