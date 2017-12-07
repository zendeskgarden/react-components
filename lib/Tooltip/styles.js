'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-9906d503{position:fixed}.rc-size_medium-9906d503{max-width:270px}.rc-inline-9906d503{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-9906d503","tooltip":"rc-tooltip-9906d503 rc-c-tooltip-fcef5fec rc-c-arrow-fcef5fec rc-c-arrow-e1807e58","size_medium":"rc-size_medium-9906d503 rc-c-tooltip--medium-fcef5fec","size_large":"rc-size_large-9906d503 rc-c-tooltip--large-fcef5fec","left":"rc-left-9906d503 rc-c-arrow--r-e1807e58","bottom":"rc-bottom-9906d503 rc-c-arrow--t-e1807e58","top":"rc-top-9906d503 rc-c-arrow--b-e1807e58","right":"rc-right-9906d503 rc-c-arrow--l-e1807e58","inline":"rc-inline-9906d503"}
