'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-874e12e5:focus{outline:0}.rc-no_animation-874e12e5{transition:none}.rc-is_hidden-874e12e5[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-874e12e5 rc-c-pagination-9c95b460","page":"rc-page-874e12e5 rc-c-pagination__page-9c95b460","no_animation":"rc-no_animation-874e12e5","page_previous":"rc-page_previous-874e12e5 rc-c-pagination__page--previous-9c95b460","page_next":"rc-page_next-874e12e5 rc-c-pagination__page--next-9c95b460","page_gap":"rc-page_gap-874e12e5 rc-c-pagination__page--gap-9c95b460","is_current":"rc-is_current-874e12e5 rc-is-current-9c95b460","is_focused":"rc-is_focused-874e12e5 rc-is-focused-9c95b460","is_hovered":"rc-is_hovered-874e12e5 rc-is-hovered-9c95b460","is_hidden":"rc-is_hidden-874e12e5 rc-is-hidden-9c95b460","is_rtl":"rc-is_rtl-874e12e5 rc-is-rtl-9c95b460"}
