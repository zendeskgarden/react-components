'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-dce0d2d3{position:fixed}.rc-size_medium-dce0d2d3{max-width:270px}.rc-inline-dce0d2d3{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-dce0d2d3","tooltip":"rc-tooltip-dce0d2d3 rc-c-tooltip-f5855feb rc-c-arrow-f5855feb rc-c-arrow-d9127e57","size_medium":"rc-size_medium-dce0d2d3 rc-c-tooltip--medium-f5855feb","size_large":"rc-size_large-dce0d2d3 rc-c-tooltip--large-f5855feb","left":"rc-left-dce0d2d3 rc-c-arrow--r-d9127e57","bottom":"rc-bottom-dce0d2d3 rc-c-arrow--t-d9127e57","top":"rc-top-dce0d2d3 rc-c-arrow--b-d9127e57","right":"rc-right-dce0d2d3 rc-c-arrow--l-d9127e57","inline":"rc-inline-dce0d2d3"}
