'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tooltips.js')
require('../deps/@zendesk/garden-css-arrows.js')

appendStyles({
  css: ".rc-container-b70bd567{position:fixed}.rc-size_medium-b70bd567{max-width:270px}.rc-inline-b70bd567{position:absolute}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"container":"rc-container-b70bd567","tooltip":"rc-tooltip-b70bd567 rc-c-tooltip-df6f5fe8 rc-c-arrow-df6f5fe8 rc-c-arrow-bff07e54","size_medium":"rc-size_medium-b70bd567 rc-c-tooltip--medium-df6f5fe8","size_large":"rc-size_large-b70bd567 rc-c-tooltip--large-df6f5fe8","left":"rc-left-b70bd567 rc-c-arrow--r-bff07e54","bottom":"rc-bottom-b70bd567 rc-c-arrow--t-bff07e54","top":"rc-top-b70bd567 rc-c-arrow--b-bff07e54","right":"rc-right-b70bd567 rc-c-arrow--l-bff07e54","inline":"rc-inline-b70bd567"}
