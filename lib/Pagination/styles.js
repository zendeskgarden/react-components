'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-f4f812f6:focus{outline:0}.rc-no_animation-f4f812f6{transition:none}.rc-is_hidden-f4f812f6[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-f4f812f6 rc-c-pagination-c27b4467","page":"rc-page-f4f812f6 rc-c-pagination__page-c27b4467","no_animation":"rc-no_animation-f4f812f6","page_previous":"rc-page_previous-f4f812f6 rc-c-pagination__page--previous-c27b4467","page_next":"rc-page_next-f4f812f6 rc-c-pagination__page--next-c27b4467","page_gap":"rc-page_gap-f4f812f6 rc-c-pagination__page--gap-c27b4467","is_current":"rc-is_current-f4f812f6 rc-is-current-c27b4467","is_focused":"rc-is_focused-f4f812f6 rc-is-focused-c27b4467","is_hovered":"rc-is_hovered-f4f812f6 rc-is-hovered-c27b4467","is_hidden":"rc-is_hidden-f4f812f6 rc-is-hidden-c27b4467","is_rtl":"rc-is_rtl-f4f812f6 rc-is-rtl-c27b4467"}
