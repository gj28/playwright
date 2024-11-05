import { test, expect } from '@playwright/test';
const { LoginPage, ProductPage, CartPage, CheckoutPage } = require('../pages/saucedemoPage');


test('SauceDemo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');

    const productPage = new ProductPage(page);
    await productPage.addToCart();
    await productPage.goToCart();

    const cartPage = new CartPage(page);
    await cartPage.checkout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillDetails('Gaurav', 'Jadhav', '444602');
    await checkoutPage.finishOrder();
});
