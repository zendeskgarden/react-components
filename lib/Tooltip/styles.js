'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-6879d375{position:fixed}.rc-size_medium-6879d375{max-width:270px}.rc-inline-6879d375{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-6879d375","tooltip":"rc-tooltip-6879d375 rc-c-tooltip-21da5ff1 rc-c-arrow-21da5ff1 rc-c-arrow-b7f7e5d","size_medium":"rc-size_medium-6879d375 rc-c-tooltip--medium-21da5ff1","size_large":"rc-size_large-6879d375 rc-c-tooltip--large-21da5ff1","left":"rc-left-6879d375 rc-c-arrow--r-b7f7e5d","bottom":"rc-bottom-6879d375 rc-c-arrow--t-b7f7e5d","top":"rc-top-6879d375 rc-c-arrow--b-b7f7e5d","right":"rc-right-6879d375 rc-c-arrow--l-b7f7e5d","inline":"rc-inline-6879d375"}
