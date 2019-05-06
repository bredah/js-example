// Load the base config
const { config } = require('./spec.config');
// Retrieve the values from ".env" file
require('dotenv').config();
// Set the current browser
const browserName = process.env.BROWSER ? process.env.BROWSER : 'chrome';
// Set the browser mode
const browserHeadless = process.env.HEADLESS === 'true';
// Remote mode ?
if (process.env.REMOTE && process.env.REMOTE === true) {
  config.host = process.env.HOST;
  config.port = process.env.PORT;
  config.path = process.env.PATH;
}
// Define the browser
switch (browserName) {
  case 'chrome':
    config.capabilities = [
      {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: browserHeadless
            ? ['--headless', '--disable-gpu'] // Headless
            : ['--disable-infobars'], // No headless
        },
      },
    ];
    break;
  case 'firefox':
    config.capabilities = [
      {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: browserHeadless
            ? ['-headless'] // Headless
            : [], // No headless
        },
      },
    ];
    break;
  case 'safari':
    config.capabilities = [
      {
        browserName: 'safari',
      },
    ];
    break;
  default:
    break;
}

exports.config = config;
