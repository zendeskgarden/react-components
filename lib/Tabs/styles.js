'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-72c7bd70:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-72c7bd70 rc-c-tab-1f52945e","list":"rc-list-72c7bd70 rc-c-tab__list-1f52945e","label":"rc-label-72c7bd70 rc-c-tab__list__item-1f52945e","panel":"rc-panel-72c7bd70 rc-c-tab__panel-1f52945e","selected":"rc-selected-72c7bd70 rc-is-selected-1f52945e","focused":"rc-focused-72c7bd70 rc-is-focused-1f52945e","vertical":"rc-vertical-72c7bd70 rc-c-tab--block-1f52945e","disabled":"rc-disabled-72c7bd70 rc-is-disabled-1f52945e","rtl":"rc-rtl-72c7bd70 rc-is-rtl-1f52945e"}
