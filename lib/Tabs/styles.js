'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-tabs.js')

appendStyles({
  css: ".rc-list-8e4eb9ca:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"tabs":"rc-tabs-8e4eb9ca rc-c-tab-40429460","list":"rc-list-8e4eb9ca rc-c-tab__list-40429460","label":"rc-label-8e4eb9ca rc-c-tab__list__item-40429460","panel":"rc-panel-8e4eb9ca rc-c-tab__panel-40429460","selected":"rc-selected-8e4eb9ca rc-is-selected-40429460","focused":"rc-focused-8e4eb9ca rc-is-focused-40429460","vertical":"rc-vertical-8e4eb9ca rc-c-tab--block-40429460","disabled":"rc-disabled-8e4eb9ca rc-is-disabled-40429460","rtl":"rc-rtl-8e4eb9ca rc-is-rtl-40429460"}
