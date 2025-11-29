import {test, expect} from '@playwright/test';
import LoginNopEco from '../../pages/NopEco/LoginNopEco';
import HomePageNopEc from '../../pages/NopEco/HomePageNopEc';

test('login page successfully', async ({page})=> {
    const homePage = new HomePageNopEc(page);
    const loginPage = new LoginNopEco(page);
    await homePage.goToHomePage();
    await loginPage.loginWithValidAcc('admin234@gmail.com','123456');
    await page.waitForTimeout(5000);
})