class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = '[data-test="username"]';
        this.password = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
    }

    async login(username, password) {
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}

class ProductPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
        this.cartLink = '[data-test="shopping-cart-link"]';
    }

    async addToCart() {
        await this.page.locator(this.addToCartButton).click();
    }

    async goToCart() {
        await this.page.locator(this.cartLink).click();
    }
}

class CartPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = '[data-test="checkout"]';
    }

    async checkout() {
        await this.page.locator(this.checkoutButton).click();
    }
}

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = '[data-test="firstName"]';
        this.lastNameField = '[data-test="lastName"]';
        this.postalCodeField = '[data-test="postalCode"]';
        this.continueButton = '[data-test="continue"]';
        this.finishButton = '[data-test="finish"]';
        this.backToProductsButton = '[data-test="back-to-products"]';
    }

    async fillDetails(firstName, lastName, postalCode) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.postalCodeField).fill(postalCode);
        await this.page.locator(this.continueButton).click();
    }

    async finishOrder() {
        await this.page.locator(this.finishButton).click();
        await this.page.locator(this.backToProductsButton).click();
    }
}

module.exports = { LoginPage, ProductPage, CartPage, CheckoutPage };
