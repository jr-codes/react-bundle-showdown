/* global process */
const fs = require('fs')
const path = require('path')
const server = require('browser-sync').create()
const selenium = require('selenium-standalone')
const webdriver = require('webdriverio')

const getProjects = root => fs.readdirSync(root).filter(file =>
  !/^\.|node_modules|traces/.test(file) &&
  fs.statSync(path.join(root, file)).isDirectory()
)

const startSelenium = () => new Promise((resolve, reject) => {
  selenium.install({
    version: '3.0.1',
    baseURL: 'https://selenium-release.storage.googleapis.com',
    drivers: {
      chrome: {
        version: '2.27',
        arch: process.arch,
        baseURL: 'https://chromedriver.storage.googleapis.com'
      },
      firefox: {
        version: '0.13.0',
        arch: process.arch,
        baseURL: 'https://github.com/mozilla/geckodriver/releases/download'
      }
    }
  }, err => {
    if (err) reject(err)
    selenium.start({seleniumArgs: ['-port', '4444']}, (err, child) => {
      if (err) reject(err)
      selenium.child = child
      resolve()
    })
  })
})

const startServer = () => new Promise(resolve => {
  server.init({
    open: false,
    port: 3000,
    server: true
  }, resolve)
})

// https://gist.github.com/axemclion/079f8bf1a997e9cfe9f0
// https://github.com/GoogleChrome/big-rig/blob/master/test-runner/driver.js

const runBrowser = () => {
  const traceCategories = [
    'blink.console',
    'devtools.timeline',
    'toplevel',
    'disabled-by-default-devtools.timeline',
    'disabled-by-default-devtools.timeline.frame',
    'benchmark'
  ]
  const options = {
    desiredCapabilities: {
      browserName: 'chrome',
      chromeOptions: {
        perfLoggingPrefs: {
          traceCategories: traceCategories.join(',')
        },
        args: ['--enable-gpu-benchmarking', '--no-sandbox']
      },
      loggingPrefs: {
        performance: 'ALL'
      }
    }
  }

  const actions = getProjects(__dirname).map(project => () => {
    return webdriver
      .remote(options).init()
      .url(`http://localhost:3000/${project}`)
      .log('performance')
      .then(data => data.value.map(log => JSON.parse(log.message).message.params))
      .then(data => fs.writeFileSync(path.join('traces', `trace-${project}.json`), JSON.stringify(data)))
      .catch(console.log)
      .end()
  })

  return actions.reduce((action, nextAction) => action.then(nextAction), Promise.resolve())
}

const exit = () => {
  selenium.child.kill()
  server.exit()
  process.exit()
}

startSelenium()
  .then(startServer)
  .then(runBrowser)
  .catch(console.log)
  .then(exit)
  .catch(console.log)
