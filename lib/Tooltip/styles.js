'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-3d42d3a7{position:fixed}.rc-size_medium-3d42d3a7{max-width:270px}.rc-inline-3d42d3a7{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-3d42d3a7","tooltip":"rc-tooltip-3d42d3a7 rc-c-tooltip-e6cf5fe9 rc-c-arrow-e6cf5fe9 rc-c-arrow-c8547e55","size_medium":"rc-size_medium-3d42d3a7 rc-c-tooltip--medium-e6cf5fe9","size_large":"rc-size_large-3d42d3a7 rc-c-tooltip--large-e6cf5fe9","left":"rc-left-3d42d3a7 rc-c-arrow--r-c8547e55","bottom":"rc-bottom-3d42d3a7 rc-c-arrow--t-c8547e55","top":"rc-top-3d42d3a7 rc-c-arrow--b-c8547e55","right":"rc-right-3d42d3a7 rc-c-arrow--l-c8547e55","inline":"rc-inline-3d42d3a7"}
