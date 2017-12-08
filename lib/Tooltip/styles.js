'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-7504d44c{position:fixed}.rc-size_medium-7504d44c{max-width:270px}.rc-inline-7504d44c{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-7504d44c","tooltip":"rc-tooltip-7504d44c rc-c-tooltip-bbe5fee rc-c-arrow-bbe5fee rc-c-arrow-f2487e5a","size_medium":"rc-size_medium-7504d44c rc-c-tooltip--medium-bbe5fee","size_large":"rc-size_large-7504d44c rc-c-tooltip--large-bbe5fee","left":"rc-left-7504d44c rc-c-arrow--r-f2487e5a","bottom":"rc-bottom-7504d44c rc-c-arrow--t-f2487e5a","top":"rc-top-7504d44c rc-c-arrow--b-f2487e5a","right":"rc-right-7504d44c rc-c-arrow--l-f2487e5a","inline":"rc-inline-7504d44c"}
