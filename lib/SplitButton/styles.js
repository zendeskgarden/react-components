'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-22a451c8:focus{outline:0}.rc-stretched-22a451c8{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-22a451c8 rc-is-rtl-c3bb628","group":"rc-group-22a451c8 rc-l-btn-group-c3bb628","active":"rc-active-22a451c8 rc-is-active-c3bb628","stretched":"rc-stretched-22a451c8"}
