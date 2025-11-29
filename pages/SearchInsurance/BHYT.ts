import {Page, expect, Locator} from '@playwright/test';

export default class BHYT{
    readonly page: Page;
    private readonly province: Locator;
    private readonly department: Locator;
    private readonly fromMonth: Locator;
    private readonly fromYear: Locator;
    private readonly toMonth: Locator;
    private readonly toYear: Locator;
    private readonly identicalNum: Locator;
    private readonly insuranceCode: Locator;
    private readonly phoneNum: Locator;
    private readonly fullname: Locator; 
    private readonly radioBtn: Locator;
    private readonly captchaCheckbox: Locator;
    private readonly researchBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.province = page.locator("//select[@id='ddlTinhThanh']");
        this.department = page.locator("//select[@id='ddlCoQuan']");
        this.fromMonth = page.locator("//select[@id='txtTuThang']");
        this.fromYear = page.locator("//select[@id='txtTuNam']");
        this.toMonth = page.locator("//select[@id='txtDenThang']");
        this.toYear = page.locator("//select[@id='txtDenNam']");
        this.identicalNum = page.getByPlaceholder('Chứng minh thư nhân dân');
        this.insuranceCode = page.getByPlaceholder('Mã số BHXH');
        this.phoneNum = page.locator("//input[@id='sdt']");
        this.fullname = page.getByPlaceholder('Họ tên');
        this.radioBtn = page.locator("//label[@for='KhongDau']");
        this.captchaCheckbox = page.locator("//span[@id='recaptcha-anchor']");
        this.researchBtn = page.getByRole('button',{name:'Lấy mã tra cứu'});
    }

    async enterData(
        province:string, 
        department:string, 
        fromMonth:string, 
        fromYear:string, 
        toMonth:string, 
        toYear:string, 
        identicalNum: string, 
        insuranceCode:string, 
        phoneNum:string, 
        fullname:string
    ){
        await this.province.selectOption(province);
        await this.department.selectOption(department);
        await this.fromMonth.selectOption(fromMonth);
        await this.fromYear.selectOption(fromYear);
        await this.toMonth.selectOption(toMonth);
        await this.toYear.selectOption(toYear);
        await this.identicalNum.fill(identicalNum);
        await this.insuranceCode.fill(insuranceCode);
        await this.phoneNum.fill(phoneNum);
        await this.fullname.fill(fullname);
        await this.radioBtn.click();
        const frameLocator = await this.page.frameLocator("//iframe[@title='reCAPTCHA']");
        const frame = await frameLocator.locator("//span[@id='recaptcha-anchor']");
        await frame.click();
        await this.researchBtn.click();

    }
}