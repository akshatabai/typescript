
import {test,expect,Browser,Page,Locator}  from '@playwright/test';
import { chromium ,Dialog} from 'playwright';


test('Dialog1',async()=>{

    const browser:Browser=await chromium.launch({headless:false});
     const page:Page=await browser.newPage();

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

     page.once('dialog',async(dialog:Dialog) =>{ // once dialog to handle 1 alert

        await page.locator("//button[@onclick='jsAlert()']").click();
        await dialog.accept();

     });
    });



     test('Dialog2',async()=>{

        const browser:Browser=await chromium.launch({headless:false});
         const page:Page=await browser.newPage();
    
         await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
         page.on('dialog',async(dialog:Dialog) =>{ // on dialog to handle multiple alert
    
        
    
            await page.locator("//button[@onclick='jsConfirm()']").click();
            await dialog.accept();
    
    
            await page.locator("//button[@onclick='jsPrompt()']").click();
            await dialog.dismiss();
    
    
    
         });


});



