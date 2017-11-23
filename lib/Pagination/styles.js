'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-fe3a148a:focus{outline:0}.rc-no_animation-fe3a148a{transition:none}.rc-is_hidden-fe3a148a[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-fe3a148a rc-c-pagination-be93b461","page":"rc-page-fe3a148a rc-c-pagination__page-be93b461","no_animation":"rc-no_animation-fe3a148a","page_previous":"rc-page_previous-fe3a148a rc-c-pagination__page--previous-be93b461","page_next":"rc-page_next-fe3a148a rc-c-pagination__page--next-be93b461","page_gap":"rc-page_gap-fe3a148a rc-c-pagination__page--gap-be93b461","is_current":"rc-is_current-fe3a148a rc-is-current-be93b461","is_focused":"rc-is_focused-fe3a148a rc-is-focused-be93b461","is_hovered":"rc-is_hovered-fe3a148a rc-is-hovered-be93b461","is_hidden":"rc-is_hidden-fe3a148a rc-is-hidden-be93b461","is_rtl":"rc-is_rtl-fe3a148a rc-is-rtl-be93b461"}
