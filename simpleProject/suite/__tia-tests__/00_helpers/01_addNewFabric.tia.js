const { t, l, s } = gT;
const eC = gT.eC;

async function test() {
  t.setTitle("Add new fabric");
  await s.driver.init(false, true);
  await s.browser.maximize(true);
  await s.browser.loadPage("https://test5-demo.rvision.pro/login", true);
  await s.driver.sleep(3000, true);
  await s.wait.waitForElementEnabledAndVisibleById("username", 10000);
   await s.browser.executeScript(
    'var usr = document.querySelector("#username");var psw = document.querySelector("#password"); usr.value = "admin";psw.value = "admin"'
  ); //not found tia methods for send value  
  await s.uA.clickById('submit')
  await s.driver.sleep(5000, true);
  await gT.e.explore.init();
  await s.driver.sleep(10000, true);
  await s.driver.quit(true);}

module.exports = test();
