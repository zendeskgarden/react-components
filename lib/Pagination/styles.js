'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-7c9c12de:focus{outline:0}.rc-no_animation-7c9c12de{transition:none}.rc-is_hidden-7c9c12de[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-7c9c12de rc-c-pagination-9e73443b","page":"rc-page-7c9c12de rc-c-pagination__page-9e73443b","no_animation":"rc-no_animation-7c9c12de","page_previous":"rc-page_previous-7c9c12de rc-c-pagination__page--previous-9e73443b","page_next":"rc-page_next-7c9c12de rc-c-pagination__page--next-9e73443b","page_gap":"rc-page_gap-7c9c12de rc-c-pagination__page--gap-9e73443b","is_current":"rc-is_current-7c9c12de rc-is-current-9e73443b","is_focused":"rc-is_focused-7c9c12de rc-is-focused-9e73443b","is_hovered":"rc-is_hovered-7c9c12de rc-is-hovered-9e73443b","is_hidden":"rc-is_hidden-7c9c12de rc-is-hidden-9e73443b","is_rtl":"rc-is_rtl-7c9c12de rc-is-rtl-9e73443b"}
