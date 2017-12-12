'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-84df51d0:focus{outline:0}.rc-stretched-84df51d0{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-84df51d0 rc-is-rtl-e700b627","group":"rc-group-84df51d0 rc-l-btn-group-e700b627","active":"rc-active-84df51d0 rc-is-active-e700b627","stretched":"rc-stretched-84df51d0"}
