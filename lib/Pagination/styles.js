'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-3eff14b6:focus{outline:0}.rc-no_animation-3eff14b6{transition:none}.rc-is_hidden-3eff14b6[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-3eff14b6 rc-c-pagination-e5d7443d","page":"rc-page-3eff14b6 rc-c-pagination__page-e5d7443d","no_animation":"rc-no_animation-3eff14b6","page_previous":"rc-page_previous-3eff14b6 rc-c-pagination__page--previous-e5d7443d","page_next":"rc-page_next-3eff14b6 rc-c-pagination__page--next-e5d7443d","page_gap":"rc-page_gap-3eff14b6 rc-c-pagination__page--gap-e5d7443d","is_current":"rc-is_current-3eff14b6 rc-is-current-e5d7443d","is_focused":"rc-is_focused-3eff14b6 rc-is-focused-e5d7443d","is_hovered":"rc-is_hovered-3eff14b6 rc-is-hovered-e5d7443d","is_hidden":"rc-is_hidden-3eff14b6 rc-is-hidden-e5d7443d","is_rtl":"rc-is_rtl-3eff14b6 rc-is-rtl-e5d7443d"}
