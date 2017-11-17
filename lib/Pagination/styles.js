'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-901f16c8:focus{outline:0}.rc-no_animation-901f16c8{transition:none}.rc-is_hidden-901f16c8[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-901f16c8 rc-c-pagination-97bab48d","page":"rc-page-901f16c8 rc-c-pagination__page-97bab48d","no_animation":"rc-no_animation-901f16c8","page_previous":"rc-page_previous-901f16c8 rc-c-pagination__page--previous-97bab48d","page_next":"rc-page_next-901f16c8 rc-c-pagination__page--next-97bab48d","page_gap":"rc-page_gap-901f16c8 rc-c-pagination__page--gap-97bab48d","is_current":"rc-is_current-901f16c8 rc-is-current-97bab48d","is_focused":"rc-is_focused-901f16c8 rc-is-focused-97bab48d","is_hovered":"rc-is_hovered-901f16c8 rc-is-hovered-97bab48d","is_hidden":"rc-is_hidden-901f16c8 rc-is-hidden-97bab48d","is_rtl":"rc-is_rtl-901f16c8 rc-is-rtl-97bab48d"}
