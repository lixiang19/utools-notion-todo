const path = require('path')
const baseLog = require(path.join(__dirname, '/baseLog.js'))

const logger = baseLog.generateBaseLog('/log.txt')
module.exports = logger
