'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-5f34d43a{position:fixed}.rc-size_medium-5f34d43a{max-width:270px}.rc-inline-5f34d43a{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-5f34d43a","tooltip":"rc-tooltip-5f34d43a rc-c-tooltip-bbc5fee rc-c-arrow-bbc5fee rc-c-arrow-f2467e5a","size_medium":"rc-size_medium-5f34d43a rc-c-tooltip--medium-bbc5fee","size_large":"rc-size_large-5f34d43a rc-c-tooltip--large-bbc5fee","left":"rc-left-5f34d43a rc-c-arrow--r-f2467e5a","bottom":"rc-bottom-5f34d43a rc-c-arrow--t-f2467e5a","top":"rc-top-5f34d43a rc-c-arrow--b-f2467e5a","right":"rc-right-5f34d43a rc-c-arrow--l-f2467e5a","inline":"rc-inline-5f34d43a"}
