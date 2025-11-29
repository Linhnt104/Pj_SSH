import { Page,expect,Locator } from "@playwright/test";
export default class SignUp{
    readonly page: Page;

    // khai bao bien 
    private readonly name:Locator;
    private readonly emailAddress:Locator;
    private readonly signUpButton:Locator;

    private readonly title: Locator;
    private readonly user_name: Locator;
    private readonly password: Locator;
    private readonly day: Locator;
    private readonly month: Locator;
    private readonly year: Locator;
    private readonly signUpCheckbox: Locator;
    private readonly specialOfferCheckbox: Locator;
    private readonly first_name: Locator;
    private readonly last_name: Locator;
    private readonly company: Locator;
    private readonly address: Locator;
    private readonly country: Locator;
    private readonly state: Locator;
    private readonly city: Locator;
    private readonly zipcode: Locator;
    private readonly mobile_number: Locator;
    private readonly createAccountButton: Locator;

    private readonly succeedMessage:Locator;
    private readonly continueButton:Locator;
    private readonly logoutButton:Locator;


    constructor(page:Page){
        this.page = page;
        this.name = page.locator("input[data-qa='signup-name']");
        this.emailAddress = page.locator("//div[@class='signup-form']//input[@placeholder='Email Address']");
        this.signUpButton = page.locator("button[data-qa='signup-button']");
        
        // account information 
        this.title = page.locator("#uniform-id_gender2");
        this.user_name = page.locator("input[data-qa='name']");
        this.password = page.locator("input[data-qa='password']");
        this.day = page.locator("select[data-qa='days']");
        this.month = page.locator("select[data-qa='months']");
        this.year = page.locator("select[data-qa='years']");
        this.signUpCheckbox = page.locator("input[name='newsletter']");
        this.specialOfferCheckbox = page.locator("input[name='optin']");

        // address information 
        this.first_name = page.locator("input[name='first_name']");
        this.last_name = page.locator("input[name='last_name']");
        this.company = page.locator("input[name='company']");
        this.address = page.locator("input#address1");
        this.country = page.locator("select[name='country']");
        this.state = page.locator("input[data-qa='state']");
        this.city = page.locator("input[data-qa='city']");
        this.zipcode = page.locator("input[data-qa='zipcode']");
        this.mobile_number = page.locator("input[data-qa='mobile_number']");
        this.createAccountButton = page.getByRole('button',{name:'Create Account'});
        
        //
        this.succeedMessage = page.getByRole('heading',{name:'Account Created!'});
        this.continueButton = page.locator("a[data-qa='continue-button']");
        this.logoutButton = page.getByRole('link',{name:' Logout'});
    }

    async newUserSignUp(name:string,email:string): Promise<void>{
        await this.name.fill(name);
        function genEmail(prefix='linhnguyen', domain='gmail.com'){
        const randomNum = Math.floor(Math.random() * 9999) + 1;
        return `${prefix}${randomNum}@${domain}`;
        }
        email = genEmail();
        await this.emailAddress.fill(email);
        await this.signUpButton.click();
    }

    async enterAccInformation(
        user_name: string,
        password: string, 
        day: string,
        month: string, 
        year: string,
        first_name:string,
        last_name:string, 
        company: string, 
        address: string, 
        country: string, 
        state: string, 
        city: string, 
        zipcode: string,
        mobile_number: string

    ): Promise<void>{
        await this.title.click();
        await this.user_name.fill(user_name);
        await this.password.fill(password);
        await this.day.selectOption(day);
        await this.month.selectOption(month);
        await this.year.selectOption(year);
        await this.signUpCheckbox.check();
        await this.specialOfferCheckbox.check();
        await this.first_name.fill(first_name);
        await this.last_name.fill(last_name);
        await this.company.fill(company);
        await this.address.fill(address);
        await this.country.selectOption(country);
        await this.state.fill(state);
        await this.city.fill(city);
        await this.zipcode.fill(zipcode);
        await this.mobile_number.fill(mobile_number);
        await this.createAccountButton.click();
    }


    async verifySignUpSuccessfully():Promise<void>{
        await expect(this.succeedMessage).toHaveText('Account Created!');
        await this.continueButton.click();
        await expect(this.logoutButton).toHaveText('Logout');
    }
}