'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-cb501469:focus{outline:0}.rc-no_animation-cb501469{transition:none}.rc-is_hidden-cb501469[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-cb501469 rc-c-pagination-ebe04436","page":"rc-page-cb501469 rc-c-pagination__page-ebe04436","no_animation":"rc-no_animation-cb501469","page_previous":"rc-page_previous-cb501469 rc-c-pagination__page--previous-ebe04436","page_next":"rc-page_next-cb501469 rc-c-pagination__page--next-ebe04436","page_gap":"rc-page_gap-cb501469 rc-c-pagination__page--gap-ebe04436","is_current":"rc-is_current-cb501469 rc-is-current-ebe04436","is_focused":"rc-is_focused-cb501469 rc-is-focused-ebe04436","is_hovered":"rc-is_hovered-cb501469 rc-is-hovered-ebe04436","is_hidden":"rc-is_hidden-cb501469 rc-is-hidden-ebe04436","is_rtl":"rc-is_rtl-cb501469 rc-is-rtl-ebe04436"}
