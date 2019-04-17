import {gT} from "tia"
const { t, l, s } = gT;
const eC = gT.eC;

async function test() {
  t.setTitle("Test for client exceptions");
  await s.driver.init(false, true)
  await s.driver.sleep(10000, true)
  await s.driver.sleep(10000, true)
  await s.browser.loadPage("https://test5-demo.rvision.pro/login", true)
  await 
  await s.browser.sendKeysById('12111111111111111111111111111111111111111111211111111111111111111111111111111111111111')
  await s.browser.setWindowSize(2560, 1440);

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
