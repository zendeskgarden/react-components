'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-d51a5250:focus{outline:0}.rc-stretched-d51a5250{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-d51a5250 rc-is-rtl-c1d0b626","group":"rc-group-d51a5250 rc-l-btn-group-c1d0b626","active":"rc-active-d51a5250 rc-is-active-c1d0b626","stretched":"rc-stretched-d51a5250"}
