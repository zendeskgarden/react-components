'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-a57553a7:focus{outline:0}.rc-stretched-a57553a7{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-a57553a7 rc-is-rtl-7ff89aeb","group":"rc-group-a57553a7 rc-l-btn-group-7ff89aeb","active":"rc-active-a57553a7 rc-is-active-7ff89aeb","stretched":"rc-stretched-a57553a7"}
