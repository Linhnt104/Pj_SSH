import {Page, expect, Locator} from '@playwright/test';

export default class LoginNopEco{
    readonly page: Page;
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly rememberBox: Locator;
    private readonly loginBtn: Locator;
    private readonly loginMess: Locator;


    constructor(page:Page){
        this.page = page;
        this.email = page.locator('#Email');
        this.password = page.locator('#Password');
        this.rememberBox = page.locator("#RememberMe");
        this.loginBtn = page.getByRole('button',{name: 'Log in'});
        this.loginMess = page.getByRole('link',{name:'Log out'});
    }

    async loginWithValidAcc(email:string, password:string): Promise<void>{
        await this.email.fill(email);
        await this.password.fill(password);
        await this.rememberBox.click();
        await this.loginBtn.click();
        await expect(this.loginMess).toHaveText('Log out');
    }





}