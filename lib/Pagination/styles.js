'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-ce811671:focus{outline:0}.rc-no_animation-ce811671{transition:none}.rc-is_hidden-ce811671[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-ce811671 rc-c-pagination-ebde4436","page":"rc-page-ce811671 rc-c-pagination__page-ebde4436","no_animation":"rc-no_animation-ce811671","page_previous":"rc-page_previous-ce811671 rc-c-pagination__page--previous-ebde4436","page_next":"rc-page_next-ce811671 rc-c-pagination__page--next-ebde4436","page_gap":"rc-page_gap-ce811671 rc-c-pagination__page--gap-ebde4436","is_current":"rc-is_current-ce811671 rc-is-current-ebde4436","is_focused":"rc-is_focused-ce811671 rc-is-focused-ebde4436","is_hovered":"rc-is_hovered-ce811671 rc-is-hovered-ebde4436","is_hidden":"rc-is_hidden-ce811671 rc-is-hidden-ebde4436","is_rtl":"rc-is_rtl-ce811671 rc-is-rtl-ebde4436"}
