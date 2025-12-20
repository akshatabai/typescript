import { test, expect,Browser,Page,Locator } from '@playwright/test';
import { chromium } from 'playwright';

test('scrtest', async () => {

    const browser:Browser=await chromium.launch({headless:false});
    const page:Page=await browser.newPage();

  await page.goto('https://www.geeksforgeeks.org');
  await page.screenshot({path:'./screenshot/img1.png',fullPage:true});
  await browser.close();


});