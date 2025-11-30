import {test,expect} from '@playwright/test';
import FilterProductPage from '../../pages/AutomationExercise/FilterProductPage';
import LoginPage from '../../pages/AutomationExercise/LoginPage';
import HomePage from '../../pages/AutomationExercise/HomePage';

test('add product to cart successfully',async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const filterProductPage = new FilterProductPage(page);

    await homePage.gotoHomePage();
    await homePage.clickSignUpOrLoginButton();
    await loginPage.loginWithValidAccount("admin234@gmail.com","123456");
    await filterProductPage.scrollPage();
    // await filterProductPage.viewDetailProduct();
    await filterProductPage.verifyAddedDialog();
    await filterProductPage.viewCart();
    // await filterProductPage.verifyDataCart();

    await page.waitForTimeout(9000);

})