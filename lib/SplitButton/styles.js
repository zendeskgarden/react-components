'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-626e531c:focus{outline:0}.rc-stretched-626e531c{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-626e531c rc-is-rtl-c66b9b1a","group":"rc-group-626e531c rc-l-btn-group-c66b9b1a","active":"rc-active-626e531c rc-is-active-c66b9b1a","stretched":"rc-stretched-626e531c"}
