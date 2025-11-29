import {Page, expect, Locator} from '@playwright/test';

export default class HomePage{
    readonly page: Page;
    private readonly viewProduct:Locator;
    private readonly loginButton:Locator;

    private readonly cartLink: Locator;

    constructor(page:Page){
        this.page = page;
        this.viewProduct = page.locator("(//ul[@class='nav nav-pills nav-justified']//li)[2]");
        this.loginButton = page.getByRole('link',{name:' Signup / Login'});

        this.cartLink = page.getByRole('link',{name:' Cart'});
    }
    async gotoHomePage():Promise<void>{
        await this.page.goto('https://automationexercise.com/',{waitUntil:'domcontentloaded'});
    }

    async goToCartPage():Promise<void>{
        await this.cartLink.click();
    }

    async viewDetailProduct(): Promise<void>{
        await this.viewProduct.click();
    }

    async clickSignUpOrLoginButton(): Promise<void>{
        await this.loginButton.click();
    }

}
