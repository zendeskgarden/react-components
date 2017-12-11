'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-89e751dc:focus{outline:0}.rc-stretched-89e751dc{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-89e751dc rc-is-rtl-5691b62a","group":"rc-group-89e751dc rc-l-btn-group-5691b62a","active":"rc-active-89e751dc rc-is-active-5691b62a","stretched":"rc-stretched-89e751dc"}
