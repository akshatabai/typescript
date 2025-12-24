import { test ,expect} from '@playwright/test';
import { PlaywrightDev} from '../../POM/Locat/playwright-dev';
import { Actions } from '../../POM/pages/Actions';

test('show pom module', async ({ page, browser }) => {
  
  const playDev = new PlaywrightDev(page, browser);
  const actions = new Actions(playDev);

  
  await actions.openSite();
  await actions.clickCreateAccount();
  await actions.fillFullName('bhuvan');
  await actions.fillEmailId('bhu489AK');
  await actions.fillPassword('3263asahA');
  await actions.fillRetypePassword('3263asahA');
  await actions.selectDateOfBirth('07', 'MAR', '2000');
  await actions.specifyGender();
  await actions.selectCountry('99');
  //await actions.selectCity('Ahmedabad');
  await actions.closeBrowser();
});

