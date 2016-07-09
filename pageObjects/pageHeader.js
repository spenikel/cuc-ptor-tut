var PageHeader = function() {

  this.clickAboutTab = function() {
    return element(by.linkText('About')).click();
  }

}

module.exports = PageHeader;
