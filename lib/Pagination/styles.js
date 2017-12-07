'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-85031643:focus{outline:0}.rc-no_animation-85031643{transition:none}.rc-is_hidden-85031643[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-85031643 rc-c-pagination-7abf443a","page":"rc-page-85031643 rc-c-pagination__page-7abf443a","no_animation":"rc-no_animation-85031643","page_previous":"rc-page_previous-85031643 rc-c-pagination__page--previous-7abf443a","page_next":"rc-page_next-85031643 rc-c-pagination__page--next-7abf443a","page_gap":"rc-page_gap-85031643 rc-c-pagination__page--gap-7abf443a","is_current":"rc-is_current-85031643 rc-is-current-7abf443a","is_focused":"rc-is_focused-85031643 rc-is-focused-7abf443a","is_hovered":"rc-is_hovered-85031643 rc-is-hovered-7abf443a","is_hidden":"rc-is_hidden-85031643 rc-is-hidden-7abf443a","is_rtl":"rc-is_rtl-85031643 rc-is-rtl-7abf443a"}
