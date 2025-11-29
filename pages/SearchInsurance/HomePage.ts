import {Page, expect, Locator} from '@playwright/test';

export default class HomePage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }


    async goToHomePage(){
        await this.page.goto('https://baohiemxahoi.gov.vn/tracuu/Pages/tra-cuu-dong-bao-hiem.aspx');
    }
}