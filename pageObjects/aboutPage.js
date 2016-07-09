var AboutPage = function() {

  this.isLinkPresent = function(text) {
    return element(by.linkText(text)).isPresent();
  }

}

module.exports = AboutPage;
