
const path = require('path')
const getDirPath = (filePath) => path.join(__dirname, filePath)
class ConfigItem {
  constructor (name, filePath) {
    this.name = name
    this.filePath = filePath
  }
}
const NODE_EXTEND_CONFIG = [
  new ConfigItem('fs', 'fs'),
  new ConfigItem('path', 'path'),
  new ConfigItem('console', 'console')
]
const UTIL_EXTEND_CONFIG = [
  new ConfigItem('logger', getDirPath('/logger.js')),
  new ConfigItem('logError', getDirPath('/logError.js'))
]
function loadExtensionThenRegister (moduleName, { name, filePath }) {
  const newExtension = require(filePath)
  if (newExtension) {
    if (!window[moduleName]) {
      window[moduleName] = {}
    }
    window[moduleName][name] = newExtension

    // 如果需要初始化，则注册一下
    if (newExtension._init_) {
      newExtension._init_()
    }
  } else {
    console.log('load extension error: ' + name)
  }
}
function init () {
  const loadExtensionList = (moduleName, list) => list.forEach(configItem => loadExtensionThenRegister(moduleName, configItem))
  loadExtensionList('node', NODE_EXTEND_CONFIG)
  loadExtensionList('util', UTIL_EXTEND_CONFIG)
}
init()
module.exports = {
  init
}
