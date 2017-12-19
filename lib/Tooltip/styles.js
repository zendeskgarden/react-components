'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-bfed217{position:fixed}.rc-size_medium-bfed217{max-width:270px}.rc-inline-bfed217{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-bfed217","tooltip":"rc-tooltip-bfed217 rc-c-tooltip-3af16017 rc-c-arrow-3af16017 rc-c-arrow-4b2e7e83","size_medium":"rc-size_medium-bfed217 rc-c-tooltip--medium-3af16017","size_large":"rc-size_large-bfed217 rc-c-tooltip--large-3af16017","left":"rc-left-bfed217 rc-c-arrow--r-4b2e7e83","bottom":"rc-bottom-bfed217 rc-c-arrow--t-4b2e7e83","top":"rc-top-bfed217 rc-c-arrow--b-4b2e7e83","right":"rc-right-bfed217 rc-c-arrow--l-4b2e7e83","inline":"rc-inline-bfed217"}
