'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-e7f5bdcd:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-e7f5bdcd rc-c-tab-3f374f98","list":"rc-list-e7f5bdcd rc-c-tab__list-3f374f98","label":"rc-label-e7f5bdcd rc-c-tab__list__item-3f374f98","panel":"rc-panel-e7f5bdcd rc-c-tab__panel-3f374f98","selected":"rc-selected-e7f5bdcd rc-is-selected-3f374f98","focused":"rc-focused-e7f5bdcd rc-is-focused-3f374f98","vertical":"rc-vertical-e7f5bdcd rc-c-tab--block-3f374f98","disabled":"rc-disabled-e7f5bdcd rc-is-disabled-3f374f98","rtl":"rc-rtl-e7f5bdcd rc-is-rtl-3f374f98"}
