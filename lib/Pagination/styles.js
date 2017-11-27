'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-926128d:focus{outline:0}.rc-no_animation-926128d{transition:none}.rc-is_hidden-926128d[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-926128d rc-c-pagination-e091b462","page":"rc-page-926128d rc-c-pagination__page-e091b462","no_animation":"rc-no_animation-926128d","page_previous":"rc-page_previous-926128d rc-c-pagination__page--previous-e091b462","page_next":"rc-page_next-926128d rc-c-pagination__page--next-e091b462","page_gap":"rc-page_gap-926128d rc-c-pagination__page--gap-e091b462","is_current":"rc-is_current-926128d rc-is-current-e091b462","is_focused":"rc-is_focused-926128d rc-is-focused-e091b462","is_hovered":"rc-is_hovered-926128d rc-is-hovered-e091b462","is_hidden":"rc-is_hidden-926128d rc-is-hidden-e091b462","is_rtl":"rc-is_rtl-926128d rc-is-rtl-e091b462"}
