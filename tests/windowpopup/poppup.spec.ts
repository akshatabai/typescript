
import { test, expect ,Browser,Page} from '@playwright/test';




test('handle a new window popup', async ({ browser }) => {
    

const context =
await browser.newContext({ permissions: ['geolocation'], geolocation: { latitude: 17.385, longitude: 78.4867 } });
const page = await context.newPage();
await page.goto('https://maps.google.com');

    const [popup] = await Promise.all([ context.waitForEvent('page'),
        page.click('text=Open Popup') ]);
        await popup.waitForLoadState();
        console.log(await popup.title());
  });