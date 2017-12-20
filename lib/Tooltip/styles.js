'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-7380cfa9{position:fixed}.rc-size_medium-7380cfa9{max-width:270px}.rc-inline-7380cfa9{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-7380cfa9","tooltip":"rc-tooltip-7380cfa9 rc-c-tooltip-424f6018 rc-c-arrow-424f6018 rc-c-arrow-53907e84","size_medium":"rc-size_medium-7380cfa9 rc-c-tooltip--medium-424f6018","size_large":"rc-size_large-7380cfa9 rc-c-tooltip--large-424f6018","left":"rc-left-7380cfa9 rc-c-arrow--r-53907e84","bottom":"rc-bottom-7380cfa9 rc-c-arrow--t-53907e84","top":"rc-top-7380cfa9 rc-c-arrow--b-53907e84","right":"rc-right-7380cfa9 rc-c-arrow--l-53907e84","inline":"rc-inline-7380cfa9"}
