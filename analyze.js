var selenium = require('selenium-standalone');

selenium.install({
  // check for more recent versions of selenium here:
  // https://selenium-release.storage.googleapis.com/index.html
  version: '3.0.1',
  baseURL: 'https://selenium-release.storage.googleapis.com',
  drivers: {
    chrome: {
      // check for more recent versions of chrome driver here:
      // https://chromedriver.storage.googleapis.com/index.html
      version: '2.27',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    }
  },
  logger: function(message) {
// console.log(message);
  },
  progressCb: function(totalLength, progressLength, chunkLength) {

  }
}, function(err) {
  console.log('in callback');


  selenium.start(function (err, child) {
    console.log(err)
  });



});
