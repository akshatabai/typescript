import { expect, Locator, Page, Browser } from '@playwright/test';

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
    this.emailid = page.locator("//input[@placeholder='Enter Rediffmail ID']");
    this.password = page.locator("//input[@placeholder='Enter password']");
    this.retypepassword = page.locator("//input[@placeholder='Retype password']");
  }

  async openUrl() {
    await this.page.goto('https://www.rediff.com');
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

  async closeBrowser() {
    await this.browser.close();
  }
}