'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-8077d3a9{position:fixed}.rc-size_medium-8077d3a9{max-width:270px}.rc-inline-8077d3a9{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-8077d3a9","tooltip":"rc-tooltip-8077d3a9 rc-c-tooltip-d80d5fe7 rc-c-arrow-d80d5fe7 rc-c-arrow-b78a7e53","size_medium":"rc-size_medium-8077d3a9 rc-c-tooltip--medium-d80d5fe7","size_large":"rc-size_large-8077d3a9 rc-c-tooltip--large-d80d5fe7","left":"rc-left-8077d3a9 rc-c-arrow--r-b78a7e53","bottom":"rc-bottom-8077d3a9 rc-c-arrow--t-b78a7e53","top":"rc-top-8077d3a9 rc-c-arrow--b-b78a7e53","right":"rc-right-8077d3a9 rc-c-arrow--l-b78a7e53","inline":"rc-inline-8077d3a9"}
