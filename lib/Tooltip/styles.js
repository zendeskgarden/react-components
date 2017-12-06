'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-f4c7d48c{position:fixed}.rc-size_medium-f4c7d48c{max-width:270px}.rc-inline-f4c7d48c{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-f4c7d48c","tooltip":"rc-tooltip-f4c7d48c rc-c-tooltip-f58f5feb rc-c-arrow-f58f5feb rc-c-arrow-d91c7e57","size_medium":"rc-size_medium-f4c7d48c rc-c-tooltip--medium-f58f5feb","size_large":"rc-size_large-f4c7d48c rc-c-tooltip--large-f58f5feb","left":"rc-left-f4c7d48c rc-c-arrow--r-d91c7e57","bottom":"rc-bottom-f4c7d48c rc-c-arrow--t-d91c7e57","top":"rc-top-f4c7d48c rc-c-arrow--b-d91c7e57","right":"rc-right-f4c7d48c rc-c-arrow--l-d91c7e57","inline":"rc-inline-f4c7d48c"}
