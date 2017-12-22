'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-95db1363:focus{outline:0}.rc-no_animation-95db1363{transition:none}.rc-is_hidden-95db1363[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-95db1363 rc-c-pagination-9ec94466","page":"rc-page-95db1363 rc-c-pagination__page-9ec94466","no_animation":"rc-no_animation-95db1363","page_previous":"rc-page_previous-95db1363 rc-c-pagination__page--previous-9ec94466","page_next":"rc-page_next-95db1363 rc-c-pagination__page--next-9ec94466","page_gap":"rc-page_gap-95db1363 rc-c-pagination__page--gap-9ec94466","is_current":"rc-is_current-95db1363 rc-is-current-9ec94466","is_focused":"rc-is_focused-95db1363 rc-is-focused-9ec94466","is_hovered":"rc-is_hovered-95db1363 rc-is-hovered-9ec94466","is_hidden":"rc-is_hidden-95db1363 rc-is-hidden-9ec94466","is_rtl":"rc-is_rtl-95db1363 rc-is-rtl-9ec94466"}
