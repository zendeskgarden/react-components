'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-490ad0ae{position:fixed}.rc-size_medium-490ad0ae{max-width:270px}.rc-inline-490ad0ae{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-490ad0ae","tooltip":"rc-tooltip-490ad0ae rc-c-tooltip-424e6018 rc-c-arrow-424e6018 rc-c-arrow-538f7e84","size_medium":"rc-size_medium-490ad0ae rc-c-tooltip--medium-424e6018","size_large":"rc-size_large-490ad0ae rc-c-tooltip--large-424e6018","left":"rc-left-490ad0ae rc-c-arrow--r-538f7e84","bottom":"rc-bottom-490ad0ae rc-c-arrow--t-538f7e84","top":"rc-top-490ad0ae rc-c-arrow--b-538f7e84","right":"rc-right-490ad0ae rc-c-arrow--l-538f7e84","inline":"rc-inline-490ad0ae"}
