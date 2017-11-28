'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-e9dd5415:focus{outline:0}.rc-stretched-e9dd5415{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-e9dd5415 rc-is-rtl-5dce9aea","group":"rc-group-e9dd5415 rc-l-btn-group-5dce9aea","active":"rc-active-e9dd5415 rc-is-active-5dce9aea","stretched":"rc-stretched-e9dd5415"}
