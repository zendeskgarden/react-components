'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-6d3ed01f{position:fixed}.rc-size_medium-6d3ed01f{max-width:270px}.rc-inline-6d3ed01f{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-6d3ed01f","tooltip":"rc-tooltip-6d3ed01f rc-c-tooltip-83985ec6 rc-c-arrow-83985ec6 rc-c-arrow-3d827d32","size_medium":"rc-size_medium-6d3ed01f rc-c-tooltip--medium-83985ec6","size_large":"rc-size_large-6d3ed01f rc-c-tooltip--large-83985ec6","left":"rc-left-6d3ed01f rc-c-arrow--r-3d827d32","bottom":"rc-bottom-6d3ed01f rc-c-arrow--t-3d827d32","top":"rc-top-6d3ed01f rc-c-arrow--b-3d827d32","right":"rc-right-6d3ed01f rc-c-arrow--l-3d827d32","inline":"rc-inline-6d3ed01f"}
