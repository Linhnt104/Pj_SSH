import {test,expect} from '@playwright/test';
import FilterProductPage from '../../pages/FilterProductPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

test('add product to cart successfully',async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const filterProductPage = new FilterProductPage(page);

    await homePage.gotoHomePage();
    await homePage.clickSignUpOrLoginButton();
    await loginPage.loginWithValidAccount("admin234@gmail.com","123456");
    await filterProductPage.scrollPage();
    await filterProductPage.viewDetailProduct();
    await filterProductPage.verifyAddedDialog();
    await filterProductPage.viewCart();
    // await filterProductPage.verifyDataCart();

    await page.waitForTimeout(5000);
    
})