'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-3f7fd1b3{position:fixed}.rc-size_medium-3f7fd1b3{max-width:270px}.rc-inline-3f7fd1b3{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-3f7fd1b3","tooltip":"rc-tooltip-3f7fd1b3 rc-c-tooltip-5869601b rc-c-arrow-5869601b rc-c-arrow-6cb67e87","size_medium":"rc-size_medium-3f7fd1b3 rc-c-tooltip--medium-5869601b","size_large":"rc-size_large-3f7fd1b3 rc-c-tooltip--large-5869601b","left":"rc-left-3f7fd1b3 rc-c-arrow--r-6cb67e87","bottom":"rc-bottom-3f7fd1b3 rc-c-arrow--t-6cb67e87","top":"rc-top-3f7fd1b3 rc-c-arrow--b-6cb67e87","right":"rc-right-3f7fd1b3 rc-c-arrow--l-6cb67e87","inline":"rc-inline-3f7fd1b3"}
