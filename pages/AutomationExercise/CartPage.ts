import {Page, expect, Locator} from '@playwright/test';

export default class CartPage{
    readonly page:Page;

    private readonly emptyCartMess: Locator;
    private readonly buyProductLink: Locator;

    private readonly productTable: Locator;
    private readonly deleteIcon: Locator;
    private readonly checkoutLink:Locator;
    


    constructor(page:Page){
        this.page = page;
        this.emptyCartMess = page.locator("//span[@id='empty_cart' and @style='display: block;']");
        this.buyProductLink = page.getByRole('link',{name:'here'});

        this.productTable = page.locator('#cart_info');
        this.deleteIcon = page.locator("(//tr[@id='product-1']//td[@class='cart_delete'])[1]");


        this.checkoutLink = page.getByText('Proceed To Checkout');
    }

    async verifyEmptyCart(): Promise<string>{
        if(await this.emptyCartMess?.isVisible()){
            await this.buyProductLink.click();
        }else if(await this.productTable?.isVisible()){
            await this.checkoutLink.click();
        }
        return "message";
    }

    async goToCheckOutPage():Promise<void>{
        await this.checkoutLink.click();
    }
}