'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-5b39d03a{position:fixed}.rc-size_medium-5b39d03a{max-width:270px}.rc-inline-5b39d03a{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-5b39d03a","tooltip":"rc-tooltip-5b39d03a rc-c-tooltip-510a601a rc-c-arrow-510a601a rc-c-arrow-64537e86","size_medium":"rc-size_medium-5b39d03a rc-c-tooltip--medium-510a601a","size_large":"rc-size_large-5b39d03a rc-c-tooltip--large-510a601a","left":"rc-left-5b39d03a rc-c-arrow--r-64537e86","bottom":"rc-bottom-5b39d03a rc-c-arrow--t-64537e86","top":"rc-top-5b39d03a rc-c-arrow--b-64537e86","right":"rc-right-5b39d03a rc-c-arrow--l-64537e86","inline":"rc-inline-5b39d03a"}
