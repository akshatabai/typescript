
import {test,expect,Browser,Page,Locator} from '@playwright/test'
import { chromium } from 'playwright';

interface userdetails
{
    FullName:string;
    emaili:string;
    password:string;
    Retypepassword:string;
}


test('account credentials',async () => {

    const browser:Browser=await chromium.launch({headless:false});
    const page:Page=await browser.newPage();

    await page.goto("https://www.rediff.com");
    await expect(page).toHaveTitle('Rediff.com: News | Rediffmail | Stock Quotes | Rediff Gurus');
    await page.getByText("Create Account").click();
    await page.locator("//input[@placeholder='Enter your full name']").fill("AkshataRathod");
    await page.locator("//input[@placeholder='Enter Rediffmail ID']").fill("aksahta456BH");
    await page.locator("//input[@placeholder='Enter password']").fill("23483hdg");
    await page.locator("//input[@placeholder='Retype password']").fill("23483hdg");
    await browser.close();

});

