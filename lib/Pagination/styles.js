'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-fae91285:focus{outline:0}.rc-no_animation-fae91285{transition:none}.rc-is_hidden-fae91285[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-fae91285 rc-c-pagination-c227443c","page":"rc-page-fae91285 rc-c-pagination__page-c227443c","no_animation":"rc-no_animation-fae91285","page_previous":"rc-page_previous-fae91285 rc-c-pagination__page--previous-c227443c","page_next":"rc-page_next-fae91285 rc-c-pagination__page--next-c227443c","page_gap":"rc-page_gap-fae91285 rc-c-pagination__page--gap-c227443c","is_current":"rc-is_current-fae91285 rc-is-current-c227443c","is_focused":"rc-is_focused-fae91285 rc-is-focused-c227443c","is_hovered":"rc-is_hovered-fae91285 rc-is-hovered-c227443c","is_hidden":"rc-is_hidden-fae91285 rc-is-hidden-c227443c","is_rtl":"rc-is_rtl-fae91285 rc-is-rtl-c227443c"}
