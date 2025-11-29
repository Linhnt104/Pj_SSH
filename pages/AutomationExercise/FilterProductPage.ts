import {Page, expect, Locator} from '@playwright/test';

export default class FilterProductPage{
    // khai bao bien 
    readonly page:Page;
    private readonly categoryFilter:Locator;
    private readonly selectedCategory:Locator;
    private readonly brandsFilter:Locator;
    private readonly selectedItem:Locator;
    private readonly quantity:Locator;
    private readonly addToCartBtn: Locator;
    private readonly addedDialog: Locator;
    private readonly addedMessage: Locator;
    private readonly viewCartLink: Locator;

    private readonly verifyQuantity: Locator;

    constructor(page:Page){
        this.page = page;
        this.categoryFilter=page.locator("a[href='#Women'] i[class='fa fa-plus']");
        this.selectedCategory = page.getByRole('link',{name:'Dress '});
        this.brandsFilter = page.locator("(//ul[@class='nav nav-pills nav-stacked']//li)[3]");
        this.selectedItem = page.locator("(//ul[@class='nav nav-pills nav-justified']//li)[4]");
        this.quantity = page.locator("//p[contains(text(),'In Stock')]");
        this.addToCartBtn = page.getByRole('button',{name:'Add to cart'});
        this.addedDialog = page.locator("//div[@class='modal-content']");
        this.addedMessage = page.getByRole('heading',{name:'Added!'});
        this.viewCartLink = page.getByRole('link',{name:'View Cart'});
        this.verifyQuantity = page.locator("//td[@class='cart_quantity']//button[@class='disabled']");
    }

    async scrollPage():Promise<void>{
        await this.categoryFilter.scrollIntoViewIfNeeded();
    }

    async addToCart():Promise<void>{
        await this.categoryFilter.click();
        await this.selectedCategory.click();
        await this.brandsFilter.click();
        await this.selectedItem.click();
        if(this.quantity){
            await this.addToCartBtn.click();
        }
    
    }

    async verifyAddedDialog(): Promise<void>{
        // await this.addedDialog.isVisible();
        await this.addedMessage.isVisible();
    }

    async viewCart(): Promise<void>{
        await this.viewCartLink.click();
        // await expect(this.verifyQuantity).toHaveText('3'); 
    }

    async verifyDataCart(): Promise<void>{

    }
}