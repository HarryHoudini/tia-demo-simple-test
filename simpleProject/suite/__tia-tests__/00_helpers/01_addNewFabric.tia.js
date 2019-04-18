const { t, l, s } = gT;

const eC = gT.eC;

async function test() {
  t.setTitle("Add new fabric");
  await s.driver.init();
  await s.browser.maximize(true);
  await s.browser.loadPage("https://test5-demo.rvision.pro/login");
  await s.wait.waitForElementEnabledAndVisibleById("username", 10000);
  await gT.s.uA.sendKeysById('username', 'admin');
  await gT.s.uA.sendKeysById('password', 'admin'); 
  await s.uA.clickById("submit");  
  await s.driver.sleep(10000);
  await gT.s.browser.initTiaBrHelpers();
  await gT.e.initTiaExtJsBrHelpers();  
  // await gT.e.wait.ajaxRequestsFinish(1000)  
  await gT.eC.tab.a.click('#r-main > tabbar > tab[text="Активы"]')
  await  gT.eC.button.a.click('#assets &tabsContainer > button[text="Организация"]')


  // await gT.s.browser.initTiaBrHelpers();
  // await gT.e.initTiaExtJsBrHelpers();

  await gT.e.explore.init();

  await s.driver.sleep(8000);

  await s.driver.quit();
}

module.exports = test();
