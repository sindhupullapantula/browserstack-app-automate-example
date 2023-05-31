exports.config = {
    runner: 'local',
    appium: {
      command: 'appium',
      args: {
        address: 'localhost',
        port: 4723,
        logPath: './appium.log',
      }
    },
    specs: [
      './test/ios/**/*.js'
    ],
    capabilities: [{
        'platformName': 'iOS',
        'appium:deviceName': 'iPhone 13 Pro',
        'appium:platformVersion': '15.4',
        "appium:automationName": "XCUITest",
        "appium:newCommandTimeout": 240,
        "appium:app": "/Users/sindhupullapantula/browserstack-app-automate-example/AWSDeviceFarmiOSReferenceApp.app"
      }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
      ui: 'bdd',
      timeout: 60000
    },
    before: function () {
    //   const chai = require('chai');
    //   global.expect = chai.expect;
    //   chai.Should();
    }
  }
  