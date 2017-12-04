'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-container-a10c57dd{display:inline}.rc-container-a10c57dd:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"anchor":"rc-anchor-a10c57dd rc-c-btn-7ff69aeb rc-c-btn--anchor-7ff69aeb","focused":"rc-focused-a10c57dd rc-is-focused-7ff69aeb","container":"rc-container-a10c57dd"}
