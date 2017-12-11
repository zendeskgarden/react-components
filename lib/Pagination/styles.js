'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-71930f53:focus{outline:0}.rc-no_animation-71930f53{transition:none}.rc-is_hidden-71930f53[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-71930f53 rc-c-pagination-998443e","page":"rc-page-71930f53 rc-c-pagination__page-998443e","no_animation":"rc-no_animation-71930f53","page_previous":"rc-page_previous-71930f53 rc-c-pagination__page--previous-998443e","page_next":"rc-page_next-71930f53 rc-c-pagination__page--next-998443e","page_gap":"rc-page_gap-71930f53 rc-c-pagination__page--gap-998443e","is_current":"rc-is_current-71930f53 rc-is-current-998443e","is_focused":"rc-is_focused-71930f53 rc-is-focused-998443e","is_hovered":"rc-is_hovered-71930f53 rc-is-hovered-998443e","is_hidden":"rc-is_hidden-71930f53 rc-is-hidden-998443e","is_rtl":"rc-is_rtl-71930f53 rc-is-rtl-998443e"}
