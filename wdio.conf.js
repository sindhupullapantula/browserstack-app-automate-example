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
      './test/**/*.js'
    ],
    capabilities: [{
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'emulator-5554',
        'appium:appPackage': 'org.wikipedia.alpha',
        'appium:appActivity': 'org.wikipedia.main.MainActivity'
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
  