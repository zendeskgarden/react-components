'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-5ef212ca:focus{outline:0}.rc-no_animation-5ef212ca{transition:none}.rc-is_hidden-5ef212ca[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-5ef212ca rc-c-pagination-9e71443b","page":"rc-page-5ef212ca rc-c-pagination__page-9e71443b","no_animation":"rc-no_animation-5ef212ca","page_previous":"rc-page_previous-5ef212ca rc-c-pagination__page--previous-9e71443b","page_next":"rc-page_next-5ef212ca rc-c-pagination__page--next-9e71443b","page_gap":"rc-page_gap-5ef212ca rc-c-pagination__page--gap-9e71443b","is_current":"rc-is_current-5ef212ca rc-is-current-9e71443b","is_focused":"rc-is_focused-5ef212ca rc-is-focused-9e71443b","is_hovered":"rc-is_hovered-5ef212ca rc-is-hovered-9e71443b","is_hidden":"rc-is_hidden-5ef212ca rc-is-hidden-9e71443b","is_rtl":"rc-is_rtl-5ef212ca rc-is-rtl-9e71443b"}
