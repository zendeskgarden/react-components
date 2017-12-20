'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-342a111e:focus{outline:0}.rc-no_animation-342a111e{transition:none}.rc-is_hidden-342a111e[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-342a111e rc-c-pagination-7b174465","page":"rc-page-342a111e rc-c-pagination__page-7b174465","no_animation":"rc-no_animation-342a111e","page_previous":"rc-page_previous-342a111e rc-c-pagination__page--previous-7b174465","page_next":"rc-page_next-342a111e rc-c-pagination__page--next-7b174465","page_gap":"rc-page_gap-342a111e rc-c-pagination__page--gap-7b174465","is_current":"rc-is_current-342a111e rc-is-current-7b174465","is_focused":"rc-is_focused-342a111e rc-is-focused-7b174465","is_hovered":"rc-is_hovered-342a111e rc-is-hovered-7b174465","is_hidden":"rc-is_hidden-342a111e rc-is-hidden-7b174465","is_rtl":"rc-is_rtl-342a111e rc-is-rtl-7b174465"}
