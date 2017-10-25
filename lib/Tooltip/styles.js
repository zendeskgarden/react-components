'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-56ffce2b{position:fixed}.rc-size_medium-56ffce2b{max-width:270px}.rc-inline-56ffce2b{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-56ffce2b","tooltip":"rc-tooltip-56ffce2b rc-c-tooltip-83985ec6 rc-c-arrow-83985ec6 rc-c-arrow-4c665e","size_medium":"rc-size_medium-56ffce2b rc-c-tooltip--medium-83985ec6","size_large":"rc-size_large-56ffce2b rc-c-tooltip--large-83985ec6","left":"rc-left-56ffce2b rc-c-arrow--r-4c665e","bottom":"rc-bottom-56ffce2b rc-c-arrow--t-4c665e","top":"rc-top-56ffce2b rc-c-arrow--b-4c665e","right":"rc-right-56ffce2b rc-c-arrow--l-4c665e","inline":"rc-inline-56ffce2b"}
