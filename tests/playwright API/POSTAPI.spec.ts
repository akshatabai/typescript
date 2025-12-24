/*import {test,expect,request,APIRequestContext,APIResponse} from '@playwright/test';

let apirequest:APIRequestContext;


test('send data to server',async({request})=>{


    const response:APIResponse  =await request.post('/booking',
        // req sent to send data to server & stored in response 
    {
        data:{               // by using post method send data to server

            
                firstname: "Akshatas",
                lastname: "Rathod2",
                totalprice: 56,
                depositpaid: true,
                bookingdates: {
                    checkin: "2025-12-24",
                    checkout: "2025-12-30",
                
                }
        }
    });

        const resbody=await response.json();
        console.log(resbody);
        expect(response.status()).toBe(200);
        expect(response.statusText()).toBe("OK");
        expect(resbody).toHaveProperty("bookingid"); // response genrate booking id


});*/