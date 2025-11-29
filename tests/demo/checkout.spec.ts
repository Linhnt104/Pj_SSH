import {test,expect} from '@playwright/test';
import FilterProductPage from '../../pages/AutomationExercise/FilterProductPage';
import CartPage from '../../pages/AutomationExercise/CartPage';
import LoginPage from '../../pages/AutomationExercise/LoginPage';
import HomePage from '../../pages/AutomationExercise/HomePage';
import CheckoutPage from '../../pages/AutomationExercise/CheckoutPage';
import PaymentPage from '../../pages/AutomationExercise/PaymentPage';
test('checkout after add product to cart without login',async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const filterProductPage = new FilterProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);

    await homePage.gotoHomePage();
    await homePage.clickSignUpOrLoginButton();
    await loginPage.loginWithValidAccount('admin234@gmail.com','123456');
    await homePage.goToCartPage();
    await cartPage.verifyEmptyCart();
    // await filterProductPage.scrollPage();
    // await filterProductPage.addToCart();
    // await filterProductPage.verifyAddedDialog();
    // await filterProductPage.viewCart();
    // await cartPage.goToCheckOutPage();
    await checkoutPage.goToPlaceOrder();
    await paymentPage.enterPaymentInfor('card 3', '0924892332','323','4','2023');

    await page.waitForTimeout(5000);


})
