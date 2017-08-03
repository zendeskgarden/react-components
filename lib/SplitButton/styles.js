'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-group-4da430c2:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"rtl":"rc-rtl-4da430c2 rc-is-rtl-6ebc316f","group":"rc-group-4da430c2 rc-l-btn-group-6ebc316f"}
