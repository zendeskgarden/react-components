'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-e619540f:focus{outline:0}.rc-stretched-e619540f{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-e619540f rc-is-rtl-5dcc9aea","group":"rc-group-e619540f rc-l-btn-group-5dcc9aea","active":"rc-active-e619540f rc-is-active-5dcc9aea","stretched":"rc-stretched-e619540f"}
