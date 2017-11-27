'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-9657d3bb{position:fixed}.rc-size_medium-9657d3bb{max-width:270px}.rc-inline-9657d3bb{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-9657d3bb","tooltip":"rc-tooltip-9657d3bb rc-c-tooltip-d80f5fe7 rc-c-arrow-d80f5fe7 rc-c-arrow-b78c7e53","size_medium":"rc-size_medium-9657d3bb rc-c-tooltip--medium-d80f5fe7","size_large":"rc-size_large-9657d3bb rc-c-tooltip--large-d80f5fe7","left":"rc-left-9657d3bb rc-c-arrow--r-b78c7e53","bottom":"rc-bottom-9657d3bb rc-c-arrow--t-b78c7e53","top":"rc-top-9657d3bb rc-c-arrow--b-b78c7e53","right":"rc-right-9657d3bb rc-c-arrow--l-b78c7e53","inline":"rc-inline-9657d3bb"}
