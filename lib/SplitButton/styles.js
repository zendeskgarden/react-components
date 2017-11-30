'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-882e5379:focus{outline:0}.rc-stretched-882e5379{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-882e5379 rc-is-rtl-5dd09aea","group":"rc-group-882e5379 rc-l-btn-group-5dd09aea","active":"rc-active-882e5379 rc-is-active-5dd09aea","stretched":"rc-stretched-882e5379"}
