'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-1d54c276:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-1d54c276 rc-c-tab-be7b4fc1","list":"rc-list-1d54c276 rc-c-tab__list-be7b4fc1","label":"rc-label-1d54c276 rc-c-tab__list__item-be7b4fc1","panel":"rc-panel-1d54c276 rc-c-tab__panel-be7b4fc1","selected":"rc-selected-1d54c276 rc-is-selected-be7b4fc1","focused":"rc-focused-1d54c276 rc-is-focused-be7b4fc1","vertical":"rc-vertical-1d54c276 rc-c-tab--block-be7b4fc1","disabled":"rc-disabled-1d54c276 rc-is-disabled-be7b4fc1","rtl":"rc-rtl-1d54c276 rc-is-rtl-be7b4fc1"}
