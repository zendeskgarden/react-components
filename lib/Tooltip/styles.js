'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-5342d248{position:fixed}.rc-size_medium-5342d248{max-width:270px}.rc-inline-5342d248{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-5342d248","tooltip":"rc-tooltip-5342d248 rc-c-tooltip-49ac6019 rc-c-arrow-49ac6019 rc-c-arrow-5bf17e85","size_medium":"rc-size_medium-5342d248 rc-c-tooltip--medium-49ac6019","size_large":"rc-size_large-5342d248 rc-c-tooltip--large-49ac6019","left":"rc-left-5342d248 rc-c-arrow--r-5bf17e85","bottom":"rc-bottom-5342d248 rc-c-arrow--t-5bf17e85","top":"rc-top-5342d248 rc-c-arrow--b-5bf17e85","right":"rc-right-5342d248 rc-c-arrow--l-5bf17e85","inline":"rc-inline-5342d248"}
