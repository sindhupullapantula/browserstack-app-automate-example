const assert = require('assert');


//positive test case
describe('Search Wikipedia Functionality', () => {
  //positive test case
  it('can find search results', async () => {
    var searchSelector = await $(`~Search Wikipedia`);
    await searchSelector.waitForDisplayed({ timeout: 30000 });
    await searchSelector.click();

    var insertTextSelector = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
    await insertTextSelector.waitForDisplayed({ timeout: 30000 });

    await insertTextSelector.addValue("BrowserStack");
    await browser.pause(5000);

    var allProductsName = await $$(`android.widget.TextView`);
    assert(allProductsName.length > 0);
  });

  //Negative test case
  it('should not search with blank input', async () => {
    var searchSelector = await $(`~Search Wikipedia`);
    await searchSelector.waitForDisplayed({ timeout: 30000 });
    await searchSelector.click();

    var insertTextSelector = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")');
    await insertTextSelector.waitForDisplayed({ timeout: 30000 });

    await insertTextSelector.addValue("");
    await browser.pause(5000);

    var searchResultsList = await $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_results_list")'); 
    assert(!searchResultsList.isExisiting);
  });

  afterEach(() => {
    //resetting the app to go to home screen before running the next test case.
    driver.startActivity("org.wikipedia.alpha", "org.wikipedia.main.MainActivity");
  })

});

