// An example configuration file.
exports.config = {
	// address of a running selenium server.
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	
	//to run with out the hub use below commented directConnect property.
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  //multibrowserCapabilities
  /*  multiCapabilities: [{
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }], */
  
  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../tests/*_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
