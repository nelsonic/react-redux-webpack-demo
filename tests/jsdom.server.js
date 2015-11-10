'use strict'

require('babel/register')({})
var jsdom = require('jsdom')
var HTML = '<html><body></body></html>'

function generateDOM() {

  global.document = jsdom.jsdom(HTML)
  global.window = document.defaultView
  global.navigator = window.navigator
  require('./unit/component.js')
  require('./unit/reducers.js')
  require('./unit/utils.js')
}

generateDOM()
