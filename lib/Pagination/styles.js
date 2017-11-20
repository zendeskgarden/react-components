'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-c2341470:focus{outline:0}.rc-no_animation-c2341470{transition:none}.rc-is_hidden-c2341470[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-c2341470 rc-c-pagination-f290b45b","page":"rc-page-c2341470 rc-c-pagination__page-f290b45b","no_animation":"rc-no_animation-c2341470","page_previous":"rc-page_previous-c2341470 rc-c-pagination__page--previous-f290b45b","page_next":"rc-page_next-c2341470 rc-c-pagination__page--next-f290b45b","page_gap":"rc-page_gap-c2341470 rc-c-pagination__page--gap-f290b45b","is_current":"rc-is_current-c2341470 rc-is-current-f290b45b","is_focused":"rc-is_focused-c2341470 rc-is-focused-f290b45b","is_hovered":"rc-is_hovered-c2341470 rc-is-hovered-f290b45b","is_hidden":"rc-is_hidden-c2341470 rc-is-hidden-f290b45b","is_rtl":"rc-is_rtl-c2341470 rc-is-rtl-f290b45b"}
