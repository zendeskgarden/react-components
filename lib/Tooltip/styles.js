'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-92fed433{position:fixed}.rc-size_medium-92fed433{max-width:270px}.rc-inline-92fed433{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-92fed433","tooltip":"rc-tooltip-92fed433 rc-c-tooltip-ee275fea rc-c-arrow-ee275fea rc-c-arrow-d0b07e56","size_medium":"rc-size_medium-92fed433 rc-c-tooltip--medium-ee275fea","size_large":"rc-size_large-92fed433 rc-c-tooltip--large-ee275fea","left":"rc-left-92fed433 rc-c-arrow--r-d0b07e56","bottom":"rc-bottom-92fed433 rc-c-arrow--t-d0b07e56","top":"rc-top-92fed433 rc-c-arrow--b-d0b07e56","right":"rc-right-92fed433 rc-c-arrow--l-d0b07e56","inline":"rc-inline-92fed433"}
