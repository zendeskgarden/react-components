'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-33c1131f:focus{outline:0}.rc-no_animation-33c1131f{transition:none}.rc-is_hidden-33c1131f[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-33c1131f rc-c-pagination-e62d4468","page":"rc-page-33c1131f rc-c-pagination__page-e62d4468","no_animation":"rc-no_animation-33c1131f","page_previous":"rc-page_previous-33c1131f rc-c-pagination__page--previous-e62d4468","page_next":"rc-page_next-33c1131f rc-c-pagination__page--next-e62d4468","page_gap":"rc-page_gap-33c1131f rc-c-pagination__page--gap-e62d4468","is_current":"rc-is_current-33c1131f rc-is-current-e62d4468","is_focused":"rc-is_focused-33c1131f rc-is-focused-e62d4468","is_hovered":"rc-is_hovered-33c1131f rc-is-hovered-e62d4468","is_hidden":"rc-is_hidden-33c1131f rc-is-hidden-e62d4468","is_rtl":"rc-is_rtl-33c1131f rc-is-rtl-e62d4468"}
