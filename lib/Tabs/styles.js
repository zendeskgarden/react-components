'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-b8f3bbca:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-b8f3bbca rc-c-tab-20194f96","list":"rc-list-b8f3bbca rc-c-tab__list-20194f96","label":"rc-label-b8f3bbca rc-c-tab__list__item-20194f96","panel":"rc-panel-b8f3bbca rc-c-tab__panel-20194f96","selected":"rc-selected-b8f3bbca rc-is-selected-20194f96","focused":"rc-focused-b8f3bbca rc-is-focused-20194f96","vertical":"rc-vertical-b8f3bbca rc-c-tab--block-20194f96","disabled":"rc-disabled-b8f3bbca rc-is-disabled-20194f96","rtl":"rc-rtl-b8f3bbca rc-is-rtl-20194f96"}
