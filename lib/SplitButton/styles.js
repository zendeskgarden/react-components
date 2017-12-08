'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-d8de5256:focus{outline:0}.rc-stretched-d8de5256{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-d8de5256 rc-is-rtl-c1d2b626","group":"rc-group-d8de5256 rc-l-btn-group-c1d2b626","active":"rc-active-d8de5256 rc-is-active-c1d2b626","stretched":"rc-stretched-d8de5256"}
