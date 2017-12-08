'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-c914b9fd:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-c914b9fd rc-c-tab-f54f94","list":"rc-list-c914b9fd rc-c-tab__list-f54f94","label":"rc-label-c914b9fd rc-c-tab__list__item-f54f94","panel":"rc-panel-c914b9fd rc-c-tab__panel-f54f94","selected":"rc-selected-c914b9fd rc-is-selected-f54f94","focused":"rc-focused-c914b9fd rc-is-focused-f54f94","vertical":"rc-vertical-c914b9fd rc-c-tab--block-f54f94","disabled":"rc-disabled-c914b9fd rc-is-disabled-f54f94","rtl":"rc-rtl-c914b9fd rc-is-rtl-f54f94"}
