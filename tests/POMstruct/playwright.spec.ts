import { test } from '@playwright/test';
import { PlaywrightDevPage } from './playwright-dev';


test('show pom module', async ({ page, browser }) => {
  
  const playwrightDev = new PlaywrightDevPage(page, browser);

  await playwrightDev.openUrl();
  await playwrightDev.clickCreateAccount();
  await playwrightDev.enterFullName();
  await playwrightDev.enterEmailId();
  await playwrightDev.enterPassword();
  await playwrightDev.reEnterPassword();
  await playwrightDev.clickdateofbirth('07','MAR','2000');
  await playwrightDev.genderspecify();
  await playwrightDev.country();
  await playwrightDev.city();
  await playwrightDev.closeBrowser();
});

