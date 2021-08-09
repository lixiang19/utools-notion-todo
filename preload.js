
const notion = require('./src/api/notion.js')
const loadModule = require('./src/helper/loadModule.js')

loadModule.init()
window.log = window.util.logger.log

// utools.onPluginReady(async () => {
//   const res = await notion.getList()
//   utools.showNotification('运行到此处1')
//   log(res)
// })
// utools.onPluginEnter(({ code, type, payload }) => {
//   console.log('用户进入插件', code, type, payload)
// })
window.exports = {
  notion: { // 注意：键对应的是 plugin.json 中的 features.code
    mode: 'list', // 列表模式
    args: {
      // 进入插件时调用（可选）
      enter: async (action, callbackSetList) => {
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
