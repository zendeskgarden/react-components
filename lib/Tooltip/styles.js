'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-tooltip-5e9fc8dc{position:fixed}.rc-size_medium-5e9fc8dc{max-width:270px}.rc-inline-5e9fc8dc{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tooltip":"rc-tooltip-5e9fc8dc rc-c-tooltip-b58f0790 rc-c-arrow-b58f0790 rc-c-arrow-4c665e","size_medium":"rc-size_medium-5e9fc8dc rc-c-tooltip--medium-b58f0790","size_large":"rc-size_large-5e9fc8dc rc-c-tooltip--large-b58f0790","left":"rc-left-5e9fc8dc rc-c-arrow--r-4c665e","bottom":"rc-bottom-5e9fc8dc rc-c-arrow--t-4c665e","top":"rc-top-5e9fc8dc rc-c-arrow--b-4c665e","right":"rc-right-5e9fc8dc rc-c-arrow--l-4c665e","inline":"rc-inline-5e9fc8dc"}
