import {Page, expect, Locator} from '@playwright/test';

export default class LoginPage{
    readonly page: Page;
    private readonly emailAddress:Locator;
    private readonly password:Locator;
    private readonly loginButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.emailAddress = page.locator("input[data-qa='login-email']");
        this.password = page.locator("input[data-qa='login-password']");
        this.loginButton = page.locator("button[data-qa='login-button']");
    }

    async loginWithValidAccount(email: string, password: string): Promise<void>{
        await this.emailAddress.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}
