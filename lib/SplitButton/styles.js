'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-3fa05303:focus{outline:0}.rc-stretched-3fa05303{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-3fa05303 rc-is-rtl-3ba89ae9","group":"rc-group-3fa05303 rc-l-btn-group-3ba89ae9","active":"rc-active-3fa05303 rc-is-active-3ba89ae9","stretched":"rc-stretched-3fa05303"}
