const console = require('console')

module.exports = {
  generateBaseLog (stdoutPath) {
    const path = require('path')
    const fs = require('fs')
    const logPath = path.join(__dirname, stdoutPath)
    const options = {
      flags: 'w', //
      encoding: 'utf8' // utf8编码
    }
    const stdout = fs.createWriteStream(logPath, options)
    const logger = new console.Console(stdout)
    return logger
  }
}
