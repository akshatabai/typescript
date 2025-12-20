import { test, expect,Browser,Page,Locator } from '@playwright/test';
import { chromium } from 'playwright';

test('samtest', async () => {

    const browser:Browser=await chromium.launch({headless:false});
    const page:Page=await browser.newPage();

  await page.goto('https://www.geeksforgeeks.org');
  await expect(page).toHaveTitle('GeeksforGeeks | Your All-in-One Learning Portal');
  await page.getByText("Sign In").click();
  await page.getByText("Register Now").click();
  await page.locator("//input[@placeholder='Username or Email']").fill("bhuvansingh");
  await page.locator("//input[@placeholder='Enter password']").fill("bhuvA35");
  await page.locator("//input[@placeholder='Enter Institution / Organization name']").fill("medical orognition");
  await page.locator("//button[@type='submit']").click();
  await browser.close();
});