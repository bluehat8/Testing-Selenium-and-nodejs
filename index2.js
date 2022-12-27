var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
test.describe('Verify setup with Google Search', function() {
  test.it('test case should work', function() {
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('selenium node automation');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'selenium node automation');
    });
    driver.quit();
  });
});