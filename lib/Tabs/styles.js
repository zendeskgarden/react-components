'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-d48abac1:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-d48abac1 rc-c-tab-68599491","list":"rc-list-d48abac1 rc-c-tab__list-68599491","label":"rc-label-d48abac1 rc-c-tab__list__item-68599491","panel":"rc-panel-d48abac1 rc-c-tab__panel-68599491","selected":"rc-selected-d48abac1 rc-is-selected-68599491","focused":"rc-focused-d48abac1 rc-is-focused-68599491","vertical":"rc-vertical-d48abac1 rc-c-tab--block-68599491","disabled":"rc-disabled-d48abac1 rc-is-disabled-68599491","rtl":"rc-rtl-d48abac1 rc-is-rtl-68599491"}
