'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-6daec2ce:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-6daec2ce rc-c-tab-9f5b4fbf","list":"rc-list-6daec2ce rc-c-tab__list-9f5b4fbf","label":"rc-label-6daec2ce rc-c-tab__list__item-9f5b4fbf","panel":"rc-panel-6daec2ce rc-c-tab__panel-9f5b4fbf","selected":"rc-selected-6daec2ce rc-is-selected-9f5b4fbf","focused":"rc-focused-6daec2ce rc-is-focused-9f5b4fbf","vertical":"rc-vertical-6daec2ce rc-c-tab--block-9f5b4fbf","disabled":"rc-disabled-6daec2ce rc-is-disabled-9f5b4fbf","rtl":"rc-rtl-6daec2ce rc-is-rtl-9f5b4fbf"}
