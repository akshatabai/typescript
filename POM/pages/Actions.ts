import { PlaywrightDev} from '../Locat/playwright-dev'; 
import { expect } from '@playwright/test';

export class Actions {

  
  private pageDev: PlaywrightDev; 
  
  constructor(pageDev: PlaywrightDev) {
    this.pageDev = pageDev;
  }

 
  async openSite() {
    await this.pageDev.openUrl();
   
  }


  async clickCreateAccount() {
      this.pageDev.clickCreateAccount();
    await this.pageDev.account.click();
  }

 
  async fillFullName(name:string) {
     this.pageDev.enterFullName();
    await this.pageDev.fullname.fill(name);
  }


  async fillEmailId(email:string) {
     this.pageDev.enterEmailId();
    await this.pageDev.emailid.fill(email);
  }


  async fillPassword(pass:string) {
     this.pageDev.enterPassword();
    await this.pageDev.password.fill(pass);
  }

 
  async fillRetypePassword(retype:string) {
     this.pageDev.reEnterPassword();
    await this.pageDev.retypepassword.fill(retype);
  }


  async selectDateOfBirth(day: string, month: string, year: string) {
     this.pageDev.clickdateofbirth();
     await this.pageDev.bday.selectOption(day);
     await this.pageDev.bmonth.selectOption(month);
     await this.pageDev.byear.selectOption(year);

  }

  async specifyGender() {
     this.pageDev.genderspecify();
    await this.pageDev.specify.check();
    
  }

  
  async selectCountry(country:string) {
      this.pageDev.country();
      await this.pageDev.cname.selectOption(country);
    
  }

 
  /*async selectCity(city:string) {
      this.pageDev.city();
      await this.pageDev.cityname.selectOption(city);
    
  }*/

  
    async closeBrowser() {
      await this.pageDev.closeBrow();
  }
}