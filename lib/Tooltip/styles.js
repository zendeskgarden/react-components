'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-7cbdd256{position:fixed}.rc-size_medium-7cbdd256{max-width:270px}.rc-inline-7cbdd256{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-7cbdd256","tooltip":"rc-tooltip-7cbdd256 rc-c-tooltip-1a7a5ff0 rc-c-arrow-1a7a5ff0 rc-c-arrow-31b7e5c","size_medium":"rc-size_medium-7cbdd256 rc-c-tooltip--medium-1a7a5ff0","size_large":"rc-size_large-7cbdd256 rc-c-tooltip--large-1a7a5ff0","left":"rc-left-7cbdd256 rc-c-arrow--r-31b7e5c","bottom":"rc-bottom-7cbdd256 rc-c-arrow--t-31b7e5c","top":"rc-top-7cbdd256 rc-c-arrow--b-31b7e5c","right":"rc-right-7cbdd256 rc-c-arrow--l-31b7e5c","inline":"rc-inline-7cbdd256"}
