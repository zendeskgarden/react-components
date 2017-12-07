'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-e2d95267:focus{outline:0}.rc-stretched-e2d95267{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-e2d95267 rc-is-rtl-9ca4b625","group":"rc-group-e2d95267 rc-l-btn-group-9ca4b625","active":"rc-active-e2d95267 rc-is-active-9ca4b625","stretched":"rc-stretched-e2d95267"}
