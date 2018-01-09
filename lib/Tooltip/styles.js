'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-6629d043{position:fixed}.rc-size_medium-6629d043{max-width:270px}.rc-inline-6629d043{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-6629d043","tooltip":"rc-tooltip-6629d043 rc-c-tooltip-510b601a rc-c-arrow-510b601a rc-c-arrow-64547e86","size_medium":"rc-size_medium-6629d043 rc-c-tooltip--medium-510b601a","size_large":"rc-size_large-6629d043 rc-c-tooltip--large-510b601a","left":"rc-left-6629d043 rc-c-arrow--r-64547e86","bottom":"rc-bottom-6629d043 rc-c-arrow--t-64547e86","top":"rc-top-6629d043 rc-c-arrow--b-64547e86","right":"rc-right-6629d043 rc-c-arrow--l-64547e86","inline":"rc-inline-6629d043"}
