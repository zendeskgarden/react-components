'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-d76bbc50:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-d76bbc50 rc-c-tab-5066f17f","list":"rc-list-d76bbc50 rc-c-tab__list-5066f17f","label":"rc-label-d76bbc50 rc-c-tab__list__item-5066f17f","panel":"rc-panel-d76bbc50 rc-c-tab__panel-5066f17f","selected":"rc-selected-d76bbc50 rc-is-selected-5066f17f","focused":"rc-focused-d76bbc50 rc-is-focused-5066f17f","vertical":"rc-vertical-d76bbc50 rc-c-tab--block-5066f17f","disabled":"rc-disabled-d76bbc50 rc-is-disabled-5066f17f","rtl":"rc-rtl-d76bbc50 rc-is-rtl-5066f17f"}
