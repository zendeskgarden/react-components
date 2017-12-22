'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-5e32d251{position:fixed}.rc-size_medium-5e32d251{max-width:270px}.rc-inline-5e32d251{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-5e32d251","tooltip":"rc-tooltip-5e32d251 rc-c-tooltip-49ad6019 rc-c-arrow-49ad6019 rc-c-arrow-5bf27e85","size_medium":"rc-size_medium-5e32d251 rc-c-tooltip--medium-49ad6019","size_large":"rc-size_large-5e32d251 rc-c-tooltip--large-49ad6019","left":"rc-left-5e32d251 rc-c-arrow--r-5bf27e85","bottom":"rc-bottom-5e32d251 rc-c-arrow--t-5bf27e85","top":"rc-top-5e32d251 rc-c-arrow--b-5bf27e85","right":"rc-right-5e32d251 rc-c-arrow--l-5bf27e85","inline":"rc-inline-5e32d251"}
