'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-6bc5d651{position:fixed}.rc-size_medium-6bc5d651{max-width:270px}.rc-inline-6bc5d651{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-6bc5d651","tooltip":"rc-tooltip-6bc5d651 rc-c-tooltip-df6b5fe8 rc-c-arrow-df6b5fe8 rc-c-arrow-bfec7e54","size_medium":"rc-size_medium-6bc5d651 rc-c-tooltip--medium-df6b5fe8","size_large":"rc-size_large-6bc5d651 rc-c-tooltip--large-df6b5fe8","left":"rc-left-6bc5d651 rc-c-arrow--r-bfec7e54","bottom":"rc-bottom-6bc5d651 rc-c-arrow--t-bfec7e54","top":"rc-top-6bc5d651 rc-c-arrow--b-bfec7e54","right":"rc-right-6bc5d651 rc-c-arrow--l-bfec7e54","inline":"rc-inline-6bc5d651"}
