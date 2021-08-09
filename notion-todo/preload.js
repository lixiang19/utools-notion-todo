const path = require('path')
window.path = path
const getDirPath = (filePath) => path.join(__dirname, filePath)
// const loadModule = require(getDirPath('../../helper/loadModule.js'))
// loadModule.init()
// window.log = window.util.logger.log


const notion = require('./notion.js')
window.exports = {
  notion: { // 注意：键对应的是 plugin.json 中的 features.code
    mode: 'list', // 列表模式
    args: {
      // 进入插件时调用（可选）
      enter: async (action, callbackSetList) => {
        notion.test()
        callbackSetList([
          {
            title: '请求数据',
            description: '等待请求'
          }
        ])
       const list = await notion.getList()
       callbackSetList(list)
      },
      // 子输入框内容变化时被调用 可选 (未设置则无搜索)
      search: (action, searchWord, callbackSetList) => {

      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {

      },
      // 子输入框为空时的占位符，默认为字符串"搜索"
      placeholder: '添加燃烧日程'
    }
  }
}
