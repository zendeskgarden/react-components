'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-2762d395{position:fixed}.rc-size_medium-2762d395{max-width:270px}.rc-inline-2762d395{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-2762d395","tooltip":"rc-tooltip-2762d395 rc-c-tooltip-e6cd5fe9 rc-c-arrow-e6cd5fe9 rc-c-arrow-c8527e55","size_medium":"rc-size_medium-2762d395 rc-c-tooltip--medium-e6cd5fe9","size_large":"rc-size_large-2762d395 rc-c-tooltip--large-e6cd5fe9","left":"rc-left-2762d395 rc-c-arrow--r-c8527e55","bottom":"rc-bottom-2762d395 rc-c-arrow--t-c8527e55","top":"rc-top-2762d395 rc-c-arrow--b-c8527e55","right":"rc-right-2762d395 rc-c-arrow--l-c8527e55","inline":"rc-inline-2762d395"}
