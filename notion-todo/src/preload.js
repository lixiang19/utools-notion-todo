const path = require('path')
window.path = path

window.exports = {
  notion: { // 注意：键对应的是 plugin.json 中的 features.code
    mode: 'list', // 列表模式
    args: {
      // 进入插件时调用（可选）
      enter: (action, callbackSetList) => {
        const getDirPath = (filePath) => path.join(__dirname, filePath)

        const loadModule = require(getDirPath('../../helper/loadModule.js'))

        loadModule.init()
      },
      // 子输入框内容变化时被调用 可选 (未设置则无搜索)
      search: (action, searchWord, callbackSetList) => {
        // 获取一些数据

        // 执行 callbackSetList 显示出来
        // utools.ubrowser.goto('https://cn.bing.com')
        //   .value('#sb_form_q', 'uTools')
        //   .click('#sb_form_go')
        //   .run({ width: 1000, height: 600 })
        callbackSetList([
          {
            title: '输入框',
            description: '这是描述',
            icon: '', // 图标
            url: 'https://yuanliao.info'
          }
        ])
      },
      // 用户选择列表中某个条目时被调用
      select: (action, itemData, callbackSetList) => {
        window.utools.hideMainWindow()
        const url = itemData.url
        require('electron').shell.openExternal(url)
        window.utools.outPlugin()
      },
      // 子输入框为空时的占位符，默认为字符串"搜索"
      placeholder: '搜索'
    }
  }
}
