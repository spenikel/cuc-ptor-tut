exports.config = {
  directConnect: true, // do not connect to Selenium Standalone Server
  capabilities: {'browserName': 'firefox'},
  specs: ['../tests/*.js'], // where to look for the tests
  framework: 'jasmine2'
};
