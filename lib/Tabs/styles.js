'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-6b16bafa:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-6b16bafa rc-c-tab-9576933e","list":"rc-list-6b16bafa rc-c-tab__list-9576933e","label":"rc-label-6b16bafa rc-c-tab__list__item-9576933e","panel":"rc-panel-6b16bafa rc-c-tab__panel-9576933e","selected":"rc-selected-6b16bafa rc-is-selected-9576933e","focused":"rc-focused-6b16bafa rc-is-focused-9576933e","vertical":"rc-vertical-6b16bafa rc-c-tab--block-9576933e","disabled":"rc-disabled-6b16bafa rc-is-disabled-9576933e","rtl":"rc-rtl-6b16bafa rc-is-rtl-9576933e"}
