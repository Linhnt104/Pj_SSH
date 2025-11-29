import {test, expect} from '@playwright/test';

test('login successfully',async ({page})=>{
    await page.goto('https://automationexercise.com/');
    await page.getByRole('link',{name:' Signup / Login'}).click();
    await page.locator("input[data-qa='login-email']").fill('abc234@gmail.com');
    await page.locator("input[data-qa='login-password']").fill('123456');
    await page.locator("button[data-qa='login-button']").click();
    
})