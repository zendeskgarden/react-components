'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-83d110de:focus{outline:0}.rc-no_animation-83d110de{transition:none}.rc-is_hidden-83d110de[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-83d110de rc-c-pagination-570b4439","page":"rc-page-83d110de rc-c-pagination__page-570b4439","no_animation":"rc-no_animation-83d110de","page_previous":"rc-page_previous-83d110de rc-c-pagination__page--previous-570b4439","page_next":"rc-page_next-83d110de rc-c-pagination__page--next-570b4439","page_gap":"rc-page_gap-83d110de rc-c-pagination__page--gap-570b4439","is_current":"rc-is_current-83d110de rc-is-current-570b4439","is_focused":"rc-is_focused-83d110de rc-is-focused-570b4439","is_hovered":"rc-is_hovered-83d110de rc-is-hovered-570b4439","is_hidden":"rc-is_hidden-83d110de rc-is-hidden-570b4439","is_rtl":"rc-is_rtl-83d110de rc-is-rtl-570b4439"}
