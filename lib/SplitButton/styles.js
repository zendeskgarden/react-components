'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-3bdc52fd:focus{outline:0}.rc-stretched-3bdc52fd{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-3bdc52fd rc-is-rtl-3ba69ae9","group":"rc-group-3bdc52fd rc-l-btn-group-3ba69ae9","active":"rc-active-3bdc52fd rc-is-active-3ba69ae9","stretched":"rc-stretched-3bdc52fd"}
