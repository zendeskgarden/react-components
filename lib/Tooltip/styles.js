'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-4d2fd2c7{position:fixed}.rc-size_medium-4d2fd2c7{max-width:270px}.rc-inline-4d2fd2c7{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-4d2fd2c7","tooltip":"rc-tooltip-4d2fd2c7 rc-c-tooltip-21d85ff1 rc-c-arrow-21d85ff1 rc-c-arrow-b7d7e5d","size_medium":"rc-size_medium-4d2fd2c7 rc-c-tooltip--medium-21d85ff1","size_large":"rc-size_large-4d2fd2c7 rc-c-tooltip--large-21d85ff1","left":"rc-left-4d2fd2c7 rc-c-arrow--r-b7d7e5d","bottom":"rc-bottom-4d2fd2c7 rc-c-arrow--t-b7d7e5d","top":"rc-top-4d2fd2c7 rc-c-arrow--b-b7d7e5d","right":"rc-right-4d2fd2c7 rc-c-arrow--l-b7d7e5d","inline":"rc-inline-4d2fd2c7"}
