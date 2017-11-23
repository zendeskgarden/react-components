'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-b46fbbc6:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-b46fbbc6 rc-c-tab-821c9464","list":"rc-list-b46fbbc6 rc-c-tab__list-821c9464","label":"rc-label-b46fbbc6 rc-c-tab__list__item-821c9464","panel":"rc-panel-b46fbbc6 rc-c-tab__panel-821c9464","selected":"rc-selected-b46fbbc6 rc-is-selected-821c9464","focused":"rc-focused-b46fbbc6 rc-is-focused-821c9464","vertical":"rc-vertical-b46fbbc6 rc-c-tab--block-821c9464","disabled":"rc-disabled-b46fbbc6 rc-is-disabled-821c9464","rtl":"rc-rtl-b46fbbc6 rc-is-rtl-821c9464"}
