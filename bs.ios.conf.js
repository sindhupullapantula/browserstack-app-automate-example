exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  
    hostname: 'hub.browserstack.com',
  
    services: [
      [
        'browserstack',
        {
          buildIdentifier: '${BUILD_NUMBER}',
          browserstackLocal: true,
          opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
          app: './prebuiltSampleApp.ipa',
        }
      ]
    ],
  
    capabilities: [{
        'bstack:options': {
          deviceName: 'iPhone 14 Pro Max',
          platformVersion: '16',
          platformName: 'ios',
        }
      }, {
        'bstack:options': {
          deviceName: 'iPhone XS',
          platformVersion: '15',
          platformName: 'ios',
        }
    }, {
        'bstack:options': {
          deviceName: 'iPhone 11',
          platformVersion: '14',
          platformName: 'ios',
        }
      }],
    commonCapabilities: {
      'bstack:options': {
        projectName: "Sindhu Appium IOS Samples",
        buildName: 'Sindhu Appium IOS build',
        sessionName: 'Sindhu BStack parallel webdriverio-appium IOS',
        debug: true,
        networkLogs: true,
        source: 'webdriverio:appium-sample-sdk:v1.0'
      }
    },
  
    maxInstances: 10,
  
    updateJob: false,
    specs: [
      './test/ios/**/*.js'
    ],
    exclude: [],
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };
  
  // Code to support common capabilities
  exports.config.capabilities.forEach(function(caps){
    for(let key in exports.config.commonCapabilities) 
      caps[key] = { ...caps[key], ...exports.config.commonCapabilities[key]};
  });
  