'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-f2ded517{position:fixed}.rc-size_medium-f2ded517{max-width:270px}.rc-inline-f2ded517{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-f2ded517","tooltip":"rc-tooltip-f2ded517 rc-c-tooltip-ee2f5fea rc-c-arrow-ee2f5fea rc-c-arrow-d0b87e56","size_medium":"rc-size_medium-f2ded517 rc-c-tooltip--medium-ee2f5fea","size_large":"rc-size_large-f2ded517 rc-c-tooltip--large-ee2f5fea","left":"rc-left-f2ded517 rc-c-arrow--r-d0b87e56","bottom":"rc-bottom-f2ded517 rc-c-arrow--t-d0b87e56","top":"rc-top-f2ded517 rc-c-arrow--b-d0b87e56","right":"rc-right-f2ded517 rc-c-arrow--l-d0b87e56","inline":"rc-inline-f2ded517"}
