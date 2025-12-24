import {test,expect,request,APIRequestContext,APIResponse} from '@playwright/test';

let apirequest:APIRequestContext;

/*test.beforeAll('Before all exe test ',async ()=>{   // instance(apireq) created by user

    apirequest = await request.newContext({
        baseURL:'https://restful-booker.herokuapp.com',
          
        extraHTTPHeaders:{
            'content-type':'application/json'
        }

    })

});*/


/*
test('GET API TEST',async ({request}) =>{  // default instance(req) created by config file

    const response:APIResponse=await request.get('/booking'); // retrive all bookings id
    console.log(await response.json());
    expect(response.status()).toBe(200);

});*/


// paramter values 
/*test('Get 1 ID for fname n lname', async ({ request }) => {
    const response: APIResponse = await request.get('/booking', {
        params: { firstname: 'Josh', lastname: 'Allen' }  // default it display all the booking ids booked by josh  
    });

    console.log(await response.json());
    expect(response.status()).toBe(200);
 


 });


test('pick fields from body',async ( {request})  =>{

    const response:APIResponse = await request.get('/booking/32')
    const responsebody=await response.json();
    console.log(responsebody);

    expect(responsebody).toMatchObject({   

    firstname: "Josh",   // objects provided to match from response body 
    lastname: "Allen",
    totalprice: 111,
    depositpaid: true,

    });
    expect(response.status()).toBe(200);
    console.log(responsebody.firstname + ' ' + responsebody.lastname);

});*/


/*
test.afterAll('After all exe test',async ({request})=>{

    await request.dispose();
});
*/