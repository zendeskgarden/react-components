'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-ca421468:focus{outline:0}.rc-no_animation-ca421468{transition:none}.rc-is_hidden-ca421468[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-ca421468 rc-c-pagination-2d4a443f","page":"rc-page-ca421468 rc-c-pagination__page-2d4a443f","no_animation":"rc-no_animation-ca421468","page_previous":"rc-page_previous-ca421468 rc-c-pagination__page--previous-2d4a443f","page_next":"rc-page_next-ca421468 rc-c-pagination__page--next-2d4a443f","page_gap":"rc-page_gap-ca421468 rc-c-pagination__page--gap-2d4a443f","is_current":"rc-is_current-ca421468 rc-is-current-2d4a443f","is_focused":"rc-is_focused-ca421468 rc-is-focused-2d4a443f","is_hovered":"rc-is_hovered-ca421468 rc-is-hovered-2d4a443f","is_hidden":"rc-is_hidden-ca421468 rc-is-hidden-2d4a443f","is_rtl":"rc-is_rtl-ca421468 rc-is-rtl-2d4a443f"}
