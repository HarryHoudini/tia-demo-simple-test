import {gT} from "tia"
const { t, l, s, sOrig } = gT;
const eC = gT.eC;
import {gIn} from "tia"

async function test() {
  t.setTitle("Test for client exceptions");
  await s.driver.init(false, true)
  await s.driver.sleep(10000, true)
  await s.driver.sleep(10000, true)

  await gT.e.wait.ajaxRequestsFinish(1000)  
  await s.uA.sendKeysById('')
  await s.browser.loadPage("https://test5-demo.rvision.pro/login", true)
  await s.wait.waitForElementEnabledAndVisibleById("username", 10000);
  await s.browser.executeScript(
    'var usr = document.querySelector("#username");var psw = document.querySelector("#password"); usr.value = "admin";psw.value = "admin"'
  );
  l.println(`Result of script execution: ${res}`);
  await s.driver.sleep(5000, true);
  await s.uA.sendEnterById('submit')

  await gT.eC.tab.a.click('#r-main > tabbar > tab[text=l"protective_system"]')

  await gT.s.browser.initTiaBrHelpers();
  await gT.e.initTiaExtJsBrHelpers();
  await  gT.eC.button.a.click
  ('#assets &tabsContainer > button[text="Организация"]')
  await gT.eC.textfield.a.sendKeys
('assets-organization-form > textarea[name=name]')
('#organization &form > textarea[name=name]', '')
  
  // l.println('No exceptions and console logs:');
  // await s.browser.printCaughtExceptions(true);
  // await s.browser.printSelBrowserLogs();

  // await issueClientException();

  // l.println('One exception and one console log:');
  // await s.browser.printCaughtExceptions(true);
  // await s.browser.printSelBrowserLogs();

  // l.println('No exceptions and console logs:');
  // await s.browser.printCaughtExceptions(true);
  // await s.browser.printSelBrowserLogs();

  // await s.browser.close();
  await s.driver.quit(true);
}

module.exports = test();
