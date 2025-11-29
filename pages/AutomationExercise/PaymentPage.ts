import {Page, expect, Locator} from '@playwright/test';

export default class PaymentPage{
    readonly page: Page;
    private readonly nameOfCard: Locator;
    private readonly cardNumber: Locator; 
    private readonly cvc: Locator;
    private readonly expirationMonth: Locator;
    private readonly expirationYear: Locator;
    private readonly payAndConfirmBtn: Locator;

    private readonly orderPlacedMess: Locator;


    constructor(page:Page){
        this.page = page;
        
        this.nameOfCard = page.locator("//input[@data-qa='name-on-card']");
        this.cardNumber = page.locator("//input[@data-qa='card-number']");
        this.cvc = page.locator("//input[@data-qa='cvc']");
        this.expirationMonth = page.locator("//input[@data-qa='expiry-month']");
        this.expirationYear = page.locator("//input[@data-qa='expiry-year']");
        this.payAndConfirmBtn = page.locator("//button[@data-qa='pay-button']");
        this.orderPlacedMess = page.getByRole('heading',{name:'Order Placed!'});
    }

    async enterPaymentInfor(nameCard:string, cardNum: string, cvc: string, expirationMonth: string, expirationYear:string):Promise<void>{
        await this.nameOfCard.fill(nameCard);
        await this.cardNumber.fill(cardNum);
        await this.cvc.fill(cvc);
        await this.expirationMonth.fill(expirationMonth);
        await this.expirationYear.fill(expirationYear);
        await this.payAndConfirmBtn.click();

        await expect(this.orderPlacedMess).toHaveText('Order Placed!');
    }

    
}