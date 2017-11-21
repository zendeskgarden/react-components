'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-dcde1485:focus{outline:0}.rc-no_animation-dcde1485{transition:none}.rc-is_hidden-dcde1485[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-dcde1485 rc-c-pagination-149db45c","page":"rc-page-dcde1485 rc-c-pagination__page-149db45c","no_animation":"rc-no_animation-dcde1485","page_previous":"rc-page_previous-dcde1485 rc-c-pagination__page--previous-149db45c","page_next":"rc-page_next-dcde1485 rc-c-pagination__page--next-149db45c","page_gap":"rc-page_gap-dcde1485 rc-c-pagination__page--gap-149db45c","is_current":"rc-is_current-dcde1485 rc-is-current-149db45c","is_focused":"rc-is_focused-dcde1485 rc-is-focused-149db45c","is_hovered":"rc-is_hovered-dcde1485 rc-is-hovered-149db45c","is_hidden":"rc-is_hidden-dcde1485 rc-is-hidden-149db45c","is_rtl":"rc-is_rtl-dcde1485 rc-is-rtl-149db45c"}
