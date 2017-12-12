'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-9447d63d{position:fixed}.rc-size_medium-9447d63d{max-width:270px}.rc-inline-9447d63d{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-9447d63d","tooltip":"rc-tooltip-9447d63d rc-c-tooltip-131e5fef rc-c-arrow-131e5fef rc-c-arrow-faac7e5b","size_medium":"rc-size_medium-9447d63d rc-c-tooltip--medium-131e5fef","size_large":"rc-size_large-9447d63d rc-c-tooltip--large-131e5fef","left":"rc-left-9447d63d rc-c-arrow--r-faac7e5b","bottom":"rc-bottom-9447d63d rc-c-arrow--t-faac7e5b","top":"rc-top-9447d63d rc-c-arrow--b-faac7e5b","right":"rc-right-9447d63d rc-c-arrow--l-faac7e5b","inline":"rc-inline-9447d63d"}
