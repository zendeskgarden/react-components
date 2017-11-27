'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-d2ddd243{position:fixed}.rc-size_medium-d2ddd243{max-width:270px}.rc-inline-d2ddd243{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-d2ddd243","tooltip":"rc-tooltip-d2ddd243 rc-c-tooltip-4505fed rc-c-arrow-4505fed rc-c-arrow-e9d67e59","size_medium":"rc-size_medium-d2ddd243 rc-c-tooltip--medium-4505fed","size_large":"rc-size_large-d2ddd243 rc-c-tooltip--large-4505fed","left":"rc-left-d2ddd243 rc-c-arrow--r-e9d67e59","bottom":"rc-bottom-d2ddd243 rc-c-arrow--t-e9d67e59","top":"rc-top-d2ddd243 rc-c-arrow--b-e9d67e59","right":"rc-right-d2ddd243 rc-c-arrow--l-e9d67e59","inline":"rc-inline-d2ddd243"}
