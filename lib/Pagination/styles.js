'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-5ca914ca:focus{outline:0}.rc-no_animation-5ca914ca{transition:none}.rc-is_hidden-5ca914ca[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-5ca914ca rc-c-pagination-e5d9443d","page":"rc-page-5ca914ca rc-c-pagination__page-e5d9443d","no_animation":"rc-no_animation-5ca914ca","page_previous":"rc-page_previous-5ca914ca rc-c-pagination__page--previous-e5d9443d","page_next":"rc-page_next-5ca914ca rc-c-pagination__page--next-e5d9443d","page_gap":"rc-page_gap-5ca914ca rc-c-pagination__page--gap-e5d9443d","is_current":"rc-is_current-5ca914ca rc-is-current-e5d9443d","is_focused":"rc-is_focused-5ca914ca rc-is-focused-e5d9443d","is_hovered":"rc-is_hovered-5ca914ca rc-is-hovered-e5d9443d","is_hidden":"rc-is_hidden-5ca914ca rc-is-hidden-e5d9443d","is_rtl":"rc-is_rtl-5ca914ca rc-is-rtl-e5d9443d"}
