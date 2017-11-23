'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-9a295395:focus{outline:0}.rc-stretched-9a295395{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-9a295395 rc-is-rtl-7ff29aeb","group":"rc-group-9a295395 rc-l-btn-group-7ff29aeb","active":"rc-active-9a295395 rc-is-active-7ff29aeb","stretched":"rc-stretched-9a295395"}
