'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-8a13bf60:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-8a13bf60 rc-c-tab-2fc9945f","list":"rc-list-8a13bf60 rc-c-tab__list-2fc9945f","label":"rc-label-8a13bf60 rc-c-tab__list__item-2fc9945f","panel":"rc-panel-8a13bf60 rc-c-tab__panel-2fc9945f","selected":"rc-selected-8a13bf60 rc-is-selected-2fc9945f","focused":"rc-focused-8a13bf60 rc-is-focused-2fc9945f","vertical":"rc-vertical-8a13bf60 rc-c-tab--block-2fc9945f","disabled":"rc-disabled-8a13bf60 rc-is-disabled-2fc9945f","rtl":"rc-rtl-8a13bf60 rc-is-rtl-2fc9945f"}
