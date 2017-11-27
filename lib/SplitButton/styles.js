'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-416d5204:focus{outline:0}.rc-stretched-416d5204{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-416d5204 rc-is-rtl-8999aef","group":"rc-group-416d5204 rc-l-btn-group-8999aef","active":"rc-active-416d5204 rc-is-active-8999aef","stretched":"rc-stretched-416d5204"}
