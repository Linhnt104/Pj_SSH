import {Page, expect, Locator} from '@playwright/test';

export default class HomePage{
    readonly page: Page;


    constructor(page:Page){
        this.page = page;
    }


    async goToHomePage(): Promise<void>{
        this.page.goto('https://demo.nopcommerce.com/login?returnUrl=%2F');
    }


    
}