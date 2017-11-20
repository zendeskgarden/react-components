'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-94a4d446{position:fixed}.rc-size_medium-94a4d446{max-width:270px}.rc-inline-94a4d446{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-94a4d446","tooltip":"rc-tooltip-94a4d446 rc-c-tooltip-d0af5fe6 rc-c-arrow-d0af5fe6 rc-c-arrow-af287e52","size_medium":"rc-size_medium-94a4d446 rc-c-tooltip--medium-d0af5fe6","size_large":"rc-size_large-94a4d446 rc-c-tooltip--large-d0af5fe6","left":"rc-left-94a4d446 rc-c-arrow--r-af287e52","bottom":"rc-bottom-94a4d446 rc-c-arrow--t-af287e52","top":"rc-top-94a4d446 rc-c-arrow--b-af287e52","right":"rc-right-94a4d446 rc-c-arrow--l-af287e52","inline":"rc-inline-94a4d446"}
