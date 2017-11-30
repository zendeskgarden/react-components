'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-275a12a6:focus{outline:0}.rc-no_animation-275a12a6{transition:none}.rc-is_hidden-275a12a6[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-275a12a6 rc-c-pagination-c82c4435","page":"rc-page-275a12a6 rc-c-pagination__page-c82c4435","no_animation":"rc-no_animation-275a12a6","page_previous":"rc-page_previous-275a12a6 rc-c-pagination__page--previous-c82c4435","page_next":"rc-page_next-275a12a6 rc-c-pagination__page--next-c82c4435","page_gap":"rc-page_gap-275a12a6 rc-c-pagination__page--gap-c82c4435","is_current":"rc-is_current-275a12a6 rc-is-current-c82c4435","is_focused":"rc-is_focused-275a12a6 rc-is-focused-c82c4435","is_hovered":"rc-is_hovered-275a12a6 rc-is-hovered-c82c4435","is_hidden":"rc-is_hidden-275a12a6 rc-is-hidden-c82c4435","is_rtl":"rc-is_rtl-275a12a6 rc-is-rtl-c82c4435"}
