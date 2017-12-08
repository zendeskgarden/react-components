'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-dbd8ba0f:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-dbd8ba0f rc-c-tab-f74f94","list":"rc-list-dbd8ba0f rc-c-tab__list-f74f94","label":"rc-label-dbd8ba0f rc-c-tab__list__item-f74f94","panel":"rc-panel-dbd8ba0f rc-c-tab__panel-f74f94","selected":"rc-selected-dbd8ba0f rc-is-selected-f74f94","focused":"rc-focused-dbd8ba0f rc-is-focused-f74f94","vertical":"rc-vertical-dbd8ba0f rc-c-tab--block-f74f94","disabled":"rc-disabled-dbd8ba0f rc-is-disabled-f74f94","rtl":"rc-rtl-dbd8ba0f rc-is-rtl-f74f94"}
