'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-dd3f1271:focus{outline:0}.rc-no_animation-dd3f1271{transition:none}.rc-is_hidden-dd3f1271[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-dd3f1271 rc-c-pagination-c225443c","page":"rc-page-dd3f1271 rc-c-pagination__page-c225443c","no_animation":"rc-no_animation-dd3f1271","page_previous":"rc-page_previous-dd3f1271 rc-c-pagination__page--previous-c225443c","page_next":"rc-page_next-dd3f1271 rc-c-pagination__page--next-c225443c","page_gap":"rc-page_gap-dd3f1271 rc-c-pagination__page--gap-c225443c","is_current":"rc-is_current-dd3f1271 rc-is-current-c225443c","is_focused":"rc-is_focused-dd3f1271 rc-is-focused-c225443c","is_hovered":"rc-is_hovered-dd3f1271 rc-is-hovered-c225443c","is_hidden":"rc-is_hidden-dd3f1271 rc-is-hidden-c225443c","is_rtl":"rc-is_rtl-dd3f1271 rc-is-rtl-c225443c"}
