'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-4bb9d446{position:fixed}.rc-size_medium-4bb9d446{max-width:270px}.rc-inline-4bb9d446{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-4bb9d446","tooltip":"rc-tooltip-4bb9d446 rc-c-tooltip-fce35fec rc-c-arrow-fce35fec rc-c-arrow-e1747e58","size_medium":"rc-size_medium-4bb9d446 rc-c-tooltip--medium-fce35fec","size_large":"rc-size_large-4bb9d446 rc-c-tooltip--large-fce35fec","left":"rc-left-4bb9d446 rc-c-arrow--r-e1747e58","bottom":"rc-bottom-4bb9d446 rc-c-arrow--t-e1747e58","top":"rc-top-4bb9d446 rc-c-arrow--b-e1747e58","right":"rc-right-4bb9d446 rc-c-arrow--l-e1747e58","inline":"rc-inline-4bb9d446"}
