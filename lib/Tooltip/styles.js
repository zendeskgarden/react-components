'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-c8c9d31a{position:fixed}.rc-size_medium-c8c9d31a{max-width:270px}.rc-inline-c8c9d31a{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-c8c9d31a","tooltip":"rc-tooltip-c8c9d31a rc-c-tooltip-29365ff2 rc-c-arrow-29365ff2 rc-c-arrow-13df7e5e","size_medium":"rc-size_medium-c8c9d31a rc-c-tooltip--medium-29365ff2","size_large":"rc-size_large-c8c9d31a rc-c-tooltip--large-29365ff2","left":"rc-left-c8c9d31a rc-c-arrow--r-13df7e5e","bottom":"rc-bottom-c8c9d31a rc-c-arrow--t-13df7e5e","top":"rc-top-c8c9d31a rc-c-arrow--b-13df7e5e","right":"rc-right-c8c9d31a rc-c-arrow--l-13df7e5e","inline":"rc-inline-c8c9d31a"}
