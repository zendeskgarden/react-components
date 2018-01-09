'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-c5ccc401:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-c5ccc401 rc-c-tab-aeeb4fc0","list":"rc-list-c5ccc401 rc-c-tab__list-aeeb4fc0","label":"rc-label-c5ccc401 rc-c-tab__list__item-aeeb4fc0","panel":"rc-panel-c5ccc401 rc-c-tab__panel-aeeb4fc0","selected":"rc-selected-c5ccc401 rc-is-selected-aeeb4fc0","focused":"rc-focused-c5ccc401 rc-is-focused-aeeb4fc0","vertical":"rc-vertical-c5ccc401 rc-c-tab--block-aeeb4fc0","disabled":"rc-disabled-c5ccc401 rc-is-disabled-aeeb4fc0","rtl":"rc-rtl-c5ccc401 rc-is-rtl-aeeb4fc0"}
