const { test, expect } = require('@playwright/test');

test('Invalid Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'wrong_user');

    await page.fill('#password', 'wrong_password');

    await page.click('#login-button');

});
test('Valid Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');

    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);

});
test('Locked User Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'locked_out_user');

    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await expect(
        page.locator('[data-test="error"]')
    ).toBeVisible();

});
test('Verify Products Load', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');

    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await expect(
        page.locator('.inventory_item')
    ).toHaveCount(6);

});
test('Add Item To Cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');

    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-backpack');

    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveText('1');

});
test('Remove Item From Cart', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-backpack');

    await page.click('#remove-sauce-labs-backpack');

    await expect(
        page.locator('.shopping_cart_badge')
    ).toHaveCount(0);

});
test('Checkout Flow', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-backpack');

    await page.click('.shopping_cart_link');

    await page.click('#checkout');

    await page.fill('#first-name', 'Dev');
    await page.fill('#last-name', 'Tester');
    await page.fill('#postal-code', 'AL1');

    await page.click('#continue');

    await expect(page).toHaveURL(/checkout-step-two/);

});
test('Order Confirmation', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-backpack');

    await page.click('.shopping_cart_link');

    await page.click('#checkout');

    await page.fill('#first-name', 'Dev');
    await page.fill('#last-name', 'Tester');
    await page.fill('#postal-code', 'AL1');

    await page.click('#continue');
    await page.click('#finish');

    await expect(
        page.locator('.complete-header')
    ).toHaveText('Thank you for your order!');

});