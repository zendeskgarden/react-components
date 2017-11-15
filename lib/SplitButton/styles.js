'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-8c9350f8:focus{outline:0}.rc-stretched-8c9350f8{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-8c9350f8 rc-is-rtl-a99899c8","group":"rc-group-8c9350f8 rc-l-btn-group-a99899c8","active":"rc-active-8c9350f8 rc-is-active-a99899c8","stretched":"rc-stretched-8c9350f8"}
