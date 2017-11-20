'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-c4a116e7:focus{outline:0}.rc-no_animation-c4a116e7{transition:none}.rc-is_hidden-c4a116e7[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-c4a116e7 rc-c-pagination-b9b8b48e","page":"rc-page-c4a116e7 rc-c-pagination__page-b9b8b48e","no_animation":"rc-no_animation-c4a116e7","page_previous":"rc-page_previous-c4a116e7 rc-c-pagination__page--previous-b9b8b48e","page_next":"rc-page_next-c4a116e7 rc-c-pagination__page--next-b9b8b48e","page_gap":"rc-page_gap-c4a116e7 rc-c-pagination__page--gap-b9b8b48e","is_current":"rc-is_current-c4a116e7 rc-is-current-b9b8b48e","is_focused":"rc-is_focused-c4a116e7 rc-is-focused-b9b8b48e","is_hovered":"rc-is_hovered-c4a116e7 rc-is-hovered-b9b8b48e","is_hidden":"rc-is_hidden-c4a116e7 rc-is-hidden-b9b8b48e","is_rtl":"rc-is_rtl-c4a116e7 rc-is-rtl-b9b8b48e"}
