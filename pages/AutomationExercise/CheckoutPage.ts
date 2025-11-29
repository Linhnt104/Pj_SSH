import {Page, expect, Locator} from '@playwright/test';

export default class CheckoutPage{
    readonly page:Page;

    private readonly placeOrderBtn: Locator;

    constructor(page:Page){
        this.page=page;
        this.placeOrderBtn = page.getByText('Place Order');

    }

    async verifyCheckoutData(): Promise<void>{
        
    }
    async goToPlaceOrder(): Promise<void>{
        await this.placeOrderBtn.click();
    }
}
