'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-7e67d62b{position:fixed}.rc-size_medium-7e67d62b{max-width:270px}.rc-inline-7e67d62b{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-7e67d62b","tooltip":"rc-tooltip-7e67d62b rc-c-tooltip-131c5fef rc-c-arrow-131c5fef rc-c-arrow-faaa7e5b","size_medium":"rc-size_medium-7e67d62b rc-c-tooltip--medium-131c5fef","size_large":"rc-size_large-7e67d62b rc-c-tooltip--large-131c5fef","left":"rc-left-7e67d62b rc-c-arrow--r-faaa7e5b","bottom":"rc-bottom-7e67d62b rc-c-arrow--t-faaa7e5b","top":"rc-top-7e67d62b rc-c-arrow--b-faaa7e5b","right":"rc-right-7e67d62b rc-c-arrow--l-faaa7e5b","inline":"rc-inline-7e67d62b"}
