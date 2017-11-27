'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-pagination.js')

appendStyles({
  css: ".rc-pagination-fa881499:focus{outline:0}.rc-no_animation-fa881499{transition:none}.rc-is_hidden-fa881499[aria-hidden=true]{display:inherit}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"pagination":"rc-pagination-fa881499 rc-c-pagination-149fb45c","page":"rc-page-fa881499 rc-c-pagination__page-149fb45c","no_animation":"rc-no_animation-fa881499","page_previous":"rc-page_previous-fa881499 rc-c-pagination__page--previous-149fb45c","page_next":"rc-page_next-fa881499 rc-c-pagination__page--next-149fb45c","page_gap":"rc-page_gap-fa881499 rc-c-pagination__page--gap-149fb45c","is_current":"rc-is_current-fa881499 rc-is-current-149fb45c","is_focused":"rc-is_focused-fa881499 rc-is-focused-149fb45c","is_hovered":"rc-is_hovered-fa881499 rc-is-hovered-149fb45c","is_hidden":"rc-is_hidden-fa881499 rc-is-hidden-149fb45c","is_rtl":"rc-is_rtl-fa881499 rc-is-rtl-149fb45c"}
