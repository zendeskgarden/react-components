'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-afeb0f6f:focus{outline:0}.rc-no_animation-afeb0f6f{transition:none}.rc-is_hidden-afeb0f6f[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-afeb0f6f rc-c-pagination-57654464","page":"rc-page-afeb0f6f rc-c-pagination__page-57654464","no_animation":"rc-no_animation-afeb0f6f","page_previous":"rc-page_previous-afeb0f6f rc-c-pagination__page--previous-57654464","page_next":"rc-page_next-afeb0f6f rc-c-pagination__page--next-57654464","page_gap":"rc-page_gap-afeb0f6f rc-c-pagination__page--gap-57654464","is_current":"rc-is_current-afeb0f6f rc-is-current-57654464","is_focused":"rc-is_focused-afeb0f6f rc-is-focused-57654464","is_hovered":"rc-is_hovered-afeb0f6f rc-is-hovered-57654464","is_hidden":"rc-is_hidden-afeb0f6f rc-is-hidden-57654464","is_rtl":"rc-is_rtl-afeb0f6f rc-is-rtl-57654464"}
