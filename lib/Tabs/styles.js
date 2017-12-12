'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-e73ebbf6:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-e73ebbf6 rc-c-tab-10894f95","list":"rc-list-e73ebbf6 rc-c-tab__list-10894f95","label":"rc-label-e73ebbf6 rc-c-tab__list__item-10894f95","panel":"rc-panel-e73ebbf6 rc-c-tab__panel-10894f95","selected":"rc-selected-e73ebbf6 rc-is-selected-10894f95","focused":"rc-focused-e73ebbf6 rc-is-focused-10894f95","vertical":"rc-vertical-e73ebbf6 rc-c-tab--block-10894f95","disabled":"rc-disabled-e73ebbf6 rc-is-disabled-10894f95","rtl":"rc-rtl-e73ebbf6 rc-is-rtl-10894f95"}
