import { expect, Locator, Page, Browser ,Selectors} from '@playwright/test';
import {chromium} from 'playwright';

export class PlaywrightDev {
  public page: Page;
  public browser: Browser;
  public account:Locator;
  public  fullname: Locator;
  public emailid: Locator;
  public password: Locator;
  public retypepassword: Locator;
  public bday:Locator;
  public bmonth:Locator;
  public byear:Locator;
  public specify: Locator;
  public cname:Locator;
 // public cityname:Locator;
  

  constructor(page: Page, browser: Browser) {

    this.page = page;
    this.browser = browser;
   
   
  }

  async openUrl() {
  await this.page.goto('https://www.rediff.com');

    await expect(this.page).toHaveTitle('Rediff.com: News | Rediffmail | Stock Quotes | Rediff Gurus'); 
  }

    clickCreateAccount() {
       this.account= this.page.getByText('Create Account');
  }

    async enterFullName() {


    this.fullname = this.page.locator("//input[@placeholder='Enter your full name']");
     await expect(this.fullname).toBeVisible();
    
  }

    enterEmailId() {
     this.emailid=this.page.locator("//input[@placeholder='Enter Rediffmail ID']");
  }

   enterPassword() {
     this.password=this.page.locator("//input[@placeholder='Enter password']");
  }

   reEnterPassword() {
     this.retypepassword=this.page.locator("//input[@placeholder='Retype password']");
  }


     clickdateofbirth()
     {
       this.bday=  this.page.locator("//select[@class='day']");
       this.bmonth= this.page.locator("//select[@class='middle month']");
       this.byear= this.page.locator("//select[@class='year']");
    
       }

    genderspecify()
    {
     this.specify=this.page.locator("//input[@type='radio' and @value='f']");
     }

      country(){

      this.cname= this.page.locator("//select[@id='country']");
                 }


    /*city(){

     this.cityname= this.page.locator("//select[@onchange='showothcity();fieldTrack(this);']");
          }*/


   async  closeBrow() {
    await  this.browser.close();
  }
}