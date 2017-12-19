'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-6ce4532d:focus{outline:0}.rc-stretched-6ce4532d{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-6ce4532d rc-is-rtl-b74eb64f","group":"rc-group-6ce4532d rc-l-btn-group-b74eb64f","active":"rc-active-6ce4532d rc-is-active-b74eb64f","stretched":"rc-stretched-6ce4532d"}
