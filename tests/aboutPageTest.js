var AboutPage = require('../pageobjects/aboutPage.js');
var PageHeader = require('../pageobjects/pageHeader.js');

describe('Selenium About Page Test', function() {

  var aboutPage = new AboutPage();
  var pageHeader = new PageHeader();

  it('should check the roadmap link', function() {

    browser.ignoreSynchronization = true;
    browser.driver.get('http://www.seleniumhq.org/');
    pageHeader.clickAboutTab();
    var isRoadmapLinkPresent = aboutPage.isLinkPresent('Events');
    expect(isRoadmapLinkPresent).toBeTruthy();

  });

});
