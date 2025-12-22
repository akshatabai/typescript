import { expect, Locator, Page, Browser ,Selectors} from '@playwright/test';
import {chromium} from 'playwright';

export class PlaywrightDevPage {
  readonly page: Page;
  readonly browser: Browser;
  readonly fullname: Locator;
  readonly emailid: Locator;
  readonly password: Locator;
  readonly retypepassword: Locator;

  constructor(page: Page, browser: Browser) {
    this.page = page;
    this.browser = browser;
    this.fullname = page.locator("//input[@placeholder='Enter your full name']");
                 // page.getByplaceholder('').fill("");
    this.emailid = page.locator("//input[@placeholder='Enter Rediffmail ID']");
    this.password = page.locator("//input[@placeholder='Enter password']");
    this.retypepassword = page.locator("//input[@placeholder='Retype password']");
   
  }

  async openUrl() {
    await this.page.goto('https://www.rediff.com/');
  }

  async clickCreateAccount() {
    await this.page.getByText('Create Account').click();
  }

  async enterFullName() {
    await expect(this.fullname).toBeVisible();
    await this.fullname.fill('rajveer');
  }

  async enterEmailId() {
    await this.emailid.fill('AbH280712a');
  }

  async enterPassword() {
    await this.password.fill('3263asahA');
  }

  async reEnterPassword() {
    await this.retypepassword.fill('3263asahA');
  }



  async clickdateofbirth(day:string,month:string,year:string){

    await this.page.locator("//select[@class='day']").selectOption(day);
    await this.page.locator("//select[@class='middle month']").selectOption(month);
    await this.page.locator("//select[@class='year']").selectOption(year);
    
  }

  async genderspecify(){

 await this.page.locator("//input[@type='radio' and @value='f']").check();

  }

  async country(){

    await this.page.locator("//select[@id='country']").selectOption("99");
  }

  async city(){

    await this.page.locator("//select[@onchange='showothcity();fieldTrack(this);']").selectOption("Ahmedabad");
  }

  async closeBrowser() {
    await this.browser.close();
  }
}