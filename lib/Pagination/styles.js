'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-ca7210ed:focus{outline:0}.rc-no_animation-ca7210ed{transition:none}.rc-is_hidden-ca7210ed[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-ca7210ed rc-c-pagination-99a443e","page":"rc-page-ca7210ed rc-c-pagination__page-99a443e","no_animation":"rc-no_animation-ca7210ed","page_previous":"rc-page_previous-ca7210ed rc-c-pagination__page--previous-99a443e","page_next":"rc-page_next-ca7210ed rc-c-pagination__page--next-99a443e","page_gap":"rc-page_gap-ca7210ed rc-c-pagination__page--gap-99a443e","is_current":"rc-is_current-ca7210ed rc-is-current-99a443e","is_focused":"rc-is_focused-ca7210ed rc-is-focused-99a443e","is_hovered":"rc-is_hovered-ca7210ed rc-is-hovered-99a443e","is_hidden":"rc-is_hidden-ca7210ed rc-is-hidden-99a443e","is_rtl":"rc-is_rtl-ca7210ed rc-is-rtl-99a443e"}
