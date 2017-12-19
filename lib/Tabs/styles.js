'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-2b58c0b9:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-2b58c0b9 rc-c-tab-803b4fbd","list":"rc-list-2b58c0b9 rc-c-tab__list-803b4fbd","label":"rc-label-2b58c0b9 rc-c-tab__list__item-803b4fbd","panel":"rc-panel-2b58c0b9 rc-c-tab__panel-803b4fbd","selected":"rc-selected-2b58c0b9 rc-is-selected-803b4fbd","focused":"rc-focused-2b58c0b9 rc-is-focused-803b4fbd","vertical":"rc-vertical-2b58c0b9 rc-c-tab--block-803b4fbd","disabled":"rc-disabled-2b58c0b9 rc-is-disabled-803b4fbd","rtl":"rc-rtl-2b58c0b9 rc-is-rtl-803b4fbd"}
