'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-8e5d51eb:focus{outline:0}.rc-stretched-8e5d51eb{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-8e5d51eb rc-is-rtl-19809ae8","group":"rc-group-8e5d51eb rc-l-btn-group-19809ae8","active":"rc-active-8e5d51eb rc-is-active-19809ae8","stretched":"rc-stretched-8e5d51eb"}
