'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-7a0716e8:focus{outline:0}.rc-no_animation-7a0716e8{transition:none}.rc-is_hidden-7a0716e8[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-7a0716e8 rc-c-pagination-afb7b33b","page":"rc-page-7a0716e8 rc-c-pagination__page-afb7b33b","no_animation":"rc-no_animation-7a0716e8","page_previous":"rc-page_previous-7a0716e8 rc-c-pagination__page--previous-afb7b33b","page_next":"rc-page_next-7a0716e8 rc-c-pagination__page--next-afb7b33b","page_gap":"rc-page_gap-7a0716e8 rc-c-pagination__page--gap-afb7b33b","is_current":"rc-is_current-7a0716e8 rc-is-current-afb7b33b","is_focused":"rc-is_focused-7a0716e8 rc-is-focused-afb7b33b","is_hovered":"rc-is_hovered-7a0716e8 rc-is-hovered-afb7b33b","is_hidden":"rc-is_hidden-7a0716e8 rc-is-hidden-afb7b33b","is_rtl":"rc-is_rtl-7a0716e8 rc-is-rtl-afb7b33b"}
