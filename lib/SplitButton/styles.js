'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-d605514d:focus{outline:0}.rc-stretched-d605514d{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-d605514d rc-is-rtl-c39b628","group":"rc-group-d605514d rc-l-btn-group-c39b628","active":"rc-active-d605514d rc-is-active-c39b628","stretched":"rc-stretched-d605514d"}
