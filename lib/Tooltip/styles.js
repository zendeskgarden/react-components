'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-34ddd312{position:fixed}.rc-size_medium-34ddd312{max-width:270px}.rc-inline-34ddd312{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-34ddd312","tooltip":"rc-tooltip-34ddd312 rc-c-tooltip-45e5fed rc-c-arrow-45e5fed rc-c-arrow-e9e47e59","size_medium":"rc-size_medium-34ddd312 rc-c-tooltip--medium-45e5fed","size_large":"rc-size_large-34ddd312 rc-c-tooltip--large-45e5fed","left":"rc-left-34ddd312 rc-c-arrow--r-e9e47e59","bottom":"rc-bottom-34ddd312 rc-c-arrow--t-e9e47e59","top":"rc-top-34ddd312 rc-c-arrow--b-e9e47e59","right":"rc-right-34ddd312 rc-c-arrow--l-e9e47e59","inline":"rc-inline-34ddd312"}
