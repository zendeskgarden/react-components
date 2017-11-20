'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-a2a3527f:focus{outline:0}.rc-stretched-a2a3527f{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-a2a3527f rc-is-rtl-ac69b1c","group":"rc-group-a2a3527f rc-l-btn-group-ac69b1c","active":"rc-active-a2a3527f rc-is-active-ac69b1c","stretched":"rc-stretched-a2a3527f"}
