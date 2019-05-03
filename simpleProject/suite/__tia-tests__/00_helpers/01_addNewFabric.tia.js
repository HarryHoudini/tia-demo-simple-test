// import {main,actives,organisation} from '../../../../index'
const { t, l, s } = gT;
const eC = gT.eC;

async function test() {
    t.setTitle('Add new organisation through user: Administrator');
    await s.driver.init();
    await s.browser.maximize(true);
    await s.browser.loadPage('https://test5-demo.rvision.pro/login');
    await s.wait.waitForElementEnabledAndVisibleById('username', 10000);
    await gT.s.uA.sendKeysById('username', 'admin');
    await gT.s.uA.sendKeysById('password', 'admin');
    await s.uA.clickById('submit');
    await s.driver.sleep(9000);
    await gT.s.browser.initTiaBrHelpers();
    await gT.e.initTiaExtJsBrHelpers();
    await gT.eC.tab.a.click('#r-main > tabbar > tab[text="Активы"]');
    await gT.e.wait.ajaxRequestsFinish(10000);
    await eC.button.a.click(
        '#assets &tabsContainer > button[text="Организация"]'
    );
    await eC.textfield.a.sendKeys(
        '#organization &form > textarea[name=name]',
        'Next Generation'
    );
    await eC.combobox.a.setByMouse(
        '#organization &form > combobox[name=type_id]',
        'Организация'
    );
    await eC.combobox.a.setByMouse(
        '#organization &form > tagfield[name=cities_id]',
        'Воронеж'
    );
    await s.driver.sleep(1000);
    await eC.combobox.a.setByMouse(
        '#organization &form > usertagfield[name=admin_ids]',
        'Иван Петров (ipetrov@rvlab.net)'
    );
    await eC.combobox.a.setByMouse(
        '#organization &compliance_manager',
        'Иван Петров (ipetrov@rvlab.net)'
    );
    await eC.textfield.a.sendKeys(
        '#organization &form > textarea[name=description]',
        'Powerful and Biggest Corporation'
    );
    await eC.button.a.click('#organization &form > button[text="Добавить"]');
    await eC.gridcolumn.a.clickTrigger(
        '#organization &grid > headercontainer > multiline_treecolumn[text="Наименование"]'
    );
    await eC.component.a.click('menu > menucheckitem#filters');
    await eC.textfield.a.click('menu > textfield');
    await eC.textfield.a.sendKeys('menu > textfield', 'Next');
    await eC.textfield.a.sendEnter('menu > textfield');
    await eC.tableview.l.content('#organization &grid > treeview');
    //Post condition: Deleting added Organisation
    await eC.tableview.a.clickFirstRowCellByColText(
        '#organization &grid > treeview',
        'Тип'
    );
    await eC.button.a.click('#organization &removeBtn');
    await eC.button.a.click(
        'messagebox[title="Удаление"] > toolbar > button#yes'
    );
    await eC.tableview.l.content('#organization &grid > treeview');

    await s.driver.quit();
}

module.exports = test();
