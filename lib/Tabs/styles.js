'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-9c92bbb2:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-9c92bbb2 rc-c-tab-612e9462","list":"rc-list-9c92bbb2 rc-c-tab__list-612e9462","label":"rc-label-9c92bbb2 rc-c-tab__list__item-612e9462","panel":"rc-panel-9c92bbb2 rc-c-tab__panel-612e9462","selected":"rc-selected-9c92bbb2 rc-is-selected-612e9462","focused":"rc-focused-9c92bbb2 rc-is-focused-612e9462","vertical":"rc-vertical-9c92bbb2 rc-c-tab--block-612e9462","disabled":"rc-disabled-9c92bbb2 rc-is-disabled-612e9462","rtl":"rc-rtl-9c92bbb2 rc-is-rtl-612e9462"}
