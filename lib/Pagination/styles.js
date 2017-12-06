'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-e4f40f1b:focus{outline:0}.rc-no_animation-e4f40f1b{transition:none}.rc-is_hidden-e4f40f1b[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-e4f40f1b rc-c-pagination-33574438","page":"rc-page-e4f40f1b rc-c-pagination__page-33574438","no_animation":"rc-no_animation-e4f40f1b","page_previous":"rc-page_previous-e4f40f1b rc-c-pagination__page--previous-33574438","page_next":"rc-page_next-e4f40f1b rc-c-pagination__page--next-33574438","page_gap":"rc-page_gap-e4f40f1b rc-c-pagination__page--gap-33574438","is_current":"rc-is_current-e4f40f1b rc-is-current-33574438","is_focused":"rc-is_focused-e4f40f1b rc-is-focused-33574438","is_hovered":"rc-is_hovered-e4f40f1b rc-is-hovered-33574438","is_hidden":"rc-is_hidden-e4f40f1b rc-is-hidden-33574438","is_rtl":"rc-is_rtl-e4f40f1b rc-is-rtl-33574438"}
