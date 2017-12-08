'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-4cb2530e:focus{outline:0}.rc-stretched-4cb2530e{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-4cb2530e rc-is-rtl-e6feb627","group":"rc-group-4cb2530e rc-l-btn-group-e6feb627","active":"rc-active-4cb2530e rc-is-active-e6feb627","stretched":"rc-stretched-4cb2530e"}
