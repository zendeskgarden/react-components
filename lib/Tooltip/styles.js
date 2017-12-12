'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-9265d268{position:fixed}.rc-size_medium-9265d268{max-width:270px}.rc-inline-9265d268{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-9265d268","tooltip":"rc-tooltip-9265d268 rc-c-tooltip-1a7c5ff0 rc-c-arrow-1a7c5ff0 rc-c-arrow-31d7e5c","size_medium":"rc-size_medium-9265d268 rc-c-tooltip--medium-1a7c5ff0","size_large":"rc-size_large-9265d268 rc-c-tooltip--large-1a7c5ff0","left":"rc-left-9265d268 rc-c-arrow--r-31d7e5c","bottom":"rc-bottom-9265d268 rc-c-arrow--t-31d7e5c","top":"rc-top-9265d268 rc-c-arrow--b-31d7e5c","right":"rc-right-9265d268 rc-c-arrow--l-31d7e5c","inline":"rc-inline-9265d268"}
