'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-ea5e5155:focus{outline:0}.rc-stretched-ea5e5155{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-ea5e5155 rc-is-rtl-1b5b651","group":"rc-group-ea5e5155 rc-l-btn-group-1b5b651","active":"rc-active-ea5e5155 rc-is-active-1b5b651","stretched":"rc-stretched-ea5e5155"}
