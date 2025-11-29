import {test, expect} from '@playwright/test';

test('get ancestor element', async ({page}) => {
    await page.goto('https://automationexercise.com/products', {waitUntil:'domcontentloaded'});
    const item = page.locator("//div[contains(@class,'productinfo ')]//p[contains(text(),'Blue Top')]");
    // await item.locator("xpath=./following-sibling::a").click();
    const precedingsibItem = await item.locator("xpath=./preceding-sibling::h2");
    console.log(`Preceding Item: ${precedingsibItem}`);
    await page.waitForTimeout(5000);
    // console.log(preceding);
})