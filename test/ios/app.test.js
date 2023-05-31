const assert = require('assert');


//Negative test case
describe('Search HTTP Functionality', () => {
  //positive test case
  it('Should show an alert popup with "Faulty URL Enetered" title when an invalid url is entered', async () => {
    const tabElement = await $('(//XCUIElementTypeTabBar/XCUIElementTypeButton)[2]');
    await tabElement.click();
    // await browser.pause(3000);

    const urlField = await $(`//XCUIElementTypeTextField[@name='navigation bar']`);
    await urlField.sendKeys(['invalid  url']);
    await browser.pause(2000);

    const goButton = await $(`//XCUIElementTypeButton[@name="Go"]`)
    await goButton.click();
    await browser.pause(1000);

    const alertModal = await $(`//XCUIElementTypeAlert`);
    const alertModaltitleEle = await alertModal.$(`.//XCUIElementTypeStaticText`);
    const alertModaltitle = await alertModaltitleEle.getAttribute('value');

    assert(alertModaltitle == 'Faulty URL Entered');
  });

  //Positive test case
  it('should open webview for a valid URL', async () => {
    await driver.launchApp();
    const tabElement = await $('(//XCUIElementTypeTabBar/XCUIElementTypeButton)[2]');
    await tabElement.click();
    // await browser.pause(3000);

    const urlField = await $(`//XCUIElementTypeTextField[@name='navigation bar']`);
    await urlField.sendKeys(['https://www.browserstack.com']);
    await browser.pause(2000);

    const goButton = await $(`//XCUIElementTypeButton[@name="Go"]`)
    await goButton.click();
    await browser.pause(1000);

    const webview = await $(`//XCUIElementTypeWebView`);    
    assert(!webview.error);
  });

  afterEach(async () => {
    //resetting the app to go to home screen before running the next test case.
    await driver.closeApp();
  })

});

