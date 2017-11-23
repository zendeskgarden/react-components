'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-cdd14a4:focus{outline:0}.rc-no_animation-cdd14a4{transition:none}.rc-is_hidden-cdd14a4[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-cdd14a4 rc-c-pagination-369bb45d","page":"rc-page-cdd14a4 rc-c-pagination__page-369bb45d","no_animation":"rc-no_animation-cdd14a4","page_previous":"rc-page_previous-cdd14a4 rc-c-pagination__page--previous-369bb45d","page_next":"rc-page_next-cdd14a4 rc-c-pagination__page--next-369bb45d","page_gap":"rc-page_gap-cdd14a4 rc-c-pagination__page--gap-369bb45d","is_current":"rc-is_current-cdd14a4 rc-is-current-369bb45d","is_focused":"rc-is_focused-cdd14a4 rc-is-focused-369bb45d","is_hovered":"rc-is_hovered-cdd14a4 rc-is-hovered-369bb45d","is_hidden":"rc-is_hidden-cdd14a4 rc-is-hidden-369bb45d","is_rtl":"rc-is_rtl-cdd14a4 rc-is-rtl-369bb45d"}
