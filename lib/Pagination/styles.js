'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-6fc914e2:focus{outline:0}.rc-no_animation-6fc914e2{transition:none}.rc-is_hidden-6fc914e2[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-6fc914e2 rc-c-pagination-7a97b45f","page":"rc-page-6fc914e2 rc-c-pagination__page-7a97b45f","no_animation":"rc-no_animation-6fc914e2","page_previous":"rc-page_previous-6fc914e2 rc-c-pagination__page--previous-7a97b45f","page_next":"rc-page_next-6fc914e2 rc-c-pagination__page--next-7a97b45f","page_gap":"rc-page_gap-6fc914e2 rc-c-pagination__page--gap-7a97b45f","is_current":"rc-is_current-6fc914e2 rc-is-current-7a97b45f","is_focused":"rc-is_focused-6fc914e2 rc-is-focused-7a97b45f","is_hovered":"rc-is_hovered-6fc914e2 rc-is-hovered-7a97b45f","is_hidden":"rc-is_hidden-6fc914e2 rc-is-hidden-7a97b45f","is_rtl":"rc-is_rtl-6fc914e2 rc-is-rtl-7a97b45f"}
