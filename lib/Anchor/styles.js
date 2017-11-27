'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-container-fee34abf{display:inline}.rc-container-fee34abf:focus{outline:0;text-decoration:none}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"anchor":"rc-anchor-fee34abf rc-c-btn-8999aef rc-c-btn--anchor-8999aef","container":"rc-container-fee34abf"}
