'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-3a16188c:focus{outline:0}.rc-no_animation-3a16188c{transition:none}.rc-is_hidden-3a16188c[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-3a16188c rc-c-pagination-dbb6b48f","page":"rc-page-3a16188c rc-c-pagination__page-dbb6b48f","no_animation":"rc-no_animation-3a16188c","page_previous":"rc-page_previous-3a16188c rc-c-pagination__page--previous-dbb6b48f","page_next":"rc-page_next-3a16188c rc-c-pagination__page--next-dbb6b48f","page_gap":"rc-page_gap-3a16188c rc-c-pagination__page--gap-dbb6b48f","is_current":"rc-is_current-3a16188c rc-is-current-dbb6b48f","is_focused":"rc-is_focused-3a16188c rc-is-focused-dbb6b48f","is_hovered":"rc-is_hovered-3a16188c rc-is-hovered-dbb6b48f","is_hidden":"rc-is_hidden-3a16188c rc-is-hidden-dbb6b48f","is_rtl":"rc-is_rtl-3a16188c rc-is-rtl-dbb6b48f"}
