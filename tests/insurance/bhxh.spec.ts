import {test, expect} from '@playwright/test';
import HomePage from '../../pages/SearchInsurance/HomePage';
import BHYT from '../../pages/SearchInsurance/BHYT';


test('investigate the process of joining insurance', async ({page}) => {
    const homePage = new HomePage(page);
    const bhyt = new BHYT(page);
    
    await homePage.goToHomePage();
    await bhyt.enterData('Tỉnh Hà Nam','Bảo hiểm Xã hội huyện Thanh Liêm','Tháng 7','Năm 2025','Tháng 8','Năm 2025','09238492384324','9304294','293423948','Nguyen Van An');
    await page.waitForTimeout(5000);
})