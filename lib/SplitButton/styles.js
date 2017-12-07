'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-42cc5308:focus{outline:0}.rc-stretched-42cc5308{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-42cc5308 rc-is-rtl-e6709aee","group":"rc-group-42cc5308 rc-l-btn-group-e6709aee","active":"rc-active-42cc5308 rc-is-active-e6709aee","stretched":"rc-stretched-42cc5308"}
