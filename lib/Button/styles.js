'use strict';

exports.__esModule = true;

var appendStyles = require('append-styles')
require('../deps/@zendesk/garden-css-buttons.js')

appendStyles({
  css: ".rc-stretched-cf576e04{-webkit-box-flex:1;-ms-flex:1;flex:1}.rc-group-cf576e04:focus{outline:0}",
  id: 'rc-styles',
  before: 'ssc-styles'
})

exports.default = {"active":"rc-active-cf576e04 rc-is-active-7ff89aeb","selected":"rc-selected-cf576e04 rc-is-selected-7ff89aeb","focused":"rc-focused-cf576e04 rc-is-focused-7ff89aeb","danger":"rc-danger-cf576e04 rc-c-btn--danger-7ff89aeb","rtl":"rc-rtl-cf576e04 rc-is-rtl-7ff89aeb","type_default":"rc-type_default-cf576e04 rc-c-btn-7ff89aeb","type_primary":"rc-type_primary-cf576e04 rc-c-btn-7ff89aeb rc-c-btn--primary-7ff89aeb","type_basic":"rc-type_basic-cf576e04 rc-c-btn-7ff89aeb rc-c-btn--basic-7ff89aeb","type_anchor":"rc-type_anchor-cf576e04 rc-c-btn-7ff89aeb rc-c-btn--anchor-7ff89aeb","pill":"rc-pill-cf576e04 rc-c-btn--pill-7ff89aeb","size_medium":"rc-size_medium-cf576e04 rc-c-btn--medium-7ff89aeb","size_large":"rc-size_large-cf576e04 rc-c-btn--large-7ff89aeb","stretched":"rc-stretched-cf576e04 rc-c-btn--full-7ff89aeb","disabled":"rc-disabled-cf576e04 rc-is-disabled-7ff89aeb","group":"rc-group-cf576e04 rc-l-btn-group-7ff89aeb"}
