'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-81a5d663{position:fixed}.rc-size_medium-81a5d663{max-width:270px}.rc-inline-81a5d663{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-81a5d663","tooltip":"rc-tooltip-81a5d663 rc-c-tooltip-df6d5fe8 rc-c-arrow-df6d5fe8 rc-c-arrow-bfee7e54","size_medium":"rc-size_medium-81a5d663 rc-c-tooltip--medium-df6d5fe8","size_large":"rc-size_large-81a5d663 rc-c-tooltip--large-df6d5fe8","left":"rc-left-81a5d663 rc-c-arrow--r-bfee7e54","bottom":"rc-bottom-81a5d663 rc-c-arrow--t-bfee7e54","top":"rc-top-81a5d663 rc-c-arrow--b-bfee7e54","right":"rc-right-81a5d663 rc-c-arrow--l-bfee7e54","inline":"rc-inline-81a5d663"}
