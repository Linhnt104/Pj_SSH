import {test,expect} from '@playwright/test';

test('register successfully',async({page})=> {
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    await page.getByRole('link',{name:'Register'});
    await page.getByLabel('Female').click();
    await page.locator("input[name='FirstName']").fill('Linh');
    await page.locator("input[name='LastName']").fill('Nguyen');
    
    function genEmail(prefix = 'linhnguyen', domain='gmail.com'){
        const randomNum = Math.floor(Math.random() * 9999) + 1;
        return `${prefix}${randomNum}@${domain}`;
    }
    await page.locator("input[name='Email']").fill(genEmail());
    await page.locator("input[name='Company']").fill('Company');
    await page.locator("input[name='Password']").fill('123456');
    await page.locator("input[name='ConfirmPassword']").fill('123456');

    await page.getByRole('button',{name:'Register'}).click();
    await expect(page.locator("//div[@class='master-wrapper-content']//div[@class='result']")).toHaveText('Your registration completed');
    await page.waitForTimeout(5000);
})