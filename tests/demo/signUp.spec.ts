import {test, expect} from '@playwright/test';
import SignUpPage from '../../pages/SignUpPage';
import HomePage from '../../pages/HomePage';
import { sign } from 'crypto';

test('Sign Up',async ({page})=> {

    // sign up
    const signUpPage = new SignUpPage(page);
    const homePage = new HomePage(page);
    
    await homePage.gotoHomePage();
    await homePage.clickSignUpOrLoginButton();
    await signUpPage.newUserSignUp("Lan1","");
    await signUpPage.enterAccInformation("Lan1","123456","9","August","2015","Lan","Nguyen Thi","abc","123aksj","Singapore","289 ad","af","10000","092834982");
    await signUpPage.verifySignUpSuccessfully();

    await page.waitForTimeout(5000);
})