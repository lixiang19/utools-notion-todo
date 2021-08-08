module.exports = {
  testLog () {
    utools.ubrowser.goto('https://cn.bing.com')
      .value('#sb_form_q', 'uTools')
      .click('#sb_form_go')
      .run({ width: 1000, height: 600 })
  }
}
