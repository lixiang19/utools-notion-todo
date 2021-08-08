const baseLog = require(path.join(__dirname, '/baseLog.js'))

const logger = baseLog.generateBaseLog('/error.txt')

function _init_ () {
  window.onerror = function (message, fileName, lineno, colno, err) {
    logger.log(message, fileName, lineno, colno, err)
  }
}
module.exports = {
  _init_
}
