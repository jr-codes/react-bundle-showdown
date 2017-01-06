const fs = require('fs')
const path = require('path')
const shell = require('shelljs')

const run = (dir, cmd) => {
  return new Promise((resolve, reject) => {
    cmd = `cd ${dir} && ${cmd}`
    console.log(`Running "${cmd}"`)
    shell.exec(cmd, (code, stdout, stderr) => code ? reject(stderr) : resolve(stdout))
  })
}

const getProjects = root => fs.readdirSync(root).filter(file =>
  !/^\.|node_modules/.test(file) &&
  fs.statSync(path.join(root, file)).isDirectory()
)

const runAll = cmd => getProjects(__dirname).forEach(dir => run(dir, cmd))

runAll('yarn && yarn build')
