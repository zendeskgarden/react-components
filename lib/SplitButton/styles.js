'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-af8c51fb:focus{outline:0}.rc-stretched-af8c51fb{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-af8c51fb rc-is-rtl-26e1b652","group":"rc-group-af8c51fb rc-l-btn-group-26e1b652","active":"rc-active-af8c51fb rc-is-active-26e1b652","stretched":"rc-stretched-af8c51fb"}
