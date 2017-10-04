'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-tooltip-9b1dc904{position:fixed}.rc-size_medium-9b1dc904{max-width:270px}.rc-inline-9b1dc904{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tooltip":"rc-tooltip-9b1dc904 rc-c-tooltip-83985ec6 rc-c-arrow-83985ec6 rc-c-arrow-4c665e","size_medium":"rc-size_medium-9b1dc904 rc-c-tooltip--medium-83985ec6","size_large":"rc-size_large-9b1dc904 rc-c-tooltip--large-83985ec6","left":"rc-left-9b1dc904 rc-c-arrow--r-4c665e","bottom":"rc-bottom-9b1dc904 rc-c-arrow--t-4c665e","top":"rc-top-9b1dc904 rc-c-arrow--b-4c665e","right":"rc-right-9b1dc904 rc-c-arrow--l-4c665e","inline":"rc-inline-9b1dc904"}
