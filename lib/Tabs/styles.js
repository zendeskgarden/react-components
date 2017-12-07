'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-a4f8bd92:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-a4f8bd92 rc-c-tab-f1564f93","list":"rc-list-a4f8bd92 rc-c-tab__list-f1564f93","label":"rc-label-a4f8bd92 rc-c-tab__list__item-f1564f93","panel":"rc-panel-a4f8bd92 rc-c-tab__panel-f1564f93","selected":"rc-selected-a4f8bd92 rc-is-selected-f1564f93","focused":"rc-focused-a4f8bd92 rc-is-focused-f1564f93","vertical":"rc-vertical-a4f8bd92 rc-c-tab--block-f1564f93","disabled":"rc-disabled-a4f8bd92 rc-is-disabled-f1564f93","rtl":"rc-rtl-a4f8bd92 rc-is-rtl-f1564f93"}
