'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-9b01292:focus{outline:0}.rc-no_animation-9b01292{transition:none}.rc-is_hidden-9b01292[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-9b01292 rc-c-pagination-c82a4435","page":"rc-page-9b01292 rc-c-pagination__page-c82a4435","no_animation":"rc-no_animation-9b01292","page_previous":"rc-page_previous-9b01292 rc-c-pagination__page--previous-c82a4435","page_next":"rc-page_next-9b01292 rc-c-pagination__page--next-c82a4435","page_gap":"rc-page_gap-9b01292 rc-c-pagination__page--gap-c82a4435","is_current":"rc-is_current-9b01292 rc-is-current-c82a4435","is_focused":"rc-is_focused-9b01292 rc-is-focused-c82a4435","is_hovered":"rc-is_hovered-9b01292 rc-is-hovered-c82a4435","is_hidden":"rc-is_hidden-9b01292 rc-is-hidden-c82a4435","is_rtl":"rc-is_rtl-9b01292 rc-is-rtl-c82a4435"}
