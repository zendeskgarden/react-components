'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-fa54133d:focus{outline:0}.rc-no_animation-fa54133d{transition:none}.rc-is_hidden-fa54133d[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-fa54133d rc-c-pagination-5899b45e","page":"rc-page-fa54133d rc-c-pagination__page-5899b45e","no_animation":"rc-no_animation-fa54133d","page_previous":"rc-page_previous-fa54133d rc-c-pagination__page--previous-5899b45e","page_next":"rc-page_next-fa54133d rc-c-pagination__page--next-5899b45e","page_gap":"rc-page_gap-fa54133d rc-c-pagination__page--gap-5899b45e","is_current":"rc-is_current-fa54133d rc-is-current-5899b45e","is_focused":"rc-is_focused-fa54133d rc-is-focused-5899b45e","is_hovered":"rc-is_hovered-fa54133d rc-is-hovered-5899b45e","is_hidden":"rc-is_hidden-fa54133d rc-is-hidden-5899b45e","is_rtl":"rc-is_rtl-fa54133d rc-is-rtl-5899b45e"}
