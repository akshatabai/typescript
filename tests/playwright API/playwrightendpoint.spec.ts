import {test,expect,request,APIRequestContext,APIResponse} from '@playwright/test';

let apirequest:APIRequestContext;


test('API endpoint',async({request,page})=>{


    const response:APIResponse  =await request.post('https://api.demoblaze.com/addtocart', //endpoint req url
    {
        data:{  
                         // endpoint data feild 
            "id": "5fe5e103-3d3e-0011-ea9f-4db4e8e27c33",          
            "cookie": "user=96c845ec-c2a5-35bb-649d-0e69d7bb03dd",
            "flag": false,
            "prod_id": 1
                
                }
        });

       expect(response.status()).toBe(200) ;

       // login ceredtials
       await page.goto("https://www.demoblaze.com");
       await page.getByRole('link',{name:"Log in"}).click();
       await page.locator("#loginusername").fill("bhuvan");
       await page.locator("#loginpassword").fill("bhuv@123");
       //await page.locator("//button[@onclick='logIn()']").click();
        await page.getByRole('button',{name:'Log in'}).click();
       await page.getByRole('link',{name:'Cart'}).click();
       await page.locator("//[@class='table-responsive']").isVisible();
      const text=  await page.locator("//[@class='success']/td[2]").textContent();
      console.log(text);
      expect(text).toBe("Samsung galaxy s6");

});