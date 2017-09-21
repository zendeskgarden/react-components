'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-container-d28148cc{display:inline}.rc-container-d28148cc:focus{outline:0;text-decoration:none}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"anchor":"rc-anchor-d28148cc rc-c-btn-86997101 rc-c-btn--anchor-86997101","container":"rc-container-d28148cc"}
