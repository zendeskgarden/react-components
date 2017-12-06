'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-2ac05145:focus{outline:0}.rc-stretched-2ac05145{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-2ac05145 rc-is-rtl-5248b623","group":"rc-group-2ac05145 rc-l-btn-group-5248b623","active":"rc-active-2ac05145 rc-is-active-5248b623","stretched":"rc-stretched-2ac05145"}
