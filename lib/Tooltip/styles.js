'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-d3add3e3{position:fixed}.rc-size_medium-d3add3e3{max-width:270px}.rc-inline-d3add3e3{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-d3add3e3","tooltip":"rc-tooltip-d3add3e3 rc-c-tooltip-e6c95fe9 rc-c-arrow-e6c95fe9 rc-c-arrow-c84e7e55","size_medium":"rc-size_medium-d3add3e3 rc-c-tooltip--medium-e6c95fe9","size_large":"rc-size_large-d3add3e3 rc-c-tooltip--large-e6c95fe9","left":"rc-left-d3add3e3 rc-c-arrow--r-c84e7e55","bottom":"rc-bottom-d3add3e3 rc-c-arrow--t-c84e7e55","top":"rc-top-d3add3e3 rc-c-arrow--b-c84e7e55","right":"rc-right-d3add3e3 rc-c-arrow--l-c84e7e55","inline":"rc-inline-d3add3e3"}
